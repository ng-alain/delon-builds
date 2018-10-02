import { ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { Widget } from './widget';
export declare class WidgetRegistry {
    private widgets;
    private defaultWidget;
    setDefault(widget: any): void;
    register(type: string, widget: any): void;
    has(type: string): boolean;
    getType(type: string): any;
}
export declare class WidgetFactory {
    private registry;
    private resolver;
    constructor(registry: WidgetRegistry, resolver: ComponentFactoryResolver);
    createWidget(container: ViewContainerRef, type: string): ComponentRef<Widget<any>>;
}
