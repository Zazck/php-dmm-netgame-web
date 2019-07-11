import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
/*
  autoLogin: boolean;
  autoRedirect: boolean;
  loginID: string;
  password: string;
  category: 'general' | 'exchange'; // 'adult'
  game: string;
  gameCategory: 'general' | 'adult';
  cookies: object;
  authenticated: boolean;
  autoRelogin: boolean;
*/

//   get $1(): $2 {\n    return JSON.parse(localStorage.getItem('$1'));\n  }\n  set $1(v: $2) {\n    if (v === null) {\n      localStorage.removeItem('$1');\n    } else {\n      localStorage.setItem('$1', JSON.stringify(v));\n    }\n  }

  get autoLogin(): boolean {
    return JSON.parse(localStorage.getItem('autoLogin'));
  }
  set autoLogin(v: boolean) {
    if (v === null) {
      localStorage.removeItem('autoLogin');
    } else {
      localStorage.setItem('autoLogin', JSON.stringify(v));
    }
  }
  get autoRedirect(): boolean {
    return JSON.parse(localStorage.getItem('autoRedirect'));
  }
  set autoRedirect(v: boolean) {
    if (v === null) {
      localStorage.removeItem('autoRedirect');
    } else {
      localStorage.setItem('autoRedirect', JSON.stringify(v));
    }
  }
  get loginID(): string {
    return JSON.parse(localStorage.getItem('loginID'));
  }
  set loginID(v: string) {
    if (v === null) {
      localStorage.removeItem('loginID');
    } else {
      localStorage.setItem('loginID', JSON.stringify(v));
    }
  }
  get password(): string {
    return JSON.parse(localStorage.getItem('password'));
  }
  set password(v: string) {
    if (v === null) {
      localStorage.removeItem('password');
    } else {
      localStorage.setItem('password', JSON.stringify(v));
    }
  }
  get category(): 'general' | 'exchange' {
    return JSON.parse(localStorage.getItem('category'));
  }
  set category(v: 'general' | 'exchange') {
    if (v === null) {
      localStorage.removeItem('category');
    } else {
      localStorage.setItem('category', JSON.stringify(v));
    }
  } // 'adult'
  get game(): string {
    return JSON.parse(localStorage.getItem('game'));
  }
  set game(v: string) {
    if (v === null) {
      localStorage.removeItem('game');
    } else {
      localStorage.setItem('game', JSON.stringify(v));
    }
  }
  get gameCategory(): 'general' | 'adult' {
    return JSON.parse(localStorage.getItem('gameCategory'));
  }
  set gameCategory(v: 'general' | 'adult') {
    if (v === null) {
      localStorage.removeItem('gameCategory');
    } else {
      localStorage.setItem('gameCategory', JSON.stringify(v));
    }
  }
  get cookies(): object {
    return JSON.parse(localStorage.getItem('cookies'));
  }
  set cookies(v: object) {
    if (v === null) {
      localStorage.removeItem('cookies');
    } else {
      localStorage.setItem('cookies', JSON.stringify(v));
    }
  }
  get authenticated(): boolean {
    return JSON.parse(localStorage.getItem('authenticated'));
  }
  set authenticated(v: boolean) {
    if (v === null) {
      localStorage.removeItem('authenticated');
    } else {
      localStorage.setItem('authenticated', JSON.stringify(v));
    }
  }
  get autoRelogin(): boolean {
    return JSON.parse(localStorage.getItem('autoRelogin'));
  }
  set autoRelogin(v: boolean) {
    if (v === null) {
      localStorage.removeItem('autoRelogin');
    } else {
      localStorage.setItem('autoRelogin', JSON.stringify(v));
    }
  }
  get autoRetry(): boolean {
    return JSON.parse(localStorage.getItem('autoRetry'));
  }
  set autoRetry(v: boolean) {
    if (v === null) {
      localStorage.removeItem('autoRetry');
    } else {
      localStorage.setItem('autoRetry', JSON.stringify(v));
    }
  }
  constructor() { }
}
