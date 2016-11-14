import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import { ChatsPage } from "../pages/chats/chats";
import { MomentModule } from "angular2-moment";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ChatsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ChatsPage
  ],
  providers: []
})
export class AppModule {}
