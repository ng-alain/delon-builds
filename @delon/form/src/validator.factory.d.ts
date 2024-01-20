import Ajv from 'ajv';
import { AlainSFConfig } from '@delon/util/config';
import { ErrorData } from './errors';
import { SFValue } from './interface';
import { SFSchema } from './schema';
import * as i0 from "@angular/core";
export declare abstract class SchemaValidatorFactory {
    abstract createValidatorFn(schema: SFSchema, extraOptions: {
        ingoreKeywords: string[];
        debug: boolean;
    }): (value: SFValue) => ErrorData[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SchemaValidatorFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SchemaValidatorFactory>;
}
export declare class AjvSchemaValidatorFactory extends SchemaValidatorFactory {
    private readonly ngZone;
    private readonly cogSrv;
    protected ajv: Ajv;
    protected options: AlainSFConfig;
    constructor();
    createValidatorFn(schema: SFSchema, extraOptions: {
        ingoreKeywords: string[];
        debug: boolean;
    }): (value: SFValue) => ErrorData[];
    static ɵfac: i0.ɵɵFactoryDeclaration<AjvSchemaValidatorFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AjvSchemaValidatorFactory>;
}
