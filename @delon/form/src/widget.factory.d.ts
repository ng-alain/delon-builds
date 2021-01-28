import { ComponentFactoryResolver, ComponentRef, ViewContainerRef } from '@angular/core';
import { FormProperty } from './model/form.property';
import { SFUISchemaItem } from './schema/ui';
import { Widget } from './widget';
import * as i0 from "@angular/core";
export declare class WidgetRegistry {
    private _widgets;
    private defaultWidget;
    get widgets(): {
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
    static ɵfac: i0.ɵɵFactoryDef<WidgetFactory, never>;
    static ɵprov: i0.ɵɵInjectableDef<WidgetFactory>;
}
