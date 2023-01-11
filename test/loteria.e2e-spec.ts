import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AuthGuard } from '@nestjs/passport';

import { CreateLoteriaDto } from './../src/components/loterias/loteria.dto';
import { LoteriaModuleSql } from '../src/components/SQL/loteria/loteria.module';
// import { ConfigModule } from '@nestjs/config';
// import { DatabseModule } from './../src/database/SQL/database.sql.module';
// import { config } from '../src/config/config';

import { AppModule } from '../src/app/app.module';

describe('JuegoController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        LoteriaModuleSql,
        AppModule,
        //DatabseModule,
        //ConfigModule.forRoot({
        //  envFilePath: '.env',
        //  load: [config],
        //  isGlobal: true,
        //}),
      ],
    })
      .overrideGuard(AuthGuard('jwt'))
      .useValue('')
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/loteria_sql (GET)', async () => {
    return request(app.getHttpServer()).get('/loteria_sql').expect(200);
  });

  it('/loteria_sql/1 (GET ONE)', async () => {
    return request(app.getHttpServer()).get('/loteria_sql/1').expect(200);
  });

  it('/loteria_sql (POST)', async () => {
    const loteria: CreateLoteriaDto = {
      abreviatura: 'PruebaTEST',
      descripcion: 'Prueb2aTEST',
      img_url: 'https://hola.co2m',
      name: 'Florida2aTEST',
    };
    return await request(app.getHttpServer())
      .post('/loteria_sql')
      .send(loteria)
      .expect(201);
  });

  it('/loteria_sql/3 (DELETE)', async () => {
    return request(app.getHttpServer()).delete('/loteria_sql/11').expect(200);
  });
});
