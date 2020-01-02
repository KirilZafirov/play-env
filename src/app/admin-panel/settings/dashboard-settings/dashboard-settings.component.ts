import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard-settings',
  templateUrl: './dashboard-settings.component.html',
  styleUrls: ['./dashboard-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
