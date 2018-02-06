import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CKEditorModule } from 'ngx-ckeditor';

import { AppComponent } from './app.component';

import { AdminComponent } from '../pages/components/Admin/admin.component';
import { LoginComponent } from '../pages/components/Admin/Login/login.component';

import { HomeComponent } from '../pages/components/PageComponent/home.component';
import { AboutComponent } from '../pages/components/Home/about.component';
import { AboutPracticeComponent } from '../pages/components/PageComponent/aboutOurPractice.component';
import { BlogNewsComponent } from '../pages/components/PageComponent/blognews.component';
import { OurTeamComponent } from '../pages/components/PageComponent/ourTeam.component';
import { BlogComponent } from '../pages/components/BlogComponent/blog.component';
import { ArticleEditorComponent } from '../pages/components/ArticleEditor/articleEditor.component';
import { ExampleArticleComponent } from '../pages/components/ExampleArticleComponent/example-article.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'blognews',
    component: BlogNewsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: 'our-practice', component: AboutPracticeComponent },
      { path: 'our-team', component: OurTeamComponent },
      {
        path: '',
        redirectTo: '/about/our-practice',
        pathMatch: 'full'
      },
    ]
  },
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
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    ArticleEditorComponent,
    ExampleArticleComponent,
    AboutComponent,
    HomeComponent,
    AboutPracticeComponent,
    OurTeamComponent,
    BlogComponent,
    BlogNewsComponent
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
