import { Controller, Post, HttpCode } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('/login')
  @HttpCode(200)
  login() {
    return 'd';
  }
}
