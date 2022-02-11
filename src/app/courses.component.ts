import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ getTiile() }}</h2>
    <h2 [textContent]="title"></h2>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <img src="{{ imageUrl }}" />
    <img [src]="imageUrl" />
    <table>
      <td [colSpan]="colSpan"></td>
    </table>
  `,
})
// propertu Binding <img [src]="imageUrl" ONLY FROM COMPONENT->DOM
// String Interpolation img src="{{ imageUrl }}" />
export class CoursesComponent {
  public title: string = 'New Title';
  public courses;
  public imageUrl = 'https://picsum.photos/200/300';
  public colSpan = 2;
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
  getTiile(): string {
    return this.title;
  }
}
