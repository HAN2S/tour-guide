import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TourComponent } from './tour/tour.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'tour', component: TourComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
