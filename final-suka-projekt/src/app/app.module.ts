import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ComponentComponent } from './component/component.component';
import { HomeComponent } from './component/home/home.component';
import { TopNavComponent } from './header/top-nav/top-nav.component';
import { HeaderContentComponent } from './header/header-content/header-content.component';
import { HeaderDropdownComponent } from './header/header-dropdown/header-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ComponentComponent,
    HomeComponent,
    TopNavComponent,
    HeaderContentComponent,
    HeaderDropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
