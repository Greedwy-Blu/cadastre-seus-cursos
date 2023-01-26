import { Controller, Get } from '@nestjs/common';

@Controller('teste')
export class tokenController {
  @Get()
  findAll(): string {
    return 'This action returns all token';
  }
}
