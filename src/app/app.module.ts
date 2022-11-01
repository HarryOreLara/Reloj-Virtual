import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RelojComponent } from './reloj/reloj.component';
import { FechasService } from './services/fechas.service';

@NgModule({
  declarations: [
    AppComponent,
    RelojComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FechasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
