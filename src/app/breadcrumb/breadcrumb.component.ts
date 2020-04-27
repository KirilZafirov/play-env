import { BreadcrumbService, Breadcrumb } from './breadcrumb.service';
import { filter, map } from 'rxjs/operators';
import { NavigationEnd, Router, ActivatedRoute, PRIMARY_OUTLET } from '@angular/router';
import { Input, OnInit, Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-custom-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

    breadcrumb: Breadcrumb[] = [];
    @Input() bgColor = '#eee';
    @Input() fontSize = '18px';
    @Input() fontColor = '#0275d8';
    @Input() lastLinkColor = '#000';
    @Input() symbol = ' / ';
    params: { [key: string]: any; };

    subs: Subscription[] = [];
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private breadcrumbService: BreadcrumbService
    ) {
        this.breadCrumbData();
    }

    ngOnInit() {
        this.subs.push(
            this.breadcrumbService.breadcrumbLabels
                .subscribe((labelData) => {
                    for (const label in labelData) {
                        if (labelData.hasOwnProperty(label)) {
                            this.breadcrumb.map((crumb) => {
                                const labelParams = crumb.label.match(/[^{{]+(?=\}})/g);
                                if (labelParams) {
                                    for (const labelParam of labelParams) {
                                        const dynamicData = labelData[label];
                                        if (labelParam === label) {
                                            crumb.label = crumb.label.replace('{{' + labelParam + '}}', dynamicData);
                                        }
                                    }
                                }
                            });
                        }
                    }
                }));

        this.subs.push(
            this.breadcrumbService.newBreadcrumb.subscribe((breadcrumb: Breadcrumb[]) => {
                this.updateData(this.activatedRoute, breadcrumb);
            }));
    }

    breadCrumbData(): void {
        this.subs.push(this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .pipe(map(() => this.activatedRoute))
            .pipe(map((route) => {
                while (route.firstChild) { route = route.firstChild; }
                return route;
            }))
            .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
            .subscribe(route => {
                this.params = route.snapshot.params;
                this.updateData(route, null);
            }));
    }

    private updateData(route, newBreadcrumb): void {
        if (route.snapshot.data.breadcrumb || newBreadcrumb) {
            const data = route.snapshot.data.breadcrumb ? route.snapshot.data.breadcrumb : newBreadcrumb;
            const breadcrumb = (JSON.parse(JSON.stringify(data)));
            breadcrumb.map((crumb) => {

                const urlChunks = crumb.url.split('/');
                for (const chunk of urlChunks) {
                    if (chunk.includes(':')) {
                        const paramID = chunk.replace(':', '');
                        // const routerParamID = route.snapshot.params[paramID];
                        const routerParamID = this.params[paramID];
                        crumb.url = crumb.url.replace(`:${paramID}`, routerParamID);
                    }
                }

                const labelParams = crumb.label.match(/[^{{]+(?=\}})/g);
                if (labelParams) {
                    for (const labelParam of labelParams) {
                        // const routerParamID = route.snapshot.params[labelParam.trim()];
                        const routerParamID = this.params[labelParam.trim()];
                        if (routerParamID) {
                            crumb.label = crumb.label.replace('{{' + labelParam + '}}', routerParamID);
                        } else {
                            // crumb.label = crumb.label.replace('{{' + labelParam + '}}', '');
                        }
                    }
                }

            });
            this.breadcrumb = breadcrumb;
        } else {
            this.breadcrumb = [];
        }
    }

    ngOnDestroy(): void {
        this.subs.filter(s => !!s).forEach(s => s.unsubscribe());
    }
}