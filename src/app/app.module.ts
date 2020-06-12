import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginChildComponent } from './login-child/login-child.component';
import { FormsModule } from '@angular/forms';  //<<<< import it here

@NgModule({
  declarations: [
    AppComponent,
    LoginChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //<<<< and here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
