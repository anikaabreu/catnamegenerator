import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PictureService } from './services/picture.service';
import { NameService } from './services/name.service';

import { CatpictureComponent } from './components/catpicture/catpicture.component';
import { CatnameComponent } from './components/catname/catname.component';


@NgModule({
  declarations: [
    AppComponent,
    CatpictureComponent,
    CatnameComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [PictureService, NameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
