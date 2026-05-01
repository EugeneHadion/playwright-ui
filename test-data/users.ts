import { requireEnv } from "@utils/env";

export type Credentials = {
  username: string;
  password: string;
};

export const USERS = {
  validUser: {
    username: requireEnv('LOGIN_STANDARD_USER'),
    password: requireEnv('LOGIN_PASSWORD'),
  },
  invalidPassword: {
    username: requireEnv('LOGIN_STANDARD_USER'),
    password: requireEnv('LOGIN_PASSWORD_INVALID'),
  },
} as const satisfies Record<string, Credentials>;

export type UserRole = keyof typeof USERS;