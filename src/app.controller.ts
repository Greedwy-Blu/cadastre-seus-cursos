import { PrismaService } from './infra/database/prisma/prisma.service';
import { Controller, Post, Body } from '@nestjs/common';
import { createUserBody } from './infra/dtos/create-user-body';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Post('user')
  async postUser(@Body() body: createUserBody) {}
}
