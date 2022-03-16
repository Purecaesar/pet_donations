import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { RoleEntity } from './role.entity';
import { KennelEntity } from './kennel.entity';

@Entity({
  name: 'user',
  synchronize: true,
})
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column()
  public username: string;

  @Column()
  public password: string;

  @Column({
    nullable: true,
  })
  public name: string;

  @Column({
    nullable: true,
  })
  public surname: string;

  @Column({
    nullable: true,
  })
  public email: string;

  @OneToOne(() => RoleEntity)
  @JoinColumn({
    name: 'role_id',
    referencedColumnName: 'id',
  })
  public role: RoleEntity;

  @OneToOne(() => KennelEntity, (kennel) => kennel.user)
  public kennel: KennelEntity;
}
