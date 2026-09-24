import * as i0 from '@angular/core';
import { TemplateRef, EventEmitter } from '@angular/core';
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

declare class G2BarModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<G2BarModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<G2BarModule, never, [typeof i1.CommonModule, typeof i2.NzOutletModule, typeof i3.NzSkeletonModule, typeof G2BarComponent], [typeof G2BarComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<G2BarModule>;
}

export { G2BarComponent, G2BarModule };
export type { G2BarClickItem, G2BarData };
