import { PropertyGroup } from './form.property';
import { FormPropertyFactory } from './form.property.factory';
import { SchemaValidatorFactory } from '../validator.factory';
import { DelonFormConfig } from '../config';
import { SFUISchema, SFUISchemaItem } from '../schema/ui';
export declare class ObjectProperty extends PropertyGroup {
    private formPropertyFactory;
    private _propertiesId;
    readonly propertiesId: string[];
    constructor(formPropertyFactory: FormPropertyFactory, schemaValidatorFactory: SchemaValidatorFactory, schema: any, ui: SFUISchema | SFUISchemaItem, formData: {}, parent: PropertyGroup, path: string, options: DelonFormConfig);
    private createProperties;
    setValue(value: any, onlySelf: boolean): void;
    resetValue(value: any, onlySelf: boolean): void;
    _hasValue(): boolean;
    _updateValue(): void;
}
