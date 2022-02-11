import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ getTiile() }}</h2>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
  `,
})
export class CoursesComponent {
  private title: string = 'New Title';
  public courses;
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
  getTiile(): string {
    return this.title;
  }
}
