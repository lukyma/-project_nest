import { Injectable } from '@nestjs/common';

@Injectable()
export class PortifolioService {
  //private readonly cats: Cat[] = [];

  findAll(): string {
    return 'Teste Portifolio Service';
  }
}