export default class User {
  public id: string;
  public username: string;
  public email: string;
  public password: string;

  constructor({ id, username, email, password }: User) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
