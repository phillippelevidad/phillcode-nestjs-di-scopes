import { Controller, Get } from '@nestjs/common';
import { RequestService } from './services/request.service';
import { SingletonService } from './services/singleton.service';
import { TransientService } from './services/transient.service';

@Controller('real-life')
export class RealLifeController {
  constructor(
    private readonly singleton: SingletonService,
    private readonly request: RequestService,
    private readonly transient: TransientService,
  ) {}

  @Get('/singleton')
  async getSingleton() {
    const result = await this.singleton.process();
    return { result };
  }

  @Get('/request')
  async getRequest() {
    const result = await this.request.process();
    return { result };
  }

  @Get('/transient')
  async getTransient() {
    const result = await this.transient.process();
    return { result };
  }
}
