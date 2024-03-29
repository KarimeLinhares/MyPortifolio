import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
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
import { ButtonComponent } from './components/atom/button/button.component';
import { ProjectsCardComponent } from './components/projects-card/projects-card.component';
import { CardsComponent } from './components/projects-card/cards/cards.component';
import { CardPhotoComponent } from './components/projects-card/cards/card-photo/card-photo.component';
import { CardLabelComponent } from './components/projects-card/cards/card-label/card-label.component';
import { ContactComponent } from './components/contact/contact.component';
import { InputComponent } from './components/atom/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BackToTopDirective } from './directive/back-to-top.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BigcardComponent,
    HomeComponent,
    TechcardComponent,
    AboutComponent,
    ImgCardComponent,
    ButtonComponent,
    ProjectsCardComponent,
    CardsComponent,
    CardPhotoComponent,
    CardLabelComponent,
    ContactComponent,
    InputComponent,
    BackToTopDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
