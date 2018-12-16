import { OnChanges, OnDestroy, OnInit, TemplateRef } from '@angular/core';
export declare class G2TimelineData {
    /** 非 `Date` 格式，自动使用 `new Date` 转换，因此，支持时间格式字符串、数字型时间戳 */
    x: Date | string | number;
    /** 指标1数据 */
    y1: number;
    /** 指标2数据 */
    y2: number;
    [key: string]: any;
}
export declare class G2TimelineComponent implements OnInit, OnDestroy, OnChanges {
    private node;
    private sliderNode;
    private chart;
    private _slider;
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
    ngOnInit(): void;
    private install;
    private attachChart;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
