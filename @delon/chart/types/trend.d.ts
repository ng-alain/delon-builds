import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/icon';

declare class TrendComponent {
    /** 上升下降标识 */
    flag?: 'up' | 'down';
    /** 是否彩色标记 */
    colorful: boolean;
    /** 颜色反转 */
    reverseColor: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrendComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TrendComponent, "trend", ["trend"], { "flag": { "alias": "flag"; "required": false; }; "colorful": { "alias": "colorful"; "required": false; }; "reverseColor": { "alias": "reverseColor"; "required": false; }; }, {}, never, ["*"], true, never>;
    static ngAcceptInputType_colorful: unknown;
    static ngAcceptInputType_reverseColor: unknown;
}

declare class TrendModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TrendModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TrendModule, never, [typeof i1.CommonModule, typeof i2.NzIconModule, typeof TrendComponent], [typeof TrendComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TrendModule>;
}

export { TrendComponent, TrendModule };
