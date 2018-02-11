import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: './about.component.html',
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
