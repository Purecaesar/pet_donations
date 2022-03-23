import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { WebUserModule } from '@pet-donations/web/user';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    WebUserModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  declarations: [UserProfileComponent],
  exports: [UserProfileComponent],
})
export class WebUserProfileModule {}
