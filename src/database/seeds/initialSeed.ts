import { Factory, Seeder } from 'typeorm-seeding//';
//import { Connection } from 'typeorm';

import { Loteria } from '../../components/SQL/loteria/loteria.entity';
import { User } from '../../components/SQL/user/user.entity';

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await factory(Loteria)().createMany(1);
    await factory(User)().createMany(1);
  }
}
