import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThreeComponent } from './components/three/three.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { CheckListComponent } from './components/check-list/check-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreeComponent,
    ListComponent,
    ListItemComponent,
    CheckListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
