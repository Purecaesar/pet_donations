import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { KennelEntity } from './kennel.entity';

@Entity({
  name: 'location',
  synchronize: true,
})
export class LocationEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @OneToOne(() => KennelEntity, (kennel) => kennel.location)
  public kennel: KennelEntity;

  @Column()
  public city: string;

  @Column()
  public address: string;
}
