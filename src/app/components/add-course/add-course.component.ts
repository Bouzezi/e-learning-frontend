import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  addCourseForm!: FormGroup;
  isHidden=true;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.addCourseForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      image: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.addCourseForm.valid) {
      const formData = new FormData();
      
      const title = this.addCourseForm.get('title')?.value;
      const description = this.addCourseForm.get('description')?.value;
      const price = this.addCourseForm.get('price')?.value;
      const image = this.addCourseForm.get('image')?.value;
  
      // Add null checks
      if (title !== null) formData.append('title', title);
      if (description !== null) formData.append('description', description);
      if (price !== null) formData.append('price', price);
      if (image !== null) formData.append('image', image);
  
      // Call your course service method to add the course
      this.dataService.addCourse(formData).subscribe(
        (response) => {
          console.log('Course added successfully:', response);
          this.isHidden=false;
          this.addCourseForm.reset();
          //this.router.navigate(['/courses']);
        },
        (error) => {
          console.error('Error adding course:', error);

        }
      );
    }

  }
  reset(){
    this.addCourseForm.reset();
    const fileInput = document.getElementById('yourFileInputId') as HTMLInputElement;
    fileInput.value = '';
  } 
  dismiss(){
    this.isHidden=true;
  }
  

  onFileChange(event: any): void {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.addCourseForm.get('image')?.setValue(file);
      console.log('Selected file:', file.name);
    }
  }

}
