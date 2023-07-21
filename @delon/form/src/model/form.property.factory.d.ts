import { AlainConfigService } from '@delon/util/config';
import { FormProperty, PropertyGroup } from './form.property';
import { SFSchema } from '../schema/index';
import { SFUISchema, SFUISchemaItem } from '../schema/ui';
import { SchemaValidatorFactory } from '../validator.factory';
export declare class FormPropertyFactory {
    private schemaValidatorFactory;
    private options;
    constructor(schemaValidatorFactory: SchemaValidatorFactory, cogSrv: AlainConfigService);
    createProperty(schema: SFSchema, ui: SFUISchema | SFUISchemaItem, formData: Record<string, unknown>, parent?: PropertyGroup | null, propertyId?: string): FormProperty;
    private initializeRoot;
}
