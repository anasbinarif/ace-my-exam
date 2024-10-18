import { DataSource } from 'typeorm';

import Contact from '@/entities/contact';
import { AccountEntity, SessionEntity, User, VerificationTokenEntity } from '@/entities/user';

let AppDataSource: DataSource;

if (process.env.NODE_ENV === 'production') {
  AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [Contact],
    synchronize: false,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Contact, User, SessionEntity, VerificationTokenEntity, AccountEntity],
    synchronize: true,
  });
}

export default AppDataSource;

export async function initializeDataSource() {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
}
