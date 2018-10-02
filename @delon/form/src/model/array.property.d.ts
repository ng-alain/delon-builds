import { PropertyGroup, FormProperty } from './form.property';
import { SchemaValidatorFactory } from '../validator.factory';
import { SFUISchema, SFUISchemaItem } from '../schema/ui';
import { DelonFormConfig } from '../config';
import { FormPropertyFactory } from './form.property.factory';
export declare class ArrayProperty extends PropertyGroup {
    private formPropertyFactory;
    tick: number;
    constructor(formPropertyFactory: FormPropertyFactory, schemaValidatorFactory: SchemaValidatorFactory, schema: any, ui: SFUISchema | SFUISchemaItem, formData: {}, parent: PropertyGroup, path: string, options: DelonFormConfig);
    getProperty(path: string): any;
    setValue(value: any, onlySelf: boolean): void;
    resetValue(value: any, onlySelf: boolean): void;
    _hasValue(): boolean;
    _updateValue(): void;
    private addProperty;
    private resetProperties;
    private clearErrors;
    add(value: any): FormProperty;
    remove(index: number): void;
}
