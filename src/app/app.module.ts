import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { EnvConfig } from './env-config/env-config.model';
import { PopoverComponent } from './shared/components/popover/popover/popover.component';


export function getEnvConfig() {
  return new EnvConfig((window as any).EnvConfig);
}
export function runOnBootstrap() {
  return ;
}
export function runSettingsOnInit() {

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
  providers: [
    // { provide: APP_INITIALIZER, useFactory: runSettingsOnInit , multi: true },
      // Bootstrap Listener
    // Just like AppInitializer, 
    // Angular has a feature that enables us to listen on when a component is being bootstrapped. 
    // It is the APP_BOOTSTRAP_LISTENER.
    // {
    //   provide: APP_BOOTSTRAP_LISTENER, multi: true,
    //   useExisting: runOnBootstrap
    // } ,
    { provide: EnvConfig, useFactory: getEnvConfig },
    Title,
    Meta,
  ],
  bootstrap: [AppComponent] ,
  entryComponents: [PopoverComponent]
})
export class AppModule { }
