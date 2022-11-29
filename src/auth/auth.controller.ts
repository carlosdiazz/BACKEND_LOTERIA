import { Controller, Post, HttpCode, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { User} from '../components/SQL/user/user.entity';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  @HttpCode(200)
  login(@Req() req: Request) {
    //return req.user;
    const user = req.user as User;
    return this.authService.generatejwt(user);

  }
}
