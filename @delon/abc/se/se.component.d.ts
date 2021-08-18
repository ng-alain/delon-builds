import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, Renderer2, TemplateRef } from '@angular/core';
import { ResponsiveService } from '@delon/theme';
import { BooleanInput, NumberInput } from '@delon/util/decorator';
import { SEContainerComponent } from './se-container.component';
import { SEErrorType } from './se.types';
export declare class SEComponent implements OnChanges, AfterContentInit, AfterViewInit, OnDestroy {
    private parent;
    private rep;
    private ren;
    private cdr;
    static ngAcceptInputType_col: NumberInput;
    static ngAcceptInputType_required: BooleanInput;
    static ngAcceptInputType_line: BooleanInput;
    static ngAcceptInputType_labelWidth: NumberInput;
    private el;
    private unsubscribe$;
    private readonly ngModel;
    private readonly formControlName;
    private readonly contentElement;
    private clsMap;
    private inited;
    private onceFlag;
    private errorData;
    private isBindModel;
    invalid: boolean;
    _labelWidth: number | null;
    _error: string | TemplateRef<void>;
    optional?: string | TemplateRef<void> | null;
    optionalHelp?: string | TemplateRef<void> | null;
    optionalHelpColor: string;
    set error(val: SEErrorType);
    extra?: string | TemplateRef<void> | null;
    label?: string | TemplateRef<void> | null;
    col: number;
    required: boolean;
    controlClass?: string | null;
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
