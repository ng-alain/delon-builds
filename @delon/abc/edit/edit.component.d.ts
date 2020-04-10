import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, Renderer2, TemplateRef } from '@angular/core';
import { ResponsiveService } from '@delon/theme';
import { SEContainerComponent } from './edit-container.component';
export declare class SEComponent implements OnChanges, AfterContentInit, AfterViewInit, OnDestroy {
    private parent;
    private rep;
    private ren;
    private cdr;
    private el;
    private status$;
    private readonly ngModel;
    private readonly formControlName;
    private readonly contentElement;
    private clsMap;
    private inited;
    private onceFlag;
    private errorData;
    invalid: boolean;
    _labelWidth: number | null;
    _error: string;
    optional: string | TemplateRef<void>;
    optionalHelp: string | TemplateRef<void>;
    set error(val: string | {
        [key: string]: string;
    });
    extra: string;
    label: string | TemplateRef<void>;
    col: number;
    required: boolean;
    controlClass: string;
    line: boolean;
    labelWidth: number;
    set id(value: string);
    _id: string;
    _autoId: boolean;
    get paddingValue(): number;
    get showErr(): boolean;
    get compact(): boolean;
    private get ngControl();
    constructor(el: ElementRef, parent: SEContainerComponent, rep: ResponsiveService, ren: Renderer2, cdr: ChangeDetectorRef);
    private setClass;
    private bindModel;
    private updateStatus;
    checkContent(): void;
    ngAfterContentInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
