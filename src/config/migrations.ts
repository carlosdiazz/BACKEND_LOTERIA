import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();
const configService = new ConfigService();

const PostgresDataSourse = new DataSource({
  type: 'postgres',
  host: configService.get('TYPEORM_HOST'),
  port: configService.get('5432'),
  username: configService.get('TYPEORM_USERNAME'),
  password: configService.get('TYPEORM_PASSWORD'),
  database: configService.get('TYPEORM_DATABASE'),
  synchronize: false,
  logging: true,
  entities: ['src/components/SQL/**/*.entity.ts'],
  migrations: ['src/database/SQL/migrations/*.ts'],
});

export default PostgresDataSourse;
