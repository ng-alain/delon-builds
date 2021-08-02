import type { NzSafeAny } from 'ng-zorro-antd/core/types';
export declare class STWidgetRegistry {
    private _widgets;
    get widgets(): NzSafeAny;
    register(type: string, widget: NzSafeAny): void;
    has(type: string): boolean;
    get(type: string): NzSafeAny;
}
