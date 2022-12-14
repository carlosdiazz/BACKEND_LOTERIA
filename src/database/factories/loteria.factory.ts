import * as Faker from 'faker';
import { define } from 'typeorm-seeding';

import { Loteria } from '../../components/SQL/loteria/loteria.entity';

define(Loteria, (faker: typeof Faker) => {
  const loteria = new Loteria();

  const name = faker.name.findName();

  loteria.name = name;
  loteria.abreviatura = name;
  loteria.descripcion = 'La mejor Loteria';
  loteria.img_url = 'https://hola.com';
  return loteria;
});
