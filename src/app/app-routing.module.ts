import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './components/chart/chart.component';
import { StatisticsComponent } from './components/statistics/statistics.component';


const routes: Routes = [
  {path:'',redirectTo:'/statistics',pathMatch:'full'},
  {path:'statistics',component: StatisticsComponent},
  {path:'chart',component:ChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
