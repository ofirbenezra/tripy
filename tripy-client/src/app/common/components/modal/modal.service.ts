import {Injectable, TemplateRef, ViewChild} from '@angular/core';
import {ModalComponent} from './modal.component';
import {BehaviorSubject} from 'rxjs';

export interface ModalSate {
  show: boolean;
  template?: TemplateRef<any>;
}
@Injectable({providedIn: 'root'})
export class ModalService {
  modalStateSub$: BehaviorSubject<ModalSate> = new BehaviorSubject<ModalSate>({show : false});

  constructor() {
  }

  get modalState$() {
    return this.modalStateSub$.asObservable();
  }

  public showModal(template: TemplateRef<any>) {
    this.modalStateSub$.next({show: true, template});
  }

  public hideModal() {
    this.modalStateSub$.next({show: false});
  }
}
