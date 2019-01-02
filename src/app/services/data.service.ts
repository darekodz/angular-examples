import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = [
    { name: 'Joe', phone: 1234234 },
    { name: 'Mike', phone: 81234234 },
    { name: 'Bob', phone: 41234234 },
    { name: 'Jack', phone: 34234 },
    { name: 'Carlos', phone: 234234 }
  ];
  images = [
    'https://api.emitter.pl/assets/tomato.jpg',
    'https://api.emitter.pl/assets/pumpkin.jpg',
    'https://api.emitter.pl/assets/potatoes.jpg'
  ];
  bigImg = this.images[0];

  constructor(private http: HttpClient) { }

  getWorkersFromServer(): Observable<any> {
    return this.http.get('https://api.emitter.pl/workers');
  }
}
