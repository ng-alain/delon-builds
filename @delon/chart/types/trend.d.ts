import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/icon';

declare class TrendComponent {
    /** 上升下降标识 */
    readonly flag: i0.InputSignal<"up" | "down" | undefined>;
    /** 是否彩色标记 */
    readonly colorful: i0.InputSignalWithTransform<boolean, unknown>;
    /** 颜色反转 */
    readonly reverseColor: i0.InputSignalWithTransform<boolean, unknown>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrendComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TrendComponent, "trend", ["trend"], { "flag": { "alias": "flag"; "required": false; "isSignal": true; }; "colorful": { "alias": "colorful"; "required": false; "isSignal": true; }; "reverseColor": { "alias": "reverseColor"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class TrendModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TrendModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TrendModule, never, [typeof i1.CommonModule, typeof i2.NzIconModule, typeof TrendComponent], [typeof TrendComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TrendModule>;
}

export { TrendComponent, TrendModule };
