import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {AuthorizationComponent, UserService} from '@pet-donations/web/user';
import { LOGO_PROVIDER } from '../../providers/logo.provider';
import { ROUTES } from '../../providers/routes.provider';
import { Route } from '@pet-donations/web/content';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'pd-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {
  public readonly currentRoute$ = this.router.events.pipe(
    filter((e) => e instanceof NavigationEnd),
    map((e) => [(e as NavigationEnd).urlAfterRedirects.replace('/', '')])
  );

  public readonly user$ = this.userService.user$;

  constructor(
    private readonly dialogService: MatDialog,
    @Inject(LOGO_PROVIDER) public readonly logoSrc: string,
    @Inject(ROUTES) public readonly routes: Route[],
    private readonly router: Router,
    private readonly userService: UserService,
  ) {}

  public onLogin() {
    this.dialogService.open(AuthorizationComponent);
  }

  public onLogout() {
    this.userService.logout();
  }

  public onNavigate(route: string[]) {
    void this.router.navigate(route);
  }
}
