import * as _angular_core from '@angular/core';
import { TemplateRef } from '@angular/core';
import { Event } from '@antv/g2';
import { G2BaseComponent, G2InteractionType } from '@delon/chart/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/core/outlet';
import * as i3 from 'ng-zorro-antd/skeleton';

interface G2BarData {
    x: NzSafeAny;
    y: NzSafeAny;
    color?: string | null;
    [key: string]: NzSafeAny;
}
interface G2BarClickItem {
    item: G2BarData;
    ev: Event;
}
declare class G2BarComponent extends G2BaseComponent {
    readonly title: _angular_core.InputSignal<string | TemplateRef<void> | undefined>;
    readonly color: _angular_core.InputSignal<string>;
    readonly height: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly padding: _angular_core.InputSignal<number | number[] | "auto">;
    readonly data: _angular_core.InputSignal<G2BarData[]>;
    readonly autoLabel: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly interaction: _angular_core.InputSignal<G2InteractionType>;
    readonly clickItem: _angular_core.OutputEmitterRef<G2BarClickItem>;
    private getHeight;
    install(): void;
    changeData(): void;
    private updatelabel;
    private resizeInstalled;
    private installResizeEvent;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2BarComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<G2BarComponent, "g2-bar", ["g2Bar"], { "title": { "alias": "title"; "required": false; "isSignal": true; }; "color": { "alias": "color"; "required": false; "isSignal": true; }; "height": { "alias": "height"; "required": false; "isSignal": true; }; "padding": { "alias": "padding"; "required": false; "isSignal": true; }; "data": { "alias": "data"; "required": false; "isSignal": true; }; "autoLabel": { "alias": "autoLabel"; "required": false; "isSignal": true; }; "interaction": { "alias": "interaction"; "required": false; "isSignal": true; }; }, { "clickItem": "clickItem"; }, never, never, true, never>;
}

declare class G2BarModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2BarModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<G2BarModule, never, [typeof i1.CommonModule, typeof i2.NzOutletModule, typeof i3.NzSkeletonModule, typeof G2BarComponent], [typeof G2BarComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<G2BarModule>;
}

export { G2BarComponent, G2BarModule };
export type { G2BarClickItem, G2BarData };
