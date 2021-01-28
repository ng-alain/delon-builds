import { EventEmitter } from '@angular/core';
import { Event } from '@antv/g2';
import { G2BaseComponent } from '@delon/chart/core';
import { NumberInput } from '@delon/util';
import * as i0 from "@angular/core";
export interface G2TagCloudData {
    value?: number;
    name?: string;
    [key: string]: any;
}
export interface G2TagCloudClickItem {
    item: G2TagCloudData;
    ev: Event;
}
export declare class G2TagCloudComponent extends G2BaseComponent {
    static ngAcceptInputType_height: NumberInput;
    static ngAcceptInputType_width: NumberInput;
    width: number;
    height: number;
    padding: number | number[] | 'auto';
    data: G2TagCloudData[];
    clickItem: EventEmitter<G2TagCloudClickItem>;
    private initTagCloud;
    install(): void;
    attachChart(): void;
    private _attachChart;
    private installResizeEvent;
    onInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<G2TagCloudComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<G2TagCloudComponent, "g2-tag-cloud", ["g2TagCloud"], { "width": "width"; "height": "height"; "padding": "padding"; "data": "data"; }, { "clickItem": "clickItem"; }, never, never>;
}
