import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { KennelEntity } from './kennel.entity';

@Entity({
  name: 'payment-details',
  synchronize: true,
})
export class PaymentDetailsEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column()
  public bank_name: string;

  @Column({
    type: 'bigint'
  })
  public bank_bik: number;

  @Column({
    type: 'bigint'
  })
  public bank_inn: number;

  @Column({
    type: 'bigint'
  })
  public kennel_inn: number;

  @Column({
    type: 'bigint'
  })
  public kennel_account_number: number;

  @OneToOne(() => KennelEntity, (kennel) => kennel.paymentDetails)
  public kennel: KennelEntity;
}
