import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { Observable } from 'rxjs';
import { SFSchema, SFSchemaDefinition, SFSchemaEnum } from './schema';
import { SFUISchema, SFUISchemaItem, SFUISchemaItemRun } from './schema/ui';
export declare const FORMATMAPS: {
    'date-time': {
        widget: string;
        showTime: boolean;
        format: string;
    };
    date: {
        widget: string;
        format: string;
    };
    'full-date': {
        widget: string;
        format: string;
    };
    time: {
        widget: string;
    };
    'full-time': {
        widget: string;
    };
    week: {
        widget: string;
        mode: string;
        format: string;
    };
    month: {
        widget: string;
        mode: string;
        format: string;
    };
    uri: {
        widget: string;
    };
    email: {
        widget: string;
        type: string;
    };
    color: {
        widget: string;
        type: string;
    };
    '': {
        widget: string;
    };
};
export declare function isBlank(o: any): boolean;
export declare function toBool(value: any, defaultValue: boolean): any;
export declare function di(ui: SFUISchema, ...args: NzSafeAny[]): void;
/**
 * 取回Schema，并处理 `$ref` 的关系
 */
export declare function retrieveSchema(schema: SFSchema, definitions?: SFSchemaDefinition): SFSchema;
export declare function resolveIf(schema: SFSchema, ui: SFUISchemaItemRun): SFSchema | null;
export declare function orderProperties(properties: string[], order: string[]): string[];
export declare function getEnum(list: any[], formData: any, readOnly: boolean): SFSchemaEnum[];
export declare function getCopyEnum(list: any[], formData: any, readOnly: boolean): SFSchemaEnum[];
export declare function getData(schema: SFSchema, ui: SFUISchemaItem, formData: any, asyncArgs?: any): Observable<SFSchemaEnum[]>;
/**
 * Whether to using date-fns to format a date
 */
export declare function isDateFns(srv: NzI18nService): boolean;
