import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { LocationEntity } from './location.entity';
import { NewsEntity } from './news.entity';
import { UserEntity } from './user.entity';
import { PaymentDetailsEntity } from './payment-details.entity';
import { KennelCrowdfundingEntity } from './kennel-crowdfunding.entity';

@Entity({
  name: 'kennel',
  synchronize: true,
})
export class KennelEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column()
  public name: string;

  @Column({
    nullable: true
  })
  public avatar: string;

  @Column({
    nullable: true
  })
  public description: string;

  @OneToOne(() => LocationEntity)
  @JoinColumn({
    name: 'location_id',
    referencedColumnName: 'id',
  })
  public location: LocationEntity;

  @OneToMany(() => NewsEntity, (news) => news.kennel)
  public news: NewsEntity[];

  @OneToOne(() => UserEntity)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
  })
  public user: UserEntity;

  @OneToOne(() => PaymentDetailsEntity)
  @JoinColumn({
    name: 'payment_id',
    referencedColumnName: 'id',
  })
  public paymentDetails: PaymentDetailsEntity;

  @OneToMany(() => KennelCrowdfundingEntity, (cf) => cf.kennel)
  public crowdfunding: KennelCrowdfundingEntity[];
}
