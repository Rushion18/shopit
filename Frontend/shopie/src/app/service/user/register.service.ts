import { Injectable } from '@angular/core';
import { loginUserDetails } from 'src/app/interface/loginUserDetails';
import { UserDetails } from 'src/app/interface/register';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor() {}

  //REGISTER USER
  async registerNewUser(userdetail: UserDetails) {
    let response = await fetch('http://localhost:4500/user/register', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(userdetail),
    });

    const data = await response.json();

    console.log(data);

    return data;
  }

  async loginregistereduser(logindata: loginUserDetails) {
    // let body = {email, password}
    let res = await fetch('http://localhost:4500/user/login', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(logindata),
    });

    let data = await res.json();

    console.log(data);
    return data;
  }
  //CHECK USER DEATAILS
  async checkuserdetails() {
    let token = localStorage.getItem('token');

    let res = await fetch('http://localhost:4500/user/checkuserdetails', {
      headers: {
        'Content-Type': 'application/json',
        token: `${token}`,
      },
      method: 'GET',
    });

    let data = await res.json();

    console.log(data);
    return data;
  }
}
