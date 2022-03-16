import { Component } from '@angular/core';

@Component({
  selector: 'pd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web';

  public onSignIn(googleUser: any) {
    console.log(googleUser);
    console.log(googleUser.getBasicProfile);
  }
}
