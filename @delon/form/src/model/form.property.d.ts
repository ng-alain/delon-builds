import { BehaviorSubject } from 'rxjs';
import { DelonFormConfig } from '../config';
import { ErrorData } from '../errors';
import { SFValue } from '../interface';
import { SFSchema } from '../schema';
import { SFUISchema, SFUISchemaItem, SFUISchemaItemRun } from '../schema/ui';
import { SchemaValidatorFactory } from '../validator.factory';
import { Widget } from '../widget';
export declare abstract class FormProperty {
    private _options;
    private _errors;
    private _valueChanges;
    private _errorsChanges;
    private _visible;
    private _visibilityChanges;
    private _root;
    private _parent;
    private _path;
    protected _objErrors: {
        [key: string]: ErrorData[];
    };
    schemaValidator: (value: SFValue) => ErrorData[];
    schema: SFSchema;
    ui: SFUISchema | SFUISchemaItemRun;
    formData: {};
    _value: SFValue;
    widget: Widget<FormProperty, SFUISchemaItem>;
    constructor(schemaValidatorFactory: SchemaValidatorFactory, schema: SFSchema, ui: SFUISchema | SFUISchemaItem, formData: {}, parent: PropertyGroup | null, path: string, _options: DelonFormConfig);
    readonly valueChanges: BehaviorSubject<any>;
    readonly errorsChanges: BehaviorSubject<ErrorData[] | null>;
    readonly type: string;
    readonly parent: PropertyGroup | null;
    readonly root: PropertyGroup;
    readonly path: string;
    readonly value: SFValue;
    readonly errors: ErrorData[] | null;
    readonly visible: boolean;
    readonly valid: boolean;
    readonly options: DelonFormConfig;
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
     *
     * @param [onlySelf=false] 是否包含上级字段
     * @param [emitValueEvent=true] 是否触发值变更通知
     */
    updateValueAndValidity(onlySelf?: boolean, emitValueEvent?: boolean, emitValidator?: boolean): void;
    /** 根据路径搜索表单属性 */
    searchProperty(path: string): FormProperty | null;
    /** 查找根表单属性 */
    findRoot(): PropertyGroup;
    private isEmptyData;
    private setCustomErrors;
    private mergeErrors;
    protected setErrors(errors: ErrorData[], emitFormat?: boolean): void;
    setParentAndPlatErrors(errors: ErrorData[], path: string): void;
    private setVisible;
    _bindVisibility(): void;
}
export declare abstract class PropertyGroup extends FormProperty {
    properties: {
        [key: string]: FormProperty;
    } | FormProperty[] | null;
    getProperty(path: string): any;
    forEachChild(fn: (formProperty: FormProperty, str: string) => void): void;
    forEachChildRecursive(fn: (formProperty: FormProperty) => void): void;
    _bindVisibility(): void;
    private _bindVisibilityRecursive;
    isRoot(): boolean;
}
