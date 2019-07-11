import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SettingService } from './services/setting.service';

@Injectable({
  providedIn: 'root',
})
export class PlayGuard implements CanActivate {
  constructor(
    private router: Router,
    private setting: SettingService,
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if ('category' in next.queryParams) {
      const searchCategory: string = next.queryParams.category;
      if ((searchCategory !== 'general') && (searchCategory !== 'adult')) {
        this.router.navigate(['/game-list']);
        return false;
      }
      if (searchCategory !== 'general' && this.setting.category === 'general') {
        this.router.navigate(['/game-list']);
        return false;
      }
      if ('name' in next.queryParams) {
        return true;
      }
    }
    if (!this.setting.game || !this.setting.gameCategory) {
      this.router.navigate(['/game-list']);
      return false;
    }
    return true;
  }
}
