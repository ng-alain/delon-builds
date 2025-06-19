import * as i0 from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Event } from '@antv/g2';
import { G2BaseComponent } from '@delon/chart/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i1 from '@angular/common';

interface G2MiniAreaData {
    x: NzSafeAny;
    y: NzSafeAny;
    [key: string]: NzSafeAny;
}
interface G2MiniAreaClickItem {
    item: G2MiniAreaData;
    ev: Event;
}
declare class G2MiniAreaComponent extends G2BaseComponent {
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
    static ngAcceptInputType_borderWidth: unknown;
    static ngAcceptInputType_height: unknown;
    static ngAcceptInputType_fit: unknown;
    static ngAcceptInputType_line: unknown;
    static ngAcceptInputType_animate: unknown;
}

declare class G2MiniAreaModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<G2MiniAreaModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<G2MiniAreaModule, never, [typeof i1.CommonModule, typeof G2MiniAreaComponent], [typeof G2MiniAreaComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<G2MiniAreaModule>;
}

export { G2MiniAreaComponent, G2MiniAreaModule };
export type { G2MiniAreaClickItem, G2MiniAreaData };
