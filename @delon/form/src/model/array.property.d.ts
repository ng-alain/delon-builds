import { DelonFormConfig } from '../config';
import { SFValue } from '../interface';
import { SFSchema } from '../schema/index';
import { SFUISchema, SFUISchemaItem } from '../schema/ui';
import { SchemaValidatorFactory } from '../validator.factory';
import { FormProperty, PropertyGroup } from './form.property';
import { FormPropertyFactory } from './form.property.factory';
export declare class ArrayProperty extends PropertyGroup {
    private formPropertyFactory;
    tick: number;
    constructor(formPropertyFactory: FormPropertyFactory, schemaValidatorFactory: SchemaValidatorFactory, schema: SFSchema, ui: SFUISchema | SFUISchemaItem, formData: {}, parent: PropertyGroup | null, path: string, options: DelonFormConfig);
    getProperty(path: string): any;
    setValue(value: SFValue, onlySelf: boolean): void;
    resetValue(value: SFValue, onlySelf: boolean): void;
    _hasValue(): boolean;
    _updateValue(): void;
    private addProperty;
    private resetProperties;
    private clearErrors;
    add(formData: {}): FormProperty;
    remove(index: number): void;
}
