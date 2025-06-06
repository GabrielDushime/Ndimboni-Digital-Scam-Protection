import { 
  Injectable, 
  BadRequestException, 
  NotFoundException 
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

export interface UploadedFile {
  id: string;
  originalName: string;
  filename: string;
  mimetype: string;
  size: number;
  path: string;
  uploadedBy: string;
  uploadedAt: Date;
}

@Injectable()
export class FileUploadService {
  private files: UploadedFile[] = [];
  private uploadPath: string;
  private maxFileSize: number;
  private allowedMimeTypes: string[];

  constructor(private configService: ConfigService) {
    this.uploadPath = this.configService.get<string>('upload.destination') || './uploads';
    this.maxFileSize = this.configService.get<number>('upload.maxFileSize') || 5242880;
    this.allowedMimeTypes = this.configService.get<string[]>('upload.allowedMimeTypes') || [
      'image/jpeg',
      'image/png',
      'image/gif',
      'application/pdf',
      'text/plain',
    ];
    
    // Ensure upload directory exists
    if (!fs.existsSync(this.uploadPath)) {
      fs.mkdirSync(this.uploadPath, { recursive: true });
    }
  }

  async uploadFile(file: Express.Multer.File, userId: string): Promise<UploadedFile> {
    // Validate file
    this.validateFile(file);

    const fileId = uuidv4();
    const extension = path.extname(file.originalname);
    const filename = `${fileId}${extension}`;
    const filePath = path.join(this.uploadPath, filename);

    // Save file to disk
    fs.writeFileSync(filePath, file.buffer);

    const uploadedFile: UploadedFile = {
      id: fileId,
      originalName: file.originalname,
      filename,
      mimetype: file.mimetype,
      size: file.size,
      path: filePath,
      uploadedBy: userId,
      uploadedAt: new Date(),
    };

    this.files.push(uploadedFile);
    return uploadedFile;
  }

  async uploadMultipleFiles(files: Express.Multer.File[], userId: string): Promise<UploadedFile[]> {
    const uploadedFiles: UploadedFile[] = [];
    
    for (const file of files) {
      const uploadedFile = await this.uploadFile(file, userId);
      uploadedFiles.push(uploadedFile);
    }

    return uploadedFiles;
  }

  async getFile(fileId: string): Promise<UploadedFile> {
    const file = this.files.find(f => f.id === fileId);
    if (!file) {
      throw new NotFoundException('File not found');
    }
    return file;
  }

  async getFilesByUser(userId: string): Promise<UploadedFile[]> {
    return this.files.filter(f => f.uploadedBy === userId);
  }

  async deleteFile(fileId: string, userId: string): Promise<void> {
    const fileIndex = this.files.findIndex(f => f.id === fileId);
    if (fileIndex === -1) {
      throw new NotFoundException('File not found');
    }

    const file = this.files[fileIndex];
    
    // Check if user owns the file or is admin
    if (file.uploadedBy !== userId) {
      throw new BadRequestException('You can only delete your own files');
    }

    // Delete file from disk
    if (fs.existsSync(file.path)) {
      fs.unlinkSync(file.path);
    }

    // Remove from memory
    this.files.splice(fileIndex, 1);
  }

  async getFileStream(fileId: string): Promise<{ stream: fs.ReadStream; file: UploadedFile }> {
    const file = await this.getFile(fileId);
    
    if (!fs.existsSync(file.path)) {
      throw new NotFoundException('File not found on disk');
    }

    const stream = fs.createReadStream(file.path);
    return { stream, file };
  }

  private validateFile(file: Express.Multer.File): void {
    // Check file size
    if (file.size > this.maxFileSize) {
      throw new BadRequestException(
        `File size exceeds maximum limit of ${this.maxFileSize / (1024 * 1024)}MB`
      );
    }

    // Check mime type
    if (!this.allowedMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException(
        `File type ${file.mimetype} is not allowed. Allowed types: ${this.allowedMimeTypes.join(', ')}`
      );
    }
  }
}
