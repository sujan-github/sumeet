import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CKEditorModule } from 'ngx-ckeditor';

import { AppComponent } from './app.component';

import { AdminComponent } from '../pages/components/Admin/admin.component';
import { LoginComponent } from '../pages/components/Admin/Login/login.component';

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
import {
  PreImplantationGeneticScreeningComponent
} from '../pages/components/ClinicServices/preImplantationGeneticScreening/pigs.component';

const appRoutes: Routes = [
  {
    path: 'venus',
    component: HomeComponent,
    children: [
      { path: 'our-practice', component: AboutPracticeComponent },
      { path: 'our-team', component: OurTeamComponent },
      { path: 'blog-and-news', component: BlogNewsComponent },
      {
        path: 'services', component: ServicesComponent,
        children: [
          { path: 'initial-diagnosis', component: InitialDiagnosisComponent },
          { path: 'art-procedure', component: ArtProcedureComponent },
          { path: 'ivf-procedure', component: IvfProcedureComponent },
          { path: 'icsi', component: IcsiComponent },
          { path: 'iui-procedure', component: IuiProcedureComponent },
          { path: 'blastocyst-culture', component: BlastocystCultureComponent },
          { path: 'cryopreservation', component: CryoPreservationComponent },
          { path: 'advanced-hysteroscopic-surgery', component: AhtComponent },
          { path: 'operative-video-laparoscopy', component: OvlComponent },
          { path: 'pre-implantation-genetic-screening', component: PreImplantationGeneticScreeningComponent },
          { path: '', redirectTo: '/venus/services/initial-diagnosis', pathMatch: 'full' },
        ]
      },
      { path: '', redirectTo: '/venus/our-practice', pathMatch: 'full' },
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
