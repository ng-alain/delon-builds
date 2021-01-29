import { TemplateRef } from '@angular/core';
import { NumberInput } from '@delon/util/other';
export declare class NumberInfoComponent {
    static ngAcceptInputType_gap: NumberInput;
    /** 标题 */
    title: string | TemplateRef<void>;
    /** 子标题 */
    subTitle: string | TemplateRef<void>;
    /** 总量 */
    total: string | TemplateRef<void>;
    /** 总量后缀 */
    subTotal: string | TemplateRef<void>;
    /** 子总量 */
    suffix: string;
    /** 增加状态 */
    status: 'up' | 'down';
    /** 状态样式 */
    theme: 'light' | 'default';
    /** 设置数字和描述直接的间距（像素） */
    gap: number;
}
