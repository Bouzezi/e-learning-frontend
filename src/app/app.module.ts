import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { LandingComponent } from './components/landing/landing.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListCourseComponent,
    AddCourseComponent,
    EditCourseComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
