import { EventEmitter, TemplateRef } from '@angular/core';
import { Event } from '@antv/g2';
import { G2BaseComponent } from '@delon/chart/core';
import { BooleanInput, NumberInput } from '@delon/util';
import * as i0 from "@angular/core";
export interface G2RadarData {
    name: string;
    label: string;
    value: number;
    [key: string]: any;
}
export interface G2RadarClickItem {
    item: G2RadarData;
    ev: Event;
}
export declare class G2RadarComponent extends G2BaseComponent {
    static ngAcceptInputType_height: NumberInput;
    static ngAcceptInputType_hasLegend: BooleanInput;
    static ngAcceptInputType_tickCount: NumberInput;
    legendData: any[];
    title: string | TemplateRef<void>;
    height: number;
    padding: number | number[] | 'auto';
    hasLegend: boolean;
    tickCount: number;
    data: G2RadarData[];
    colors: string[];
    clickItem: EventEmitter<G2RadarClickItem>;
    private getHeight;
    install(): void;
    attachChart(): void;
    private genLegend;
    _click(i: number): void;
    onChanges(): void;
    static ɵfac: i0.ɵɵFactoryDef<G2RadarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<G2RadarComponent, "g2-radar", ["g2Radar"], { "title": "title"; "height": "height"; "padding": "padding"; "hasLegend": "hasLegend"; "tickCount": "tickCount"; "data": "data"; "colors": "colors"; }, { "clickItem": "clickItem"; }, never, never>;
}
