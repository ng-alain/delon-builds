import { TemplateRef, ViewContainerRef } from '@angular/core';
export declare class StringTemplateOutletDirective {
    private viewContainer;
    private defaultTemplate;
    private isTemplate;
    private inputTemplate;
    private inputViewRef;
    private defaultViewRef;
    constructor(viewContainer: ViewContainerRef, defaultTemplate: TemplateRef<void>);
    set stringTemplateOutlet(value: string | TemplateRef<void>);
    updateView(): void;
}
