import { Controller, Post, HttpCode, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  @HttpCode(200)
  login(@Req() req: Request) {
    return req.user;
    //return 'd';
  }
}
