import { OnInit, OnChanges, OnDestroy, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { DelonFormConfig } from './config';
import { TerminatorService } from './terminator.service';
import { SFSchema } from './schema/index';
import { SFUISchema } from './schema/ui';
import { FormProperty } from './model/form.property';
import { FormPropertyFactory } from './model/form.property.factory';
import { SFButton } from './interface';
import { ErrorData } from './errors';
export declare function useFactory(schemaValidatorFactory: any, options: DelonFormConfig): FormPropertyFactory;
export declare class SFComponent implements OnInit, OnChanges, OnDestroy {
    private formPropertyFactory;
    private terminator;
    private options;
    private cd;
    private i18n;
    private i18n$;
    private locale;
    private _renders;
    private _item;
    private _valid;
    private _defUi;
    private _inited;
    rootProperty: FormProperty;
    _formData: any;
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
     * - 使用固定 `label` 标签宽度时，若无 `render.class` 则默认为居中状态
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
    formChange: EventEmitter<{}>;
    /** 提交表单时回调 */
    formSubmit: EventEmitter<{}>;
    /** 重置表单时回调 */
    formReset: EventEmitter<{}>;
    /** 表单校验结果回调 */
    formError: EventEmitter<ErrorData[]>;
    /** 表单校验状态 */
    readonly valid: boolean;
    /** 表单值 */
    readonly value: any;
    onSubmit(e: Event): void;
    constructor(formPropertyFactory: FormPropertyFactory, terminator: TerminatorService, options: DelonFormConfig, cd: ChangeDetectorRef, i18n: DelonLocaleService);
    private coverProperty;
    private coverButtonProperty;
    ngOnInit(): void;
    ngOnChanges(): void;
    private attachCustomRender;
    validator(): void;
    /**
     * 刷新 Schema，一般需要动态修改 Schema 某个值时可以方便调用
     */
    refreshSchema(newSchema?: SFSchema, newUI?: SFUISchema): void;
    /**
     * 重置表单
     * @param [emit] 是否触发 `formReset` 事件，默认：`false`
     */
    reset(emit?: boolean): void;
    ngOnDestroy(): void;
}
