import { OnInit } from '@angular/core';
import { STColumn, STData } from './st.interfaces';
import * as i0 from "@angular/core";
export declare class STWidgetHostDirective implements OnInit {
    private readonly stWidgetRegistry;
    private readonly viewContainerRef;
    record: STData;
    column: STColumn;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<STWidgetHostDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<STWidgetHostDirective, "[st-widget-host]", never, { "record": { "alias": "record"; "required": false; }; "column": { "alias": "column"; "required": false; }; }, {}, never, never, true, never>;
}
