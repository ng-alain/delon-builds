import * as _angular_core from '@angular/core';
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
    readonly color: _angular_core.InputSignal<string>;
    readonly height: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly borderWidth: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly padding: _angular_core.InputSignal<number | number[] | "auto">;
    readonly data: _angular_core.InputSignal<G2MiniBarData[]>;
    readonly yTooltipSuffix: _angular_core.InputSignal<string>;
    readonly tooltipType: _angular_core.InputSignal<"mini" | "default">;
    readonly clickItem: _angular_core.OutputEmitterRef<G2MiniBarClickItem>;
    install(): void;
    changeData(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2MiniBarComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<G2MiniBarComponent, "g2-mini-bar", ["g2MiniBar"], { "color": { "alias": "color"; "required": false; "isSignal": true; }; "height": { "alias": "height"; "required": false; "isSignal": true; }; "borderWidth": { "alias": "borderWidth"; "required": false; "isSignal": true; }; "padding": { "alias": "padding"; "required": false; "isSignal": true; }; "data": { "alias": "data"; "required": false; "isSignal": true; }; "yTooltipSuffix": { "alias": "yTooltipSuffix"; "required": false; "isSignal": true; }; "tooltipType": { "alias": "tooltipType"; "required": false; "isSignal": true; }; }, { "clickItem": "clickItem"; }, never, never, true, never>;
}

declare class G2MiniBarModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2MiniBarModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<G2MiniBarModule, never, [typeof i1.CommonModule, typeof G2MiniBarComponent], [typeof G2MiniBarComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<G2MiniBarModule>;
}

export { G2MiniBarComponent, G2MiniBarModule };
export type { G2MiniBarClickItem, G2MiniBarData };
