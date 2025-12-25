import * as i0 from '@angular/core';
import { TemplateRef, EventEmitter } from '@angular/core';
import { Event } from '@antv/g2';
import { G2BaseComponent } from '@delon/chart/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/grid';
import * as i3 from 'ng-zorro-antd/core/outlet';
import * as i4 from 'ng-zorro-antd/skeleton';

interface G2RadarData {
    name: string;
    label: string;
    value: number;
    [key: string]: NzSafeAny;
}
interface G2RadarClickItem {
    item: G2RadarData;
    ev: Event;
}
declare class G2RadarComponent extends G2BaseComponent {
    legendData: NzSafeAny[];
    title?: string | TemplateRef<void> | null;
    height: number;
    padding: number | number[] | 'auto';
    hasLegend: boolean;
    tickCount: number;
    data: G2RadarData[];
    colors: string[];
    readonly clickItem: EventEmitter<G2RadarClickItem>;
    private getHeight;
    install(): void;
    changeData(): void;
    private genLegend;
    _click(i: number): void;
    onChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<G2RadarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<G2RadarComponent, "g2-radar", ["g2Radar"], { "title": { "alias": "title"; "required": false; }; "height": { "alias": "height"; "required": false; }; "padding": { "alias": "padding"; "required": false; }; "hasLegend": { "alias": "hasLegend"; "required": false; }; "tickCount": { "alias": "tickCount"; "required": false; }; "data": { "alias": "data"; "required": false; }; "colors": { "alias": "colors"; "required": false; }; }, { "clickItem": "clickItem"; }, never, never, true, never>;
    static ngAcceptInputType_height: unknown;
    static ngAcceptInputType_hasLegend: unknown;
    static ngAcceptInputType_tickCount: unknown;
}

declare class G2RadarModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<G2RadarModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<G2RadarModule, never, [typeof i1.CommonModule, typeof i2.NzGridModule, typeof i3.NzOutletModule, typeof i4.NzSkeletonModule, typeof G2RadarComponent], [typeof G2RadarComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<G2RadarModule>;
}

export { G2RadarComponent, G2RadarModule };
export type { G2RadarClickItem, G2RadarData };
