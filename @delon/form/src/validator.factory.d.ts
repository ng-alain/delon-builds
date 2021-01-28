import { AlainConfigService, AlainSFConfig } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { ErrorData } from './errors';
import { SFValue } from './interface';
import { SFSchema } from './schema';
export declare abstract class SchemaValidatorFactory {
    abstract createValidatorFn(schema: SFSchema, extraOptions: {
        ingoreKeywords: string[];
        debug: boolean;
    }): (value: SFValue) => ErrorData[];
}
export declare class AjvSchemaValidatorFactory extends SchemaValidatorFactory {
    protected ajv: NzSafeAny;
    protected options: AlainSFConfig;
    constructor(cogSrv: AlainConfigService);
    createValidatorFn(schema: SFSchema, extraOptions: {
        ingoreKeywords: string[];
        debug: boolean;
    }): (value: SFValue) => ErrorData[];
}
