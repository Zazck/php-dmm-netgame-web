import { DmmService } from './services/dmm.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = '躲猫猫';
  opened: boolean;
  routes: Route[];
  constructor(
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dmm: DmmService,
  ) { }

  getRoutes(config: Route[]) {
    const ret: Route[] = [];
    for (let i = 0; i < config.length; i += 1) {
      const route = config[i];
      if (route.redirectTo) {
        continue;
      }
      ret.push(route);
    }
    return ret;
  }

  ngOnInit() {
    this.routes = this.getRoutes(this.router.config);
    this.router.events.pipe(map(() => {
      let child = this.activatedRoute.firstChild;
      while (child) {
        if (child.firstChild) {
          child = child.firstChild;
        } else if (child.snapshot.data && child.snapshot.data['title']) {
          return child.snapshot.data['title'];
        } else {
          return null;
        }
      }
      return null;
    })).subscribe((title) => {
      this.title = title;
      this.titleService.setTitle(`${title || '欢迎'} | 躲猫猫`);
    });
    this.dmm.emiter.subscribe((message: string) => setTimeout(() => this.snackBar.open(message, '知道了', {
      duration: 5000,
    })));
  }
}
