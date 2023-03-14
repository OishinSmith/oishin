import { Component } from '@angular/core';
declare var main: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oishinsmith';

  ngAfterViewInit() {
    main();
  }
}
