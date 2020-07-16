import { Injectable } from '@nestjs/common';

@Injectable()
export class PortifolioSidneyService {
  //private readonly cats: Cat[] = [];

  findAll(): string {
    return 'Meu nome é Sidney!!! ;)';
  }
}