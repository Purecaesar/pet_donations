import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  KennelRepository,
  LocationEntity,
  LocationRepository,
  PaymentDetailsRepository,
  UserRepository,
} from '@pet-donations/typeorm';
import {
  CreateKennelDto,
  Kennel,
  Location,
  PaymentDetails,
  UpdateKennelDto,
} from '@pet-donations/interfaces';

@Injectable()
export class KennelService {
  constructor(
    private readonly kennelRepo: KennelRepository,
    private readonly userRepo: UserRepository,
    private readonly paymentRepo: PaymentDetailsRepository,
    private readonly locationRepo: LocationRepository
  ) {}

  public async getKennelById(id: number) {
    const kennelRawData = await this.kennelRepo.findKennelById(id);

    if (!kennelRawData)
      throw new HttpException('Kennel not found', HttpStatus.NOT_FOUND);

    return new Kennel(kennelRawData);
  }

  public getKennels() {
    return this.kennelRepo.getAllKennels();
  }

  public async updateKennel(id: number, kennel: UpdateKennelDto) {
    const oldKennelData = await this.kennelRepo.findKennelById(id);
    const paymentDetailsId = oldKennelData.paymentDetails?.id;
    const locationId = oldKennelData.location?.id;

    if (!kennel.location) await this.kennelRepo.updateKennel(id, { location: null });
    const location = await this.handleLocation(kennel.location, locationId);

    if (!kennel.paymentDetails) await this.kennelRepo.updateKennel(id, { paymentDetails: null });
    const paymentDetails = await this.handlePayment(kennel.paymentDetails, paymentDetailsId);

    await this.kennelRepo.updateKennel(id, {
      name: kennel.name,
      description: kennel.description,
      avatar: kennel.avatarUrl,
      location,
      paymentDetails,
    });

    const newKennel = await this.kennelRepo.findKennelById(id);
    return new Kennel(newKennel);
  }

  public async createKennel(kennelInfo: CreateKennelDto) {
    const user = await this.userRepo.getUserByQuery([
      { id: kennelInfo.userId },
    ]);
    const newKennel = await this.kennelRepo.createKennel({
      name: kennelInfo.kennelName,
      user,
    });

    const kennelWithRelations = await this.kennelRepo.findKennelById(
      newKennel.id
    );

    return new Kennel(kennelWithRelations);
  }

  private async handlePayment(
    paymentDetails: PaymentDetails,
    storedDetailsId: number
  ) {
    if (paymentDetails && !storedDetailsId) {
      return await this.paymentRepo.createLocation({
        bank_bik: paymentDetails.bankBik,
        bank_inn: paymentDetails.bankInn,
        bank_name: paymentDetails.bankName,
        kennel_inn: paymentDetails.kennelInn,
        kennel_account_number: paymentDetails.kennelAccountNumber,
      });
    }

    if (paymentDetails && storedDetailsId) {
      await this.paymentRepo.updateLocation(storedDetailsId, {
        bank_bik: paymentDetails.bankBik,
        bank_inn: paymentDetails.bankInn,
        bank_name: paymentDetails.bankName,
        kennel_inn: paymentDetails.kennelInn,
        kennel_account_number: paymentDetails.kennelAccountNumber,
      });

      return this.paymentRepo.findById(storedDetailsId);
    }

    if (!paymentDetails && storedDetailsId) {
      await this.paymentRepo.removeLocation(storedDetailsId);

      return null;
    }

    return null;
  }

  private async handleLocation(location: Location, storedLocationId: number) {
    if (location && !storedLocationId) {
      return await this.locationRepo.createLocation(location);
    }

    if (location && storedLocationId) {
      await this.locationRepo.updateLocation(storedLocationId, location);

      return this.locationRepo.findById(storedLocationId);
    }

    if (!location && storedLocationId) {
      await this.locationRepo.removeLocation(storedLocationId);

      return null;
    }

    return null;
  }
}
