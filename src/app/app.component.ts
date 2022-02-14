import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  title = 'my-angular-app';
  courses: { id: number; name: string }[] = [];
  viewTab = 'somethingelse';

  onLoadComponents() {
    this.courses = [
      {
        id: 1,
        name: 'course1',
      },
      {
        id: 2,
        name: 'course2',
      },
    ];
  }
}
