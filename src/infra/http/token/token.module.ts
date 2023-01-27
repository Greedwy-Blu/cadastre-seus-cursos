import { userModule } from './../../user/user.module';
import { tokenController } from './token.controller';
import { AuthModule } from './../auth/auth.module';
import { forwardRef } from '@nestjs/common/utils';
import { Module } from '@nestjs/common';

@Module({
  imports: [forwardRef(() => AuthModule), userModule],
  controllers: [tokenController],
  providers: [],
})
export class tokenModule {}
