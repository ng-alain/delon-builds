import * as _angular_core from '@angular/core';
import { TemplateRef } from '@angular/core';
import { Event } from '@antv/g2';
import { G2BaseComponent, G2InteractionType } from '@delon/chart/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/divider';
import * as i3 from 'ng-zorro-antd/core/outlet';
import * as i4 from 'ng-zorro-antd/skeleton';

interface G2PieData {
    x: NzSafeAny;
    y: number;
    [key: string]: NzSafeAny;
}
interface G2PieClickItem {
    item: G2PieData;
    ev: Event;
}
interface G2PieRatio {
    /** 占比文本，默认：`占比` */
    text: string;
    /** 反比文本，默认：`反比` */
    inverse: string;
    /** 正比颜色，默认使用 `color` 值 */
    color: string;
    /** 反比颜色，默认：`#F0F2F5` */
    inverseColor: string;
}
declare class G2PieComponent extends G2BaseComponent {
    readonly legendData: _angular_core.WritableSignal<any[]>;
    readonly block: _angular_core.WritableSignal<boolean>;
    /** percent 模式下为迷你图（旧 fixData() 的副作用改为派生量） */
    readonly isPercent: _angular_core.Signal<boolean>;
    private readonly runTooltip;
    private readonly percentColor;
    /** percent 模式下 data 由 percent / ratio 派生 */
    private readonly runData;
    readonly animate: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly color: _angular_core.InputSignal<string>;
    readonly subTitle: _angular_core.InputSignal<string | TemplateRef<void> | null | undefined>;
    readonly total: _angular_core.InputSignal<string | number | TemplateRef<void> | null | undefined>;
    readonly height: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly hasLegend: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly inner: _angular_core.InputSignal<number>;
    readonly padding: _angular_core.InputSignal<number | number[] | "auto">;
    readonly percent: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    readonly tooltip: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly lineWidth: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly blockMaxWidth: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly select: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly valueFormat: _angular_core.InputSignal<((y: number) => string) | undefined>;
    readonly data: _angular_core.InputSignal<G2PieData[]>;
    readonly colors: _angular_core.InputSignal<string[] | undefined>;
    readonly interaction: _angular_core.InputSignal<G2InteractionType>;
    readonly ratio: _angular_core.InputSignal<G2PieRatio>;
    readonly clickItem: _angular_core.OutputEmitterRef<G2PieClickItem>;
    private updateBlock;
    install(): void;
    changeData(): void;
    private genLegend;
    _click(i: number): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2PieComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<G2PieComponent, "g2-pie", ["g2Pie"], { "animate": { "alias": "animate"; "required": false; "isSignal": true; }; "color": { "alias": "color"; "required": false; "isSignal": true; }; "subTitle": { "alias": "subTitle"; "required": false; "isSignal": true; }; "total": { "alias": "total"; "required": false; "isSignal": true; }; "height": { "alias": "height"; "required": false; "isSignal": true; }; "hasLegend": { "alias": "hasLegend"; "required": false; "isSignal": true; }; "inner": { "alias": "inner"; "required": false; "isSignal": true; }; "padding": { "alias": "padding"; "required": false; "isSignal": true; }; "percent": { "alias": "percent"; "required": false; "isSignal": true; }; "tooltip": { "alias": "tooltip"; "required": false; "isSignal": true; }; "lineWidth": { "alias": "lineWidth"; "required": false; "isSignal": true; }; "blockMaxWidth": { "alias": "blockMaxWidth"; "required": false; "isSignal": true; }; "select": { "alias": "select"; "required": false; "isSignal": true; }; "valueFormat": { "alias": "valueFormat"; "required": false; "isSignal": true; }; "data": { "alias": "data"; "required": false; "isSignal": true; }; "colors": { "alias": "colors"; "required": false; "isSignal": true; }; "interaction": { "alias": "interaction"; "required": false; "isSignal": true; }; "ratio": { "alias": "ratio"; "required": false; "isSignal": true; }; }, { "clickItem": "clickItem"; }, never, never, true, never>;
}

declare class G2PieModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2PieModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<G2PieModule, never, [typeof i1.CommonModule, typeof i2.NzDividerModule, typeof i3.NzOutletModule, typeof i4.NzSkeletonModule, typeof G2PieComponent], [typeof G2PieComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<G2PieModule>;
}

export { G2PieComponent, G2PieModule };
export type { G2PieClickItem, G2PieData, G2PieRatio };
