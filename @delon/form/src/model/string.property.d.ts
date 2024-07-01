import { SFValue } from '../interface';
import { AtomicProperty } from './atomic.property';
export declare class StringProperty extends AtomicProperty {
    fallbackValue(): null;
    setValue(value: SFValue, onlySelf: boolean): void;
}
