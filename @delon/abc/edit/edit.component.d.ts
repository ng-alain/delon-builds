import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, Renderer2, TemplateRef } from '@angular/core';
import { ResponsiveService } from '@delon/theme';
import { SEContainerComponent } from './edit-container.component';
export declare class SEComponent implements OnChanges, AfterViewInit, OnDestroy {
    private parent;
    private rep;
    private ren;
    private cd;
    private el;
    private status$;
    private readonly ngModel;
    private readonly formControlName;
    private clsMap;
    private inited;
    private onceFlag;
    invalid: boolean;
    labelWidth: any;
    optional: string;
    optionalHelp: string;
    error: string;
    extra: string;
    label: string | TemplateRef<void>;
    col: number;
    required: boolean;
    controlClass: string;
    line: boolean;
    id: string;
    _id: string;
    _autoId: boolean;
    readonly paddingLeft: number;
    readonly paddingRight: number;
    readonly showErr: boolean;
    private readonly ngControl;
    constructor(parent: SEContainerComponent, rep: ResponsiveService, el: ElementRef, ren: Renderer2, cd: ChangeDetectorRef);
    private setClass;
    private bindModel;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
