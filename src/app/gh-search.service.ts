import { Repository } from './repository';
import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
// import { resolve } from 'path';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class GhSearchService {
  user!: User;
  repository: Repository;
  repoDetails:any = [];
  newUserDetails:any = [];
  

  constructor(private http: HttpClient) {
    this.user = new User("",0, "", "", new Date(), new Date(), "");
    this.repository  = new Repository("", "", "", new Date(), "", "", "", new Date());
   }


   getData(username:string){
     this.repoDetails.length = 0;

    interface ApiResponse{
      bio:string,
      repos:number,
      login:string,
      avatar_url:string
      created_on:Date,
      updated_on:Date,
      name:string,
      full_name:string,
      html_url:string 
    }

    let promise = new Promise<void>((resolve, reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/' + username).toPromise().then((response: any)=>{
        this.user.bio=response.bio;
        this.user.avatar_url=response.avatar_url;
        this.user.login=response.login;
        this.user.repos=response.repos;
        this.user.created_on=response.created_on;
        this.user.updated_on=response.updated_on;
        this.user.html_url=response.html_url;

        resolve()
      }),
        (error: any)=>{
        reject(error)
      }
    })

    this.http.get<any>("https:/api.github.com/users/" + username + "/repos").toPromise().then(response=>{
      for (var i=0; i<response.length; i++){
        this.newUserDetails = new Repository(response[i].name,response[i].full_name,response[i].description,response[i].updated_on,response[i].html_url,response[i].clone_url,response[i].language,response[i].created_on);
        this.repoDetails.push(this.newUserDetails);
      }
      resolve()
    }),
      (    error: any)=>{
      reject(error)
    }

   }

}
function reject(error: any) {
  throw new Error('Function not implemented.');
}



function resolve() {
  throw new Error('Function not implemented.');
}

