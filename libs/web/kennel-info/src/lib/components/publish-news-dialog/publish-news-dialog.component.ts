import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pd-publish-news-dialog',
  templateUrl: './publish-news-dialog.component.html',
  styleUrls: ['./publish-news-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublishNewsDialogComponent {
  public readonly form = new FormGroup({
    header: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
    description: new FormControl(null, [Validators.required]),
  });
}
