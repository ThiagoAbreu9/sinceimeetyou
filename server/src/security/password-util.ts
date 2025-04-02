import { compareSync, hash } from 'bcrypt';
import { config } from '../config';

export const encodePassword = async (password: string): Promise<string> => {
  return hash(password, config.get('jhipster.security.authentication.jwt.hash-salt-or-rounds'));
};

export const comparePassword = (password: string, hash: string): boolean => {
  return compareSync(password, hash);
};

export async function transformPassword<const T extends { password?: string }>(user: T): Promise<T> {
  if (user.password) {
    const { password } = user;
    user.password = await encodePassword(password);
  }
  return user;
}
