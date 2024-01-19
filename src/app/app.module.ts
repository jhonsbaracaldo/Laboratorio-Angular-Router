import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { DynamicViewComponent } from './dynamic-view/dynamic-view.component';

const routes: Routes = [
  {path:'home',component :HomeComponent},
  { path:'contact',component :ContactComponent},
  {path:'about-us',component :AboutUsComponent},
  { path: 'not-found', component: NotFoundComponent },
  { path:'**',component:NotFoundComponent },
  {path:'view/:id',component: DynamicViewComponent}
  ];

  
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    NotFoundComponent,
    DynamicViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
