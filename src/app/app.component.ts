import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { EnvConfig } from './env-config/env-config.model';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appTitle = 'Play Environment';
  accessTitle = 'title';
  constructor(private envConfig: EnvConfig ,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title) {
    console.log(this.envConfig);
  }
  ngOnInit(): void {
    const appTitle = this.titleService.getTitle();
    
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child.firstChild) {
            child = child.firstChild;
          }
          if (child.snapshot.data[this.accessTitle]) {
            return child.snapshot.data[this.accessTitle];
          }
          return appTitle;
        })
      ).subscribe((ttl: string) => {
        this.titleService.setTitle(ttl);
      });
  }
}
