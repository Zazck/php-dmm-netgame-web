import { DmmService } from './../../services/dmm.service';
import { SettingService } from './../../services/setting.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpCode } from 'src/app/types/dmm';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass'],
})
export class AuthComponent implements OnInit {

  public loginPayload = {
    loginID: this.setting.loginID || '',
    password: this.setting.password || '',
    saveLoginID: this.setting.loginID ? true : false,
    savePassword: this.setting.password ? true : false,
    autoLogin: this.setting.autoLogin,
  };
  public category: 0 | 1 = this.setting.category === 'exchange' ? 1 : 0;
  public requesting: boolean = false;
  constructor(
    public setting: SettingService,
    public dmm: DmmService,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  public async login() {
    this.requesting = true;
    const result = await firstValueFrom(this.dmm.login(
      {
        login_id: this.loginPayload.loginID,
        password: this.loginPayload.password,
        use_auto_login: this.loginPayload.autoLogin ? 1 : 0,
        save_login_id: this.loginPayload.saveLoginID ? 1 : 0,
        save_password: this.loginPayload.savePassword ? 1 : 0,
      },
      this.category === 1,
    ));
    this.requesting = false;
    if (result.code === OpCode.OK) {
      this.router.navigate(['/game-list']);
    }
  }
  public async logout() {
    this.requesting = true;
    const result = await firstValueFrom(this.dmm.logout());
    this.requesting = false;
  }
}
