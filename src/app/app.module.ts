import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { InfoanimeComponent } from './infoanime/infoanime.component';
import { AnimeService } from './infoanime/infoanime.animeservice';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    InfoanimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [AnimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
