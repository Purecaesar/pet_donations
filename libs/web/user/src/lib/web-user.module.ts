import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './containers/authorization/authorization.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { RegistrationComponent } from './components/registration/registration.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UserService } from './services/user.service';
import { AvailableActionsDirective } from './directives/available-actions.directive';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatSnackBarModule,
    MatProgressBarModule,
  ],
  providers: [UserService],
  declarations: [
    AuthorizationComponent,
    LoginComponent,
    RegistrationComponent,
    AvailableActionsDirective,
  ],
  exports: [AuthorizationComponent, AvailableActionsDirective],
})
export class WebUserModule {}
