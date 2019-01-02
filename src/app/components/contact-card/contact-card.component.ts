import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ContactCardComponent implements OnInit {

  @Input() data: {name, phone};
  @Input() index = 1;
  @Output() clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showPhone(phone){
    console.log(phone);
    this.clickEvent.emit(phone);
  }

}
