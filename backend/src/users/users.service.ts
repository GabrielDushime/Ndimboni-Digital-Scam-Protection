import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { User, UserRole } from '../common/interfaces/user.interface';
import { RegisterDto } from '../dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: '1',
      email: 'admin@ndimboni.com',
      name: 'Admin User',
      password: '$2b$10$8gQ3XHd.wLrA8Qxu3qF.7eKYvN8y5J1nF2mL6cD9sP8rB4tV3xY2z', // hashed: admin123
      role: UserRole.ADMIN,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  async findAll(): Promise<User[]> {
    return this.users.map(user => this.excludePassword(user));
  }

  async findById(id: string): Promise<User | undefined> {
    const user = this.users.find(user => user.id === id);
    return user ? this.excludePassword(user) : undefined;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  async create(registerDto: RegisterDto): Promise<User> {
    const existingUser = await this.findByEmail(registerDto.email);
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    const newUser: User = {
      id: uuidv4(),
      email: registerDto.email,
      name: registerDto.name,
      password: hashedPassword,
      role: UserRole.USER,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.users.push(newUser);
    return this.excludePassword(newUser);
  }

  async update(id: string, updateData: Partial<User>): Promise<User> {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }

    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    this.users[userIndex] = {
      ...this.users[userIndex],
      ...updateData,
      updatedAt: new Date(),
    };

    return this.excludePassword(this.users[userIndex]);
  }

  async delete(id: string): Promise<void> {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }

    this.users.splice(userIndex, 1);
  }

  private excludePassword(user: User): User {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword as User;
  }
}
