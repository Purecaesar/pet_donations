import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './containers/content/content.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { WebUserModule } from '@pet-donations/web/user';
import {LOGO_PROVIDER} from "./providers/logo.provider";
import {MatListModule} from "@angular/material/list";
import {ROUTES} from "./providers/routes.provider";
import {Config} from "./models/config.interface";
import {FormsModule} from "@angular/forms";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    WebUserModule,
    MatListModule,
    FormsModule,
    MatMenuModule,
  ],
  declarations: [ContentComponent],
  exports: [ContentComponent],
})
export class WebContentModule {
  public static forRoot(config: Config): ModuleWithProviders<WebContentModule> {
    return {
      ngModule: WebContentModule,
      providers: [
        {
          provide: LOGO_PROVIDER,
          useFactory: () => config.logoSrc,
        },
        {
          provide: ROUTES,
          useFactory: () => config.routes
        },
      ],
    };
  }
}
