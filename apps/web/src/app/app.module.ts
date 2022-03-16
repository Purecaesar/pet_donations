import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebContentModule } from '@pet-donations/web/content';
import { RouterAppModule } from './router-app.module';
import { WebEndpointsModule } from '@pet-donations/web/endpoints';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    WebContentModule,
    RouterAppModule,
    WebEndpointsModule.forRoot(`${environment.apiDomain}/api`),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
