import { Component, OnInit } from '@angular/core';
import { ITemplate } from '../../../../../models/models';
import { TemplateService } from '../../../../../services/base.service';
import { DomSanitizer } from '@angular/platform-browser';
import { starterTemplates } from '../../../../../constants/templates';

export interface ITemplatePanel {
    isDefaultPanelOpen: boolean; // for collapsing panel
    isCustomPanelOpen: boolean; // // for collapsing panel
    isFormPanelOpen: boolean; // for collapsing panel
}

@Component({
    moduleId: module.id,
    selector: 'app-template-editor',
    templateUrl: './templateEditor.component.html',
    providers: [TemplateService],
})

export class TemplateEditorComponent implements OnInit {
    private _templates: ITemplate[];
    private _defaultTemplates: ITemplate[];
    private _currentTemplate: ITemplate;
    private _templatePanel: ITemplatePanel;
    private _showForm: boolean;
    private _previewHtml: string;
    _showPreview: boolean;

    constructor(public sanitizer: DomSanitizer, public templateService: TemplateService) {
        this._currentTemplate = <ITemplate>{};
        this._templates = [];
        this._showForm = false;
        this._templatePanel = {
            isFormPanelOpen: true,
            isCustomPanelOpen: true,
            isDefaultPanelOpen: true,
        };
        this._previewHtml = '';
        this._showForm = false;
    }
    ngOnInit() {
        this._defaultTemplates = starterTemplates;
        this.getAllTemplates();
    }

    public getAllTemplates() {
        this.templateService.getAll().subscribe((data: ITemplate[]) => {
            this._templates = data;
        }, (err) => {
        });
    }

    private _toggleForm(): void {
        if (this._showForm) {
            this._templatePanel.isFormPanelOpen = true;
            this._currentTemplate = <ITemplate>{};
        }
        this._showForm = !this._showForm;
    }

    private _togglePanel(panel: string): void {
        switch (panel) {
            case 'default': this._templatePanel.isDefaultPanelOpen = !this._templatePanel.isDefaultPanelOpen;
                break;
            case 'custom': this._templatePanel.isCustomPanelOpen = !this._templatePanel.isCustomPanelOpen;
                break;
            default:
                this._templatePanel.isFormPanelOpen = !this._templatePanel.isFormPanelOpen;
                break;
        }
    }

    _editTemplate(template) {
        this._toggleForm();
        this._currentTemplate = template;
    }

    _deleteTemplate(template) {
        this.templateService.delete(template.Id).subscribe(() => {
            window.location.reload();
        });
    }

    public save() {
        this._currentTemplate.IsBlog = false;
        this.templateService.post(this._currentTemplate).subscribe((data) => {
            this.getAllTemplates();
            this._toggleForm();
        });
    }

    htmlChanged(html: string) {
        this._currentTemplate.InnerHtml = html;
    }

    _selectTemplate(template: ITemplate) {
        this._currentTemplate.InnerHtml = template.InnerHtml;
    }

    _preview(template: ITemplate) {
        if (template) {
            this._previewHtml = template.InnerHtml;
            this._showPreview = true;
        } else {
            this._showPreview = false;
            this._previewHtml = '';
        }
    }
}
