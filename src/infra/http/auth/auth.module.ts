import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants';
import { LocalStrategy } from './local.strategy';
import { userModule } from './../../user/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    userModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [JwtModule, AuthService],
})
export class AuthModule {}
