import { PrismaUserRepository } from './infra/database/repositories/prisma/prisma-user-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './infra/database/prisma/prisma.service';
import { AppController } from './app.controller';
import { userRepository } from './infra/database/repositories/user-repositories';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: userRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class AppModule {}
