import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrowdfundingComponent } from './containers/crowdfunding/crowdfunding.component';
import { CrowdfundingRouterModule } from './crowdfunding-router.module';
import { CrowdfundingCardComponent } from './components/crowdfunding-card/crowdfunding-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { DonateDialogComponent } from './components/donate-dialog/donate-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {ReactiveFormsModule} from "@angular/forms";
import {WebUserModule} from "@pet-donations/web/user";

@NgModule({
    imports: [
        CommonModule,
        CrowdfundingRouterModule,
        MatCardModule,
        MatIconModule,
        MatProgressBarModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        WebUserModule,
    ],
  declarations: [
    CrowdfundingComponent,
    CrowdfundingCardComponent,
    DonateDialogComponent,
  ],
  exports: [CrowdfundingComponent],
})
export class WebCrowdfundingModule {}
