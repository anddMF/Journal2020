import { NotifyService } from './_services/notify/notify.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   *
   */
  constructor(private svcNotify: NotifyService) {
    
  }

  showAlert(message: string){
    console.log('bateu');
    console.log(message)
    this.svcNotify.success(message);
  }
  title = 'jj2020-webapp';
}
