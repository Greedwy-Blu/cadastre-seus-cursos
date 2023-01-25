import { userModule } from './../../user/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

@Module({
  imports: [userModule],
  providers: [AuthService],
})
export class AuthModule {}
