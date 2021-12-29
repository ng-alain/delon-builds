import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export declare class STWidgetRegistry {
    private _widgets;
    get widgets(): NzSafeAny;
    register(type: string, widget: NzSafeAny): void;
    has(type: string): boolean;
    get(type: string): NzSafeAny;
    static ɵfac: i0.ɵɵFactoryDeclaration<STWidgetRegistry, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<STWidgetRegistry>;
}
