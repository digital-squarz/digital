import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent} from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { ServiceComponent } from './service/service.component';
import { Routes, RouterModule } from '@angular/router';
import { WebdevComponent } from './webdev/webdev.component';
import { SoftdevComponent } from './softdev/softdev.component';
import { SecurityComponent } from './security/security.component';
import { ItsolutionComponent } from './itsolution/itsolution.component';
import { AutomationComponent } from './automation/automation.component';
import { AlarmComponent } from './alarm/alarm.component';




const routes: Routes = [
{ path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'team', component: TeamComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'webdev' , component: WebdevComponent },
  { path: 'softdev', component: SoftdevComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'itsolution', component: ItsolutionComponent },
  { path: 'alarm', component: AlarmComponent },
  { path: 'automation', component: AutomationComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
