import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KennelInfoComponent } from './containers/kennel-info/kennel-info.component';
import { KennelInfoRoutingModule } from './kennel-info-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreateKennelDialogComponent } from './components/create-kennel-dialog/create-kennel-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { PublishNewsDialogComponent } from './components/publish-news-dialog/publish-news-dialog.component';
import {
  PublishCrowdfundingDialogComponent
} from "./components/publish-crowdfunding-dialog/publish-crowdfunding-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    KennelInfoRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  declarations: [
    KennelInfoComponent,
    CreateKennelDialogComponent,
    PublishNewsDialogComponent,
    PublishCrowdfundingDialogComponent,
  ],
})
export class WebKennelInfoModule {}
