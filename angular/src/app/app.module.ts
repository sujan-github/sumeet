import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CKEditorModule } from 'ngx-ckeditor';

import { AppComponent } from './app.component';
import { ArticleEditorComponent } from '../pages/components/ArticleEditor/articleEditor.component';
import { ExampleArticleComponent } from '../pages/components/ExampleArticleComponent/example-article.component';

const appRoutes: Routes = [
  { path: 'example-article', component: ExampleArticleComponent },
  { path: 'article-editor', component: ArticleEditorComponent },
  {
    path: '',
    redirectTo: '/example-article',
    pathMatch: 'full'
  },
  { path: '**', component: ExampleArticleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleEditorComponent,
    ExampleArticleComponent
  ],
  imports: [
    BrowserModule,
    CKEditorModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
