import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  JoinTable,
} from 'typeorm';
import { AvailableActionEntity } from './available-action.entity';

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
}
