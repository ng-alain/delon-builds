import { BehaviorSubject } from 'rxjs';
import { AlainSFConfig } from '@delon/util/config';
import { ErrorData } from '../errors';
import { SFFormValueChange, SFUpdateValueAndValidity, SFValue } from '../interface';
import { SFSchema, SFSchemaType } from '../schema';
import { SFUISchema, SFUISchemaItem, SFUISchemaItemRun } from '../schema/ui';
import { SchemaValidatorFactory } from '../validator.factory';
import type { Widget } from '../widget';
export declare abstract class FormProperty {
    private _options;
    private _errors;
    private _valueChanges;
    private _errorsChanges;
    private _visible;
    private _visibilityChanges;
    private _root;
    private _parent;
    _objErrors: {
        [key: string]: ErrorData[];
    };
    schemaValidator: (value: SFValue) => ErrorData[];
    schema: SFSchema;
    ui: SFUISchema | SFUISchemaItemRun;
    formData: Record<string, unknown>;
    _value: SFValue;
    widget: Widget<FormProperty, SFUISchemaItem>;
    path: string;
    constructor(schemaValidatorFactory: SchemaValidatorFactory, schema: SFSchema, ui: SFUISchema | SFUISchemaItem, formData: Record<string, unknown>, parent: PropertyGroup | null, path: string, _options: AlainSFConfig);
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
    private mergeErrors;
    protected setErrors(errors: ErrorData[], emitFormat?: boolean): void;
    setParentAndPlatErrors(errors: ErrorData[], path: string): void;
    /**
     * Set the hide or display of widget
     * 设置小部件的隐藏或显示
     */
    setVisible(visible: boolean): void;
    _bindVisibility(): void;
}
export declare abstract class PropertyGroup extends FormProperty {
    properties: {
        [key: string]: FormProperty;
    } | FormProperty[] | null;
    getProperty(path: string): FormProperty | undefined;
    forEachChild(fn: (formProperty: FormProperty, str: string) => void): void;
    forEachChildRecursive(fn: (formProperty: FormProperty) => void): void;
    _bindVisibility(): void;
    private _bindVisibilityRecursive;
    isRoot(): boolean;
}
