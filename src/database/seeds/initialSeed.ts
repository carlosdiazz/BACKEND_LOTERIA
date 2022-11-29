import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { Loteria } from '../../components/SQL/loteria/loteria.entity';

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection ): Promise<any> {
    await factory(Loteria)().createMany(1);
  }
}
