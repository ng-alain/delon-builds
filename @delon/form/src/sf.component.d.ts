import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { DelonFormConfig } from './config';
import { ErrorData } from './errors';
import { SFButton } from './interface';
import { FormProperty } from './model/form.property';
import { FormPropertyFactory } from './model/form.property.factory';
import { SFSchema } from './schema/index';
import { SFUISchema } from './schema/ui';
import { TerminatorService } from './terminator.service';
import { SchemaValidatorFactory } from './validator.factory';
export declare function useFactory(schemaValidatorFactory: SchemaValidatorFactory, options: DelonFormConfig): FormPropertyFactory;
export declare class SFComponent implements OnInit, OnChanges, OnDestroy {
    private formPropertyFactory;
    private terminator;
    private options;
    private cdr;
    private i18n;
    private i18n$;
    locale: any;
    private _renders;
    private _item;
    private _valid;
    private _defUi;
    private _inited;
    rootProperty: FormProperty;
    _formData: {};
    _btn: SFButton;
    _schema: SFSchema;
    _ui: SFUISchema;
    /** 表单布局，等同 `nzLayout`，默认：horizontal */
    layout: 'horizontal' | 'vertical' | 'inline';
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
    /** 表单模式 */
    mode: 'default' | 'search' | 'edit';
    private _mode;
    /** 数据变更时回调 */
    readonly formChange: EventEmitter<{}>;
    /** 提交表单时回调 */
    readonly formSubmit: EventEmitter<{}>;
    /** 重置表单时回调 */
    readonly formReset: EventEmitter<{}>;
    /** 表单校验结果回调 */
    readonly formError: EventEmitter<ErrorData[]>;
    /** 表单校验状态 */
    readonly valid: boolean;
    /** 表单值 */
    readonly value: {
        [key: string]: any;
    };
    /**
     * 根据路径获取表单元素属性
     * @param path [路径](https://ng-alain.com/form/qa#path)
     */
    getProperty(path: string): FormProperty;
    /**
     * 根据路径获取表单元素当前值
     * @param path [路径](https://ng-alain.com/form/qa#path)
     */
    getValue(path: string): any;
    /**
     * 根据路径设置某个表单元素属性值
     * @param path [路径](https://ng-alain.com/form/qa#path)
     * @param value 新值
     */
    setValue(path: string, value: any): this;
    onSubmit(e: Event): void;
    constructor(formPropertyFactory: FormPropertyFactory, terminator: TerminatorService, options: DelonFormConfig, cdr: ChangeDetectorRef, i18n: DelonLocaleService);
    private coverProperty;
    private coverButtonProperty;
    ngOnInit(): void;
    ngOnChanges(): void;
    private attachCustomRender;
    validator(): this;
    /**
     * 刷新 Schema，一般需要动态修改 Schema 某个值时可以方便调用
     */
    refreshSchema(newSchema?: SFSchema, newUI?: SFUISchema): this;
    /**
     * 重置表单
     * @param [emit] 是否触发 `formReset` 事件，默认：`false`
     */
    reset(emit?: boolean): this;
    private cleanRootSub;
    ngOnDestroy(): void;
}
