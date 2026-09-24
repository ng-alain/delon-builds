import * as _angular_core from '@angular/core';
import { ElementRef } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/skeleton';

declare class G2CustomComponent extends G2BaseComponent {
    readonly height: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    readonly resizeTime: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly render: _angular_core.OutputEmitterRef<ElementRef<any>>;
    readonly resize: _angular_core.OutputEmitterRef<ElementRef<any>>;
    readonly destroy: _angular_core.OutputEmitterRef<ElementRef<any>>;
    install(): void;
    private resize$?;
    private installResizeEvent;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2CustomComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<G2CustomComponent, "g2,g2-custom", ["g2Custom"], { "height": { "alias": "height"; "required": false; "isSignal": true; }; "resizeTime": { "alias": "resizeTime"; "required": false; "isSignal": true; }; }, { "render": "render"; "resize": "resize"; "destroy": "destroy"; }, never, ["*"], true, never>;
}

declare class G2CustomModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2CustomModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<G2CustomModule, never, [typeof i1.CommonModule, typeof i2.NzSkeletonModule, typeof G2CustomComponent], [typeof G2CustomComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<G2CustomModule>;
}

export { G2CustomComponent, G2CustomModule };
