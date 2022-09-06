import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';
import { EditNewsComponent } from './pages/edit-news/edit-news.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterNewsComponent } from './pages/register-news/register-news.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "registernews", component: RegisterNewsComponent, canActivate: [AuthGuard] },
  { path: "editNews/:id", component: EditNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
