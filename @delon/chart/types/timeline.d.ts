import * as _angular_core from '@angular/core';
import { TemplateRef, Signal } from '@angular/core';
import { Event } from '@antv/g2';
import { G2Time, G2BaseComponent } from '@delon/chart/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/core/outlet';
import * as i3 from 'ng-zorro-antd/skeleton';

/**
 * 数据
 *
 * 注：根据 `maxAxis` 值传递指标数据
 */
interface G2TimelineData {
    /**
     * 时间值
     */
    time?: G2Time;
    /** 指标1数据 */
    y1: number;
    /** 指标2数据 */
    y2?: number;
    /** 指标3数据 */
    y3?: number;
    /** 指标4数据 */
    y4?: number;
    /** 指标5数据 */
    y5?: number;
    [key: string]: NzSafeAny;
}
interface G2TimelineMap {
    /** 指标1 */
    y1: string;
    /** 指标 */
    y2?: string;
    /** 指标3 */
    y3?: string;
    /** 指标4 */
    y4?: string;
    /** 指标5 */
    y5?: string;
    [key: string]: string | undefined;
}
interface G2TimelineClickItem {
    item: G2TimelineData;
    ev: Event;
}
declare class G2TimelineComponent extends G2BaseComponent {
    readonly title: _angular_core.InputSignal<string | TemplateRef<void> | null | undefined>;
    readonly maxAxis: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly data: _angular_core.InputSignal<G2TimelineData[]>;
    readonly titleMap: _angular_core.InputSignal<G2TimelineMap | null | undefined>;
    readonly colorMap: _angular_core.InputSignal<G2TimelineMap>;
    readonly mask: _angular_core.InputSignal<string>;
    readonly maskSlider: _angular_core.InputSignal<string>;
    readonly position: _angular_core.InputSignal<"top" | "right" | "bottom" | "left">;
    readonly height: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly padding: _angular_core.InputSignal<number[]>;
    readonly borderWidth: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly slider: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly clickItem: _angular_core.OutputEmitterRef<G2TimelineClickItem>;
    /** 等价旧 onlyChangeData：除 titleMap 外，其余输入变更都只需更新数据 */
    protected isDataOnly(changed: ReadonlyArray<Signal<unknown>>): boolean;
    install(): void;
    changeData(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2TimelineComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<G2TimelineComponent, "g2-timeline", ["g2Timeline"], { "title": { "alias": "title"; "required": false; "isSignal": true; }; "maxAxis": { "alias": "maxAxis"; "required": false; "isSignal": true; }; "data": { "alias": "data"; "required": false; "isSignal": true; }; "titleMap": { "alias": "titleMap"; "required": false; "isSignal": true; }; "colorMap": { "alias": "colorMap"; "required": false; "isSignal": true; }; "mask": { "alias": "mask"; "required": false; "isSignal": true; }; "maskSlider": { "alias": "maskSlider"; "required": false; "isSignal": true; }; "position": { "alias": "position"; "required": false; "isSignal": true; }; "height": { "alias": "height"; "required": false; "isSignal": true; }; "padding": { "alias": "padding"; "required": false; "isSignal": true; }; "borderWidth": { "alias": "borderWidth"; "required": false; "isSignal": true; }; "slider": { "alias": "slider"; "required": false; "isSignal": true; }; }, { "clickItem": "clickItem"; }, never, never, true, never>;
}

declare class G2TimelineModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2TimelineModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<G2TimelineModule, never, [typeof i1.CommonModule, typeof i2.NzOutletModule, typeof i3.NzSkeletonModule, typeof G2TimelineComponent], [typeof G2TimelineComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<G2TimelineModule>;
}

export { G2TimelineComponent, G2TimelineModule };
export type { G2TimelineClickItem, G2TimelineData, G2TimelineMap };
