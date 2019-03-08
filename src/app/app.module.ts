import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiceComponent } from './service/service.component';
import { WebdevComponent } from './webdev/webdev.component';
import { SoftdevComponent } from './softdev/softdev.component';
import { ItsolutionComponent } from './itsolution/itsolution.component';
import { AlarmComponent } from './alarm/alarm.component';
import { AutomationComponent } from './automation/automation.component';
import { SecurityComponent } from './security/security.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    TeamComponent,
    PortfolioComponent,
    ServiceComponent,
    WebdevComponent,
    SoftdevComponent,
    ItsolutionComponent,
    AlarmComponent,
    AutomationComponent,
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
