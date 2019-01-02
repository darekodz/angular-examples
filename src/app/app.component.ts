import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedPhone = 0;
  access = true;
  title = 'Angular';
  myName = 'Darek';
  today: number = Date.now();
  list = ['item1', 'item2', 'item3', 'item4'];
  contacts: any;
  images: string[];
  bigImg: any;
  dataFromSever: any;
  dataAsync$: Observable<any>;

  constructor(private dataService: DataService){
    this.contacts = dataService.contacts;
    this.images = dataService.images;

    this.bigImg = this.images[0];

    this.dataService
      .getWorkersFromServer()
      .subscribe((resp => {
        this.dataFromSever = resp.data;
    }));

    this.dataAsync$ = this.dataService.getWorkersFromServer();
  }

  showContactPhone(phone){
    console.log(phone);
  }

  toggleAccess(value){
    this.access = value;
  }

  changeName(newName){
    this.myName = newName;
  }

  changePhone(evt){
    this.selectedPhone = evt;
  }

  changeImg(url){
    this.bigImg = url;
  }
}
