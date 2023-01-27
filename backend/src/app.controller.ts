import { JwtAuthGuard } from './infra/http/auth/jwt-auth.guard';
import { AuthService } from './infra/http/auth/auth.service';
import { PrismaService } from './infra/database/prisma/prisma.service';
import {
  Controller,
  Post,
  Get,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';
import { createUserBody } from './infra/dtos/create-user-body';
import { userRepository } from './infra/database/repositories/user-repositories';

import { studyRepository } from './infra/database/repositories/study-repositories';
import { createStudyBody } from './infra/dtos/create-study-body';
import { AuthGuard } from '@nestjs/passport';
@Controller()
export class AppController {
  constructor(
    private userRepository: userRepository,
    private studyRepository: studyRepository,
    private authService: AuthService,
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

  @UseGuards(AuthGuard('local'))
  @Post('login/auth')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user/profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
