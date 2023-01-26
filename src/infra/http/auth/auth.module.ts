import { LocalStrategy } from './local.strategy';
import { userModule } from './../../user/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [userModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
