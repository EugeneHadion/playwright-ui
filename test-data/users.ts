import { requireEnv } from "@utils/env";

export type Credentials = {
    username: string;
    password: string;
};

const password = requireEnv("LOGIN_PASSWORD");

export const USERS = {
    validUser: { username: "standard_user", password },
    lockedOutUser: { username: "locked_out_user", password },
    problemUser: { username: "problem_user", password },
    performanceGlitchUser: { username: "performance_glitch_user", password },
    errorUser: { username: "error_user", password },
    visualUser: { username: "visual_user", password },
    invalidPassword: { username: "standard_user", password: "wrong_password" },
} as const satisfies Record<string, Credentials>;

export type UserRole = keyof typeof USERS;
