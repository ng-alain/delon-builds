import { ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { STWidgetRegistry } from './st-widget';
import { STColumn, STData } from './st.interfaces';
export declare class STWidgetHostDirective implements OnInit {
    private stWidgetRegistry;
    private viewContainerRef;
    private componentFactoryResolver;
    record: STData;
    column: STColumn;
    constructor(stWidgetRegistry: STWidgetRegistry, viewContainerRef: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver);
    ngOnInit(): void;
}
