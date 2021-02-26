import { NzSafeAny } from 'ng-zorro-antd/core/types';
export declare function propDecoratorFactory<T, D>(name: string, fallback: (v: T, defaultValue: D) => D, defaultValue: NzSafeAny): (target: NzSafeAny, propName: string) => void;
