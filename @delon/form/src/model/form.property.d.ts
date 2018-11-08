import { BehaviorSubject } from 'rxjs';
import { SchemaValidatorFactory } from '../validator.factory';
import { SFSchema } from '../schema';
import { SFUISchema, SFUISchemaItem, SFUISchemaItemRun } from '../schema/ui';
import { DelonFormConfig } from '../config';
import { ErrorData } from '../errors';
import { Widget } from '../widget';
export declare abstract class FormProperty {
    private options;
    schemaValidator: (value: any) => ErrorData[];
    schema: SFSchema;
    ui: SFUISchema | SFUISchemaItemRun;
    formData: {};
    _value: any;
    widget: Widget<any>;
    private _errors;
    protected _objErrors: {
        [key: string]: ErrorData[];
    };
    private _valueChanges;
    private _errorsChanges;
    private _visible;
    private _visibilityChanges;
    private _root;
    private _parent;
    private _path;
    constructor(schemaValidatorFactory: SchemaValidatorFactory, schema: SFSchema, ui: SFUISchema | SFUISchemaItem, formData: {}, parent: PropertyGroup, path: string, options: DelonFormConfig);
    readonly valueChanges: BehaviorSubject<any>;
    readonly errorsChanges: BehaviorSubject<any>;
    readonly type: string;
    readonly parent: PropertyGroup;
    readonly root: PropertyGroup;
    readonly path: string;
    readonly value: any;
    readonly errors: ErrorData[];
    readonly visible: boolean;
    readonly valid: boolean;
    /**
     * 设置值
     *
     * @param onlySelf `true` 只对当前字段更新值和校验；`false` 包含上级字段
     */
    abstract setValue(value: any, onlySelf: boolean): any;
    /**
     * 重置值，默认值为 `schema.default`
     *
     * @param onlySelf `true` 只对当前字段更新值和校验；`false` 包含上级字段
     */
    abstract resetValue(value: any, onlySelf: boolean): any;
    /**
     * 更新值且校验数据
     *
     * @param [onlySelf=false] 是否包含上级字段
     * @param [emitValueEvent=true] 是否触发值变更通知
     */
    updateValueAndValidity(onlySelf?: boolean, emitValueEvent?: boolean, emitValidator?: boolean): void;
    /** 根据路径搜索表单属性 */
    searchProperty(path: string): FormProperty;
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
    } | FormProperty[];
    getProperty(path: string): any;
    forEachChild(fn: (formProperty: FormProperty, str: string) => void): void;
    forEachChildRecursive(fn: (formProperty: FormProperty) => void): void;
    _bindVisibility(): void;
    private _bindVisibilityRecursive;
    isRoot(): boolean;
}
