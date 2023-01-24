import { Module } from '@nestjs/common';
import { PrismaService } from './infra/database/prisma/prisma.service';
import { AppController } from './app.controller';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
