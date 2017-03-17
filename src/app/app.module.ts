import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderBar } from './header-bar/header-bar.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [
        AppComponent,
        HeaderBar
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
