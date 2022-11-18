import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigType } from '@nestjs/config';

import { config } from '../config/config';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [config.KEY],
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { dbUri } = configService.mongo;
        return {
          uri: dbUri,
        };
      },
    }),
  ],
  exports: [MongooseModule],
})
export class MongoModule {}
