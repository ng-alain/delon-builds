import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ACLService } from '@delon/acl';
import { AlainI18NService, DelonLocaleService, LocaleData } from '@delon/theme';
import { AlainConfigService, AlainSFConfig } from '@delon/util/config';
import { BooleanInput } from '@delon/util/decorator';
import { ErrorData } from './errors';
import { SFButton, SFLayout, SFValueChange } from './interface';
import { FormProperty } from './model/form.property';
import { FormPropertyFactory } from './model/form.property.factory';
import { SFSchema } from './schema/index';
import { SFUISchema } from './schema/ui';
import { TerminatorService } from './terminator.service';
import { SchemaValidatorFactory } from './validator.factory';
export declare function useFactory(schemaValidatorFactory: SchemaValidatorFactory, cogSrv: AlainConfigService): FormPropertyFactory;
export declare type SFMode = 'default' | 'search' | 'edit';
export declare class SFComponent implements OnInit, OnChanges, OnDestroy {
    private formPropertyFactory;
    private terminator;
    private dom;
    private cdr;
    private localeSrv;
    private aclSrv;
    private i18nSrv;
    private platform;
    static ngAcceptInputType_liveValidate: BooleanInput;
    static ngAcceptInputType_firstVisual: BooleanInput;
    static ngAcceptInputType_onlyVisual: BooleanInput;
    static ngAcceptInputType_compact: BooleanInput;
    static ngAcceptInputType_loading: BooleanInput;
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_noColon: BooleanInput;
    static ngAcceptInputType_cleanValue: BooleanInput;
    private _renders;
    private _item;
    private _valid;
    private _defUi;
    readonly options: AlainSFConfig;
    _inited: boolean;
    locale: LocaleData;
    rootProperty: FormProperty | null;
    _formData: {};
    _btn: SFButton;
    _schema: SFSchema;
    _ui: SFUISchema;
    get btnGrid(): any;
    /** 表单布局，等同 `nzLayout`，默认：horizontal */
    layout: SFLayout;
    /** JSON Schema */
    schema: SFSchema;
    /** UI Schema */
    ui: SFUISchema;
    /** 表单默认值 */
    formData: {};
    /**
     * 按钮
     * - 值为 `null` 或 `undefined` 表示手动添加按钮，但保留容器
     * - 值为 `none` 表示手动添加按钮，且不保留容器
     * - 使用 `spanLabelFixed` 固定标签宽度时，若无 `render.class` 则默认为居中状态
     */
    button: SFButton | 'none';
    /**
     * 是否实时校验，默认：`true`
     * - `true` 每一次都校验
     * - `false` 提交时校验
     */
    liveValidate: boolean;
    /** 指定表单 `autocomplete` 值 */
    autocomplete: 'on' | 'off';
    /** 立即显示错误视觉 */
    firstVisual: boolean;
    /** 是否只展示错误视觉不显示错误文本 */
    onlyVisual: boolean;
    compact: boolean;
    /** 表单模式 */
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
    readonly formValueChange: EventEmitter<SFValueChange>;
    readonly formChange: EventEmitter<{}>;
    readonly formSubmit: EventEmitter<{}>;
    readonly formReset: EventEmitter<{}>;
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
    get value(): {
        [key: string]: any;
    };
    /**
     * Get form element property based on [path](https://ng-alain.com/form/qa#path)
     *
     * 根据[路径](https://ng-alain.com/form/qa#path)获取表单元素属性
     */
    getProperty(path: string): FormProperty | null;
    /**
     * Get element value based on [path](https://ng-alain.com/form/qa#path)
     *
     * 根据[路径](https://ng-alain.com/form/qa#path)获取表单元素值
     */
    getValue(path: string): any;
    /**
     * Set form element new value based on [path](https://ng-alain.com/form/qa#path)
     *
     * 根据[路径](https://ng-alain.com/form/qa#path)设置某个表单元素属性值
     */
    setValue(path: string, value: any): this;
    onSubmit(e: Event): void;
    constructor(formPropertyFactory: FormPropertyFactory, terminator: TerminatorService, dom: DomSanitizer, cdr: ChangeDetectorRef, localeSrv: DelonLocaleService, aclSrv: ACLService, i18nSrv: AlainI18NService, cogSrv: AlainConfigService, platform: Platform);
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
     * @param [emit] 是否触发 `formReset` 事件，默认：`false`
     */
    reset(emit?: boolean): this;
    private cleanRootSub;
    ngOnDestroy(): void;
}
