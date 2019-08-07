import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { EnvConfig } from './env-config/env-config.model';


export function getEnvConfig() {
  return new EnvConfig((window as any).EnvConfig);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,
    AppRoutingModule,

  ],
  providers: [ { provide: EnvConfig, useFactory: getEnvConfig },],
  bootstrap: [AppComponent]
})
export class AppModule { }
