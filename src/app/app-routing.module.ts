import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {path: '', component:LandingComponent},
 {path: 'courses', component:ListCourseComponent},
 { path: 'courses/addCourse', component:AddCourseComponent },
 { path: 'courses/edit/:id', component:EditCourseComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
