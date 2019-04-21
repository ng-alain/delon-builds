import { SFValue } from '../interface';
import { AtomicProperty } from './atomic.property';
export declare class NumberProperty extends AtomicProperty {
    fallbackValue(): any;
    setValue(value: SFValue, onlySelf: boolean): void;
}
