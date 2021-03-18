export interface CreateRequest {
  username: string;
  email: string;
  password: string;
}

export interface AuthenticateRequest {
  email: string;
  password: string;
}

export interface AuthenticateResponse {
  token: string;
}
