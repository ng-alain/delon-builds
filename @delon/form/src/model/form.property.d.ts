import { BehaviorSubject } from 'rxjs';
import { AlainSFConfig } from '@delon/util/config';
import type { NzFormControlStatusType } from 'ng-zorro-antd/form';
import type { ErrorData } from '../errors';
import type { SFFormValueChange, SFUpdateValueAndValidity, SFValue } from '../interface';
import type { SFSchema, SFSchemaType } from '../schema';
import type { SFUISchema, SFUISchemaItem, SFUISchemaItemRun } from '../schema/ui';
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
    widget?: Widget<FormProperty, SFUISchemaItem>;
    path: string;
    propertyId?: string;
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
    cd(onlySelf: boolean): void;
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
