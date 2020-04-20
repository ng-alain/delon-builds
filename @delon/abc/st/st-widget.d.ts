export declare class STWidget {
}
export declare class STWidgetRegistry {
    private _widgets;
    get widgets(): {
        [type: string]: STWidget;
    };
    register(type: string, widget: STWidget): void;
    has(type: string): boolean;
    get(type: string): STWidget | undefined;
}
