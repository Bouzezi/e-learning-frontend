import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  editCourseForm: FormGroup;
  courseId!: string;
  course: any = {};
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editCourseForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      image: [null, Validators.required]
    });
    this.courseId = this.route.snapshot.paramMap.get('id') ?? '';
  }

  ngOnInit(): void {   
      this.loadCourse();
  }

  loadCourse(): void {
    this.dataService.getCourseById(this.courseId).subscribe(
      (response) => {
        console.log(response); 
        this.course = response;

        this.editCourseForm.patchValue({
          title: this.course.title,
          description: this.course.description,
          price: this.course.price,
          image: this.course.image
        });

      },
      (error) => {
        console.error('Error fetching course details:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.editCourseForm.valid) {
      const updatedCourse = {
        id: this.courseId,
        title: this.editCourseForm.get('title')?.value,
        description: this.editCourseForm.get('description')?.value,
        price: this.editCourseForm.get('price')?.value,
        image: this.editCourseForm.get('image')?.value
      };
      console.log(updatedCourse);
      
      const formData = new FormData();
      formData.append('id', updatedCourse.id);
      formData.append('title', updatedCourse.title);
      formData.append('description', updatedCourse.description);
      formData.append('price', updatedCourse.price);
      formData.append('image', updatedCourse.image);

      console.log(formData);

      this.dataService.updateCourse(this.courseId, formData).subscribe(
        (response) => {
          console.log('Course updated successfully:', response);
          this.router.navigate(['/courses']);
        },
        (error) => {
          console.error('Error updating course:', error);
        }
      );
    }
  }

  onFileChange(event: any): void {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.editCourseForm.get('image')?.setValue(file);
      console.log('Selected file:', file.name);
    }
  }

}