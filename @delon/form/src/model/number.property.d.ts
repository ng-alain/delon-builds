import { AtomicProperty } from './atomic.property';
export declare class NumberProperty extends AtomicProperty {
    fallbackValue(): any;
    setValue(value: any, onlySelf: boolean): void;
}
