import { Module } from '@nestjs/common';
import { PortifolioController } from './portifolio.controller';
import { PortifolioService } from './portifolio.service';

@Module({
  controllers: [PortifolioController],
  providers: [PortifolioService],
  exports: [PortifolioService]
})
export class PortifolioModule {}