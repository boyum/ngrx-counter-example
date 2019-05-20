import { BrowserModule } from '@angular/platform-browser';
import { CounterComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [CounterComponent]
})
export class AppModule {
}
