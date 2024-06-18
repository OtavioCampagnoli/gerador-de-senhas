import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordGeneratorComponent } from './features/password-generator/password-generator.component';
import { PasswordDisplayComponent } from './features/password-display/password-display.component';
import { CharacterOptionsComponent } from './features/character-options/character-options.component';
import { LengthInputComponent } from './features/length-input/length-input.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordGeneratorComponent,
    PasswordDisplayComponent,
    CharacterOptionsComponent,
    LengthInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
