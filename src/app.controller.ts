import { PrismaService } from './infra/database/prisma/prisma.service';
import { Controller, Post, Body } from '@nestjs/common';
import { createUserBody } from './infra/dtos/create-user-body';
import { userRepository } from './infra/database/repositories/user-repositories';
@Controller()
export class AppController {
  constructor(private userRepository: userRepository) {}

  @Post('user')
  async postUser(@Body() body: createUserBody) {
    const { name, email, password, age } = body;

    await this.userRepository.create(name, email, password, age);
  }
}
