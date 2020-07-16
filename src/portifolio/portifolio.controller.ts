import { Controller, Get } from '@nestjs/common';
import { PortifolioService } from './portifolio.service';

@Controller('portifolio/lucas')
export class PortifolioController {
    constructor(private readonly PortifolioService: PortifolioService) {}
  @Get()
  findAll(): string {
    return this.PortifolioService.findAll();
  }
}