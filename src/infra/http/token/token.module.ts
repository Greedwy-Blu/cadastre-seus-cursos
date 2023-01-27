import { tokenController } from './token.controller';
import { AuthModule } from './../auth/auth.module';
import { forwardRef } from '@nestjs/common/utils';
import { Module } from '@nestjs/common';

@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [tokenController],
  providers: [],
})
export class tokenModule {}
