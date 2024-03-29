import { FormProperty } from './form.property';
import { SFValue } from '../interface';
export declare abstract class AtomicProperty extends FormProperty {
    abstract fallbackValue(): SFValue;
    setValue(value: SFValue, onlySelf: boolean): void;
    resetValue(value: SFValue, onlySelf: boolean): void;
    _hasValue(): boolean;
    _updateValue(): void;
}
