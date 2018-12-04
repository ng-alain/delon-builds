import { DelonFormConfig } from '../config';
import { SFSchema } from '../schema';
import { SFUISchema, SFUISchemaItem } from '../schema/ui';
import { SchemaValidatorFactory } from '../validator.factory';
import { FormProperty, PropertyGroup } from './form.property';
export declare class FormPropertyFactory {
    private schemaValidatorFactory;
    private options;
    constructor(schemaValidatorFactory: SchemaValidatorFactory, options: DelonFormConfig);
    createProperty(schema: SFSchema, ui: SFUISchema | SFUISchemaItem, formData: {}, parent?: PropertyGroup, propertyId?: string): FormProperty;
    private initializeRoot;
}
