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
    label: string | TemplateRef<void>;
    col: number;
    default: boolean;
    type: 'primary' | 'success' | 'danger' | 'warning';
    readonly paddingLeft: number;
    readonly paddingRight: number;
    constructor(parent: SVContainerComponent, rep: ResponsiveService, el: ElementRef, ren: Renderer2);
    private setClass;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    checkContent(): void;
}
