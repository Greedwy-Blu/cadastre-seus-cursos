import { PrismaService } from './infra/database/prisma/prisma.service';
import { Controller, Post, Body } from '@nestjs/common';
import { createUserBody } from './infra/dtos/create-user-body';
import { userRepository } from './infra/database/repositories/user-repositories';

import { studyRepository } from './infra/database/repositories/study-repositories';
import { createStudyBody } from './infra/dtos/create-study-body';
@Controller()
export class AppController {
  constructor(
    private userRepository: userRepository,
    private studyRepository: studyRepository,
  ) {}

  @Post('create-user')
  async postUser(@Body() body: createUserBody) {
    const { name, email, password, age } = body;

    await this.userRepository.create(name, email, password, age);
  }

  @Post('create-study')
  async postStudy(@Body() body: createStudyBody) {
    const { instuicao, curso, professores } = body;

    await this.studyRepository.create(instuicao, curso, professores);
  }
}
