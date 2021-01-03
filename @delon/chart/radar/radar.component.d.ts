import { EventEmitter, TemplateRef } from '@angular/core';
import { Event } from '@antv/g2';
import { G2BaseComponent } from '@delon/chart/core';
import { BooleanInput, NumberInput } from '@delon/util';
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
}
