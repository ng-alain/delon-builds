import { AlainSFConfig, AlainConfigService } from '@delon/util/config';
import * as i0 from '@angular/core';
import { Injector, OnInit, OnChanges, OnDestroy, TemplateRef, ViewContainerRef, ComponentRef, AfterViewInit, ChangeDetectorRef, EventEmitter, SimpleChange, SimpleChanges, ModuleWithProviders, EnvironmentProviders } from '@angular/core';
import * as i20 from '@delon/theme';
import { LocaleData } from '@delon/theme';
import { NzSafeAny, NzVariant, NzSizeLDSType, NzSizeDSType, NgClassType, NgStyleInterface } from 'ng-zorro-antd/core/types';
import * as i26 from 'ng-zorro-antd/form';
import { NzFormControlStatusType } from 'ng-zorro-antd/form';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import * as i22 from 'ng-zorro-antd/button';
import { NzButtonType } from 'ng-zorro-antd/button';
import { ACLCanType } from '@delon/acl';
import Ajv from 'ajv';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import * as i25 from 'ng-zorro-antd/date-picker';
import { NzDatePickerSizeType, DisabledDateFn, DisabledTimeFn, SupportTimeOptions } from 'ng-zorro-antd/date-picker';
import { NzDatePickerI18nInterface, NzI18nService } from 'ng-zorro-antd/i18n';
import * as i33 from 'ng-zorro-antd/select';
import { NzSelectModeType, NzOptionComponent } from 'ng-zorro-antd/select';
import * as i18 from '@angular/common';
import * as i19 from '@angular/forms';
import * as i21 from '@angular/cdk/text-field';
import * as i23 from 'ng-zorro-antd/card';
import * as i24 from 'ng-zorro-antd/checkbox';
import * as i27 from 'ng-zorro-antd/grid';
import * as i28 from 'ng-zorro-antd/icon';
import * as i29 from 'ng-zorro-antd/input';
import * as i30 from 'ng-zorro-antd/input-number';
import * as i31 from 'ng-zorro-antd/modal';
import * as i32 from 'ng-zorro-antd/radio';
import * as i34 from 'ng-zorro-antd/switch';
import * as i35 from 'ng-zorro-antd/tooltip';

declare const SF_DEFAULT_CONFIG: AlainSFConfig;
declare function mergeConfig(srv: AlainConfigService): AlainSFConfig;

type SFSchemaDefinition = Record<string, SFSchema>;
interface SFSchemaEnum {
    [key: string]: NzSafeAny;
    /** 是否禁用状态 */
    disabled?: boolean;
    /** 文本 */
    label?: NzSafeAny;
    /** 文本 */
    title?: NzSafeAny;
    /** 值 */
    value?: NzSafeAny;
    /**
     * 主键，适用部分小部件数据键名，例如：`tree-select`
     */
    key?: NzSafeAny;
    /** 是否选中 */
    checked?: boolean;
    /**
     * 组名，适用部分允许组列表的小部件，例如：`select`
     * - 组对应的文本为 `label`
     * - `children` 为子项
     */
    group?: boolean;
    /**
     * Whether to hide item
     *
     * 是否隐藏项
     */
    hide?: boolean;
    isLeaf?: boolean;
    /** 组对应的子类 */
    children?: SFSchemaEnum[];
}
type SFSchemaType = 'number' | 'integer' | 'string' | 'boolean' | 'object' | 'array';
type SFSchemaEnumType = SFSchemaEnum | number | string | boolean;
/**
 * JSON Schema Form 结构体
 *
 * **注意：** 所有结构都以标准为基准，除了 `ui` 属性为非标准单纯只是为了更好的开发
 */
interface SFSchema {
    [key: string]: NzSafeAny;
    /**
     * 数据类型，支持 JavaScript 基础类型；注意项：
     *
     * - `integer` 表示整型，`number` 表示浮点型
     * - JSON 中 `date` 等同 `string` 类型
     * - 指定 `format` 标准参数可以自动适配渲染小部件
     * - 指定 `widget` 参数强制渲染小部件
     */
    type?: SFSchemaType;
    /**
     * 枚举，静态数据源，例如：`radio`、`checkbox` 等
     *
     * - `disabled` 属性表示：禁用状态
     * - `label` 属性表示：文本
     * - `value` 属性表示：返回值
     * - 基础数据类型数组会自动转化成 `SFSchemaEnum` 数组格式
     */
    enum?: SFSchemaEnumType[];
    /**
     * 最小值
     */
    minimum?: number;
    /**
     * 约束是否包括 `minimum` 值
     */
    exclusiveMinimum?: boolean;
    /**
     * 最大值
     */
    maximum?: number;
    /**
     * 约束是否包括 `maximum` 值
     */
    exclusiveMaximum?: boolean;
    /**
     * 倍数
     */
    multipleOf?: number;
    /**
     * 定义字符串的最大长度
     */
    maxLength?: number;
    /**
     * 定义字符串的最小长度
     */
    minLength?: number;
    /**
     * 验证输入字段正则表达式字符串
     */
    pattern?: string;
    /**
     * 数组元素类型描述，只支持数组对象，若需要基础类型数组可通过其他部件支持
     *
     * ```json
     * items: {
     *   type: 'object',
     *   properties: {
     *     name: { type: 'string' },
     *     age: { type: 'number' }
     *   }
     * }
     * ```
     *
     * 结果
     *
     * ```json
     * [
     *   { "name": "cipchk1", "age": 18 },
     *   { "name": "cipchk2", "age": 16 }
     * ]
     * ```
     */
    items?: SFSchema;
    /**
     * 约束数组最小的元素个数
     * - `type="array"` 时有效
     */
    minItems?: number;
    /**
     * 约束数组最大的元素个数
     * - `type="array"` 时有效
     */
    maxItems?: number;
    /**
     * 约束数组每个元素都不相同
     * - `type="array"` 时有效
     */
    uniqueItems?: boolean;
    /**
     * 数组额外元素的校验规则
     */
    additionalItems?: SFSchema;
    /**
     * 最大属性个数，必须是非负整数
     */
    maxProperties?: number;
    /**
     * 最小属性个数，必须是非负整数
     */
    minProperties?: number;
    /**
     * 必填项属性
     */
    required?: string[];
    /**
     * 定义属性
     */
    properties?: Record<string, SFSchema>;
    /**
     * 条件验证
     * - 必须包含 `properties` 节点
     *  - 键名必须是当前节点 `properties` 值之一
     *  - 利用 `enum` 属性表示条件值，支持 `$ANY$` 表示任意值
     * - 不支持跨 Schema 节点
     * - 当条件成功会执行 `then` 否则执行 `else`
     * - `if`和`then` 是必须同时出现，`else` 可选项
     */
    if?: SFSchema;
    /**
     * 条件成功时执行
     * - 只支持 `required` 参数，用于表示显示
     */
    then?: SFSchema;
    /**
     * 条件失败时执行
     * - 只支持 `required` 参数，用于表示显示
     */
    else?: SFSchema;
    /** **不建议** 使用，可用 `required` 替代 */
    allOf?: SFSchema[];
    /** **不建议** 使用，可用 `required` 和 `minProperties` 替代 */
    anyOf?: SFSchema[];
    /** 值必须是其中之一 */
    oneOf?: SFSchema[];
    /**
     * 数据格式，[文档](http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.3)
     * - `date-time` 日期时间，渲染为 `date`，[RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6)
     * - `date`、`full-date` 日期，渲染为 `date`
     * - `time`、`full-time` 时间，渲染为 `time`
     * - `email` Email格式，渲染为 `autocomplete`
     * - 非标准：`week`，渲染为 `nz-week-picker`
     * - 非标准：`month`，渲染为 `nz-month-picker`
     * - `ip` IP地址，渲染为 `input`
     * - `uri` URL地址，渲染为 `upload`
     * - `mobile` 手机号
     * - `id-card` 身份证
     * - `color` 颜色值
     */
    format?: string;
    /**
     * 属性描述，相当于 `label` 值，按以下规则展示：
     * - 当值为 `null`、`undefined` 时使用 `key` 替代
     * - 当值为 `''` 空字符串表示不展示 `label` 部分，例如：`checkbox` 可能需要
     */
    title?: string | null;
    /**
     * 属性目的性解释
     */
    description?: string;
    /**
     * 默认值
     */
    default?: NzSafeAny;
    /**
     * 是否只读状态
     */
    readOnly?: boolean;
    /** 内部类型定义体 */
    definitions?: SFSchemaDefinition;
    /** 引用定义体 */
    $ref?: string;
    /** 针对开发者的注释，无任何意义，也不会被校验 */
    $comment?: string;
    /** **唯一非标准：** 指定UI配置信息，优先级高于 `sf` 组件 `ui` 属性值 */
    ui?: SFUISchemaItem | string;
}

declare abstract class SchemaValidatorFactory {
    abstract createValidatorFn(schema: SFSchema, extraOptions: {
        ingoreKeywords: string[];
        debug: boolean;
    }): (value: SFValue) => ErrorData[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SchemaValidatorFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SchemaValidatorFactory>;
}
declare class AjvSchemaValidatorFactory extends SchemaValidatorFactory {
    private readonly ngZone;
    private readonly cogSrv;
    protected ajv: Ajv;
    protected options: AlainSFConfig;
    constructor();
    createValidatorFn(schema: SFSchema, extraOptions: {
        ingoreKeywords: string[];
        debug: boolean;
    }): (value: SFValue) => ErrorData[];
    static ɵfac: i0.ɵɵFactoryDeclaration<AjvSchemaValidatorFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AjvSchemaValidatorFactory>;
}

declare class FormPropertyFactory {
    private injector;
    private schemaValidatorFactory;
    private options;
    constructor(injector: Injector, schemaValidatorFactory: SchemaValidatorFactory, cogSrv: AlainConfigService);
    createProperty(schema: SFSchema, ui: SFUISchema | SFUISchemaItem, formData: Record<string, unknown>, parent?: PropertyGroup | null, propertyId?: string): FormProperty;
    private initializeRoot;
}

declare class ArrayProperty extends PropertyGroup {
    private formPropertyFactory;
    constructor(injector: Injector, formPropertyFactory: FormPropertyFactory, schemaValidatorFactory: SchemaValidatorFactory, schema: SFSchema, ui: SFUISchema | SFUISchemaItem, formData: Record<string, unknown>, parent: PropertyGroup | null, path: string, options: AlainSFConfig);
    getProperty(path: string): FormProperty | undefined;
    setValue(value: SFValue, onlySelf: boolean): void;
    resetValue(value: SFValue, onlySelf: boolean): void;
    _hasValue(): boolean;
    _updateValue(): void;
    private addProperty;
    private resetProperties;
    private clearErrors;
    add(formData: Record<string, unknown>): FormProperty;
    remove(index: number): void;
}

declare class ObjectProperty extends PropertyGroup {
    private formPropertyFactory;
    private _propertiesId;
    get propertiesId(): string[];
    constructor(injector: Injector, formPropertyFactory: FormPropertyFactory, schemaValidatorFactory: SchemaValidatorFactory, schema: SFSchema, ui: SFUISchema | SFUISchemaItem, formData: NzSafeAny, parent: PropertyGroup | null, path: string, options: AlainSFConfig);
    private createProperties;
    setValue(value: SFValue, onlySelf: boolean): void;
    resetValue(value: SFValue, onlySelf: boolean): void;
    _hasValue(): boolean;
    _updateValue(): void;
}

declare class SFItemComponent implements OnInit, OnChanges, OnDestroy {
    private readonly widgetFactory;
    private readonly terminator;
    private ref;
    readonly destroy$: Subject<void>;
    widget: Widget<FormProperty, SFUISchemaItem> | null;
    formProperty: FormProperty;
    footer: TemplateRef<void> | null;
    private container;
    onWidgetInstanciated(widget: Widget<FormProperty, SFUISchemaItem>): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SFItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SFItemComponent, "sf-item", ["sfItem"], { "formProperty": { "alias": "formProperty"; "required": false; }; "footer": { "alias": "footer"; "required": false; }; }, {}, never, never, false, never>;
}

type SFObjectWidgetRenderType = 'card' | 'default';
interface SFObjectWidgetSchema extends SFUISchemaItem {
    /**
     * 是否显示扩展，点击隐藏内容，默认：`true`
     * - 限 `type === 'card'`
     */
    showExpand?: boolean;
    /**
     * 展开状态，默认：`true`
     * - 限 `type === 'card'`
     */
    expand?: boolean;
    /**
     * 是否显示标题，默认：`false`
     */
    showTitle?: boolean;
    /**
     * 渲染类型
     * - `card` 使用 `nz-card` 渲染
     * - `default` 使用默认渲染
     */
    type?: SFObjectWidgetRenderType;
    /**
     * 等同 `nzSize` 属性，默认：`small`
     */
    cardSize?: 'default' | 'small';
    /**
     * 等同 `nzBodyStyle` 属性
     */
    cardBodyStyle?: Record<string, string>;
    /**
     * 等同 `nzExtra` 属性
     */
    cardExtra?: string | TemplateRef<void>;
    /**
     * 等同 `nzActions` 属性
     */
    cardActions?: Array<TemplateRef<void>>;
}

declare class ObjectWidget extends ObjectLayoutWidget implements OnInit {
    grid: NzSafeAny;
    type: SFObjectWidgetRenderType;
    list: NzSafeAny[];
    title?: string;
    showExpand: boolean;
    expand: boolean;
    ngOnInit(): void;
    changeExpand(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ObjectWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ObjectWidget, "sf-object", never, {}, {}, never, never, false, never>;
}

declare class ArrayWidget extends ArrayLayoutWidget implements OnInit {
    addTitle: SafeHtml;
    addType: NzButtonType;
    removeTitle?: string | null;
    arraySpan: number;
    get addDisabled(): boolean;
    get showRemove(): boolean;
    ngOnInit(): void;
    private reValid;
    addItem(): void;
    removeItem(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArrayWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArrayWidget, "sf-array", never, {}, {}, never, never, false, never>;
}

interface SFArrayWidgetSchema extends SFUISchemaItem {
    /**
     * Add button title, default: `添加`
     *
     * 指定添加按钮文本，默认：`添加`
     */
    addTitle?: string;
    /**
     * Add button type, equals to `nzType`, default: `dashed`
     *
     * 指定添加按钮风格，等同按钮 `nzType`，默认：`dashed`
     */
    addType?: NzButtonType;
    /**
     * Whether includes remove button, default: `true`
     *
     * 指定是否显示移除按钮，默认：`true`
     */
    removable?: boolean;
    /**
     * Remove button title, default: `移除`
     *
     * 指定移除按钮文本，默认：`移除`
     */
    removeTitle?: string;
    /**
     * Add required style to current item
     *
     * 当前项是否为必填，仅影响样式
     */
    required?: boolean;
    /**
     * Add callback，`property` indicates form property after add
     *
     * 添加回调，`property` 表示添加后的表单属性
     */
    add: (property: FormProperty) => void;
    /**
     * Remove callback
     *
     * 移除回调
     */
    remove: (index: number) => void;
}

interface SFStringWidgetSchema extends SFUISchemaItem {
    /**
     * 指定 `input` 的 `type` 值，默认为：`text`
     */
    type?: string;
    /**
     * 文字框中显示提示信息
     */
    placeholder?: string;
    /**
     * 自动完成功能的表单
     */
    autocomplete?: 'on' | 'off';
    /**
     * 加载时是否获得焦点
     */
    autofocus?: boolean;
    /**
     * 前置标签，等同 `nzAddOnBefore`
     */
    addOnBefore?: string;
    /**
     * 后置标签，等同 `nzAddOnAfter`
     */
    addOnAfter?: string;
    /**
     * 带有前缀图标的 input，等同 `nzPrefix`
     */
    prefix?: string;
    /**
     * 带有后缀图标的 input，等同 `nzSuffix`
     */
    suffix?: string;
    /**
     * 变体
     */
    variant?: NzVariant;
    /**
     * `change` event throttling and sequence control threshold
     *
     * `change` 事件节流与顺序控制的阀值
     */
    changeDebounceTime?: number;
    /**
     * Convert data, equivalent to `switchMap` operation
     *
     * 转换数据，相当于 `switchMap` 操作
     */
    changeMap?: (val: string) => Observable<NzSafeAny>;
    /**
     * 内容变更事件
     */
    change?: (val: NzSafeAny) => void;
    /**
     * 焦点事件
     */
    focus?: (e: FocusEvent) => void;
    /**
     * 失焦事件
     */
    blur?: (e: FocusEvent) => void;
    /**
     * 回车事件
     */
    enter?: (e: Event) => void;
}

declare class StringWidget extends ControlUIWidget<SFStringWidgetSchema> implements OnInit {
    type: string;
    private change$;
    ngOnInit(): void;
    reset(value: SFValue): void;
    private initChange;
    change(val: string): void;
    focus(e: FocusEvent): void;
    blur(e: FocusEvent): void;
    enter(e: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StringWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StringWidget, "sf-string", never, {}, {}, never, never, false, never>;
}

interface SFNumberWidgetSchema extends SFUISchemaItem {
    size?: NzSizeLDSType;
    /**
     * 前缀，简化 `nzFormatter`、`nzParser` 的使用
     */
    prefix?: string;
    /**
     * 单位，简化 `nzFormatter`、`nzParser` 的使用
     */
    unit?: string;
    /**
     * 指定输入框展示值的格式
     */
    formatter?: (value: number) => string;
    /**
     * 指定从 nzFormatter 里转换回数字的方式，和 nzFormatter 搭配使用
     */
    parser?: (value: string) => number;
    /**
     * 数值精度
     */
    precision?: number | null;
    /**
     * 指定 `nz-number` 宽度
     */
    widgetWidth?: number | string;
    /**
     * Hide step icon
     *
     * 隐藏步数操作区
     */
    hideStep?: boolean;
    /**
     * 变更事件
     */
    change?: (val?: number) => void;
}

declare class NumberWidget extends ControlUIWidget<SFNumberWidgetSchema> implements OnInit {
    min: number;
    max: number;
    step: number;
    formatter?: ((value: number) => string) | null;
    parser?: ((value: string) => number) | null;
    width: string;
    ngOnInit(): void;
    _setValue(val: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NumberWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NumberWidget, "sf-number", never, {}, {}, never, never, false, never>;
}

interface SFDateWidgetSchema extends SFUISchemaItem {
    mode?: 'date' | 'week' | 'month' | 'year' | 'range';
    size?: NzDatePickerSizeType;
    placeholder?: string | string[];
    /**
     * Inline mode of the date picker
     *
     * 内联模式
     */
    inline?: boolean;
    /**
     * **Just only support date-fns**
     *
     * Return the formatted date string in the given format, [Accepted tokens](https://date-fns.org/v2.12.0/docs/format), like this:
     * - `yyyy-MM-dd HH:mm:ss` Date time
     * - `t` Seconds timestamp
     * - `T` Milliseconds timestamp
     */
    format?: string;
    /**
     * To set the date format (equar [nzFormat](https://ng.ant.design/components/date-picker/zh#api))
     *
     * **TIPS** [nzFormat special instructions](https://ng.ant.design/components/date-picker/en#api)
     */
    displayFormat?: string;
    /**
     * The end value corresponding to the date range `key`, a date range [demo](https://ng-alain.com/form/date/en#form-date-range).
     */
    end?: string;
    /**
     * Whether to show clear button, default: `true`
     */
    allowClear?: boolean;
    /**
     * Picker className
     */
    className?: string;
    /**
     * Localization configuration
     */
    locale?: NzDatePickerI18nInterface;
    /**
     * To customize the style of the popup calendar
     */
    popupStyle?: Record<string, NzSafeAny>;
    /**
     * To customize the className of the popup calendar
     */
    dropdownClassName?: string;
    /**
     * Set picker mode of range picker, default: `date`
     */
    rangeMode?: 'date' | 'week' | 'month' | 'year';
    /**
     * A callback emitter, can be executed whether the popup calendar is popped up or closed
     */
    onOpenChange?: (status: boolean) => void;
    /**
     * Specify the date that cannot be selected
     */
    disabledDate?: DisabledDateFn;
    /**
     * To specify the time that cannot be selected, support components: `nz-date-picker`, `nz-range-picker`
     */
    disabledTime?: DisabledTimeFn;
    /**
     * Render extra footer in panel, support components: `nz-date-picker`, `nz-range-picker`, `nz-year-picker`, `nz-month-picker`
     */
    renderExtraFooter?: string;
    /**
     * To provide an additional time selection
     */
    showTime?: SupportTimeOptions | boolean;
    /**
     * Whether to show "Today" button, default: `true`
     */
    showToday?: boolean;
    /**
     * Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices), default: `false`
     */
    inputReadOnly?: boolean;
    /**
     * separator
     */
    separator?: string | TemplateRef<NzSafeAny>;
    /**
     * Whether to show the week number on each row (Only supported by date picker. Week picker always shows week numbers)
     */
    showWeekNumber?: boolean;
    /**
     * Callback when click ok button
     */
    onOk?: (data: Date | Date[]) => void;
    /**
     * Date change callback
     */
    change?: (data: Date | Date[] | null) => void;
}

declare class DateWidget extends ControlUIWidget<SFDateWidgetSchema> implements OnInit {
    private startFormat;
    private endFormat?;
    private flatRange;
    mode: string;
    displayValue: Date | Date[] | null;
    displayFormat: string;
    i: {
        allowClear: boolean;
        showToday: boolean;
    };
    ngOnInit(): void;
    reset(value: SFValue): void;
    _change(value: Date | Date[] | null, emitModelChange?: boolean): void;
    _openChange(status: boolean): void;
    _ok(value: NzSafeAny): void;
    private get endProperty();
    private setEnd;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateWidget, "sf-date", never, {}, {}, never, never, false, never>;
}

interface SFRadioWidgetSchema extends SFUISchemaItem {
    /**
     * 异步数据源
     */
    asyncData?: () => Observable<SFSchemaEnumType[]>;
    size?: NzSizeLDSType;
    /**
     * radio 的样式，默认：`default`
     */
    styleType?: 'default' | 'button';
    /**
     * RadioButton 的风格样式，目前有描边和填色两种风格，默认：`outline`
     */
    buttonStyle?: 'outline' | 'solid';
    /**
     * 值变更事件
     */
    change?: (res: SFValue) => void;
}

declare class RadioWidget extends ControlUIWidget<SFRadioWidgetSchema> {
    data: SFSchemaEnum[];
    styleType: boolean;
    reset(value: SFValue): void;
    _setValue(value: SFValue): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioWidget, "sf-radio", never, {}, {}, never, never, false, never>;
}

interface SFCheckboxWidgetSchema extends SFUISchemaItem {
    /**
     * 异步静态数据源
     */
    asyncData?: () => Observable<SFSchemaEnumType[]>;
    /**
     * 指定每个选框单元格数量，参考[布局](https://ng.ant.design/components/checkbox/zh#components-checkbox-demo-layout)
     */
    span?: number;
    /**
     * radio的样式，默认：`default`
     */
    styleType?: 'default' | 'button';
    /**
     * 是否需要全选
     */
    checkAll?: boolean;
    /**
     * 全选按钮文本
     */
    checkAllText?: string;
    /**
     * 值变更事件，参数：单个多选框为 `boolean`，否则为 `SFSchemaEnum[]`
     */
    change?: (res: boolean | SFSchemaEnum[]) => void;
}

declare class CheckboxWidget extends ControlUIWidget<SFCheckboxWidgetSchema> {
    data: SFSchemaEnum[];
    allChecked: boolean;
    indeterminate: boolean;
    grid_span: number;
    labelTitle: string;
    inited: boolean;
    reset(value: SFValue): void;
    _setValue(value: SFValue): void;
    notifySet(): void;
    groupInGridChange(values: SFValue[]): void;
    onAllChecked(): void;
    updateAllChecked(): this;
    private notifyChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxWidget, "sf-checkbox", never, {}, {}, never, never, false, never>;
}

interface SFBooleanWidgetSchema extends SFUISchemaItem {
    /**
     * Size of the `nz-switch`
     */
    size?: NzSizeDSType;
    /**
     * Content to be shown when the state is checked
     */
    checkedChildren?: string | TemplateRef<void>;
    /**
     * Content to be shown when the state is unchecked
     */
    unCheckedChildren?: string | TemplateRef<void>;
    /**
     * Loading state of switch
     */
    loading?: boolean;
}

declare class BooleanWidget extends ControlUIWidget<SFBooleanWidgetSchema> {
    static ɵfac: i0.ɵɵFactoryDeclaration<BooleanWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BooleanWidget, "sf-boolean", never, {}, {}, never, never, false, never>;
}

interface SFTextareaWidgetSchema extends SFUISchemaItem {
    size?: NzSizeLDSType;
    /**
     * 在文字框中显示提示讯息
     */
    placeholder?: string;
    /**
     * 自适应内容高度
     */
    autosize?: {
        minRows?: number;
        maxRows?: number;
    };
    /**
     * 变体
     */
    variant?: NzVariant;
    /**
     * `textarea` maximum character count displayed
     */
    maxCharacterCount?: number;
    /**
     * Customized `characterCount` computation function | `(v: string) => number`
     */
    computeCharacterCount?: (v: string) => number;
    /**
     * 内容变更事件
     */
    change?: (val: string) => void;
    /**
     * 焦点事件
     */
    focus?: (e: FocusEvent) => void;
    /**
     * 失焦事件
     */
    blur?: (e: FocusEvent) => void;
}

declare class TextareaWidget extends ControlUIWidget<SFTextareaWidgetSchema> implements OnInit {
    autosize?: {
        minRows?: number;
        maxRows?: number;
    };
    ngOnInit(): void;
    change(val: string): void;
    focus(e: FocusEvent): void;
    blur(e: FocusEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextareaWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextareaWidget, "sf-textarea", never, {}, {}, never, never, false, never>;
}

interface SFSelectWidgetSchema extends SFUISchemaItem {
    /**
     * 异步数据源
     */
    asyncData?: () => Observable<SFSchemaEnumType[]>;
    size?: SFDLSSize;
    /**
     * 在文字框中显示提示讯息
     */
    placeholder?: string;
    /**
     * 与 [SelectControlValueAccessor](https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection) 相同
     */
    compareWith?: (o1: NzSafeAny, o2: NzSafeAny) => boolean;
    /**
     * 是否在选中项后清空搜索框，只在 `mode` 为 `multiple` 或 `tags` 时有效，默认：`true`
     */
    autoClearSearchValue?: boolean;
    /**
     * 支持清除，默认：`false`
     */
    allowClear?: boolean;
    /**
     * 变体，默认：`outlined`
     */
    variant?: NzVariant;
    /**
     * 默认获取焦点，默认：`false`
     */
    autoFocus?: boolean;
    /**
     * 下拉菜单的 className 属性
     */
    dropdownClassName?: string | string[];
    /**
     * 下拉菜单和选择器同宽，默认：`true`
     */
    dropdownMatchSelectWidth?: boolean;
    /**
     * 下拉菜单的 style 属性
     */
    dropdownStyle?: Record<string, string> | null;
    /**
     * 是否使用服务端搜索，当为 `true` 时，将不再在前端对 `nz-option` 进行过滤，默认：`false`
     */
    serverSearch?: boolean;
    /**
     * 最多选中多少个标签，默认：`Infinity`
     */
    maxMultipleCount?: number;
    /**
     * 设置 `nz-select` 的模式，`tags` 建议增加 `default: null`，否则可能会遇到初始化有一个空的标签
     */
    mode?: NzSelectModeType;
    /**
     * 当下拉列表为空时显示的内容
     */
    notFoundContent?: string;
    /**
     * 使单选模式可搜索，默认：`false`
     */
    showSearch?: boolean;
    /**
     * 搜索内容变化回调函数，参数为搜索内容，必须返回 `Promise` 对象
     */
    onSearch?: (text: string) => Promise<SFSchemaEnum[]>;
    /** 搜索抖动时间，默认：`300` */
    searchDebounceTime?: number;
    /** 搜索加载中文本 */
    searchLoadingText?: string;
    /**
     * 在 `tags` 和 `multiple` 模式下自动分词的分隔符
     */
    tokenSeparators?: string[];
    /**
     * 是否显示箭头，默认：单选为 `true`，多选为 `false`
     */
    showArrow?: boolean;
    /**
     * 最多显示多少个 tag
     */
    maxTagCount?: number;
    /**
     * 自定义选择框的Template内容
     */
    customTemplate?: TemplateRef<{
        $implicit: NzOptionComponent;
    }>;
    /**
     * 自定义的选择框后缀图标
     */
    suffixIcon?: TemplateRef<NzSafeAny> | string;
    /**
     * 自定义的多选框清除图标
     */
    removeIcon?: TemplateRef<NzSafeAny>;
    /**
     * 自定义的多选框清空图标
     */
    clearIcon?: TemplateRef<NzSafeAny>;
    /**
     * 清空时默认值，默认：`undefined`
     */
    clearValue?: NzSafeAny;
    /**
     * 自定义当前选中的条目图标
     */
    menuItemSelectedIcon?: TemplateRef<NzSafeAny>;
    /**
     * 隐藏 tag 时显示的内容
     */
    maxTagPlaceholder?: TemplateRef<{
        $implicit: NzSafeAny[];
    }>;
    /**
     * 下拉菜单中每个 Option 的高度，默认：`32`
     */
    optionHeightPx?: number;
    /**
     * 下拉菜单中最多展示的 Option 个数，超出部分滚动，默认：`8`
     */
    optionOverflowSize?: number;
    /**
     * 自由扩展
     */
    dropdownRender?: TemplateRef<NzSafeAny>;
    /**
     * 选中的 `nz-option` 发生变化时，调用此函数
     */
    change?: (ngModel: SFValue | SFValue[], orgData: SFSchemaEnum | SFSchemaEnum[]) => void;
    /**
     * 下拉菜单打开关闭回调函数
     */
    openChange?: (status: boolean) => void;
    /**
     * 下拉菜单滚动到底部回调，可用于作为动态加载的触发条件
     */
    scrollToBottom?: () => void;
}

declare class SelectWidget extends ControlUIWidget<SFSelectWidgetSchema> implements OnInit {
    private search$;
    i: SFSelectWidgetSchema;
    data: SFSchemaEnum[];
    _value: NzSafeAny;
    hasGroup: boolean;
    loading: boolean;
    private checkGroup;
    ngOnInit(): void;
    reset(value: SFValue): void;
    change(values: SFValue): void;
    private getOrgData;
    openChange(status: boolean): void;
    scrollToBottom(): void;
    onSearch(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectWidget, "sf-select", never, {}, {}, never, never, false, never>;
}

interface SFTextWidgetSchema extends SFUISchemaItem {
    /**
     * 当值不存在时所指定的文本，默认：`-`
     *
     * Default text of this item, Default: `-`
     */
    defaultText?: string;
    /**
     * 是否支持HTML，默认：`true`
     *
     * Whether to support HTML, default: `true`
     */
    html?: boolean;
}

declare class TextWidget extends ControlUIWidget<SFTextWidgetSchema> implements OnInit {
    text: string;
    ngOnInit(): void;
    reset(value: SFValue): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextWidget, "sf-text", never, {}, {}, never, never, false, never>;
}

type SFCustomWidgetSchema = SFUISchemaItem;

declare class CustomWidget extends ControlUIWidget<SFCustomWidgetSchema> {
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomWidget, "sf-custom", never, {}, {}, never, never, false, never>;
}

declare class SFTemplateDirective implements OnInit {
    private readonly table;
    private readonly templateRef;
    path: string;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SFTemplateDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SFTemplateDirective, "[sf-template]", never, { "path": { "alias": "sf-template"; "required": false; }; }, {}, never, never, false, never>;
}

declare class WidgetRegistry {
    private _widgets;
    private defaultWidget;
    get widgets(): Record<string, Widget<FormProperty, SFUISchemaItem>>;
    setDefault(widget: NzSafeAny): void;
    register(type: string, widget: NzSafeAny): void;
    has(type: string): boolean;
    getType(type: string): Widget<FormProperty, SFUISchemaItem>;
}
declare class WidgetFactory {
    private readonly registry;
    createWidget(container: ViewContainerRef, type: string): ComponentRef<Widget<FormProperty, SFUISchemaItem>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WidgetFactory>;
}

declare class NzWidgetRegistry extends WidgetRegistry {
    constructor();
}

declare abstract class Widget<T extends FormProperty, UIT extends SFUISchemaItem> implements AfterViewInit {
    readonly cd: ChangeDetectorRef;
    readonly injector: Injector;
    readonly sfItemComp: SFItemComponent;
    readonly sfComp: SFComponent;
    formProperty: T;
    error?: string;
    showError: boolean;
    id: string;
    schema: SFSchema;
    ui: UIT;
    get cls(): NgClassType;
    get disabled(): boolean;
    get l(): LocaleData;
    get oh(): SFOptionalHelp;
    get dom(): DomSanitizer;
    get cleanValue(): boolean;
    ngAfterViewInit(): void;
    setValue(value: SFValue): void;
    get value(): NzSafeAny;
    detectChanges(onlySelf?: boolean): void;
    abstract reset(value: SFValue): void;
    abstract afterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Widget<any, any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<Widget<any, any>, never, never, {}, {}, never, never, true, never>;
}
declare class ControlWidget extends Widget<FormProperty, SFUISchemaItem> {
    reset(_value: SFValue): void;
    afterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ControlWidget, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ControlWidget, never, never, {}, {}, never, never, true, never>;
}
declare class ControlUIWidget<UIT extends SFUISchemaItem> extends Widget<FormProperty, UIT> {
    reset(_value: SFValue): void;
    afterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ControlUIWidget<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ControlUIWidget<any>, never, never, {}, {}, never, never, true, never>;
}
declare class ArrayLayoutWidget extends Widget<ArrayProperty, SFArrayWidgetSchema> implements AfterViewInit {
    reset(_value: SFValue): void;
    afterViewInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArrayLayoutWidget, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ArrayLayoutWidget, never, never, {}, {}, never, never, true, never>;
}
declare class ObjectLayoutWidget extends Widget<ObjectProperty, SFObjectWidgetSchema> implements AfterViewInit {
    reset(_value: SFValue): void;
    afterViewInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ObjectLayoutWidget, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ObjectLayoutWidget, never, never, {}, {}, never, never, true, never>;
}

declare abstract class FormProperty {
    private injector;
    private _options;
    private _errors;
    private _valueChanges;
    private _errorsChanges;
    private _visible;
    private _visibilityChanges;
    private _root;
    private _parent;
    _objErrors: Record<string, ErrorData[]>;
    schemaValidator: (value: SFValue) => ErrorData[];
    schema: SFSchema;
    ui: SFUISchema | SFUISchemaItemRun;
    formData: Record<string, unknown>;
    _value: SFValue;
    widget: Widget<FormProperty, SFUISchemaItem>;
    path: string;
    propertyId?: string;
    constructor(injector: Injector, schemaValidatorFactory: SchemaValidatorFactory, schema: SFSchema, ui: SFUISchema | SFUISchemaItem, formData: Record<string, unknown>, parent: PropertyGroup | null, path: string, _options: AlainSFConfig);
    get valueChanges(): BehaviorSubject<SFFormValueChange>;
    get errorsChanges(): BehaviorSubject<ErrorData[] | null>;
    get type(): SFSchemaType;
    get parent(): PropertyGroup | null;
    get root(): PropertyGroup;
    get value(): SFValue;
    get errors(): ErrorData[] | null;
    get visible(): boolean;
    get valid(): boolean;
    get options(): AlainSFConfig;
    /**
     * 设置值
     *
     * @param onlySelf `true` 只对当前字段更新值和校验；`false` 包含上级字段
     */
    abstract setValue(value: SFValue, onlySelf: boolean): void;
    /**
     * 重置值，默认值为 `schema.default`
     *
     * @param onlySelf `true` 只对当前字段更新值和校验；`false` 包含上级字段
     */
    abstract resetValue(value: SFValue, onlySelf: boolean): void;
    cd(onlySelf?: boolean): void;
    /**
     * 更新值且校验数据
     */
    updateValueAndValidity(options?: SFUpdateValueAndValidity): void;
    /** 根据路径搜索表单属性 */
    searchProperty(path: string): FormProperty | null;
    /** 查找根表单属性 */
    findRoot(): PropertyGroup;
    private isEmptyData;
    private setCustomErrors;
    /**
     * Set the current error message
     *
     * 设置当前错误消息
     *
     * @param emitFormat 若提供的消息带有 `{xx}` 会自动根据参数进行转化，包含自定义函数
     *
     * @example
     *
     * this.sf.getProperty('/name')?.setErrors({ keyword: 'required' });
     * this.sf.getProperty('/name')?.setErrors({ message: 'Please input your username!' });
     * this.sf.getProperty('/name')?.setErrors(); // Clean error
     */
    setErrors(errors?: ErrorData | ErrorData[], emitFormat?: boolean): void;
    setParentAndPlatErrors(errors: ErrorData[], path: string): void;
    /**
     * Set the hide or display of widget
     * 设置小部件的隐藏或显示
     */
    setVisible(visible: boolean): this;
    _bindVisibility(): void;
    updateFeedback(status?: NzFormControlStatusType): void;
}
declare abstract class PropertyGroup extends FormProperty {
    properties: Record<string, FormProperty> | FormProperty[] | null;
    getProperty(path: string): FormProperty | undefined;
    forEachChild(fn: (formProperty: FormProperty, str: string) => void): void;
    forEachChildRecursive(fn: (formProperty: FormProperty) => void): void;
    _bindVisibility(): void;
    private _bindVisibilityRecursive;
    isRoot(): boolean;
}

type SFPlacement = 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
type SFTrigger = 'click' | 'focus' | 'hover';
type SFLSSize = 'large' | 'small';
type SFDLSSize = NzSizeLDSType;
interface SFGridSizeSchema {
    span?: number | null;
    order?: number | null;
    offset?: number | null;
    push?: number | null;
    pull?: number | null;
}
interface SFGridSchema {
    /**
     * 栅格间隔
     */
    gutter?: number | null;
    /**
     * 栅格占位格数，为 `0` 时相当于 `display: none`
     */
    span?: number | null;
    /**
     * 数组索引栅格占位格数，为 `0` 时相当于 `display: none`，限 `type: 'array'` 时有效
     */
    arraySpan?: number | null;
    /**
     * 栅格左侧的间隔格数，间隔内不可以有栅格
     */
    offset?: number | null;
    xs?: number | SFGridSizeSchema;
    sm?: number | SFGridSizeSchema;
    md?: number | SFGridSizeSchema;
    lg?: number | SFGridSizeSchema;
    xl?: number | SFGridSizeSchema;
    xxl?: number | SFGridSizeSchema;
}
type SFBuiltInWidgets = 'text' | 'string' | 'number' | 'integer' | 'date' | 'time' | 'radio' | 'checkbox' | 'boolean' | 'textarea' | 'select' | 'tree-select' | 'tag' | 'upload' | 'transfer' | 'slider' | 'rate' | 'autocomplete' | 'cascader' | 'mention' | 'custom' | 'array' | 'object';
interface SFRenderSchema {
    /**
     * 指定采用什么小部件渲染，所有小部件名可[查阅文档](https://ng-alain.com/)
     */
    widget?: SFBuiltInWidgets | (string & {});
    /**
     * 自定义类，等同 `[ngClass]` 值
     */
    class?: NgClassType;
    /**
     * 元素组件大小
     */
    size?: SFDLSSize;
    /**
     * 指定宽度，单位：`px`
     */
    width?: number;
    /**
     * 响应式属性
     */
    grid?: SFGridSchema;
    /**
     * 标签可选信息
     */
    optional?: string;
    /**
     * 标签可选帮助，使用 `nz-tooltip` 展示
     */
    optionalHelp?: string | SFOptionalHelp;
}
interface SFOptionalHelp {
    text?: string;
    i18n?: string;
    /** 文字提示背景颜色 */
    bgColor?: string;
    /** 图标，默认：`question-circle` */
    icon?: string;
    placement?: SFPlacement;
    trigger?: SFTrigger;
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
    overlayClassName?: string;
    overlayStyle?: NgStyleInterface;
}
interface SFHorizontalLayoutSchema {
    /**
     * `label` 栅格占位格数，默认：`5`
     * - `0` 时相当于 `display: none`
     * - 限 `horizontal` 水平布局有效
     */
    spanLabel?: number | null;
    /**
     * `control` 栅格占位格数，默认：`19`
     * - `0` 时相当于 `display: none`
     * - 限 `horizontal` 水平布局有效
     */
    spanControl?: number | null;
    /**
     * `control` 栅格左侧的间隔格数，间隔内不可以有栅格
     * - 限 `horizontal` 水平布局有效
     */
    offsetControl?: number | null;
    /**
     * `label` 固定宽度
     * - 限 `horizontal` 水平布局有效
     */
    spanLabelFixed?: number | null;
}
interface SFSchemaI18n {
    /**
     * 指 `schema.title` 的国际化键值
     */
    i18n?: string;
    /**
     * 对应 `schema.description` 国际化
     */
    descriptionI18n?: string;
}
interface SFVisibleIfReturn {
    show?: boolean;
    required?: boolean;
}
type SFVisibleIf = Record<string, NzSafeAny[] | ((value: SFValue, property: FormProperty) => boolean | SFVisibleIfReturn | null)>;
/** 指定如何渲染 `Schema` */
interface SFUISchemaItem extends SFRenderSchema, SFHorizontalLayoutSchema, ErrorSchema, SFSchemaI18n {
    [key: string]: NzSafeAny;
    /**
     * Whether to enable the debug mode, the trust information will be printed out when the data is changed and verified, it is not recommended to use it in the production environment
     *
     * 是否开启调试模式，在数据变更、校验会打印出相信信息，不建议在生产环境中使用
     */
    debug?: boolean;
    /**
     * Order of property
     *
     * 属性顺序，当你只想某几个属性靠前时，则允许使用通配符 `*` 来表示剩余部分，且只允许出现一次
     *
     * @example
     *
     * [ 'a', 'b', 'c', 'd' ] + [ 'c', 'b', '*' ] = [ 'c', 'b', 'a', 'd']
     */
    order?: string[];
    /**
     * Whether to hide
     *
     * 是否隐藏
     */
    hidden?: boolean;
    /**
     * Is visible with conditions (When there are multiple, you can specify logic vis `visibleIfLogical`)
     *
     * 指定条件时才显示（当多个时可以通过 `visibleIfLogical` 来指定处理逻辑），但需要**注意**：
     * - 键值表示监听对象属性名
     * - JSON Schema 校验是各属性独立运行，监听对象属性每一次值变化都会重新做一次整个JSON结构计算
     *
     * 有效格式包括：
     * - `visibleIf: { shown: [ true ] }`：当 `shown: true` 时才显示当前属性
     * - `visibleIf: { shown: [ '$ANY$' ] }`：当 `shown` 包括任意值时
     * - `visibleIf: { shown: (value: any, property: FormProperty) => value > 0 }`：复杂表达式
     */
    visibleIf?: SFVisibleIf;
    /**
     * The logical used when specifying multiple `visibleIf`, default: `or`
     *
     * 指定多个 `visibleIf` 时采用的逻辑关系，默认：`or`
     */
    visibleIfLogical?: 'or' | 'and';
    /**
     * ACL 配置
     */
    acl?: ACLCanType | null;
}
/**
 * UI Schema，KEY名**务必**是 `$` 开头（例如：`$name`、`$id`），以便能区分KEY值还是UI选项
 * - 结构层级应同 `SFSchema` 一致
 * - 当KEY为 `*` 时表示对所有子表单元素都有效
 */
type SFUISchema = Record<string, SFUISchemaItem | SFUISchemaItemRun>;
/**
 * @inner
 */
interface SFUISchemaItemRun extends SFUISchemaItem {
}

type SFValue = NzSafeAny;
type SFLayout = 'horizontal' | 'vertical' | 'inline';
type SFMode = 'default' | 'search' | 'edit';
interface SFFormValueChange {
    path: string | null;
    pathValue: SFValue;
    value: SFValue;
}
interface SFValueChange {
    /**
     * Always return complete data
     */
    value: SFValue;
    /**
     * Current triggered path
     */
    path: string | null;
    /**
     * Current path value
     */
    pathValue: SFValue;
}
interface SFUpdateValueAndValidity {
    /**
     * 是否包含上级字段，默认：`false`
     */
    onlySelf?: boolean;
    /**
     * 是否触发值变更通知，默认：`true`
     */
    emitValueEvent?: boolean;
    /**
     * 是否触发校验，默认：`true`
     */
    emitValidator?: boolean;
    /**
     * 当前更新路径
     */
    updatePath?: string;
    /**
     * 当前更新路径对应值
     */
    updateValue?: SFValue | null;
}
interface SFButton {
    /** 提交按钮文本，默认：`提交` */
    submit?: string;
    /** 提交按钮类型，默认：`primary` */
    submit_type?: NzButtonType;
    /** 提交按钮图标 */
    submit_icon?: SFButtonIcon;
    /** 重置按钮文本，`null `或 `undefined` 表示不需要该按钮，默认：`重置` */
    reset?: string;
    /** 重置按钮类型，默认：`default` */
    reset_type?: NzButtonType;
    /** 重置按钮图标 */
    reset_icon?: SFButtonIcon;
    /** 按钮样式，主要用于指定按钮 `grid`、`class` 属性 */
    render?: SFRenderButton;
    /** 搜索按钮文本，默认：`搜索` */
    search?: string;
    /** 编辑按钮文本，默认：`保存` */
    edit?: string;
}
interface SFButtonIcon {
    /** 等同 `nz-icon` 的 `nzType` 值 */
    type?: string;
    /** 图标主题风格，默认：`outline` */
    theme?: 'outline' | 'twotone' | 'fill';
    /** 仅适用双色图标，设置双色图标的主要颜色，仅对当前 icon 生效 */
    twoToneColor?: string;
    /** 指定来自 IconFont 的图标类型 */
    iconfont?: string;
}
interface SFRenderButton extends SFHorizontalLayoutSchema, SFRenderSchema {
}
interface SFIcon {
    type?: string;
    theme?: 'fill' | 'outline' | 'twotone';
    twotoneColor?: string;
    rotate?: number;
    spin?: boolean;
    iconfont?: string;
}

declare const ERRORSDEFAULT: {
    'false schema': string;
    $ref: string;
    additionalItems: string;
    additionalProperties: string;
    anyOf: string;
    dependencies: string;
    enum: string;
    format: string;
    type: string;
    required: string;
    maxLength: string;
    minLength: string;
    minimum: string;
    formatMinimum: string;
    maximum: string;
    formatMaximum: string;
    maxItems: string;
    minItems: string;
    maxProperties: string;
    minProperties: string;
    multipleOf: string;
    not: string;
    oneOf: string;
    pattern: string;
    uniqueItems: string;
    custom: string;
    propertyNames: string;
    patternRequired: string;
    switch: string;
    const: string;
    contains: string;
    formatExclusiveMaximum: string;
    formatExclusiveMinimum: string;
    if: string;
};
interface ErrorData {
    [key: string]: NzSafeAny;
    /**
     * When specifying `keyword`, you can use `sf` built-in some common types [ERRORSDEFAULT](https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4) , direct conversion. Or use the `message` parameter to specify an error message.
     *
     * 当指定 `keyword` 时，可以利用 `sf` 内置一些常见类型 [ERRORSDEFAULT](https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4)，直接转化。或者使用 `message` 参数来指定错误消息。
     */
    keyword?: string | null;
    dataPath?: string;
    data?: unknown;
    schemaPath?: string;
    instancePath?: string;
    /**
     * Parameters required for template parsing
     *
     * 指定模板解析所需要的参数
     */
    params?: Record<string, NzSafeAny>;
    /**
     * Specify error message
     *
     * 指定错误消息
     */
    message?: string | ((err: ErrorData) => string);
}
interface ErrorSchema {
    /**
     * 是否实时校验，默认：`true`
     * - `true` 每一次都校验
     * - `false` 提交时校验
     */
    liveValidate?: boolean;
    /**
     * 自定义错误信息文本，键名赞同 `ErrorData.keyword` 值
     */
    errors?: Record<string, string | ((obj: ErrorData) => string)>;
    /**
     * 是否只展示错误视觉不显示错误文本，默认：`false`
     */
    onlyVisual?: boolean;
    /**
     * 是否忽略某些数据类型校验 `ERRORSDEFAULT`
     * - 值始终包含 `DelonSchemaFormConfig.ingoreKeywords`
     */
    ingoreKeywords?: string[];
    /**
     * Whether to force to display `*` on the label to indicate that it is required
     *
     * 是否强制在标签上显示 `*` 来表示必填，一般在当使用自定义校验 `validator` 可能需要必填项处理
     */
    showRequired?: boolean;
    /**
     * Custom verification, the final result will be merged with Ajv verification results
     *
     * 自定义校验，最后结果会与 Ajv 校验结果进行合并显示
     */
    validator?: (value: SFValue, formProperty: FormProperty, form: PropertyGroup) => ErrorData[] | Observable<ErrorData[]>;
    /**
     * Form status value, only supports `this.sf.getProperty('/department')?.updateFeedback('validating')` calling method
     *
     * 表单状态值，只支持 `this.sf.getProperty('/department')?.updateFeedback('validating')` 调用方式
     *
     * > 注：若遇到出现校验时失焦，可尝试取消
     */
    feedback?: NzFormControlStatusType;
}

declare function useFactory(injector: Injector, schemaValidatorFactory: SchemaValidatorFactory, cogSrv: AlainConfigService): FormPropertyFactory;
declare class SFComponent implements OnInit, OnChanges, OnDestroy {
    private readonly formPropertyFactory;
    private readonly terminator;
    private readonly dom;
    private readonly cdr;
    private readonly localeSrv;
    private readonly aclSrv;
    private readonly i18nSrv;
    private readonly platform;
    private readonly cogSrv;
    private _renders;
    private _item;
    private _valid;
    private _defUi;
    readonly options: AlainSFConfig;
    _inited: boolean;
    locale: LocaleData;
    rootProperty: FormProperty | null;
    _formData: Record<string, unknown>;
    _btn: SFButton;
    _schema: SFSchema;
    _ui: SFUISchema;
    get btnGrid(): NzSafeAny;
    /** 表单布局，等同 `nzLayout`，默认：horizontal */
    layout: SFLayout;
    /** JSON Schema */
    schema: SFSchema;
    /** UI Schema */
    ui: SFUISchema;
    /** 表单默认值 */
    formData?: Record<string, NzSafeAny>;
    /**
     * 按钮
     * - 值为 `null` 或 `undefined` 表示手动添加按钮，但保留容器
     * - 值为 `none` 表示手动添加按钮，且不保留容器
     * - 使用 `spanLabelFixed` 固定标签宽度时，若无 `render.class` 则默认为居中状态
     */
    button?: SFButton | 'none' | null;
    /**
     * 是否实时校验，默认：`true`
     * - `true` 每一次都校验
     * - `false` 提交时校验
     */
    liveValidate: boolean;
    /** 指定表单 `autocomplete` 值 */
    autocomplete: 'on' | 'off';
    /**
     * Whether to display error visuals immediately
     *
     * 是否立即显示错误视觉
     */
    firstVisual: boolean;
    /**
     * Whether to only display error visuals but not error text
     *
     * 是否只展示错误视觉不显示错误文本
     */
    onlyVisual: boolean;
    compact: boolean;
    /**
     * Form default mode, will force override `layout`, `firstVisual`, `liveValidate` parameters
     *
     * 表单预设模式，会强制覆盖 `layout`，`firstVisual`，`liveValidate` 参数
     */
    set mode(value: SFMode);
    get mode(): SFMode;
    private _mode;
    /**
     * Whether to load status，when `true` reset button is disabled status, submit button is loading status
     */
    loading: boolean;
    disabled: boolean;
    noColon: boolean;
    cleanValue: boolean;
    delay: boolean;
    readonly formValueChange: EventEmitter<SFValueChange>;
    readonly formChange: EventEmitter<Record<string, unknown>>;
    readonly formSubmit: EventEmitter<Record<string, unknown>>;
    readonly formReset: EventEmitter<Record<string, unknown>>;
    readonly formError: EventEmitter<ErrorData[]>;
    /**
     * Whether the form is valid
     *
     * 表单是否有效
     */
    get valid(): boolean;
    /**
     * The value of the form
     *
     * 表单值
     */
    get value(): Record<string, NzSafeAny>;
    /**
     * Get form element property based on [path](https://ng-alain.com/form/qa#path)
     *
     * 根据[路径](https://ng-alain.com/form/qa#path)获取表单元素属性
     */
    getProperty(path: string): FormProperty | null | undefined;
    /**
     * Get element value based on [path](https://ng-alain.com/form/qa#path)
     *
     * 根据[路径](https://ng-alain.com/form/qa#path)获取表单元素值
     */
    getValue(path: string): NzSafeAny;
    /**
     * Set form element new value based on [path](https://ng-alain.com/form/qa#path)
     *
     * 根据[路径](https://ng-alain.com/form/qa#path)设置某个表单元素属性值
     */
    setValue(path: string, value: NzSafeAny): this;
    /**
     * Set form element new `disabled` based on [path](https://ng-alain.com/form/qa#path)
     *
     * 根据[路径](https://ng-alain.com/form/qa#path)设置某个表单元素 `disabled` 状态
     */
    setDisabled(path: string, status: boolean): this;
    /**
     * Set form element new `required` based on [path](https://ng-alain.com/form/qa#path)
     *
     * 根据[路径](https://ng-alain.com/form/qa#path)设置某个表单元素 `required` 状态
     */
    setRequired(path: string, status: boolean): this;
    /**
     * Update the feedback status of the widget
     *
     * 更新小部件的反馈状态
     *
     * ```ts
     * // Validate status of the widget
     * this.sf.updateFeedback('/name', 'validating');
     * // Clean validate status of the widget
     * this.sf.updateFeedback('/name');
     * ```
     */
    updateFeedback(path: string, status?: NzFormControlStatusType): this;
    onSubmit(e: Event): void;
    constructor();
    protected fanyi(key: string): string;
    private inheritUI;
    private coverProperty;
    private coverButtonProperty;
    ngOnInit(): void;
    ngOnChanges(changes: {
        [P in keyof this]?: SimpleChange;
    } & SimpleChanges): void;
    private attachCustomRender;
    /**
     * Validator the form is valid
     *
     * 校验表单是否有效
     * - `emitError` 当表单无效时是否触发 `formError` 事件，默认：`true`
     * - `onlyRoot` 只对根进行检验，不进行向下逐个递归，根已经包含整个 Json Schema，默认：`true`
     */
    validator(options?: {
        emitError?: boolean;
        onlyRoot?: boolean;
    }): boolean;
    /**
     * Refresh the form Schema, when specifying `newSchema` means to replace the current Schema
     *
     * 刷新 Schema，当指定 `newSchema` 表示替换当前的 Schema
     *
     * 可以针对某个表单元素进行刷新，例如：
     * ```
     * // 获取某个元素
     * const statusProperty = this.sf.getProperty('/status')!;
     * // 重置 `schema` 或 `ui` 参数
     * statusProperty.schema.enum = ['1', '2', '3'];
     * // 调用 `reset` 重置初始值
     * statusProperty.widget.reset('2');
     * ```
     */
    refreshSchema(newSchema?: SFSchema, newUI?: SFUISchema): this;
    /**
     * Reset form
     *
     * 重置表单
     *
     * @param [emit] 是否触发 `formReset` 事件，默认：`false`
     */
    reset(emit?: boolean): this;
    private cleanRootSub;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SFComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SFComponent, "sf, [sf]", ["sf"], { "layout": { "alias": "layout"; "required": false; }; "schema": { "alias": "schema"; "required": false; }; "ui": { "alias": "ui"; "required": false; }; "formData": { "alias": "formData"; "required": false; }; "button": { "alias": "button"; "required": false; }; "liveValidate": { "alias": "liveValidate"; "required": false; }; "autocomplete": { "alias": "autocomplete"; "required": false; }; "firstVisual": { "alias": "firstVisual"; "required": false; }; "onlyVisual": { "alias": "onlyVisual"; "required": false; }; "compact": { "alias": "compact"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "noColon": { "alias": "noColon"; "required": false; }; "cleanValue": { "alias": "cleanValue"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; }, { "formValueChange": "formValueChange"; "formChange": "formChange"; "formSubmit": "formSubmit"; "formReset": "formReset"; "formError": "formError"; }, never, ["*"], false, never>;
    static ngAcceptInputType_liveValidate: unknown;
    static ngAcceptInputType_firstVisual: unknown;
    static ngAcceptInputType_onlyVisual: unknown;
    static ngAcceptInputType_compact: unknown;
    static ngAcceptInputType_loading: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_noColon: unknown;
    static ngAcceptInputType_cleanValue: unknown;
    static ngAcceptInputType_delay: unknown;
}

declare class SFFixedDirective implements AfterViewInit, OnChanges {
    private readonly el;
    private readonly render;
    private _inited;
    num?: number | null;
    private init;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SFFixedDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SFFixedDirective, "[fixed-label]", never, { "num": { "alias": "fixed-label"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_num: unknown;
}

declare class SFItemWrapComponent implements OnChanges {
    private readonly statusSrv;
    _showTitle: boolean;
    id?: string;
    schema: SFSchema;
    ui: SFUISchemaItem;
    showError?: boolean;
    error?: string;
    set showTitle(val: boolean | string | null | undefined);
    title: string | null;
    get t(): string;
    get oh(): SFOptionalHelp;
    protected readonly nzValidateAnimationEnter: i0.Signal<string>;
    protected readonly nzValidateAnimationLeave: i0.Signal<string>;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SFItemWrapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SFItemWrapComponent, "sf-item-wrap", never, { "id": { "alias": "id"; "required": false; }; "schema": { "alias": "schema"; "required": false; }; "ui": { "alias": "ui"; "required": false; }; "showError": { "alias": "showError"; "required": false; }; "error": { "alias": "error"; "required": false; }; "showTitle": { "alias": "showTitle"; "required": false; }; "title": { "alias": "title"; "required": false; }; }, {}, never, ["*"], false, never>;
}

declare class DelonFormModule {
    static forRoot(): ModuleWithProviders<DelonFormModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DelonFormModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DelonFormModule, [typeof SFComponent, typeof SFItemComponent, typeof SFItemWrapComponent, typeof SFTemplateDirective, typeof SFFixedDirective, typeof ObjectWidget, typeof ArrayWidget, typeof StringWidget, typeof NumberWidget, typeof DateWidget, typeof RadioWidget, typeof CheckboxWidget, typeof BooleanWidget, typeof TextareaWidget, typeof SelectWidget, typeof CustomWidget, typeof TextWidget], [typeof i18.CommonModule, typeof i19.FormsModule, typeof i20.DelonLocaleModule, typeof i21.CdkTextareaAutosize, typeof i22.NzButtonModule, typeof i23.NzCardModule, typeof i24.NzCheckboxModule, typeof i25.NzDatePickerModule, typeof i26.NzFormModule, typeof i27.NzGridModule, typeof i28.NzIconModule, typeof i29.NzInputModule, typeof i30.NzInputNumberModule, typeof i31.NzModalModule, typeof i32.NzRadioModule, typeof i33.NzSelectModule, typeof i34.NzSwitchModule, typeof i35.NzTooltipModule], [typeof SFComponent, typeof SFItemComponent, typeof SFItemWrapComponent, typeof SFTemplateDirective, typeof SFFixedDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DelonFormModule>;
}

declare abstract class AtomicProperty extends FormProperty {
    abstract fallbackValue(): SFValue;
    setValue(value: SFValue, onlySelf: boolean): void;
    resetValue(value: SFValue, onlySelf: boolean): void;
    _hasValue(): boolean;
    _updateValue(): void;
}

declare class StringProperty extends AtomicProperty {
    fallbackValue(): null;
    setValue(value: SFValue, onlySelf: boolean): void;
}

declare class NumberProperty extends AtomicProperty {
    fallbackValue(): null;
    setValue(value: SFValue, onlySelf: boolean): void;
}

declare class BooleanProperty extends AtomicProperty {
    fallbackValue(): SFValue;
}

interface SFWidgetProvideConfig {
    KEY: string;
    type: NzSafeAny;
}
/**
 * Just only using Standalone widgets
 */
declare function provideSFConfig(options?: {
    widgets?: SFWidgetProvideConfig[];
}): EnvironmentProviders;

declare function isBlank(o: NzSafeAny): boolean;
declare function toBool(value: NzSafeAny, defaultValue: boolean): boolean;
declare function di(ui: SFUISchema, ...args: NzSafeAny[]): void;
/**
 * 取回Schema，并处理 `$ref` 的关系
 */
declare function retrieveSchema(schema: SFSchema, definitions?: SFSchemaDefinition): SFSchema;
declare function resolveIfSchema(_schema: SFSchema, _ui: SFUISchemaItemRun): void;
declare function orderProperties(properties: string[], order: string[]): string[];
declare function getEnum(list: NzSafeAny[], formData: NzSafeAny, readOnly: boolean): SFSchemaEnum[];
declare function getCopyEnum(list: NzSafeAny[], formData: NzSafeAny, readOnly: boolean): SFSchemaEnum[];
declare function getData(schema: SFSchema, ui: SFUISchemaItem, formData: NzSafeAny, asyncArgs?: NzSafeAny): Observable<SFSchemaEnum[]>;
/**
 * Whether to using date-fns to format a date
 */
declare function isDateFns(srv: NzI18nService): boolean;

export { AjvSchemaValidatorFactory, ArrayLayoutWidget, ArrayProperty, ArrayWidget, AtomicProperty, BooleanProperty, BooleanWidget, CheckboxWidget, ControlUIWidget, ControlWidget, CustomWidget, DateWidget, DelonFormModule, ERRORSDEFAULT, FormProperty, FormPropertyFactory, NumberProperty, NumberWidget, NzWidgetRegistry, ObjectLayoutWidget, ObjectProperty, ObjectWidget, PropertyGroup, RadioWidget, SFComponent, SFFixedDirective, SFItemComponent, SFItemWrapComponent, SFTemplateDirective, SF_DEFAULT_CONFIG, SchemaValidatorFactory, SelectWidget, StringProperty, StringWidget, TextWidget, TextareaWidget, Widget, WidgetFactory, WidgetRegistry, di, getCopyEnum, getData, getEnum, isBlank, isDateFns, mergeConfig, orderProperties, provideSFConfig, resolveIfSchema, retrieveSchema, toBool, useFactory };
export type { ErrorData, ErrorSchema, SFArrayWidgetSchema, SFBuiltInWidgets, SFButton, SFButtonIcon, SFCheckboxWidgetSchema, SFCustomWidgetSchema, SFDLSSize, SFDateWidgetSchema, SFFormValueChange, SFGridSchema, SFGridSizeSchema, SFHorizontalLayoutSchema, SFIcon, SFLSSize, SFLayout, SFMode, SFNumberWidgetSchema, SFObjectWidgetRenderType, SFObjectWidgetSchema, SFOptionalHelp, SFPlacement, SFRadioWidgetSchema, SFRenderButton, SFRenderSchema, SFSchema, SFSchemaDefinition, SFSchemaEnum, SFSchemaEnumType, SFSchemaI18n, SFSchemaType, SFSelectWidgetSchema, SFStringWidgetSchema, SFTextWidgetSchema, SFTextareaWidgetSchema, SFTrigger, SFUISchema, SFUISchemaItem, SFUISchemaItemRun, SFUpdateValueAndValidity, SFValue, SFValueChange, SFVisibleIf, SFVisibleIfReturn, SFWidgetProvideConfig };
