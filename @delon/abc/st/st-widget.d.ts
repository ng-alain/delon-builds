import * as i0 from "@angular/core";
export declare class STWidgetRegistry {
    private _widgets;
    get widgets(): any;
    register(type: string, widget: any): void;
    has(type: string): boolean;
    get(type: string): any;
    static ɵfac: i0.ɵɵFactoryDef<STWidgetRegistry, never>;
    static ɵprov: i0.ɵɵInjectableDef<STWidgetRegistry>;
}
