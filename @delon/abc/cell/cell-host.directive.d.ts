import { OnInit, ViewContainerRef } from '@angular/core';
import { CellService } from './cell.service';
import { CellWidgetData } from './cell.types';
import * as i0 from "@angular/core";
export declare class CellHostDirective implements OnInit {
    private srv;
    private viewContainerRef;
    data: CellWidgetData;
    constructor(srv: CellService, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CellHostDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CellHostDirective, "[cell-widget-host]", never, { "data": { "alias": "data"; "required": false; }; }, {}, never, never, true, never>;
}
