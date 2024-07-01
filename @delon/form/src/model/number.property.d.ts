import { SFValue } from '../interface';
import { AtomicProperty } from './atomic.property';
export declare class NumberProperty extends AtomicProperty {
    fallbackValue(): null;
    setValue(value: SFValue, onlySelf: boolean): void;
}
