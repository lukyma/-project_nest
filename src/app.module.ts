import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PortifolioModule} from './portifolio/portifolio.module'

@Module({
  imports: [PortifolioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
