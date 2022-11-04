import { Component } from '@angular/core';
import { PushNotifications } from '@capacitor/push-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    PushNotifications.createChannel({
      id: "test",
      name: "test"
    })
  }

}
