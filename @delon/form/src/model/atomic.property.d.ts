import { FormProperty } from './form.property';
export declare abstract class AtomicProperty extends FormProperty {
    abstract fallbackValue(): any;
    setValue(value: any, onlySelf: boolean): void;
    resetValue(value: any, onlySelf: boolean): void;
    _hasValue(): boolean;
    _updateValue(): void;
}
