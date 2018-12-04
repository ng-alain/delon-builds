import { AtomicProperty } from './atomic.property';
export declare class StringProperty extends AtomicProperty {
    fallbackValue(): any;
    setValue(value: any, onlySelf: boolean): void;
}
