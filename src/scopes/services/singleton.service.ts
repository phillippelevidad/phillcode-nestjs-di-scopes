import { Injectable } from '@nestjs/common';
import { IScopedService } from './scoped-service.interface';

@Injectable()
export class SingletonService implements IScopedService {
  private readonly code: string;

  constructor() {
    this.code = Math.random().toString(36).substring(2, 15);
  }

  getCode(): string {
    return this.code;
  }
}
