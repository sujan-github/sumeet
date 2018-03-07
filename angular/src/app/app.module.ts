import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CKEditorModule } from 'ngx-ckeditor';
import { AppComponent } from './app.component';
import { OvlComponent } from '../pages/components/ClinicServices/operativeVideoLaparoscopy/ovl.component';

import { CKEditorComponent } from '../controls/controls';
import {
  MenuComponent,
  AdminComponent,
  LoginComponent,
  SetupComponent,
  PageEditorComponent,
  TemplateEditorComponent,
  BlogEditorComponent,
  PageComponent,
  NestedPageComponent,
  BlogNewsComponent,
} from '../pages/pages';
import { Constants } from '../constants/constants';

const appRoutes: Routes = [
  {
    path: `${Constants.linkPrefix}/:page`,
    component: PageComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'page', component: PageEditorComponent },
      { path: 'blog', component: BlogEditorComponent },
      { path: 'setup', component: SetupComponent },
      { path: 'template', component: TemplateEditorComponent },
      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
    ]
  },
  {
    path: '',
    redirectTo: `${Constants.linkPrefix}/home`,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CKEditorComponent,
    AdminComponent,
    LoginComponent,
    SetupComponent,
    PageEditorComponent,
    NestedPageComponent,
    BlogEditorComponent,
    TemplateEditorComponent,
    MenuComponent,
    PageComponent,
    BlogNewsComponent,
    OvlComponent,
  ],
  imports: [
    BrowserModule,
    CKEditorModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
