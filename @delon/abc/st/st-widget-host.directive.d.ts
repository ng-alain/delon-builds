import { ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { STWidgetRegistry } from './st-widget';
import { STColumn, STData } from './st.interfaces';
import * as i0 from "@angular/core";
export declare class STWidgetHostDirective implements OnInit {
    private stWidgetRegistry;
    private viewContainerRef;
    private componentFactoryResolver;
    record: STData;
    column: STColumn;
    constructor(stWidgetRegistry: STWidgetRegistry, viewContainerRef: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<STWidgetHostDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<STWidgetHostDirective, "[st-widget-host]", never, { "record": "record"; "column": "column"; }, {}, never>;
}
