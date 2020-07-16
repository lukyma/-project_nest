import { Controller, Get } from '@nestjs/common';
import { PortifolioSidneyService } from './portifoliosidney.service';

@Controller('portifolio/sidney')
export class PortifolioSidneyController {
    constructor(private readonly PortifolioService: PortifolioSidneyService) {}
  @Get()
  findAll(): string {
    return this.PortifolioService.findAll();
  }
}