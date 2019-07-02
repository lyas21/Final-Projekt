import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ComponentComponent } from './component/component.component';
import { TopNavComponent } from './header/top-nav/top-nav.component';
import { HeaderContentComponent } from './header/header-content/header-content.component';
import { HeaderDropdownComponent } from './header/header-dropdown/header-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ComponentComponent,
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
