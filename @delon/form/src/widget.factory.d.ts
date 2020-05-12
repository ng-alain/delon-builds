import { ComponentFactoryResolver, ComponentRef, ViewContainerRef } from '@angular/core';
import { FormProperty } from './model/form.property';
import { Widget } from './widget';
import { SFUISchemaItem } from './schema/ui';
export declare class WidgetRegistry {
    private _widgets;
    private defaultWidget;
    readonly widgets: {
        [type: string]: Widget<FormProperty, SFUISchemaItem>;
    };
    setDefault(widget: any): void;
    register(type: string, widget: any): void;
    has(type: string): boolean;
    getType(type: string): Widget<FormProperty, SFUISchemaItem>;
}
export declare class WidgetFactory {
    private registry;
    private resolver;
    constructor(registry: WidgetRegistry, resolver: ComponentFactoryResolver);
    createWidget(container: ViewContainerRef, type: string): ComponentRef<Widget<FormProperty, SFUISchemaItem>>;
}
