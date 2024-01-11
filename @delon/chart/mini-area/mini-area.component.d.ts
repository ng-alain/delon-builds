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
    static ɵcmp: i0.ɵɵComponentDeclaration<G2MiniAreaComponent, "g2-mini-area", ["g2MiniArea"], { "color": { "alias": "color"; "required": false; }; "borderColor": { "alias": "borderColor"; "required": false; }; "borderWidth": { "alias": "borderWidth"; "required": false; }; "height": { "alias": "height"; "required": false; }; "fit": { "alias": "fit"; "required": false; }; "line": { "alias": "line"; "required": false; }; "animate": { "alias": "animate"; "required": false; }; "xAxis": { "alias": "xAxis"; "required": false; }; "yAxis": { "alias": "yAxis"; "required": false; }; "padding": { "alias": "padding"; "required": false; }; "data": { "alias": "data"; "required": false; }; "yTooltipSuffix": { "alias": "yTooltipSuffix"; "required": false; }; "tooltipType": { "alias": "tooltipType"; "required": false; }; }, { "clickItem": "clickItem"; }, never, never, true, never>;
}
