import { AccountEntity, SessionEntity, User, VerificationTokenEntity } from '@/entities/user';
import AppDataSource from '@/utils/typeorm';

export const UserRepository = AppDataSource.getRepository(User).extend({
  async registerUser(userData: Omit<User, 'id' | 'createdAt'>) {
    const user = this.create(userData);

    await this.save(user);

    return user;
  },

  async getUserbyEmail(email: string) {
    return this.findOne({ where: { email } });
  },
});

function generateVerificationToken() {
  return Math.random().toString(36).substring(2, 15);
}

export const TokensRepository = AppDataSource.getRepository(VerificationTokenEntity).extend({
  async createEmailVerificationToken(userId: string) {
    const token = this.create({
      userId,
      token: generateVerificationToken(),
      identifier: 'EMAIL_VERIFICAITON_TOKEN',
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
    });

    await this.save(token);

    return token;
  },
  async createPasswordResetToken(userId: string) {
    const token = this.create({
      userId,
      token: generateVerificationToken(),
      identifier: 'PASSWORD_RESET_TOKEN',
      expires: new Date(Date.now() + 7 * 60 * 60 * 24).toISOString(),
    });

    await this.save(token);

    return token;
  },
});
export const SessionsRepository = AppDataSource.getRepository(SessionEntity).extend({});
export const AccountsRepository = AppDataSource.getRepository(AccountEntity).extend({});
