import { Component } from "@angular/core";


@Component({
  selector:'courses',
  template:'<h2>{{getTiile( )}}</h2>'
})
export class CoursesComponent{
  private title:string = "New Title";

  getTiile():string{
    return this.title;
  }


}
