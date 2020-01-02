import { Title, Meta } from '@angular/platform-browser';
import { Component, OnInit, Inject } from '@angular/core';
import { EnvConfig } from './env-config/env-config.model';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';


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
              private titleService: Title,
              private meta: Meta,
              @Inject(DOCUMENT) documentRef: Document) {
    console.log(this.envConfig);
  }
  ngOnInit(): void {
    const appTitle = this.titleService.getTitle();

    // this.meta.updateTag({name: 'dashboard', content: ''});
    // this.meta.updateTag({name: 'description', content: 'Lorem ipsum dolor'});
    // this.meta.updateTag({name: 'site', content: 'My Site'});

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
