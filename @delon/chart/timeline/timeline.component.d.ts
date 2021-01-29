import { EventEmitter, TemplateRef } from '@angular/core';
import { Event } from '@antv/g2';
import { G2BaseComponent, G2Time } from '@delon/chart/core';
import { BooleanInput, NumberInput } from '@delon/util/decorator';
export interface G2TimelineData {
    /**
     * 时间值
     */
    time?: G2Time;
    /** 指标1数据 */
    y1: number;
    /** 指标2数据 */
    y2: number;
    /** 指标3数据 */
    y3?: number;
    /** 指标4数据 */
    y4?: number;
    /** 指标5数据 */
    y5?: number;
    [key: string]: any;
}
export interface G2TimelineMap {
    /** 指标1 */
    y1: string;
    /** 指标 */
    y2: string;
    /** 指标3 */
    y3?: string;
    /** 指标4 */
    y4?: string;
    /** 指标5 */
    y5?: string;
    [key: string]: string | undefined;
}
export interface G2TimelineClickItem {
    item: G2TimelineData;
    ev: Event;
}
export declare class G2TimelineComponent extends G2BaseComponent {
    static ngAcceptInputType_height: NumberInput;
    static ngAcceptInputType_maxAxis: NumberInput;
    static ngAcceptInputType_borderWidth: NumberInput;
    static ngAcceptInputType_slider: BooleanInput;
    title: string | TemplateRef<void>;
    maxAxis: number;
    data: G2TimelineData[];
    titleMap: G2TimelineMap;
    colorMap: G2TimelineMap;
    mask: string;
    maskSlider: string;
    position: 'top' | 'right' | 'bottom' | 'left';
    height: number;
    padding: number[];
    borderWidth: number;
    slider: boolean;
    clickItem: EventEmitter<G2TimelineClickItem>;
    install(): void;
    attachChart(): void;
}
