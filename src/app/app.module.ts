import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import { ChatsPage } from "../pages/chats/chats";
import { MomentModule } from "angular2-moment";

import { MessagesPage } from "../pages/messages/messages";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ChatsPage,
    MessagesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ChatsPage,
    MessagesPage
  ],
  providers: []
})
export class AppModule {}
