import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { User } from '../components/SQL/user/user.entity';
import { UserService } from '../components/SQL/user/user.service';
import { PayloadToken } from './models/token.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(nickName: string, password: string) {
    const user = await this.usersService.findByNickName(nickName);
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      throw new UnauthorizedException('Contrasena Incorrecta');
    }
    if (user && isPassword) {
      const { password, ...data } = user;
      return data; //!Verificar
    }
    return null;
  }

  generatejwt(user: User) {
    const payload: PayloadToken = { sub: user.id, role: user.email };
    return {
      acces_token: this.jwtService.sign(payload),
      user,
    };
  }
}
