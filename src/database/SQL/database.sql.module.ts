import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

import { config } from '../../config/config';

import { Loteria } from '../../components/SQL/loteria/loteria.entity';
import { Juego } from '../../components/SQL/juego/juego.entity';
import { Sorteo } from '../../components/SQL/sorteo/sorteo.entity';
import { MongoModule } from '../mongo.module';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) =>
        ({
          type: 'postgres',
          host: configService.postgres.dbHost,
          port: configService.postgres.dbPort,
          username: configService.postgres.dbUser,
          password: configService.postgres.dbPassword,
          database: configService.postgres.dbName,
          entities: [Loteria, Juego, Sorteo],
          synchronize: false,
          //!/**/*{.ts,.js}"
          //seeds: ['../../database/SQL/seeding/initialSeed.ts'],
          //factories: ['../../database/SQL/seeding/loteria.factory.ts'],
        } as DataSourceOptions),
    }),
    MongoModule,
  ],
  exports: [
    TypeOrmModule,
    //'src/database/SQL/seeding/initialSeed.ts',
    //'src/database/SQL/seeding/loteria.factory.ts',
  ],
})
export class DatabseModule {}
