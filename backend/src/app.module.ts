import { curriculumModule } from './infra/study/study-curriculum/study-curriculum.module';
import { studyModule } from './infra/study/study.module';
import { PrismaUserRepository } from './infra/database/repositories/prisma/prisma-user-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './infra/database/prisma/prisma.service';
import { AppController } from './app.controller';
import { userRepository } from './infra/database/repositories/user-repositories';
import { studyRepository } from './infra/database/repositories/study-repositories';
import { PrismaStudyRepository } from './infra/database/repositories/prisma/prisma-study-repository';
import { AuthModule } from './infra/http/auth/auth.module';
import { anotacaoModule } from './infra/anotacao/anotacao.module';
import { anotacaoRepository } from './infra/database/repositories/anotacao-repositories';
@Module({
  imports: [AuthModule, studyModule, curriculumModule, anotacaoModule],
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
