import { AfterViewInit, ElementRef, OnChanges, Renderer2, TemplateRef } from '@angular/core';
import { ResponsiveService } from '@delon/theme';
import { SVContainerComponent } from './view-container.component';
export declare class SVComponent implements AfterViewInit, OnChanges {
    parent: SVContainerComponent;
    private rep;
    private ren;
    private conEl;
    private el;
    private clsMap;
    optional: string | TemplateRef<void>;
    optionalHelp: string | TemplateRef<void>;
    label: string | TemplateRef<void>;
    unit: string | TemplateRef<void>;
    col: number;
    default: boolean;
    type: 'primary' | 'success' | 'danger' | 'warning';
    readonly paddingValue: number;
    readonly labelWidth: number | null;
    constructor(el: ElementRef, parent: SVContainerComponent, rep: ResponsiveService, ren: Renderer2);
    private setClass;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    checkContent(): void;
}
