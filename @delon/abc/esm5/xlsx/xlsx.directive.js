/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { XlsxService } from './xlsx.service';
var XlsxDirective = /** @class */ (function () {
    function XlsxDirective(srv) {
        this.srv = srv;
    }
    /**
     * @return {?}
     */
    XlsxDirective.prototype._click = /**
     * @return {?}
     */
    function () {
        this.srv.export(this.data);
    };
    XlsxDirective.decorators = [
        { type: Directive, args: [{ selector: '[xlsx]' },] }
    ];
    /** @nocollapse */
    XlsxDirective.ctorParameters = function () { return [
        { type: XlsxService }
    ]; };
    XlsxDirective.propDecorators = {
        data: [{ type: Input, args: ['xlsx',] }],
        _click: [{ type: HostListener, args: ['click',] }]
    };
    return XlsxDirective;
}());
export { XlsxDirective };
if (false) {
    /** @type {?} */
    XlsxDirective.prototype.data;
    /** @type {?} */
    XlsxDirective.prototype.srv;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3hsc3gvIiwic291cmNlcyI6WyJ4bHN4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFPM0MsdUJBQW9CLEdBQWdCO1FBQWhCLFFBQUcsR0FBSCxHQUFHLENBQWE7S0FBSTs7OztJQUd4Qyw4QkFBTTs7O0lBRE47UUFFRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDNUI7O2dCQVRGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7Ozs7Z0JBSHhCLFdBQVc7Ozt1QkFLakIsS0FBSyxTQUFDLE1BQU07eUJBSVosWUFBWSxTQUFDLE9BQU87O3dCQVZ2Qjs7U0FLYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBYbHN4U2VydmljZSB9IGZyb20gJy4veGxzeC5zZXJ2aWNlJztcbmltcG9ydCB7IFhsc3hFeHBvcnRPcHRpb25zIH0gZnJvbSAnLi94bHN4LnR5cGVzJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3hsc3hdJyB9KVxuZXhwb3J0IGNsYXNzIFhsc3hEaXJlY3RpdmUge1xuICBASW5wdXQoJ3hsc3gnKSBkYXRhOiBYbHN4RXhwb3J0T3B0aW9ucztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogWGxzeFNlcnZpY2UpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBfY2xpY2soKSB7XG4gICAgdGhpcy5zcnYuZXhwb3J0KHRoaXMuZGF0YSk7XG4gIH1cbn1cbiJdfQ==