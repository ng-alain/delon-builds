import { EventEmitter } from '@angular/core';
import { Event } from '@antv/g2';
import { G2BaseComponent } from '@delon/chart/core';
import { BooleanInput, NumberInput } from '@delon/util/decorator';
export interface G2MiniAreaData {
    x: any;
    y: any;
    [key: string]: any;
}
export interface G2MiniAreaClickItem {
    item: G2MiniAreaData;
    ev: Event;
}
export declare class G2MiniAreaComponent extends G2BaseComponent {
    static ngAcceptInputType_borderWidth: NumberInput;
    static ngAcceptInputType_height: NumberInput;
    static ngAcceptInputType_fit: BooleanInput;
    static ngAcceptInputType_line: BooleanInput;
    static ngAcceptInputType_animate: BooleanInput;
    color: string;
    borderColor: string;
    borderWidth: number;
    height: number;
    fit: boolean;
    line: boolean;
    animate: boolean;
    xAxis: any;
    yAxis: any;
    padding: number | number[] | 'auto';
    data: G2MiniAreaData[];
    yTooltipSuffix: string;
    tooltipType: 'mini' | 'default';
    clickItem: EventEmitter<G2MiniAreaClickItem>;
    install(): void;
    changeData(): void;
}
