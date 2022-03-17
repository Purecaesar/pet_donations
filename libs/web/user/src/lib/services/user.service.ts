import { Injectable } from '@angular/core';
import { UserApiService } from '@pet-donations/web/endpoints';
import { LoginForm } from '../models/login-form.interface';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from '@pet-donations/interfaces';
import { RegistrationForm } from '../models/registration-form.interface';

@Injectable()
export class UserService {
  public get user$() {
    return this.userSubject$.asObservable();
  }

  private readonly userSubject$ = new BehaviorSubject<User | null>(null);

  constructor(private readonly userApi: UserApiService) {}

  public getUserFromStorage() {
    const storedData = localStorage.getItem('userData');

    if (!storedData) return;

    const userData = JSON.parse(storedData);

    return this.login(userData);
  }

  public checkActions(action: string) {
    const user = this.userSubject$.getValue();

    if (!user) return false;

    const availableActions = user.role.availableActions.map(action => action.name);

    return availableActions.some(userAction => userAction === action);
  }

  public login(userData: LoginForm) {
    return this.userApi.loginUser(userData).pipe(
      tap((user) => {
        localStorage.setItem('userData', JSON.stringify(userData));

        this.userSubject$.next(user);
      })
    );
  }

  public registerUser(userData: RegistrationForm) {
    return this.userApi.createUser(userData);
  }

  public logout() {
    localStorage.removeItem('userData');

    this.userSubject$.next(null);
  }
}
