import { anotacaoService } from './infra/anotacao/anotacao.service';
import { curriculumService } from './infra/study/study-curriculum/study-curriculum.service';
import { studyService } from './infra/study/study.service';
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
  Put,
  Patch,
  Delete,
} from '@nestjs/common';
import { createUserBody } from './infra/dtos/create-user-body';
import { userRepository } from './infra/database/repositories/user-repositories';

import { studyRepository } from './infra/database/repositories/study-repositories';
import { createStudyBody } from './infra/dtos/create-study-body';
import { createAnotacaoBody } from './infra/dtos/create-anotacao-body';
import { anotacaoRepository } from './infra/database/repositories/anotacao-repositories';
import { AuthGuard } from '@nestjs/passport';
@Controller()
export class AppController {
  constructor(
    private userRepository: userRepository,
    private studyRepository: studyRepository,
    private authService: AuthService,
    private studyService: studyService,
    private curriculumService: curriculumService,
    private anotacaoService: anotacaoService,
  ) {}

  @Post('home/create-user')
  async postUser(@Body() body: createUserBody) {
    const { name, email, password, age } = body;

    await this.userRepository.create(name, email, password, age);
  }

  @UseGuards(AuthGuard('local'))
  @Post('home/login/auth')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user/profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Post('user/create-study')
  async postStudy(@Body() body: createStudyBody) {
    const { instuicao, curso, professores } = body;

    await this.studyRepository.create(instuicao, curso, professores);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('user/study/study-find')
  async patchstudyfind(@Body() body: createStudyBody) {
    const { id } = body;

    await this.studyService.studyFind(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('user/study/study-update')
  async putstudyupdate(@Body() body: createStudyBody) {
    const { id, instuicao, curso, professores } = body;
    await this.studyService.studyUpadte(id, instuicao, curso, professores);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('user/study/study-delete')
  async studydelete(@Body() body: createStudyBody) {
    const { id } = body;

    await this.studyService.studyDelete(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('user/study/study-curriculum')
  async getstudycurriculem(@Body() body: createStudyBody) {
    const { id } = body;

    await this.curriculumService.getcurriculum(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('user/create-anotacao')
  async postAnotacao(@Body() body: createAnotacaoBody) {
    const { descricao, titulo, id } = body;

    await this.anotacaoService.anotacaoCreate(id, descricao, titulo);
  }
}
