import { userService } from './../../user/user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private usersService: userService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.userFind(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
