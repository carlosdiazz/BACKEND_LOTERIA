import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UserService } from '../components/SQL/user/user.service';
@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(nickName: string, password: string) {
    const user = await this.usersService.findByNickName(nickName);
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      throw new UnauthorizedException('Contrasena Incorrecta');
    }
    if (user && isPassword) {
      const { password, ...data } = user;
      return user; //!Verificar
    }
    return null;
  }
}
