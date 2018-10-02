import { DelonFormConfig } from './config';
import { ErrorData } from './errors';
import { SFSchema } from './schema';
export declare abstract class SchemaValidatorFactory {
    abstract createValidatorFn(schema: SFSchema, extraOptions: {
        ingoreKeywords: string[];
    }): (value: SFSchema) => ErrorData[];
}
export declare class AjvSchemaValidatorFactory extends SchemaValidatorFactory {
    private options;
    protected ajv: any;
    constructor(options: DelonFormConfig);
    createValidatorFn(schema: SFSchema, extraOptions: {
        ingoreKeywords: string[];
    }): (value: any) => ErrorData[];
}
