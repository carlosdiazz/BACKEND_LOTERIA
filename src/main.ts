import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Si envio parametros que esten demas, el backend no lo va a recibir
      forbidNonWhitelisted: false, //Aqui si me llegan paramtros demas aviso el error
      transformOptions: {
        enableImplicitConversion: true, //Aqui transformo para que los query me lleguen en su formato
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Api Loteria')
    .setDescription('Esta es una api de como seria la Api de Loteria')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(process.env.PORT || 3000, () => {
    console.log(
      `👍El server esta arriba en el puerto: ${process.env.PORT || 3000} 👍💪`,
    );
  });
}
bootstrap();
