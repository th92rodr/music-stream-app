export default class User {
  public readonly id: string;
  public readonly username: string;
  public readonly email: string;
  public readonly password: string;

  constructor({ id, username, email, password }: User) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
