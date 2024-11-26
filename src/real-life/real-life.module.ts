import { Module } from '@nestjs/common';
import { RealLifeController } from './real-life.controller';
import { RequestService } from './services/request.service';
import { SingletonService } from './services/singleton.service';
import { TransientService } from './services/transient.service';

@Module({
  controllers: [RealLifeController],
  providers: [SingletonService, RequestService, TransientService],
})
export class RealLifeModule {}
