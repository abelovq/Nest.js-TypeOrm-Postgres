import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  database: 'typeorm',
  synchronize: true,
  username: 'postgres',
  password: 'postgres',
  entities: ['dist/**/*.entity{.ts,.js}'],
};
