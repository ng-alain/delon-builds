import { TemplateRef } from '@angular/core';
import { NumberInput } from '@delon/util/decorator';
import * as i0 from "@angular/core";
export declare class NumberInfoComponent {
    static ngAcceptInputType_gap: NumberInput;
    /** 标题 */
    title?: string | TemplateRef<void> | null;
    /** 子标题 */
    subTitle?: string | TemplateRef<void> | null;
    /** 总量 */
    total?: string | number | TemplateRef<void> | null;
    /** 总量后缀 */
    subTotal?: string | number | TemplateRef<void> | null;
    /** 子总量 */
    suffix?: string | null;
    /** 增加状态 */
    status?: 'up' | 'down';
    /** 状态样式 */
    theme: 'light' | 'default';
    /** 设置数字和描述直接的间距（像素） */
    gap: number;
    static ɵfac: i0.ɵɵFactoryDeclaration<NumberInfoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NumberInfoComponent, "number-info", ["numberInfo"], { "title": "title"; "subTitle": "subTitle"; "total": "total"; "subTotal": "subTotal"; "suffix": "suffix"; "status": "status"; "theme": "theme"; "gap": "gap"; }, {}, never, never, false, never>;
}
