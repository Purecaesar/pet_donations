export class User {
  public id!: number
  public username!: string;
  public name!: string;
  public surname!: string;
  public email!: string;
  public role!: {
    id: number;
    description: string;
    name: string;
  };

  constructor(userData: User) {
    this.id = userData.id;
    this.name = userData.name;
    this.surname = userData.surname;
    this.username = userData.username;
    this.email = userData.email;
    this.role = userData.role;
  }
}
