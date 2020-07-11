import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
 import{FlexLayoutModule} from '@angular/flex-layout'
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {DishService} from './service/dish.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishDetailsComponent,
    HeaderComponent,
    FooterComponent
  ], 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    AngularFontAwesomeModule
  ],
  providers: [
    DishService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
