import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

import { config } from '../config/config';

import { Loteria } from '../components/loteria/loteria.entity';
import { Juego } from '../components/juego/juego.entity';
import { Sorteo } from '../components/sorteo/sorteo.entity';

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
          synchronize: true,
        } as DataSourceOptions),
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabseModule {}
