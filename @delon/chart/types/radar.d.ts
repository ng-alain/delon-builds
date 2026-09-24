import * as _angular_core from '@angular/core';
import { TemplateRef } from '@angular/core';
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
    readonly legendData: _angular_core.WritableSignal<any[]>;
    readonly title: _angular_core.InputSignal<string | TemplateRef<void> | null | undefined>;
    readonly height: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly padding: _angular_core.InputSignal<number | number[] | "auto">;
    readonly hasLegend: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly tickCount: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly data: _angular_core.InputSignal<G2RadarData[]>;
    readonly colors: _angular_core.InputSignal<string[]>;
    readonly clickItem: _angular_core.OutputEmitterRef<G2RadarClickItem>;
    private getHeight;
    install(): void;
    changeData(): void;
    private genLegend;
    _click(i: number): void;
    /** 等价旧 onChanges()：任何输入变更都重置图例选中态 */
    protected onInputChanges(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2RadarComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<G2RadarComponent, "g2-radar", ["g2Radar"], { "title": { "alias": "title"; "required": false; "isSignal": true; }; "height": { "alias": "height"; "required": false; "isSignal": true; }; "padding": { "alias": "padding"; "required": false; "isSignal": true; }; "hasLegend": { "alias": "hasLegend"; "required": false; "isSignal": true; }; "tickCount": { "alias": "tickCount"; "required": false; "isSignal": true; }; "data": { "alias": "data"; "required": false; "isSignal": true; }; "colors": { "alias": "colors"; "required": false; "isSignal": true; }; }, { "clickItem": "clickItem"; }, never, never, true, never>;
}

declare class G2RadarModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2RadarModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<G2RadarModule, never, [typeof i1.CommonModule, typeof i2.NzGridModule, typeof i3.NzOutletModule, typeof i4.NzSkeletonModule, typeof G2RadarComponent], [typeof G2RadarComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<G2RadarModule>;
}

export { G2RadarComponent, G2RadarModule };
export type { G2RadarClickItem, G2RadarData };
