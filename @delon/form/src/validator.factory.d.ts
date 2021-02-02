import { AlainConfigService, AlainSFConfig } from '@delon/util/config';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { ErrorData } from './errors';
import { SFValue } from './interface';
import { SFSchema } from './schema';
import * as i0 from "@angular/core";
export declare abstract class SchemaValidatorFactory {
    abstract createValidatorFn(schema: SFSchema, extraOptions: {
        ingoreKeywords: string[];
        debug: boolean;
    }): (value: SFValue) => ErrorData[];
    static ɵfac: i0.ɵɵFactoryDef<SchemaValidatorFactory, never>;
    static ɵprov: i0.ɵɵInjectableDef<SchemaValidatorFactory>;
}
export declare class AjvSchemaValidatorFactory extends SchemaValidatorFactory {
    protected ajv: NzSafeAny;
    protected options: AlainSFConfig;
    constructor(cogSrv: AlainConfigService);
    createValidatorFn(schema: SFSchema, extraOptions: {
        ingoreKeywords: string[];
        debug: boolean;
    }): (value: SFValue) => ErrorData[];
    static ɵfac: i0.ɵɵFactoryDef<AjvSchemaValidatorFactory, never>;
    static ɵprov: i0.ɵɵInjectableDef<AjvSchemaValidatorFactory>;
}
