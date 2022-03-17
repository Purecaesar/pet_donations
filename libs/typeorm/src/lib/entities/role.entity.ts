import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { AvailableActionEntity } from './available-action.entity';
import { UserEntity } from './user.entity';

@Entity({
  name: 'role',
  synchronize: true,
})
export class RoleEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column()
  public name: string;

  @Column({
    nullable: true,
  })
  public description: string;

  @ManyToMany(() => AvailableActionEntity)
  @JoinTable()
  public availableActions: AvailableActionEntity[];

  @OneToMany(() => UserEntity, (user) => user.role)
  public users: UserEntity[];
}
