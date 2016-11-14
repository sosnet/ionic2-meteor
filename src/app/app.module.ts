import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import { ChatsPage } from "../pages/chats/chats";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ChatsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
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
