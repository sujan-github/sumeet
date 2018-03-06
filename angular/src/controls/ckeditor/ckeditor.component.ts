import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
    moduleId: module.id,
    selector: 'app-ckeditor',
    templateUrl: './ckeditor.component.html',
})

export class CKEditorComponent implements OnInit {
    @Input() html: string;
    @Output() htmlChanged = new EventEmitter();
    change(newHtml) {
        this.html = newHtml;
        this.htmlChanged.emit(newHtml);
    }

    constructor(public sanitizer: DomSanitizer) { }
    ngOnInit() {
    }
}
