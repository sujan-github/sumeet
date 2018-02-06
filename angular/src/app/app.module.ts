import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CKEditorModule } from 'ngx-ckeditor';

import { AppComponent } from './app.component';

import { AdminComponent } from '../pages/components/Admin/admin.component';
import { LoginComponent } from '../pages/components/Admin/Login/login.component';

import { HomeComponent } from '../pages/components/Home/home.component';
import { AboutPracticeComponent } from '../pages/components/PageComponent/aboutOurPractice.component';
import { BlogComponent } from '../pages/components/BlogComponent/blog.component';
import { ArticleEditorComponent } from '../pages/components/ArticleEditor/articleEditor.component';
import { ExampleArticleComponent } from '../pages/components/ExampleArticleComponent/example-article.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'our-practice', component: AboutPracticeComponent },
  { path: 'example-article', component: ExampleArticleComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'article-editor', component: ArticleEditorComponent },
      { path: 'blog', component: BlogComponent },
      {
        path: '',
        redirectTo: '/admin/login',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/admin/login',
    pathMatch: 'full'
  }
  // { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    ArticleEditorComponent,
    ExampleArticleComponent,
    HomeComponent,
    AboutPracticeComponent,
    BlogComponent
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
