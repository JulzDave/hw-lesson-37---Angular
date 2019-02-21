import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './comp/about/about.component';
import { AddjobComponent } from './comp/addjob/addjob.component';
import { HebDatePipe } from './pipes/heb-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddjobComponent,
    HebDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
