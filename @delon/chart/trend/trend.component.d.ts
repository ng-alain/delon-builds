import { BooleanInput } from '@delon/util/other';
export declare class TrendComponent {
    static ngAcceptInputType_colorful: BooleanInput;
    static ngAcceptInputType_reverseColor: BooleanInput;
    /** 上升下降标识 */
    flag: 'up' | 'down';
    /** 是否彩色标记 */
    colorful: boolean;
    /** 颜色反转 */
    reverseColor: boolean;
}
