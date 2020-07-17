import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface AuthResponseData {
  id: string;
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor(private http: HttpClient) { }


  registerNewUser(username, email, password): Observable<any> {
    return this.http
      .post<AuthResponseData>('http://127.0.0.1:8000/api/users/', { username: 'simolee', email: 'uguogoo@gmail.com', password: '0hoihhhohh' });
    // return this.http.post('https://https-2e7b6.firebaseio.com/', { username: 'simolee', email: 'uguogoo@gmail.com', password: '0hoihhhohh' });
  }

}

