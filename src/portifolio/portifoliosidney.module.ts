import { Module } from '@nestjs/common';
import { PortifolioSidneyController } from './portifoliosidney.controller';
import { PortifolioSidneyService } from './portifoliosidney.service';

@Module({
  controllers: [PortifolioSidneyController],
  providers: [PortifolioSidneyService],
  exports: [PortifolioSidneyService]
})
export class PortifolioSidneyModule {}