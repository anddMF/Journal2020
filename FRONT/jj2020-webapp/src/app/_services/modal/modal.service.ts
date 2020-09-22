import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modals: any[] = []

  constructor() { }

  add(modal: any) {
    //adiciona o modal para uma lista de modals ativos
    this.modals.push(modal);
  }

  remove(id: string) {
    // remove da 'modals' o modal com certo id
    this.modals = this.modals.filter(x => x.id !== id);
  }

  open(id: string) {
    let modal: any = this.modals.filter(x => x.id === id)[0];
    modal.open();
  }

  close(id: string) {
    let modal: any = this.modals.filter(x => x.id === id)[0];
    modal.close();
  }
}
