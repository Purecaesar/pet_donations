import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {CreateKennelDto, Kennel, UpdateKennelDto} from '@pet-donations/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class KennelApiService {
  constructor(private readonly api: ApiService) {}

  public getKennelById(id: number): Observable<Kennel> {
    return this.api.get(`kennels/${id}`);
  }

  public createKennel(kennelInfo: CreateKennelDto): Observable<Kennel> {
    return this.api.post('kennels', kennelInfo);
  }

  public updateKennel(id: number, kennelInfo: UpdateKennelDto): Observable<Kennel> {
    return this.api.patch(`kennels/${id}`, kennelInfo);
  }
}
