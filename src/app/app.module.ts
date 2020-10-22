import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TravelRequestFormComponent } from './travel-request-form/travel-request-form.component';
import { FormsModule } from '@angular/forms';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { AppFooterComponent } from './app-footer/app-footer.component';


const routes = [
  { path: 'About', component: AboutComponent },
  { path: 'TravelRequest', component: TravelRequestFormComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    TravelRequestFormComponent,
    AppNavComponent,
    AboutComponent,
    AppFooterComponent
  ],
imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
