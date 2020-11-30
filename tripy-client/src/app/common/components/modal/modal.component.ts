import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ModalService} from './modal.service';

@Component({
  selector: 'ti-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  modalRef: BsModalRef;
  @ViewChild('template') template;
  constructor(private bsModalService: BsModalService, private modalService: ModalService) {}

  ngOnInit(): void {
    console.log('kakak');
    this.modalRef = this.bsModalService.show(this.template);
    // this.modalService.modalState$.subscribe(state => {
    //   if (state.show) {
    //     this.body  = state.template;
    //     this.openModal();
    //   } else {
    //     this.closeModal();
    //   }
    // });
  }

  openModal() {
    // this.modalRef = this.bsModalService.show(this.body);
  }

  closeModal() {
    // if (this.modalRef) {
    //   this.modalRef.hide();
    // }
  }




}
