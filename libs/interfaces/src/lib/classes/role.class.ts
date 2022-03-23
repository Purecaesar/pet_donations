import {SimpleEntity} from "@pet-donations/interfaces";

export class Role {
  public id!: number;
  public name!: string;
  public description!: string;
  public availableActions!: (SimpleEntity & { description: string })[];

  constructor(roleData: Role) {
    this.id = roleData.id;
    this.name = roleData.name;
    this.description = roleData.description;
    this.availableActions = roleData.availableActions;
  }
}
