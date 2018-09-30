import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class LoginService {

  constructor() {

   }

   login(loginObj: any): boolean {
        const userName = 'prolead';
        const passWord = 'prolead';

        debugger;
        return (loginObj.user.value === userName && loginObj.pass.value===passWord);
   }

}