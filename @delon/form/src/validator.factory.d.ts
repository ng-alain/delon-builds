import { DelonFormConfig } from './config';
import { ErrorData } from './errors';
import { SFValue } from './interface';
import { SFSchema } from './schema';
export declare abstract class SchemaValidatorFactory {
    abstract createValidatorFn(schema: SFSchema, extraOptions: {
        ingoreKeywords: string[];
        debug: boolean;
    }): (value: SFSchema) => ErrorData[];
}
export declare class AjvSchemaValidatorFactory extends SchemaValidatorFactory {
    private options;
    protected ajv: any;
    constructor(options: DelonFormConfig);
    createValidatorFn(schema: SFSchema, extraOptions: {
        ingoreKeywords: string[];
        debug: boolean;
    }): (value: SFValue) => ErrorData[];
}
