import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { KennelEntity } from './kennel.entity';

@Entity({
  name: 'news',
  synchronize: true,
})
export class NewsEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column({
    type: 'date',
    default: () => 'now()',
  })
  public date: string;

  @Column()
  public header: string;

  @Column()
  public description: string;

  @ManyToOne(() => KennelEntity)
  public kennel: KennelEntity;
}
