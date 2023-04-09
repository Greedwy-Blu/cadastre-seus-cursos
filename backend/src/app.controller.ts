import { userService } from './infra/user/user.service';
import { LocalAuthGuard } from './infra/http/auth/local-auth-guard';
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
  HttpCode,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { createUserBody } from './infra/dtos/create-user-body';
import { userRepository } from './infra/database/repositories/user-repositories';

import { studyRepository } from './infra/database/repositories/study-repositories';
import { createStudyBody } from './infra/dtos/create-study-body';
import { createAnotacaoBody } from './infra/dtos/create-anotacao-body';
import { anotacaoRepository } from './infra/database/repositories/anotacao-repositories';
import { AuthGuard } from '@nestjs/passport';
import { IsPublic } from './infra/http/auth/decorators/is-public.decorator';
import { AuthRequest } from './infra/http/auth/models/AuthRequest';
import { User } from './infra/user/entities/user.entity';
import { tokenService } from './infra/http/token/token.service';
import { PrismaClient } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private userRepository: userRepository,
    private studyRepository: studyRepository,
    private authService: AuthService,
    private studyService: studyService,
    private curriculumService: curriculumService,
    private anotacaoService: anotacaoService,
    private tokenService: tokenService,

    private userService: userService,
  ) {}

  @Post('home/create-user')
  async postUser(@Body() body: createUserBody) {
    const { name, email, password, age } = body;

    await this.userRepository.create(name, email, password, age);
  }

  @IsPublic()
  @UseGuards(LocalAuthGuard)
  @Post('home/login/auth')
  @HttpCode(HttpStatus.OK)
  async login(@Request() req: AuthRequest) {
    return this.authService.login(req.user);
  }

  @Post('home/login/token')
  async loginToken(@Request() req, @Body() data) {
    return this.authService.loginToken(data.token);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user/profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getIdUser(@Request() req): Promise<User> {
    const token = req.headers.authorization.split(' ')[1];
    const { email } = await this.tokenService.getUsuarioByToken(token);
    return this.userService.findOneEmail(email);
  }

  @UseGuards(JwtAuthGuard)
  @Post('user/create-study')
  async postStudy(@Request() req, @Body() body: createStudyBody) {
    const token = req.headers.authorization.split(' ')[1];
    const { id } = await this.tokenService.getUsuarioByTokenID(token);
    const userId = Number(id);

    const { instuicao, curso, professores } = body;

    await this.studyRepository.create(instuicao, curso, professores, userId);
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
  async postAnotacao(@Request() req, @Body() body: createAnotacaoBody) {
    const token = req.headers.authorization.split(' ')[1];
    const { id } = await this.tokenService.getUsuarioByTokenID(token);
    const userId = Number(id);

    const { descricao, titulo } = body;

    await this.anotacaoService.anotacaoCreate(userId, descricao, titulo);
  }

  @UseGuards(JwtAuthGuard)
  @Put('user/anotacao/anotacao-find')
  async putAnotacaoUpdate(@Body() body: createAnotacaoBody) {
    const { id, descricao, titulo } = body;
    await this.anotacaoService.anotacaoFind(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('user/anotacao/anotacao-delete')
  async anotacaoDelete(@Body() body: createAnotacaoBody) {
    const { id } = body;

    await this.studyService.studyDelete(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('user/anotacao/anotocao-update')
  async anotacaoUpdate(@Body() body: createAnotacaoBody) {
    const { id, descricao, titulo } = body;
    await this.anotacaoService.anotacaoUpadte(id, descricao, titulo);
  }
}
