//import * as Faker from 'faker';
import { define } from 'typeorm-seeding';

import { User } from '../../components/SQL/user/user.entity';
import { Role } from '../../auth/models/roles.model';

define(User, () => {
  const user = new User();

  user.nickName = 'Admin';
  user.email = 'admin@mail.com';
  user.firstName = 'Admin';
  user.lastName = 'Admin';
  user.password = '12345678';
  user.role = Role.ADMIN;

  return user;
});
