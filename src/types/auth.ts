interface AuthDto {
    login: string
    password: string
}

interface AuthResponse {
    token: string
    role: 'ADMIN' | 'USER'
}

export type {
  AuthDto,
  AuthResponse,
};
