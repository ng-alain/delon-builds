import * as i0 from '@angular/core';
import { TemplateRef } from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/icon';
import * as i3 from 'ng-zorro-antd/core/outlet';

declare class NumberInfoComponent {
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
    static ɵcmp: i0.ɵɵComponentDeclaration<NumberInfoComponent, "number-info", ["numberInfo"], { "title": { "alias": "title"; "required": false; }; "subTitle": { "alias": "subTitle"; "required": false; }; "total": { "alias": "total"; "required": false; }; "subTotal": { "alias": "subTotal"; "required": false; }; "suffix": { "alias": "suffix"; "required": false; }; "status": { "alias": "status"; "required": false; }; "theme": { "alias": "theme"; "required": false; }; "gap": { "alias": "gap"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_gap: unknown;
}

declare class NumberInfoModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NumberInfoModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NumberInfoModule, never, [typeof i1.CommonModule, typeof i2.NzIconModule, typeof i3.NzOutletModule, typeof NumberInfoComponent], [typeof NumberInfoComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NumberInfoModule>;
}

export { NumberInfoComponent, NumberInfoModule };
