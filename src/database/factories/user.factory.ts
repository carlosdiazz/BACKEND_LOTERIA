//import * as Faker from 'faker';
import { define } from 'typeorm-seeding';

import { User } from '../../components/SQL/user/user.entity';

define(User,  () => {
  const user = new User();

    user.nickName = 'Admin'
    user.email = 'admin@mail.com'
    user.firstName = 'Admin'
    user.lastName = 'Admin'
    user.password = '12345678'

  return user;
});
