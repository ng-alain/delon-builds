import * as _angular_core from '@angular/core';
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
    private _width;
    private _height;
    readonly width: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly height: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly padding: _angular_core.InputSignal<number | number[] | "auto">;
    readonly data: _angular_core.InputSignal<G2TagCloudData[]>;
    readonly clickItem: _angular_core.OutputEmitterRef<G2TagCloudClickItem>;
    private initTagCloud;
    install(): void;
    changeData(): void;
    private installResizeEvent;
    onInit(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2TagCloudComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<G2TagCloudComponent, "g2-tag-cloud", ["g2TagCloud"], { "width": { "alias": "width"; "required": false; "isSignal": true; }; "height": { "alias": "height"; "required": false; "isSignal": true; }; "padding": { "alias": "padding"; "required": false; "isSignal": true; }; "data": { "alias": "data"; "required": false; "isSignal": true; }; }, { "clickItem": "clickItem"; }, never, never, true, never>;
}

declare class G2TagCloudModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2TagCloudModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<G2TagCloudModule, never, [typeof i1.CommonModule, typeof i2.NzSkeletonModule, typeof G2TagCloudComponent], [typeof G2TagCloudComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<G2TagCloudModule>;
}

export { G2TagCloudComponent, G2TagCloudModule };
export type { G2TagCloudClickItem, G2TagCloudData };
