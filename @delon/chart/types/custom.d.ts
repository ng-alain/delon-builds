import * as i0 from '@angular/core';
import { EventEmitter, ElementRef } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/skeleton';

declare class G2CustomComponent extends G2BaseComponent {
    height?: number;
    resizeTime: number;
    readonly render: EventEmitter<ElementRef<any>>;
    readonly resize: EventEmitter<ElementRef<any>>;
    readonly destroy: EventEmitter<ElementRef<any>>;
    install(): void;
    private installResizeEvent;
    static ɵfac: i0.ɵɵFactoryDeclaration<G2CustomComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<G2CustomComponent, "g2,g2-custom", ["g2Custom"], { "height": { "alias": "height"; "required": false; }; "resizeTime": { "alias": "resizeTime"; "required": false; }; }, { "render": "render"; "resize": "resize"; "destroy": "destroy"; }, never, ["*"], true, never>;
    static ngAcceptInputType_height: unknown;
    static ngAcceptInputType_resizeTime: unknown;
}

declare class G2CustomModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<G2CustomModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<G2CustomModule, never, [typeof i1.CommonModule, typeof i2.NzSkeletonModule, typeof G2CustomComponent], [typeof G2CustomComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<G2CustomModule>;
}

export { G2CustomComponent, G2CustomModule };
