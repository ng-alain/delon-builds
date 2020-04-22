import { NgZone, OnChanges, OnDestroy, OnInit, TemplateRef } from '@angular/core';
export declare class G2TimelineData {
    /**
     * 时间值
     * @deprecated Use `time` instead
     */
    x?: Date | string | number;
    /**
     * 时间值
     */
    time?: Date | string | number;
    /** 指标1数据 */
    y1: number;
    /** 指标2数据 */
    y2: number;
    [key: string]: any;
}
export declare class G2TimelineComponent implements OnInit, OnDestroy, OnChanges {
    private ngZone;
    private node;
    private chart;
    delay: number;
    title: string | TemplateRef<void>;
    data: G2TimelineData[];
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
    slider: boolean;
    initialRange: {
        start: Date;
        end: Date;
    } | null;
    constructor(ngZone: NgZone);
    ngOnInit(): void;
    private install;
    private attachChart;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
