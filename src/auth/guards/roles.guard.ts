import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  BadGatewayException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

import { Role } from '../models/roles.model';
import { PayloadToken } from '../models/token.model';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<Role[]>(ROLES_KEY, context.getHandler());
    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user as PayloadToken;
    const isAuth = roles.includes(user.role as Role);

    if (!isAuth) {
      throw new BadGatewayException('No tiene el rol');
    }
    return isAuth;
  }
}
