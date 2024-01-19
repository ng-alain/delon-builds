import { EventEmitter, TemplateRef } from '@angular/core';
import type { Event } from '@antv/g2';
import { G2BaseComponent, G2InteractionType } from '@delon/chart/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export interface G2BarData {
    x: NzSafeAny;
    y: NzSafeAny;
    color?: string | null;
    [key: string]: NzSafeAny;
}
export interface G2BarClickItem {
    item: G2BarData;
    ev: Event;
}
export declare class G2BarComponent extends G2BaseComponent {
    title?: string | TemplateRef<void>;
    color: string;
    height: number;
    padding: number | number[] | 'auto';
    data: G2BarData[];
    autoLabel: boolean;
    interaction: G2InteractionType;
    readonly clickItem: EventEmitter<G2BarClickItem>;
    private getHeight;
    install(): void;
    changeData(): void;
    private updatelabel;
    private installResizeEvent;
    static ɵfac: i0.ɵɵFactoryDeclaration<G2BarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<G2BarComponent, "g2-bar", ["g2Bar"], { "title": { "alias": "title"; "required": false; }; "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "padding": { "alias": "padding"; "required": false; }; "data": { "alias": "data"; "required": false; }; "autoLabel": { "alias": "autoLabel"; "required": false; }; "interaction": { "alias": "interaction"; "required": false; }; }, { "clickItem": "clickItem"; }, never, never, true, never>;
    static ngAcceptInputType_height: unknown;
    static ngAcceptInputType_autoLabel: unknown;
}
