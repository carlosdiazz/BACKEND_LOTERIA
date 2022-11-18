import { DataSource } from 'typeorm';

const PostgresDataSourse = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: '123456',
  database: 'LOTERIA',
  synchronize: false,
  logging: true,
  entities: ['src/components/SQL/**/*.entity.ts'],
  migrations: ['src/database/SQL/migrations/*.ts'],
});

export default PostgresDataSourse;
