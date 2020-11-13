import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NameInputComponent } from './name-input/name-input.component';
import { TestComponent } from './test/test.component';
import { apiURLProvider, MyService } from './providers/index';

@NgModule({
  declarations: [
    AppComponent,
    NameInputComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [apiURLProvider, MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
