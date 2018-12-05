import { AfterViewInit, ChangeDetectorRef, NgZone, OnChanges, OnDestroy, TemplateRef } from '@angular/core';
export declare class G2TimelineComponent implements OnDestroy, OnChanges, AfterViewInit {
    private cdr;
    private zone;
    _title: string;
    _titleTpl: TemplateRef<void>;
    title: string | TemplateRef<void>;
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
    height: number;
    padding: number[];
    borderWidth: number;
    private node;
    private sliderNode;
    private chart;
    private initFlag;
    private slider;
    constructor(cdr: ChangeDetectorRef, zone: NgZone);
    ngAfterViewInit(): void;
    private runInstall;
    private install;
    private uninstall;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
