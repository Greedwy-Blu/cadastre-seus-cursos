import { PrismaUserRepository } from './infra/database/repositories/prisma/prisma-user-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './infra/database/prisma/prisma.service';
import { AppController } from './app.controller';
import { userRepository } from './infra/database/repositories/user-repositories';
import { studyRepository } from './infra/database/repositories/study-repositories';
import { PrismaStudyRepository } from './infra/database/repositories/prisma/prisma-study-repositories';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: userRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: studyRepository,
      useClass: PrismaStudyRepository,
    },
  ],
})
export class AppModule {}
