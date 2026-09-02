import * as i2 from '@delon/form';
import { SFUISchemaItem, ControlUIWidget, SFSchemaEnum, SFValue, WidgetRegistry, SFWidgetProvideConfig } from '@delon/form';
import * as i0 from '@angular/core';
import { TemplateRef, OnInit } from '@angular/core';
import * as i3 from 'ng-zorro-antd/cascader';
import { NzCascaderOption, NzCascaderPlacement, NzCascaderSize, NzShowSearchOptions, NzCascaderExpandTrigger, NzCascaderTriggerType } from 'ng-zorro-antd/cascader';
import { NzVariant, NzSafeAny, NgStyleInterface } from 'ng-zorro-antd/core/types';
import * as i1 from '@angular/forms';

interface SFCascaderWidgetSchema extends SFUISchemaItem {
    /**
     * 异步静态数据源
     */
    asyncData?: (node: NzCascaderOption, index: number, me?: CascaderWidget) => PromiseLike<void>;
    /**
     * 在文字框中显示提示讯息
     */
    placeholder?: string;
    placement?: NzCascaderPlacement;
    /**
     * 输入框大小，默认：`default`
     */
    size?: NzCascaderSize;
    /**
     * 变体，默认：`outlined`
     */
    variant?: NzVariant;
    /**
     * 默认获取焦点，默认：`false`
     */
    autoFocus?: boolean;
    /**
     * 自定义的选择框后缀图标
     */
    suffixIcon?: TemplateRef<NzSafeAny> | string;
    /**
     * 是否支持搜索，默认：`false`
     */
    showSearch?: boolean | NzShowSearchOptions;
    /**
     * 是否显示清除按钮，默认：`true`
     */
    allowClear?: boolean;
    /**
     * 清空时默认值，默认：`undefined`
     */
    clearValue?: NzSafeAny;
    /**
     * 清除按钮的标题，默认：`清除`
     */
    clearText?: string;
    /**
     * 是否显示箭头，默认：`true`
     */
    showArrow?: boolean;
    /**
     * 是否显示箭头，默认：`true`
     */
    showInput?: boolean;
    /**
     * 自定义浮层类名
     */
    menuClassName?: string;
    /**
     * 自定义浮层样式
     */
    menuStyle?: NgStyleInterface;
    /**
     * 当下拉列表为空时显示的内容
     */
    notFoundContent?: string;
    /**
     * 弹出菜单中数据列的自定义样式
     */
    columnClassName?: string;
    /**
     * 次级菜单的展开方式，默认：`click`
     */
    expandTrigger?: NzCascaderExpandTrigger;
    /**
     * 当此项为 `true` 时，点选每级菜单选项值都会发生变化，具体见上面的演示，默认：`false`
     */
    changeOnSelect?: boolean;
    /**
     * 可通过自定义的函数来判断点击菜单选项是否应该发生变化，当函数返回 `true` 时，将发生变化
     */
    changeOn?: (option: NzCascaderOption, level: number) => boolean;
    /**
     * 触发菜单出现的行为，默认：`['click']`
     */
    triggerAction?: Array<'click' | 'hover'>;
    /**
     * 值 `value` 的属性名称，默认：`value`
     */
    valueProperty?: string;
    /**
     * 值 `label` 的属性名称，默认：`label`
     */
    labelProperty?: string;
    /**
     * 是否多选，默认：`false`
     */
    multiple?: boolean;
    /**
     * 下拉菜单打开关闭回调函数
     */
    openChange?: (status: boolean) => void;
    /**
     * 选项值变更事件
     */
    change?: (values: NzSafeAny[] | null) => void;
    /**
     * 选项变更事件
     */
    selectionChange?: (values: NzCascaderOption[]) => void;
    /**
     * 内容被清空事件
     */
    clear?: () => void;
}

declare class CascaderWidget extends ControlUIWidget<SFCascaderWidgetSchema> implements OnInit {
    static readonly KEY = "cascader";
    clearText: string;
    showArrow: boolean;
    showInput: boolean;
    triggerAction: NzCascaderTriggerType[];
    data: SFSchemaEnum[];
    loadData?: (node: NzCascaderOption, index: number) => PromiseLike<NzSafeAny>;
    ngOnInit(): void;
    reset(value: SFValue): void;
    _openChange(status: boolean): void;
    _change(value: NzSafeAny[] | null): void;
    _selectionChange(options: NzCascaderOption[]): void;
    _clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CascaderWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CascaderWidget, "sf-cascader", never, {}, {}, never, never, true, never>;
}

declare class CascaderWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<CascaderWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CascaderWidgetModule, never, [typeof i1.FormsModule, typeof i2.DelonFormModule, typeof i3.NzCascaderModule, typeof CascaderWidget], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CascaderWidgetModule>;
}

declare function withCascaderWidget(): SFWidgetProvideConfig;

export { CascaderWidget, CascaderWidgetModule, withCascaderWidget };
export type { SFCascaderWidgetSchema };
