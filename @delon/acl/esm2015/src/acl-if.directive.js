/**
 * @fileoverview added by tsickle
 * Generated from: src/acl-if.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { InputBoolean } from '@delon/util';
import { filter } from 'rxjs/operators';
import { ACLService } from './acl.service';
export class ACLIfDirective {
    /**
     * @param {?} templateRef
     * @param {?} srv
     * @param {?} _viewContainer
     */
    constructor(templateRef, srv, _viewContainer) {
        this.srv = srv;
        this._viewContainer = _viewContainer;
        this._thenTemplateRef = null;
        this._elseTemplateRef = null;
        this._thenViewRef = null;
        this._elseViewRef = null;
        this.except = false;
        this._change$ = this.srv.change.pipe(filter((/**
         * @param {?} r
         * @return {?}
         */
        r => r != null))).subscribe((/**
         * @return {?}
         */
        () => this._updateView()));
        this._thenTemplateRef = templateRef;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set aclIf(value) {
        this._value = value;
        this._updateView();
    }
    /**
     * @param {?} templateRef
     * @return {?}
     */
    set aclIfThen(templateRef) {
        this._thenTemplateRef = templateRef;
        this._thenViewRef = null;
        this._updateView();
    }
    /**
     * @param {?} templateRef
     * @return {?}
     */
    set aclIfElse(templateRef) {
        this._elseTemplateRef = templateRef;
        this._elseViewRef = null;
        this._updateView();
    }
    /**
     * @protected
     * @return {?}
     */
    _updateView() {
        /** @type {?} */
        const res = this.srv.can(this._value);
        if ((res && !this.except) || (!res && this.except)) {
            if (!this._thenViewRef) {
                this._viewContainer.clear();
                this._elseViewRef = null;
                if (this._thenTemplateRef) {
                    this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef);
                }
            }
        }
        else {
            if (!this._elseViewRef) {
                this._viewContainer.clear();
                this._thenViewRef = null;
                if (this._elseTemplateRef) {
                    this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._change$.unsubscribe();
    }
}
ACLIfDirective.decorators = [
    { type: Directive, args: [{
                selector: '[aclIf]',
                exportAs: 'aclIf',
            },] }
];
/** @nocollapse */
ACLIfDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ACLService },
    { type: ViewContainerRef }
];
ACLIfDirective.propDecorators = {
    aclIf: [{ type: Input }],
    aclIfThen: [{ type: Input }],
    aclIfElse: [{ type: Input }],
    except: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], ACLIfDirective.prototype, "except", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype._value;
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype._change$;
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype._thenTemplateRef;
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype._elseTemplateRef;
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype._thenViewRef;
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype._elseViewRef;
    /** @type {?} */
    ACLIfDirective.prototype.except;
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype.srv;
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype._viewContainer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWlmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hY2wvIiwic291cmNlcyI6WyJzcmMvYWNsLWlmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFtQixLQUFLLEVBQWEsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPM0MsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQVF6QixZQUFZLFdBQThCLEVBQVUsR0FBZSxFQUFVLGNBQWdDO1FBQXpELFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFMckcscUJBQWdCLEdBQTZCLElBQUksQ0FBQztRQUNsRCxxQkFBZ0IsR0FBNkIsSUFBSSxDQUFDO1FBQ2xELGlCQUFZLEdBQWlDLElBQUksQ0FBQztRQUNsRCxpQkFBWSxHQUFpQyxJQUFJLENBQUM7UUEyQmpDLFdBQU0sR0FBRyxLQUFLLENBQUM7UUF4QnRDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxJQUNJLEtBQUssQ0FBQyxLQUFpQjtRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxJQUNJLFNBQVMsQ0FBQyxXQUFxQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELElBQ0ksU0FBUyxDQUFDLFdBQXFDO1FBQ2pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBSVMsV0FBVzs7Y0FDYixHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDbkY7YUFDRjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7aUJBQ25GO2FBQ0Y7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7WUE5REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsT0FBTzthQUNsQjs7OztZQVZzRCxXQUFXO1lBSXpELFVBQVU7WUFKaUQsZ0JBQWdCOzs7b0JBd0JqRixLQUFLO3dCQU1MLEtBQUs7d0JBT0wsS0FBSztxQkFPTCxLQUFLOztBQUFtQjtJQUFmLFlBQVksRUFBRTs7OENBQWdCOzs7Ozs7SUFoQ3hDLGdDQUEyQjs7Ozs7SUFDM0Isa0NBQStCOzs7OztJQUMvQiwwQ0FBMEQ7Ozs7O0lBQzFELDBDQUEwRDs7Ozs7SUFDMUQsc0NBQTBEOzs7OztJQUMxRCxzQ0FBMEQ7O0lBMkIxRCxnQ0FBd0M7Ozs7O0lBekJJLDZCQUF1Qjs7Ozs7SUFBRSx3Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVtYmVkZGVkVmlld1JlZiwgSW5wdXQsIE9uRGVzdHJveSwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJy4vYWNsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQUNMQ2FuVHlwZSB9IGZyb20gJy4vYWNsLnR5cGUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYWNsSWZdJyxcbiAgZXhwb3J0QXM6ICdhY2xJZicsXG59KVxuZXhwb3J0IGNsYXNzIEFDTElmRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfdmFsdWU6IEFDTENhblR5cGU7XG4gIHByaXZhdGUgX2NoYW5nZSQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfdGhlblRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9lbHNlVGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3RoZW5WaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfZWxzZVZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPiwgcHJpdmF0ZSBzcnY6IEFDTFNlcnZpY2UsIHByaXZhdGUgX3ZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICB0aGlzLl9jaGFuZ2UkID0gdGhpcy5zcnYuY2hhbmdlLnBpcGUoZmlsdGVyKHIgPT4gciAhPSBudWxsKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3VwZGF0ZVZpZXcoKSk7XG4gICAgdGhpcy5fdGhlblRlbXBsYXRlUmVmID0gdGVtcGxhdGVSZWY7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYWNsSWYodmFsdWU6IEFDTENhblR5cGUpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX3VwZGF0ZVZpZXcoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBhY2xJZlRoZW4odGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCkge1xuICAgIHRoaXMuX3RoZW5UZW1wbGF0ZVJlZiA9IHRlbXBsYXRlUmVmO1xuICAgIHRoaXMuX3RoZW5WaWV3UmVmID0gbnVsbDtcbiAgICB0aGlzLl91cGRhdGVWaWV3KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYWNsSWZFbHNlKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwpIHtcbiAgICB0aGlzLl9lbHNlVGVtcGxhdGVSZWYgPSB0ZW1wbGF0ZVJlZjtcbiAgICB0aGlzLl9lbHNlVmlld1JlZiA9IG51bGw7XG4gICAgdGhpcy5fdXBkYXRlVmlldygpO1xuICB9XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4Y2VwdCA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCBfdXBkYXRlVmlldygpOiB2b2lkIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLnNydi5jYW4odGhpcy5fdmFsdWUpO1xuICAgIGlmICgocmVzICYmICF0aGlzLmV4Y2VwdCkgfHwgKCFyZXMgJiYgdGhpcy5leGNlcHQpKSB7XG4gICAgICBpZiAoIXRoaXMuX3RoZW5WaWV3UmVmKSB7XG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5fZWxzZVZpZXdSZWYgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5fdGhlblRlbXBsYXRlUmVmKSB7XG4gICAgICAgICAgdGhpcy5fdGhlblZpZXdSZWYgPSB0aGlzLl92aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl90aGVuVGVtcGxhdGVSZWYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5fZWxzZVZpZXdSZWYpIHtcbiAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgICAgICB0aGlzLl90aGVuVmlld1JlZiA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLl9lbHNlVGVtcGxhdGVSZWYpIHtcbiAgICAgICAgICB0aGlzLl9lbHNlVmlld1JlZiA9IHRoaXMuX3ZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX2Vsc2VUZW1wbGF0ZVJlZik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGFuZ2UkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==