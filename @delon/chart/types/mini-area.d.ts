import * as _angular_core from '@angular/core';
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
    readonly color: _angular_core.InputSignal<string>;
    readonly borderColor: _angular_core.InputSignal<string>;
    readonly borderWidth: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly height: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly fit: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly line: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly animate: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly xAxis: _angular_core.InputSignal<any>;
    readonly yAxis: _angular_core.InputSignal<any>;
    readonly padding: _angular_core.InputSignal<number | number[] | "auto">;
    readonly data: _angular_core.InputSignal<G2MiniAreaData[]>;
    readonly yTooltipSuffix: _angular_core.InputSignal<string>;
    readonly tooltipType: _angular_core.InputSignal<"mini" | "default">;
    readonly clickItem: _angular_core.OutputEmitterRef<G2MiniAreaClickItem>;
    install(): void;
    changeData(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2MiniAreaComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<G2MiniAreaComponent, "g2-mini-area", ["g2MiniArea"], { "color": { "alias": "color"; "required": false; "isSignal": true; }; "borderColor": { "alias": "borderColor"; "required": false; "isSignal": true; }; "borderWidth": { "alias": "borderWidth"; "required": false; "isSignal": true; }; "height": { "alias": "height"; "required": false; "isSignal": true; }; "fit": { "alias": "fit"; "required": false; "isSignal": true; }; "line": { "alias": "line"; "required": false; "isSignal": true; }; "animate": { "alias": "animate"; "required": false; "isSignal": true; }; "xAxis": { "alias": "xAxis"; "required": false; "isSignal": true; }; "yAxis": { "alias": "yAxis"; "required": false; "isSignal": true; }; "padding": { "alias": "padding"; "required": false; "isSignal": true; }; "data": { "alias": "data"; "required": false; "isSignal": true; }; "yTooltipSuffix": { "alias": "yTooltipSuffix"; "required": false; "isSignal": true; }; "tooltipType": { "alias": "tooltipType"; "required": false; "isSignal": true; }; }, { "clickItem": "clickItem"; }, never, never, true, never>;
}

declare class G2MiniAreaModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2MiniAreaModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<G2MiniAreaModule, never, [typeof i1.CommonModule, typeof G2MiniAreaComponent], [typeof G2MiniAreaComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<G2MiniAreaModule>;
}

export { G2MiniAreaComponent, G2MiniAreaModule };
export type { G2MiniAreaClickItem, G2MiniAreaData };
