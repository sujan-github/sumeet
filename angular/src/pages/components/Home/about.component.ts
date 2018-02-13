import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: ['p {color: darkslategray;}'],
})
export class AboutComponent implements OnInit {
  title = 'Article Editor';
  public editorValue = '';

  constructor(
  ) {
  }

  ngOnInit() {
  }
}
