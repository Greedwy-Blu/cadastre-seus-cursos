import { userService } from './../../user/user.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private usersService: userService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.userFind(email);
    if (user && bcrypt.compareSync(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
