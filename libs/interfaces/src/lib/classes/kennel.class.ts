import { Location } from './location.class';
import { PaymentDetails } from './payment-details.class';
import { User } from './user.class';
import { Crowdfunding } from './crowdfunding.class';

export class Kennel {
  public id!: number;
  public name!: string;
  public avatarUrl!: string;
  public description!: string;
  public location!: Location;
  public paymentDetails!: PaymentDetails;
  public user!: User;
  public crowdfunding: Crowdfunding[];

  constructor(data: Record<string, any>) {
    this.id = data['id'];
    this.name = data['name'];
    this.avatarUrl = data['avatar'];
    this.description = data['description'];
    this.location = data['location'] && new Location(data['location']);
    this.paymentDetails = data['paymentDetails'] && new PaymentDetails(data['paymentDetails']);
    this.user = data['user'] && new User(data['user']);
    this.crowdfunding =
      data['crowdfunding']?.map((cf: any) => new Crowdfunding(cf)) || [];
  }
}
