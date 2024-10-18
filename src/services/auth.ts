import { hash } from 'bcrypt';

import { TokensRepository, UserRepository } from '@/repositories/user';
import { RegisterInput } from '@/types/auth';
import AuthError, { AuthErrorType } from '@/types/auth-error';

export async function registerUser(userData: RegisterInput) {
  if (await UserRepository.getUserbyEmail(userData.email)) {
    throw new AuthError(AuthErrorType.EMAIL_ALREADY_EXISTS, 400);
  }

  const user = await UserRepository.registerUser({
    name: userData.name,
    email: userData.email,
    image: '',
    role: 'USER',
    sessions: [],
    accounts: [],
    token: [],
    password: await getHashedPassword(userData.password),
    emailVerified: false,
  });

  const token = await TokensRepository.createEmailVerificationToken(user.id);

  await sendVerificationEmail(user.email!, token.token);

  return user;
}

async function sendVerificationEmail(_email: string, _verificationToken: string) {
  // TODO: implement email verification link
}

async function getHashedPassword(password: string) {
  return await hash(password, 10);
}

export async function verifyUser(token: string) {
  const verificationToken = await TokensRepository.findOne({ where: { token, identifier: 'EMAIL_VERIFICATION_TOKEN' } });

  if (!token) {
    throw new AuthError(AuthErrorType.TOKEN_INVALID, 401);
  }

  const user = await UserRepository.findOne({ where: { id: verificationToken?.userId } });

  if (!user) {
    throw new AuthError(AuthErrorType.USER_NOT_FOUND, 404);
  }

  user.emailVerified = true;
  await UserRepository.save(user);

  TokensRepository.delete({ userId: user.id, identifier: 'EMAIL_VERIFICATION_TOKEN' });

  return user;
}

export async function resetPassword(email: string) {
  const user = await UserRepository.getUserbyEmail(email);

  if (!user) {
    throw new AuthError(AuthErrorType.USER_NOT_FOUND, 404);
  }

  const resetToken = await TokensRepository.createPasswordResetToken(user.id);

  await sendPasswordResetEmail(email, resetToken.token);
  await UserRepository.save(user);

  return;
}

async function sendPasswordResetEmail(_email: string, _resetToken: string) {
  // TODO: send password reset emails
}