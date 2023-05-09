interface AuthDto {
    login: string
    password: string
}

interface AuthResponse {
    token: string
}

export type {
  AuthDto,
  AuthResponse,
};
