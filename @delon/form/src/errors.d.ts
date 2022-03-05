import { Observable } from 'rxjs';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import type { SFValue } from './interface';
import type { FormProperty, PropertyGroup } from './model/form.property';
export declare const ERRORSDEFAULT: {
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
export interface ErrorData {
    [key: string]: NzSafeAny;
    keyword: string;
    dataPath?: string;
    schemaPath?: string;
    params?: {
        [key: string]: NzSafeAny;
    };
    message?: string;
}
export interface ErrorSchema {
    /**
     * 是否实时校验，默认：`true`
     * - `true` 每一次都校验
     * - `false` 提交时校验
     */
    liveValidate?: boolean;
    /**
     * 自定义错误信息文本，键名赞同 `ErrorData.keyword` 值
     */
    errors?: {
        [key: string]: string | ((obj: ErrorData) => string);
    };
    /**
     * 是否立即呈现错误视觉，默认：`false`
     */
    firstVisual?: boolean;
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
     * 是否强制在标签上显示 `*` 来表示必填，一般在当使用自定义校验 `validator` 可能需要必填项处理
     */
    showRequired?: boolean;
    /**
     * 自定义校验
     */
    validator?: (value: SFValue, formProperty: FormProperty, form: PropertyGroup) => ErrorData[] | Observable<ErrorData[]>;
}
