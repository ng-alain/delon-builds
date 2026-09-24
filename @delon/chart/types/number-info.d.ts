import * as _angular_core from '@angular/core';
import { TemplateRef } from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/icon';
import * as i3 from 'ng-zorro-antd/core/outlet';

declare class NumberInfoComponent {
    /** 标题 */
    readonly title: _angular_core.InputSignal<string | TemplateRef<void> | null | undefined>;
    /** 子标题 */
    readonly subTitle: _angular_core.InputSignal<string | TemplateRef<void> | null | undefined>;
    /** 总量 */
    readonly total: _angular_core.InputSignal<string | number | TemplateRef<void> | null | undefined>;
    /** 总量后缀 */
    readonly subTotal: _angular_core.InputSignal<string | number | TemplateRef<void> | null | undefined>;
    /** 子总量 */
    readonly suffix: _angular_core.InputSignal<string | null | undefined>;
    /** 增加状态 */
    readonly status: _angular_core.InputSignal<"up" | "down" | undefined>;
    /** 状态样式 */
    readonly theme: _angular_core.InputSignal<"light" | "default">;
    /** 设置数字和描述直接的间距（像素） */
    readonly gap: _angular_core.InputSignalWithTransform<number, unknown>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<NumberInfoComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<NumberInfoComponent, "number-info", ["numberInfo"], { "title": { "alias": "title"; "required": false; "isSignal": true; }; "subTitle": { "alias": "subTitle"; "required": false; "isSignal": true; }; "total": { "alias": "total"; "required": false; "isSignal": true; }; "subTotal": { "alias": "subTotal"; "required": false; "isSignal": true; }; "suffix": { "alias": "suffix"; "required": false; "isSignal": true; }; "status": { "alias": "status"; "required": false; "isSignal": true; }; "theme": { "alias": "theme"; "required": false; "isSignal": true; }; "gap": { "alias": "gap"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class NumberInfoModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<NumberInfoModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<NumberInfoModule, never, [typeof i1.CommonModule, typeof i2.NzIconModule, typeof i3.NzOutletModule, typeof NumberInfoComponent], [typeof NumberInfoComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<NumberInfoModule>;
}

export { NumberInfoComponent, NumberInfoModule };
