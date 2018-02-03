import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleEditorComponent } from '../pages/components/ArticleEditor/articleEditor.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleEditorComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
