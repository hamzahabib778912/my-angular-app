import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  // propertu Binding <img [src]="imageUrl" ONLY FROM COMPONENT->DOM
  // String Interpolation img src="{{ imageUrl }}" />
  //Class binding css -> class.active (CONDITIONAL CASE)
  // Button has both class binding as well as event binding
  // #email is template variable
  // 2 way binding [(ngModel)] ="email"
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
    <button
      class="btn btn-primary"
      [class.active]="isActive"
      (click)="onSave($event)"
    >
      Save
    </button>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
  `,
})
export class CoursesComponent {
  public email = 'Default@email.com';
  public title: string = 'New Title';
  public isActive = true;
  public courses;
  public imageUrl = 'https://picsum.photos/200/300';
  public colSpan = 2;
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
  getTiile(): string {
    return this.title;
  }
  onSave(event: Event) {
    console.log('Button is clicked', event);
  }
  onKeyUp() {
    console.log('Enter is pressed', this.email);
  }
}
