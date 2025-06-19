import * as i2 from '@delon/form';
import { SFUISchemaItem, SFSchemaEnumType, SFSchemaEnum, ControlUIWidget, SFValue, WidgetRegistry, SFWidgetProvideConfig } from '@delon/form';
import { Observable } from 'rxjs';
import * as i5 from 'ng-zorro-antd/auto-complete';
import { NzAutocompleteOptionComponent } from 'ng-zorro-antd/auto-complete';
import { CompareWith, NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from '@angular/core';
import * as i1 from '@angular/forms';
import * as i3 from '@angular/common';
import * as i4 from 'ng-zorro-antd/input';

interface SFAutoCompleteWidgetSchema extends SFUISchemaItem {
    /**
     * 异步静态数据源
     */
    asyncData?: (input: string) => Observable<SFSchemaEnumType[]>;
    /**
     * 在文字框中显示提示讯息
     */
    placeholder?: string;
    /**
     * 是否根据输入项进行筛选，默认只对 `label` 属性执行不区分大小定 `indexOf` 过滤
     * 当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。
     */
    filterOption?: boolean | ((input: string, option: SFSchemaEnum) => boolean);
    /**
     * 模式，自动完成常见邮箱后缀，可以重新使用 `enum` 来指定新后缀
     */
    type?: 'email';
    /**
     * 去抖时间，当实时数据源时默认最少 `50`，单位：毫秒
     */
    debounceTime?: number;
    /**
     * 是否默认高亮第一个选项，默认：`true`
     */
    defaultActiveFirstOption?: boolean;
    /**
     * 使用键盘选择选项的时候把选中项回填到输入框中，默认：`false`
     */
    backfill?: boolean;
    /**
     * 自定义宽度单位 `px`，默认：触发元素宽度
     */
    nzWidth?: number;
    /**
     * 变更回调
     */
    change?: (item: NzAutocompleteOptionComponent, orgData: SFSchemaEnum) => void;
    /**
     * 下拉根元素的类名称
     */
    overlayClassName?: string;
    /**
     * 下拉根元素的样式
     */
    overlayStyle?: Record<string, string>;
    /**
     * 与 [SelectControlValueAccessor](https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection) 相同
     */
    compareWith?: CompareWith;
}

declare class AutoCompleteWidget extends ControlUIWidget<SFAutoCompleteWidgetSchema> {
    static readonly KEY = "autocomplete";
    i: NzSafeAny;
    list: Observable<SFSchemaEnum[]>;
    typing: string;
    private ngModel;
    private filterOption;
    private isAsync;
    private fixData;
    updateValue(item: NzAutocompleteOptionComponent): void;
    _setValue(item: SFSchemaEnum): void;
    afterViewInit(): void;
    reset(value: SFValue): void;
    private filterData;
    private addEmailSuffix;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoCompleteWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutoCompleteWidget, "sf-autocomplete", never, {}, {}, never, never, true, never>;
}

declare class AutoCompleteWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoCompleteWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AutoCompleteWidgetModule, never, [typeof i1.FormsModule, typeof i2.DelonFormModule, typeof i3.CommonModule, typeof i4.NzInputModule, typeof i5.NzAutocompleteModule, typeof AutoCompleteWidget], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AutoCompleteWidgetModule>;
}

declare function withAutoCompleteWidget(): SFWidgetProvideConfig;

export { AutoCompleteWidget, AutoCompleteWidgetModule, withAutoCompleteWidget };
export type { SFAutoCompleteWidgetSchema };
