import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PortifolioModule} from './portifolio/portifolio.module'
import {PortifolioSidneyModule} from './portifolio/portifoliosidney.module'

@Module({
  imports: [PortifolioModule,PortifolioSidneyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
