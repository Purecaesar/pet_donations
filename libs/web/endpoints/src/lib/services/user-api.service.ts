import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {
  LoginUserDataDto,
  Role,
  User,
  UserDataDto,
  UserInfoDto,
} from '@pet-donations/interfaces';
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

  public getRoles(): Observable<Role[]> {
    return this.api.get('users/roles');
  }

  public updateUserInfo(id: number, userInfo: UserInfoDto): Observable<User> {
    return this.api.post(`users/${id}`, userInfo);
  }
}
