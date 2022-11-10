export interface AccountResponse {
  user: {
    id: string;
    date_of_birth: string;
    email: string;
    username: string;
  };
  access: string;
  refresh: string;
}
