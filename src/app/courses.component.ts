import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ getTiile() }}</h2>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <img src="{{ imageUrl }}" />
    <img [src]="imageUrl" />
  `,
})
// propertu Binding <img [src]="imageUrl" ONLY FROM COMPONENT->DOM
// String Interpolation img src="{{ imageUrl }}" />
export class CoursesComponent {
  private title: string = 'New Title';
  public courses;
  public imageUrl = 'https://picsum.photos/200/300';
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
  getTiile(): string {
    return this.title;
  }
}
