import { DmmService } from './../../services/dmm.service';
import { SettingService } from './../../services/setting.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpCode } from 'src/app/types/dmm';

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
    private setting: SettingService,
    private dmm: DmmService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public async login() {
    this.requesting = true;
    const result = await this.dmm.login(
      {
        login_id: this.loginPayload.loginID,
        password: this.loginPayload.password,
        use_auto_login: this.loginPayload.autoLogin ? 1 : 0,
        save_login_id: this.loginPayload.saveLoginID ? 1 : 0,
        save_password: this.loginPayload.savePassword ? 1 : 0,
      },
      this.category === 1,
    );
    this.requesting = false;
    if (result.code === OpCode.OK) {
      this.router.navigate(['/game-list']);
    }
  }
}
