type Role = 'ADMIN' | 'USER';

interface AuthDto {
    login: string
    password: string
}

interface AuthResponse {
    token: string
    role: Role
}

interface CheckResponse {
  role: Role
}

export type {
  Role,
  AuthDto,
  CheckResponse,
  AuthResponse,
};
