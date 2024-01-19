import * as i0 from "@angular/core";
export declare class TrendComponent {
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
