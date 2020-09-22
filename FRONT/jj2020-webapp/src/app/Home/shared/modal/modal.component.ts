// import { style } from '@angular/animations';
import { ModalService } from './../../../_services/modal/modal.service';

import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    let modal = this;

    if (!this.id) {
      // TODO: trocar para o sistema de noty quando o modal estiver terminado
      console.error('modal precisa ter um id');
      return;
    }

    // move o elemento para o final da página (antes do </body>) para ser mostrado acima de tudo
    document.body.appendChild(this.element);

    // fecha o modal ao clicar no fundo
    this.element.addEventListener('click', function (e: any) {
      if (e.target.className === 'jw-modal') {
        modal.close();
      }
    });
    
    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this)
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('jw-modal-open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('jw-modal-open');
  }

}
