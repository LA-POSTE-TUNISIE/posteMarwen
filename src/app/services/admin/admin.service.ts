import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class AdminService {
baseUrl="/api";
postId;
  constructor(private  httpClient: HttpClient) { }

  addUser(data) {
    
    this.httpClient.post<any>(this.baseUrl+'users/addUser',data).subscribe();
  }
  listUsers() {
   const user= this.httpClient.get(this.baseUrl+'users/allUsers');
  return user;
  }
  
  }

