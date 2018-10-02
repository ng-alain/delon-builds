import { DelonFormConfig } from '../config';
import { SchemaValidatorFactory } from '../validator.factory';
import { PropertyGroup, FormProperty } from './form.property';
import { SFSchema } from '../schema';
import { SFUISchema, SFUISchemaItem } from '../schema/ui';
export declare class FormPropertyFactory {
    private schemaValidatorFactory;
    private options;
    constructor(schemaValidatorFactory: SchemaValidatorFactory, options: DelonFormConfig);
    createProperty(schema: SFSchema, ui: SFUISchema | SFUISchemaItem, formData: {}, parent?: PropertyGroup, propertyId?: string): FormProperty;
    private initializeRoot;
}
