import { EventEmitter } from '@angular/core';
import { Event } from '@antv/g2';
import { G2BaseComponent } from '@delon/chart/core';
import { NumberInput } from '@delon/util/decorator';
import * as i0 from "@angular/core";
export interface G2MiniBarData {
    x: any;
    y: any;
    [key: string]: any;
}
export interface G2MiniBarClickItem {
    item: G2MiniBarData;
    ev: Event;
}
export declare class G2MiniBarComponent extends G2BaseComponent {
    static ngAcceptInputType_height: NumberInput;
    static ngAcceptInputType_borderWidth: NumberInput;
    color: string;
    height: number;
    borderWidth: number;
    padding: number | number[] | 'auto';
    data: G2MiniBarData[];
    yTooltipSuffix: string;
    tooltipType: 'mini' | 'default';
    clickItem: EventEmitter<G2MiniBarClickItem>;
    install(): void;
    attachChart(): void;
    static ɵfac: i0.ɵɵFactoryDef<G2MiniBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<G2MiniBarComponent, "g2-mini-bar", ["g2MiniBar"], { "color": "color"; "height": "height"; "borderWidth": "borderWidth"; "padding": "padding"; "data": "data"; "yTooltipSuffix": "yTooltipSuffix"; "tooltipType": "tooltipType"; }, { "clickItem": "clickItem"; }, never, never>;
}
