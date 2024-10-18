import { TypeORMAdapter } from '@auth/typeorm-adapter';
import { compare } from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { UserRepository } from '@/repositories/user';
import AppDataSource, { initializeDataSource } from '@/utils/typeorm';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, _req) {
        await initializeDataSource();

        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await UserRepository.getUserbyEmail(credentials.email);

        if (!user || !user.emailVerified) {
          return null;
        }

        const isValid = await compare(credentials.password, user.password);

        if (!isValid) {
          return null;
        }

        return { id: user.id.toString(), email: user.email, name: user.name };
      },
    }),
  ],
  adapter: TypeORMAdapter(AppDataSource.options),
  session: {
    strategy: 'jwt',
  },
});

export { handler as GET, handler as POST };
