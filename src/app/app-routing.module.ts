import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterNewsComponent } from './pages/register-news/register-news.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "registernews", component: RegisterNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
