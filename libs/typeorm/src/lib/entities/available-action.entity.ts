import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'available-action',
  synchronize: true,
})
export class AvailableActionEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column()
  public name: string;

  @Column({
    nullable: true,
  })
  public description: string;
}
