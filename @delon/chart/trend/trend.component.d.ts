import { BooleanInput } from '@delon/util';
import * as i0 from "@angular/core";
export declare class TrendComponent {
    static ngAcceptInputType_colorful: BooleanInput;
    static ngAcceptInputType_reverseColor: BooleanInput;
    /** 上升下降标识 */
    flag: 'up' | 'down';
    /** 是否彩色标记 */
    colorful: boolean;
    /** 颜色反转 */
    reverseColor: boolean;
    static ɵfac: i0.ɵɵFactoryDef<TrendComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TrendComponent, "trend", ["trend"], { "flag": "flag"; "colorful": "colorful"; "reverseColor": "reverseColor"; }, {}, never, ["*"]>;
}
