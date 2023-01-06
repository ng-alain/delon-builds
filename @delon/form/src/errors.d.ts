import { Observable } from 'rxjs';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import type { NzFormControlStatusType } from 'ng-zorro-antd/form';
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
    /**
     * 表单状态值，只支持 `this.sf.getProperty('/department')?.updateFeedback('validating')` 调用方式
     */
    feedback?: NzFormControlStatusType;
}
