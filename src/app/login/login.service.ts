import { Injectable } from '@angular/core';
import { HttpClientService } from '../config/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClientService) { }

  login(data: any) {
    console.log(data);
    return this.http.login('/api/user/login', data);
  }


}
