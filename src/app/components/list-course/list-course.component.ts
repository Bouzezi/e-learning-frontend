import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  courses:any;
  isHidden=true;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getCourses();
  }
  dismiss(){
    this.isHidden=true;
  }
  getCourses(){
      this.dataService.getAllCourses().subscribe(res => {
      this.courses =res; 
      });
    }
    
    deletecourse(id:any){
      this.dataService.deleteCourse(id).subscribe(res => {
        this.getCourses();
        this.isHidden=false;
      })
    }

}
