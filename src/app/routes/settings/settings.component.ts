import { SettingService } from './../../services/setting.service';
import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass'],
})
export class SettingsComponent implements OnInit {
  constructor(
    public setting: SettingService,
  ) { }

  ngOnInit() {
  }

  changeSetting(key: string, event: MatSlideToggleChange) {
    this.setting[key] = event.checked;
  }
}
