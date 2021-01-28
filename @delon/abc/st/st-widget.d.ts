export declare class STWidgetRegistry {
    private _widgets;
    get widgets(): any;
    register(type: string, widget: any): void;
    has(type: string): boolean;
    get(type: string): any;
}
