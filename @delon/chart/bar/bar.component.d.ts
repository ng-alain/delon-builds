import { ElementRef, OnDestroy, OnChanges, NgZone, TemplateRef, ChangeDetectorRef } from '@angular/core';
export declare class G2BarComponent implements OnDestroy, OnChanges {
    private el;
    private cd;
    private zone;
    private autoHideXLabels;
    private resize$;
    private chart;
    _title: string;
    _titleTpl: TemplateRef<any>;
    title: string | TemplateRef<any>;
    color: string;
    height: any;
    private _height;
    padding: number[];
    data: Array<{
        x: any;
        y: any;
        [key: string]: any;
    }>;
    autoLabel: any;
    private _autoLabel;
    private node;
    constructor(el: ElementRef, cd: ChangeDetectorRef, zone: NgZone);
    private runInstall;
    private install;
    private installResizeEvent;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
