export class PaymentDetails {
  public bankName!: string;
  public kennelAccountNumber!: number;
  public bankBik!: number;
  public bankInn!: number;
  public kennelInn!: number;

  constructor(data: Record<string, any>) {
    this.bankName = data['bank_name'];
    this.kennelAccountNumber = data['kennel_account_number'];
    this.bankBik = data['bank_bik'];
    this.bankInn = data['bank_inn'];
    this.kennelInn = data['kennel_inn'];
  }
}
