import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { NotifyService } from './../../../_services/notify/notify.service';
import { Alert, AlertType } from './../../../_models/alert';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-in'))
    ])
  ]
})
export class NotifyComponent implements OnInit {

  alerts: Alert[] = [];

  constructor(private svcNotify: NotifyService) { }

  ngOnInit() {
    this.svcNotify.getAlert().subscribe((alert: Alert) => {
      this.logConsole('on init', alert)
      if (!alert) {
        this.alerts = [];
        return;
      }
      
      alert.idTimeOut = setTimeout(() => {
        this.removeAlert(alert);
      }, 6000);

      this.alerts.splice(0, 0, alert);
    });
  }

  removeAlert(alert: Alert) {
    this.logConsole('remove alert', alert);
    this.alerts = this.alerts.filter(x => x !== alert)
    this.logConsole(this.alerts.filter(x => x !== alert));
  }

  toggleAlert(alert: Alert) {
    alert.isOpen = !alert.isOpen;

    if (alert.isOpen) {
      window.clearTimeout(alert.idTimeOut);
    }
    else {
      alert.idTimeOut = setTimeout(() => {
        this.removeAlert(alert);
      }, 6000);
    }
  }

  cssClass(alert: Alert) {
    if (!alert){
      return;
    }

    switch (alert.type) {
      case AlertType.Success:
        return 'success';
      case AlertType.Error:
        return 'error';
      case AlertType.Info:
        return 'info';
      case AlertType.Warning:
        return 'warning';
    }
  }

  logConsole(value: any, obj: object = null) {
    console.log(value);

    if (obj !== null) {
      console.log(obj);
    }
  }

}
