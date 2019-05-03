import { Injectable } from '@angular/core';
import { NullViewportScroller } from '@angular/common/src/viewport_scroller';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserComponent } from './user/user.component';
import {Http,HttpModule} from '@angular/http';
//import { ConsoleReporter } from 'jasmine';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  
  authState: any = null;

  private user:any;
  constructor(private afAuth: AngularFireAuth,
              private router:Router,private auth:AngularFireAuth) {
                  
               this.afAuth.authState.subscribe((auth) => {
                this.authState = auth;
              });
             
          }
    get authenticated(): boolean {
      return this.authState !== null;
    }  
 
}