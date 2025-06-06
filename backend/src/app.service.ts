import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to Ndimboni Digital Scam Protection Platform API!';
  }

  getHealth() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'Ndimboni Backend API',
      version: '1.0.0',
      uptime: process.uptime(),
    };
  }
}
