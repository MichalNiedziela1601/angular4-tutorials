import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent, AppListComponent} from './app.component';
import {CarouselService} from './services/carousel.service';
import { NgxSiemaModule } from 'ngx-siema';

@NgModule({
  declarations: [
    AppComponent,
      AppListComponent
  ],
  imports: [
    BrowserModule,
    NgxSiemaModule.forRoot()
  ],
  providers: [CarouselService],
  bootstrap: [AppComponent]
})
export class AppModule { }
