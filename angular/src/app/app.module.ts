import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ngx-ckeditor';

import { AppComponent } from './app.component';
import { ArticleEditorComponent } from '../pages/components/ArticleEditor/articleEditor.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleEditorComponent,
  ],
  imports: [
    BrowserModule,
    CKEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
