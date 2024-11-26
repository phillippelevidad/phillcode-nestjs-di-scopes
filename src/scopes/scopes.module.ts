import { Module } from '@nestjs/common';
import { ScopesController } from './scopes.controller';
import { RequestService } from './services/request.service';
import { SingletonService } from './services/singleton.service';
import { TransientService } from './services/transient.service';

@Module({
  controllers: [ScopesController],
  providers: [SingletonService, RequestService, TransientService],
})
export class ScopesModule {}
