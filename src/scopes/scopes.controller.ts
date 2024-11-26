import { Request } from 'express';
import { Controller, Get, Req } from '@nestjs/common';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';
import { resolve } from './resolve';
import { RequestService } from './services/request.service';
import { SingletonService } from './services/singleton.service';
import { TransientService } from './services/transient.service';

@Controller('scopes')
export class ScopesController {
  constructor(private readonly moduleRef: ModuleRef) {}

  @Get('singleton')
  async getSingleton(@Req() request: Request) {
    const contextId = ContextIdFactory.getByRequest(request);

    const a = await resolve(this.moduleRef, SingletonService, contextId);
    const b = await resolve(this.moduleRef, SingletonService, contextId);

    const code1 = a.getCode();
    const code2 = b.getCode();

    return { code1, code2 };
  }

  @Get('request')
  async getRequest(@Req() request: Request) {
    const contextId = ContextIdFactory.getByRequest(request);

    const a = await resolve(this.moduleRef, RequestService, contextId);
    const b = await resolve(this.moduleRef, RequestService, contextId);

    const code1 = a.getCode();
    const code2 = b.getCode();

    return { code1, code2 };
  }

  @Get('transient')
  async getTransient(@Req() request: Request) {
    const contextId = ContextIdFactory.getByRequest(request);

    const a = await resolve(this.moduleRef, TransientService, contextId);
    const b = await resolve(this.moduleRef, TransientService, contextId);

    const code1 = a.getCode();
    const code2 = b.getCode();

    return { code1, code2 };
  }
}
