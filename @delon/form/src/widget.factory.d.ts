import { ComponentRef, ViewContainerRef } from '@angular/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { FormProperty } from './model/form.property';
import { SFUISchemaItem } from './schema/ui';
import type { Widget } from './widget';
import * as i0 from "@angular/core";
export declare class WidgetRegistry {
    private _widgets;
    private defaultWidget;
    get widgets(): {
        [type: string]: Widget<FormProperty, SFUISchemaItem>;
    };
    setDefault(widget: NzSafeAny): void;
    register(type: string, widget: NzSafeAny): void;
    has(type: string): boolean;
    getType(type: string): Widget<FormProperty, SFUISchemaItem>;
}
export declare class WidgetFactory {
    private registry;
    constructor(registry: WidgetRegistry);
    createWidget(container: ViewContainerRef, type: string): ComponentRef<Widget<FormProperty, SFUISchemaItem>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WidgetFactory>;
}
