import { Module } from '@nestjs/common';
import { RealLifeModule } from './real-life/real-life.module';
import { ScopesModule } from './scopes/scopes.module';

@Module({
  imports: [ScopesModule, RealLifeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
