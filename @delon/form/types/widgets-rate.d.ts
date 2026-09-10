import * as i2 from '@delon/form';
import { SFUISchemaItem, ControlUIWidget, WidgetRegistry, SFWidgetProvideConfig } from '@delon/form';
import * as i0 from '@angular/core';
import { TemplateRef, OnInit } from '@angular/core';
import * as i1 from '@angular/forms';
import * as i3 from 'ng-zorro-antd/rate';
import * as i4 from '@angular/common';

interface SFRateWidgetSchema extends SFUISchemaItem {
    /**
     * 是否允许再次点击后清除，默认：`true`
     */
    allowClear?: boolean;
    /**
     * 自动获取焦点，默认：`false`
     */
    autoFocus?: boolean;
    /**
     * 自定义字符
     */
    character?: TemplateRef<{
        $implicit: number;
    }>;
    /**
     * 提醒文本模板，`{{value}}` 表示当前值（注意无任何空格）
     */
    text?: string;
    /**
     * 自定义每项的提示信息
     */
    tooltips?: string[];
    /**
     * 鼠标经过时数值变化的回调
     */
    hoverChange?: (value: number) => void;
}

declare class RateWidget extends ControlUIWidget<SFRateWidgetSchema> implements OnInit {
    static readonly KEY = "rate";
    count: number;
    allowHalf: boolean;
    allowClear: boolean;
    autoFocus: boolean;
    hasText: boolean;
    get text(): string;
    hoverChange(value: number): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RateWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RateWidget, "sf-rate", never, {}, {}, never, never, true, never>;
}

declare class RateWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<RateWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<RateWidgetModule, never, [typeof i1.FormsModule, typeof i2.DelonFormModule, typeof i3.NzRateModule, typeof i4.CommonModule, typeof RateWidget], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<RateWidgetModule>;
}

declare function withRateWidget(): SFWidgetProvideConfig;

export { RateWidget, RateWidgetModule, withRateWidget };
export type { SFRateWidgetSchema };
