import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // Default route
  { path: 'home', component: DashboardComponent},           // Route for Home
  { path: 'reports', component: ReportComponent }       // Route for Reports
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
