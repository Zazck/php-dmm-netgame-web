import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './routes/auth/auth.component';
import { GameListComponent } from './routes/game-list/game-list.component';
import { PlayComponent } from './routes/play/play.component';
import { SettingsComponent } from './routes/settings/settings.component';
import { AboutComponent } from './routes/about/about.component';
import { AuthGuard } from './auth.guard';
import { PlayGuard } from './play.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/play',
    pathMatch: 'full',
    data: {
      title: '欢迎',
    },
  },
  {
    path: 'auth',
    component: AuthComponent,
    data: {
      title: '登录',
      icon: 'exit_to_app',
    },
  },
  {
    path: 'game-list',
    component: GameListComponent,
    canActivate: [AuthGuard],
    data: {
      title: '游戏列表',
      icon: 'list',
    },
  },
  {
    path: 'play',
    component: PlayComponent,
    canActivate: [AuthGuard, PlayGuard],
    data: {
      title: '运行游戏',
      icon: 'play_arrow',
    },
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      title: '设置',
      icon: 'settings',
    },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: '关于',
      icon: 'info',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
