import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CKEditorModule } from 'ngx-ckeditor';

import { AppComponent } from './app.component';

import { AdminComponent } from '../pages/components/Admin/admin.component';
import { LoginComponent } from '../pages/components/Admin/Login/login.component';
import { PageComponent } from '../pages/components/Page/page.component';
import { MenuComponent } from '../pages/components/Menu/menu.component';
import { HomeComponent } from '../pages/components/Home/home.component';
import { AboutUsComponent } from '../pages/components/PageComponent/about-us.component';
import { AboutPracticeComponent } from '../pages/components/PageComponent/aboutOurPractice.component';
import { BlogNewsComponent } from '../pages/components/PageComponent/blognews.component';
import { OurTeamComponent } from '../pages/components/PageComponent/ourTeam.component';
import { BlogComponent } from '../pages/components/BlogComponent/blog.component';
import { ArticleEditorComponent } from '../pages/components/ArticleEditor/articleEditor.component';
import { ExampleArticleComponent } from '../pages/components/ExampleArticleComponent/example-article.component';
import { ServicesComponent } from '../pages/components/ClinicServices/services.component';
import { InitialDiagnosisComponent } from '../pages/components/ClinicServices/initialDiagnosis/initialDiagnosis.component';
import { ArtProcedureComponent } from '../pages/components/ClinicServices/artProcedure/artProcedure.component';
import { IvfProcedureComponent } from '../pages/components/ClinicServices/ivfProcedure/ivfProcedure.component';
import { IcsiComponent } from '../pages/components/ClinicServices/ICSI/icsi.component';
import { IuiProcedureComponent } from '../pages/components/ClinicServices/iuiProcedure/iuiProcedure.component';
import { BlastocystCultureComponent } from '../pages/components/ClinicServices/blastocystCulture/blastocystCulture.component';
import { CryoPreservationComponent } from '../pages/components/ClinicServices/cryoPreservation/cryoPreservation.component';
import { AhtComponent } from '../pages/components/ClinicServices/aht/aht.component';
import { OvlComponent } from '../pages/components/ClinicServices/operativeVideoLaparoscopy/ovl.component';
import { SetupComponent } from '../pages/components/Admin/Setup/setup.component';

import {
  PreImplantationGeneticScreeningComponent
} from '../pages/components/ClinicServices/preImplantationGeneticScreening/pigs.component';

const appRoutes: Routes = [
  {
    path: 'venus/:page',
    component: PageComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'page-editor', component: ArticleEditorComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'setup', component: SetupComponent },
      {
        path: '',
        redirectTo: '/admin/login',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/venus',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    SetupComponent,
    MenuComponent,
    PageComponent,
    ArticleEditorComponent,
    ExampleArticleComponent,
    AboutUsComponent,
    HomeComponent,
    AboutPracticeComponent,
    OurTeamComponent,
    BlogComponent,
    BlogNewsComponent,
    ServicesComponent,
    InitialDiagnosisComponent,
    ArtProcedureComponent,
    IvfProcedureComponent,
    IcsiComponent,
    IuiProcedureComponent,
    BlastocystCultureComponent,
    CryoPreservationComponent,
    AhtComponent,
    OvlComponent,
    PreImplantationGeneticScreeningComponent,
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
