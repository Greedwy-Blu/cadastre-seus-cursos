import { createAnotacaoBody } from './../dtos/create-anotacao-body';
import { anotacaoService } from './anotacao.service';
import { PrismaService } from './../database/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { forwardRef } from '@nestjs/common/utils';

@Module({
  imports: [],
  providers: [anotacaoService, PrismaService, createAnotacaoBody],
  exports: [anotacaoService],
})
export class anotacaoModule {}
