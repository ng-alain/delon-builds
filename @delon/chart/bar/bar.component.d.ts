import { EventEmitter, TemplateRef } from '@angular/core';
import { Event } from '@antv/g2';
import { G2BaseComponent, G2InteractionType } from '@delon/chart/core';
import { BooleanInput, NumberInput } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export interface G2BarData {
    x: NzSafeAny;
    y: NzSafeAny;
    color?: string;
    [key: string]: NzSafeAny;
}
export interface G2BarClickItem {
    item: G2BarData;
    ev: Event;
}
export declare class G2BarComponent extends G2BaseComponent {
    static ngAcceptInputType_height: NumberInput;
    static ngAcceptInputType_autoLabel: BooleanInput;
    title: string | TemplateRef<void>;
    color: string;
    height: number;
    padding: number | number[] | 'auto';
    data: G2BarData[];
    autoLabel: boolean;
    interaction: G2InteractionType;
    clickItem: EventEmitter<G2BarClickItem>;
    private getHeight;
    install(): void;
    attachChart(): void;
    private updatelabel;
    private installResizeEvent;
    static ɵfac: i0.ɵɵFactoryDef<G2BarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<G2BarComponent, "g2-bar", ["g2Bar"], { "title": "title"; "color": "color"; "height": "height"; "padding": "padding"; "data": "data"; "autoLabel": "autoLabel"; "interaction": "interaction"; }, { "clickItem": "clickItem"; }, never, never>;
}
