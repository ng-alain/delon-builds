import { OnDestroy, OnChanges, NgZone, TemplateRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';
export declare class G2TimelineComponent implements OnDestroy, OnChanges, AfterViewInit {
    private cd;
    private zone;
    _title: string;
    _titleTpl: TemplateRef<any>;
    title: string | TemplateRef<any>;
    data: Array<{
        x: Date;
        y1: number;
        y2: number;
        [key: string]: any;
    }>;
    titleMap: {
        y1: string;
        y2: string;
    };
    colorMap: {
        y1: string;
        y2: string;
    };
    mask: string;
    position: 'top' | 'right' | 'bottom' | 'left';
    height: any;
    private _height;
    padding: number[];
    borderWidth: any;
    private _borderWidth;
    private node;
    private sliderNode;
    private chart;
    private initFlag;
    private slider;
    constructor(cd: ChangeDetectorRef, zone: NgZone);
    ngAfterViewInit(): void;
    private runInstall;
    private install;
    private uninstall;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
