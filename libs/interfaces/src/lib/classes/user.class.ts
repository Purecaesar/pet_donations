import { Role } from './role.class';
import { SimpleEntity } from './simple-entity.class';

export class User {
  public id!: number;
  public username!: string;
  public name!: string;
  public surname!: string;
  public email!: string;
  public avatar!: string;
  public role!: Role;
  public kennel!: SimpleEntity;

  constructor(userData: User) {
    this.id = userData.id;
    this.name = userData.name;
    this.surname = userData.surname;
    this.username = userData.username;
    this.email = userData.email;
    this.role = new Role(userData.role);
    this.avatar = userData.avatar;
    this.kennel = userData.kennel && new SimpleEntity(userData.kennel);
  }
}
