import { OnInit, ViewContainerRef } from '@angular/core';
import { STWidgetRegistry } from './st-widget';
import { STColumn, STData } from './st.interfaces';
import * as i0 from "@angular/core";
export declare class STWidgetHostDirective implements OnInit {
    private stWidgetRegistry;
    private viewContainerRef;
    record: STData;
    column: STColumn;
    constructor(stWidgetRegistry: STWidgetRegistry, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<STWidgetHostDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<STWidgetHostDirective, "[st-widget-host]", never, { "record": "record"; "column": "column"; }, {}, never, never, false, never>;
}
