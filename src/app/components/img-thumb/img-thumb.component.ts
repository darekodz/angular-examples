import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img-thumb',
  templateUrl: './img-thumb.component.html',
  styleUrls: ['./img-thumb.component.scss']
})
export class ImgThumbComponent implements OnInit {

  @Input() extUrl: string;
  @Output() clickEvent2 = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showBigImg(url){
    this.clickEvent2.emit(url);
  }

}
