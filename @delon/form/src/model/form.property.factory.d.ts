import { DelonFormConfig } from '../config';
import { SFSchema } from '../schema/index';
import { SFUISchema, SFUISchemaItem } from '../schema/ui';
import { SchemaValidatorFactory } from '../validator.factory';
import { FormProperty, PropertyGroup } from './form.property';
export declare class FormPropertyFactory {
    private schemaValidatorFactory;
    private options;
    constructor(schemaValidatorFactory: SchemaValidatorFactory, options: DelonFormConfig);
    createProperty(schema: SFSchema, ui: SFUISchema | SFUISchemaItem, formData: {}, parent?: PropertyGroup | null, propertyId?: string): FormProperty;
    private initializeRoot;
}
