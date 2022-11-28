import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super({ usernameField: 'nickName' });
  }
  async validate(nickName: string, password: string) {
    const user = await this.authService.validateUser(nickName, password);
    if (!user) {
      throw new UnauthorizedException('no esta autorizado');
    }
    return user;
  }
}
