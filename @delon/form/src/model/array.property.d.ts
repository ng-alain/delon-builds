import { AlainSFConfig } from '@delon/util/config';
import { FormProperty, PropertyGroup } from './form.property';
import { FormPropertyFactory } from './form.property.factory';
import { SFValue } from '../interface';
import { SFSchema } from '../schema/index';
import { SFUISchema, SFUISchemaItem } from '../schema/ui';
import { SchemaValidatorFactory } from '../validator.factory';
export declare class ArrayProperty extends PropertyGroup {
    private formPropertyFactory;
    constructor(formPropertyFactory: FormPropertyFactory, schemaValidatorFactory: SchemaValidatorFactory, schema: SFSchema, ui: SFUISchema | SFUISchemaItem, formData: Record<string, unknown>, parent: PropertyGroup | null, path: string, options: AlainSFConfig);
    getProperty(path: string): FormProperty | undefined;
    setValue(value: SFValue, onlySelf: boolean): void;
    resetValue(value: SFValue, onlySelf: boolean): void;
    _hasValue(): boolean;
    _updateValue(): void;
    private addProperty;
    private resetProperties;
    private clearErrors;
    add(formData: Record<string, unknown>): FormProperty;
    remove(index: number): void;
}
