import { CellTextResult } from './cell.types';
import * as i0 from "@angular/core";
export declare class CellHostDirective {
    private readonly srv;
    private readonly vcr;
    data: import("@angular/core").InputSignal<CellTextResult>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CellHostDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CellHostDirective, "[cell-widget-host]", never, { "data": { "alias": "data"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
