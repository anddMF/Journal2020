import { AlertType } from './../../_models/alert';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

import { Alert } from 'src/app/_models/alert';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  private subject = new Subject<Alert>();
  private keepAfterRouteChange = true;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          this.keepAfterRouteChange = false;
        } else {
          this.clear();
        }
      }
    })
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  success(title: string, message: string = '', keepAfterRouteChange = false) {
    console.log("alert success")
    this.alert(AlertType.Success, title, message, keepAfterRouteChange);
  }

  error(title: string, message: string = '', keepAfterRouteChange = false) {
    this.alert(AlertType.Error, title, message, keepAfterRouteChange);
  }

  info(title: string, message: string = '', keepAfterRouteChange = false) {
    this.alert(AlertType.Info, title, message, keepAfterRouteChange);
  }

  warn(title: string, message: string = '', keepAfterRouteChange = false) {
    this.alert(AlertType.Warning, title, message, keepAfterRouteChange);
  }

  alert(type: AlertType, title: string = '', message: string, keepAfterRouteChange = true) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next(<Alert>{ title: title, type: type, message: message });
    console.log('SERVICE SUB')
    this.subject.asObservable().subscribe(t => console.log(t))
  }

  clear() {
    this.subject.next();
  }
}
