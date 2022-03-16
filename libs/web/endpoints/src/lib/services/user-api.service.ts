import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {LoginUserDataDto, User, UserDataDto} from '@pet-donations/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class UserApiService {
  constructor(private readonly api: ApiService) {}

  public createUser(userData: UserDataDto): Observable<User> {
    return this.api.post('users/register', userData);
  }

  public loginUser(userData: LoginUserDataDto): Observable<User> {
    return this.api.post('users/login', userData);
  }
}
