import * as i0 from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Event } from '@antv/g2';
import { G2BaseComponent } from '@delon/chart/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i1 from '@angular/common';

interface G2MiniBarData {
    x: NzSafeAny;
    y: NzSafeAny;
    color?: string | null;
    [key: string]: NzSafeAny;
}
interface G2MiniBarClickItem {
    item: G2MiniBarData;
    ev: Event;
}
declare class G2MiniBarComponent extends G2BaseComponent {
    color: string;
    height: number;
    borderWidth: number;
    padding: number | number[] | 'auto';
    data: G2MiniBarData[];
    yTooltipSuffix: string;
    tooltipType: 'mini' | 'default';
    readonly clickItem: EventEmitter<G2MiniBarClickItem>;
    install(): void;
    changeData(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<G2MiniBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<G2MiniBarComponent, "g2-mini-bar", ["g2MiniBar"], { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "borderWidth": { "alias": "borderWidth"; "required": false; }; "padding": { "alias": "padding"; "required": false; }; "data": { "alias": "data"; "required": false; }; "yTooltipSuffix": { "alias": "yTooltipSuffix"; "required": false; }; "tooltipType": { "alias": "tooltipType"; "required": false; }; }, { "clickItem": "clickItem"; }, never, never, true, never>;
    static ngAcceptInputType_height: unknown;
    static ngAcceptInputType_borderWidth: unknown;
}

declare class G2MiniBarModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<G2MiniBarModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<G2MiniBarModule, never, [typeof i1.CommonModule, typeof G2MiniBarComponent], [typeof G2MiniBarComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<G2MiniBarModule>;
}

export { G2MiniBarComponent, G2MiniBarModule };
export type { G2MiniBarClickItem, G2MiniBarData };
