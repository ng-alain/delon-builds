import { OnChanges } from '@angular/core';
import { CellTextResult } from './cell.types';
import * as i0 from "@angular/core";
export declare class CellHostDirective implements OnChanges {
    private readonly srv;
    private readonly vcr;
    data: CellTextResult;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CellHostDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CellHostDirective, "[cell-widget-host]", never, { "data": { "alias": "data"; "required": false; }; }, {}, never, never, true, never>;
}
