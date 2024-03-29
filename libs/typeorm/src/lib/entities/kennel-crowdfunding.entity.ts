import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { KennelEntity } from '@pet-donations/typeorm';

@Entity({
  name: 'kennel-crowdfunding',
  synchronize: true,
})
export class KennelCrowdfundingEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column()
  public name: string;

  @Column({
    type: 'bigint',
    default: () => '0',
  })
  public founded: number;

  @Column({
    type: 'bigint',
  })
  public limit: number;

  @Column()
  public description: string;

  @Column({
    type: 'timestamp without time zone',
    default: () => 'now()',
  })
  public date: string;

  @ManyToOne(() => KennelEntity)
  @JoinColumn({
    name: 'kennel_id',
    referencedColumnName: 'id',
  })
  public kennel: KennelEntity;
}
