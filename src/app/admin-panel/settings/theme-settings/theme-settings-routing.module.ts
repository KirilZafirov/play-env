import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemeSettingsComponent } from './theme-settings.component';

const routes: Routes = [{ path: '', 
     component: ThemeSettingsComponent , 
      data: { 
          title: 'Theme Settings',
          breadcrumb: [
          {
          label: 'Admin Section',
          url: '/admin'
          },
          {
          label: 'Settings',
          url: '/admin/settings'
          },
          {
            label: 'Theme Settings',
            url: '/admin/settings/theme-settings'
            }
          ]
        }
      }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeSettingsRoutingModule { }
