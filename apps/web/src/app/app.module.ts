import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebContentModule } from '@pet-donations/web/content';
import { RouterAppModule } from './router-app.module';
import { WebEndpointsModule } from '@pet-donations/web/endpoints';
import { environment } from '../environments/environment';
import { ROUTER_CONFIG } from '../configs/router.config';
import { USER_INITIALIZER } from '../initializers/user-initializer.provider';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    WebContentModule.forRoot({
      routes: ROUTER_CONFIG,
      logoSrc: 'assets/doge_coin_icon.png',
    }),
    RouterAppModule,
    WebEndpointsModule.forRoot(`${environment.apiDomain}/api`),
  ],
  providers: [USER_INITIALIZER],
  bootstrap: [AppComponent],
})
export class AppModule {}
