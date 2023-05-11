type Role = 'ADMIN' | 'USER';

interface ChangePasswordDto {
  currentPassword: string
  newPassword: string
}

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
  ChangePasswordDto,
  CheckResponse,
  AuthResponse,
};
