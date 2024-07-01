import { AtomicProperty } from './atomic.property';
import { SFValue } from '../interface';
export declare class StringProperty extends AtomicProperty {
    fallbackValue(): null;
    setValue(value: SFValue, onlySelf: boolean): void;
}
