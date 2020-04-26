import { AlainSFConfig } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { SFValue } from '../interface';
import { SFSchema } from '../schema/index';
import { SFUISchema, SFUISchemaItem } from '../schema/ui';
import { SchemaValidatorFactory } from '../validator.factory';
import { PropertyGroup } from './form.property';
import { FormPropertyFactory } from './form.property.factory';
export declare class ObjectProperty extends PropertyGroup {
    private formPropertyFactory;
    private _propertiesId;
    get propertiesId(): string[];
    constructor(formPropertyFactory: FormPropertyFactory, schemaValidatorFactory: SchemaValidatorFactory, schema: SFSchema, ui: SFUISchema | SFUISchemaItem, formData: NzSafeAny, parent: PropertyGroup | null, path: string, options: AlainSFConfig);
    private createProperties;
    setValue(value: SFValue, onlySelf: boolean): void;
    resetValue(value: SFValue, onlySelf: boolean): void;
    _hasValue(): boolean;
    _updateValue(): void;
}
