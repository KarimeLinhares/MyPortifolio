import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BigcardComponent } from './components/bigcard/bigcard.component';
import { HomeComponent } from './pages/home/home.component';
import { TechcardComponent } from './components/techcard/techcard.component';
import { AboutComponent } from './components/about/about.component';
import { ImgCardComponent } from './components/techcard/img-card/img-card.component';

@NgModule({
  declarations: [AppComponent, MenuBarComponent, BigcardComponent, HomeComponent, TechcardComponent, AboutComponent, ImgCardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
