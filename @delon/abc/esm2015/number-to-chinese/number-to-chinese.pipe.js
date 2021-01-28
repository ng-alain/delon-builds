import { Pipe } from '@angular/core';
import { numberToChinese } from './number-to-chinese';
import * as i0 from "@angular/core";
export class NaNumberToChinesePipe {
    transform(value, rmb = true, minusSymbol = '负') {
        return numberToChinese(value, rmb, { minusSymbol });
    }
}
/** @nocollapse */ NaNumberToChinesePipe.ɵfac = function NaNumberToChinesePipe_Factory(t) { return new (t || NaNumberToChinesePipe)(); };
/** @nocollapse */ NaNumberToChinesePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "n2c", type: NaNumberToChinesePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NaNumberToChinesePipe, [{
        type: Pipe,
        args: [{ name: 'n2c' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRvLWNoaW5lc2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9udW1iZXItdG8tY2hpbmVzZS9udW1iZXItdG8tY2hpbmVzZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFHdEQsTUFBTSxPQUFPLHFCQUFxQjtJQUNoQyxTQUFTLENBQUMsS0FBc0IsRUFBRSxNQUFlLElBQUksRUFBRSxjQUFzQixHQUFHO1FBQzlFLE9BQU8sZUFBZSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7OzZHQUhVLHFCQUFxQjtzRkFBckIscUJBQXFCO3VGQUFyQixxQkFBcUI7Y0FEakMsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG51bWJlclRvQ2hpbmVzZSB9IGZyb20gJy4vbnVtYmVyLXRvLWNoaW5lc2UnO1xuXG5AUGlwZSh7IG5hbWU6ICduMmMnIH0pXG5leHBvcnQgY2xhc3MgTmFOdW1iZXJUb0NoaW5lc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBybWI6IGJvb2xlYW4gPSB0cnVlLCBtaW51c1N5bWJvbDogc3RyaW5nID0gJ+i0nycpOiBzdHJpbmcge1xuICAgIHJldHVybiBudW1iZXJUb0NoaW5lc2UodmFsdWUsIHJtYiwgeyBtaW51c1N5bWJvbCB9KTtcbiAgfVxufVxuIl19