import { EventEmitter } from '@angular/core';
import type { Event } from '@antv/g2';
import { G2BaseComponent } from '@delon/chart/core';
import { BooleanInput, NumberInput } from '@delon/util/decorator';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export interface G2MiniAreaData {
    x: NzSafeAny;
    y: NzSafeAny;
    [key: string]: NzSafeAny;
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
    xAxis: NzSafeAny;
    yAxis: NzSafeAny;
    padding: number | number[] | 'auto';
    data: G2MiniAreaData[];
    yTooltipSuffix: string;
    tooltipType: 'mini' | 'default';
    readonly clickItem: EventEmitter<G2MiniAreaClickItem>;
    install(): void;
    changeData(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<G2MiniAreaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<G2MiniAreaComponent, "g2-mini-area", ["g2MiniArea"], { "color": "color"; "borderColor": "borderColor"; "borderWidth": "borderWidth"; "height": "height"; "fit": "fit"; "line": "line"; "animate": "animate"; "xAxis": "xAxis"; "yAxis": "yAxis"; "padding": "padding"; "data": "data"; "yTooltipSuffix": "yTooltipSuffix"; "tooltipType": "tooltipType"; }, { "clickItem": "clickItem"; }, never, never, false>;
}
