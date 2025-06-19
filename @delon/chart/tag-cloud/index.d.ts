import * as i0 from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Event } from '@antv/g2';
import { G2BaseComponent } from '@delon/chart/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/skeleton';

interface G2TagCloudData {
    value?: number;
    name?: string;
    [key: string]: NzSafeAny;
}
interface G2TagCloudClickItem {
    item: G2TagCloudData;
    ev: Event;
}
declare class G2TagCloudComponent extends G2BaseComponent {
    width: number;
    height: number;
    padding: number | number[] | 'auto';
    data: G2TagCloudData[];
    readonly clickItem: EventEmitter<G2TagCloudClickItem>;
    private initTagCloud;
    install(): void;
    changeData(): void;
    private installResizeEvent;
    onInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<G2TagCloudComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<G2TagCloudComponent, "g2-tag-cloud", ["g2TagCloud"], { "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "padding": { "alias": "padding"; "required": false; }; "data": { "alias": "data"; "required": false; }; }, { "clickItem": "clickItem"; }, never, never, true, never>;
    static ngAcceptInputType_width: unknown;
    static ngAcceptInputType_height: unknown;
}

declare class G2TagCloudModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<G2TagCloudModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<G2TagCloudModule, never, [typeof i1.CommonModule, typeof i2.NzSkeletonModule, typeof G2TagCloudComponent], [typeof G2TagCloudComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<G2TagCloudModule>;
}

export { G2TagCloudComponent, G2TagCloudModule };
export type { G2TagCloudClickItem, G2TagCloudData };
