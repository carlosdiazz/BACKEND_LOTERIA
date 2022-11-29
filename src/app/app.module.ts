import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { config, validationENV } from '../config/config';

//! Componentes con SQL
import { DatabseModule } from '../database/SQL/database.sql.module';
import { LoteriaModuleSql } from '../components/SQL/loteria/loteria.module';
import { SorteoModuleSql } from '../components/SQL/sorteo/sorteo.module';
import { JuegoModuleSql } from '../components/SQL/juego/juego.module';

//! Componentes con MONGO
import { MongoModule } from '../database/mongo.module';
import { LoteriasModule } from '../components/loterias/loteria.module';
import { JuegosModule } from '../components/juegos/juego.module';
import { ResultadosModule } from '../components/resultados/resultados.module';
import { SorteosModule } from '../components/sorteos/sorteos.module';

//! Componentes Auth
import { UserModule } from '../components/SQL/user/user.module';
import { AuthModule } from '../auth/auth.module';

import { enviroments } from '../config/enviroments';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: validationENV(),
    }),
    DatabseModule,
    LoteriaModuleSql,
    SorteoModuleSql,
    JuegoModuleSql,

    MongoModule,
    LoteriasModule,
    JuegosModule,
    ResultadosModule,
    SorteosModule,

    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
