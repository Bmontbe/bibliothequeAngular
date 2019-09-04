import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bibliothequeAngular';
  constructor() {
    const config = {
      apiKey: "AIzaSyBHcipj9PppdmhpaTTu7Gti5pQcr5kQ064",
      authDomain: "bibliotheque-angular-c6475.firebaseapp.com",
      databaseURL: "https://bibliotheque-angular-c6475.firebaseio.com",
      projectId: "bibliotheque-angular-c6475",
      storageBucket: "bibliotheque-angular-c6475.appspot.com",
      messagingSenderId: "230650891576",
      appId: "1:230650891576:web:e2553a9427712fdb"
    };
    firebase.initializeApp(config);
  }
}
