import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { WarningMsgComponent } from './components/warning-msg/warning-msg.component';
import { ConfirmMsgComponent } from './components/confirm-msg/confirm-msg.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, WarningMsgComponent, ConfirmMsgComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
