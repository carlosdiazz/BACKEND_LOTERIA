import { SetMetadata } from '@nestjs/common';

import { Role } from '../models/roles.model';

export const ROLES_KEY = 'ROLES_KEY';

export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);