import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  courses$!: Observable<Course[]>;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.courses$ = this.dataService.getAllCourses();
    console.log(this.courses$);
    
  }

}
