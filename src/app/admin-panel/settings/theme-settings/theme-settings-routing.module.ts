import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemeSettingsComponent } from './theme-settings.component';

const routes: Routes = [{ path: '', component: ThemeSettingsComponent , data: { title: 'Theme Settings'} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeSettingsRoutingModule { }
