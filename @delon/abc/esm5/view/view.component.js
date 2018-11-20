/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Host, ElementRef, Renderer2, TemplateRef, ViewChild, HostBinding, Optional, } from '@angular/core';
import { ResponsiveService } from '@delon/theme';
import { isEmpty, InputNumber, InputBoolean } from '@delon/util';
import { SVContainerComponent } from './view-container.component';
/** @type {?} */
var prefixCls = "sv";
var SVComponent = /** @class */ (function () {
    function SVComponent(parent, rep, el, ren) {
        this.parent = parent;
        this.rep = rep;
        this.ren = ren;
        this.clsMap = [];
        //#region fields
        this._label = '';
        if (parent == null) {
            throw new Error("[sv] must include 'sv-container' component");
        }
        this.el = el.nativeElement;
    }
    Object.defineProperty(SVComponent.prototype, "label", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._label = null;
                this._labelTpl = value;
            }
            else {
                this._label = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SVComponent.prototype, "paddingLeft", {
        //#endregion
        get: /**
         * @return {?}
         */
        function () {
            return this.parent && this.parent.gutter / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SVComponent.prototype, "paddingRight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent && this.parent.gutter / 2;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SVComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a = this, el = _a.el, ren = _a.ren, col = _a.col, clsMap = _a.clsMap, type = _a.type, rep = _a.rep;
        clsMap.forEach(function (cls) { return ren.removeClass(el, cls); });
        clsMap.length = 0;
        clsMap.push.apply(clsMap, tslib_1.__spread(rep.genCls(col != null ? col : this.parent.col)));
        clsMap.push(prefixCls + "__item");
        if (this.parent.labelWidth)
            clsMap.push(prefixCls + "__item-fixed");
        if (type)
            clsMap.push(prefixCls + "__type-" + type);
        clsMap.forEach(function (cls) { return ren.addClass(el, cls); });
    };
    /**
     * @return {?}
     */
    SVComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.setClass();
        this.checkContent();
    };
    /**
     * @return {?}
     */
    SVComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    /**
     * @return {?}
     */
    SVComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        var conEl = this.conEl;
        /** @type {?} */
        var def = this.default;
        if (!(def != null ? def : this.parent.default))
            return;
        /** @type {?} */
        var el = /** @type {?} */ (conEl.nativeElement);
        /** @type {?} */
        var cls = "sv__default";
        if (el.classList.contains(cls)) {
            el.classList.remove(cls);
        }
        if (isEmpty(el)) {
            el.classList.add(cls);
        }
    };
    SVComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sv, [sv]',
                    template: "<div class=\"sv__label\" [class.sv__label-empty]=\"!_label && !_labelTpl\"\n  [style.width.px]=\"parent.labelWidth\">\n  <ng-container *ngIf=\"_label; else _labelTpl\">{{_label}}</ng-container>\n</div>\n<div class=\"sv__detail\" (cdkObserveContent)=\"checkContent()\" #conEl>\n  <ng-content></ng-content>\n</div>\n",
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    SVComponent.ctorParameters = function () { return [
        { type: SVContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
        { type: ResponsiveService },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    SVComponent.propDecorators = {
        conEl: [{ type: ViewChild, args: ['conEl',] }],
        label: [{ type: Input }],
        col: [{ type: Input }],
        default: [{ type: Input }],
        type: [{ type: Input }],
        paddingLeft: [{ type: HostBinding, args: ['style.padding-left.px',] }],
        paddingRight: [{ type: HostBinding, args: ['style.padding-right.px',] }]
    };
    tslib_1.__decorate([
        InputNumber(null),
        tslib_1.__metadata("design:type", Number)
    ], SVComponent.prototype, "col", void 0);
    tslib_1.__decorate([
        InputBoolean(null),
        tslib_1.__metadata("design:type", Boolean)
    ], SVComponent.prototype, "default", void 0);
    return SVComponent;
}());
export { SVComponent };
if (false) {
    /** @type {?} */
    SVComponent.prototype.conEl;
    /** @type {?} */
    SVComponent.prototype.el;
    /** @type {?} */
    SVComponent.prototype.clsMap;
    /** @type {?} */
    SVComponent.prototype._label;
    /** @type {?} */
    SVComponent.prototype._labelTpl;
    /** @type {?} */
    SVComponent.prototype.col;
    /** @type {?} */
    SVComponent.prototype.default;
    /** @type {?} */
    SVComponent.prototype.type;
    /** @type {?} */
    SVComponent.prototype.parent;
    /** @type {?} */
    SVComponent.prototype.rep;
    /** @type {?} */
    SVComponent.prototype.ren;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3ZpZXcvIiwic291cmNlcyI6WyJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLElBQUksRUFDSixVQUFVLEVBQ1YsU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBRVQsV0FBVyxFQUNYLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRWpFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUVsRSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUM7O0lBa0RyQixxQkFHUyxNQUE0QixFQUMzQixLQUNSLEVBQWMsRUFDTjtRQUhELFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQzNCLFFBQUcsR0FBSCxHQUFHO1FBRUgsUUFBRyxHQUFILEdBQUc7c0JBN0NjLEVBQUU7O3NCQUlwQixFQUFFO1FBMkNULElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7U0FDL0Q7UUFDRCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7S0FDNUI7SUE3Q0Qsc0JBQ0ksOEJBQUs7Ozs7O1FBRFQsVUFDVSxLQUFnQztZQUN4QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNyQjtT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LFdBQVcsU0FBQyx3QkFBd0I7OztRQWpCcEMsV0FBVyxDQUFDLElBQUksQ0FBQzs7OztRQUlqQixZQUFZLENBQUMsSUFBSSxDQUFDOzs7c0JBbERyQjs7U0F5QmEsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEhvc3QsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgT25DaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBBZnRlclZpZXdJbml0LFxuICBIb3N0QmluZGluZyxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgaXNFbXB0eSwgSW5wdXROdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgU1ZDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3ZpZXctY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbmNvbnN0IHByZWZpeENscyA9IGBzdmA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N2LCBbc3ZdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgU1ZDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdjb25FbCcpXG4gIHByaXZhdGUgY29uRWw6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGNsc01hcDogc3RyaW5nW10gPSBbXTtcblxuICAvLyNyZWdpb24gZmllbGRzXG5cbiAgX2xhYmVsID0gJyc7XG4gIF9sYWJlbFRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgc2V0IGxhYmVsKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX2xhYmVsID0gbnVsbDtcbiAgICAgIHRoaXMuX2xhYmVsVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKG51bGwpXG4gIGNvbDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4obnVsbClcbiAgZGVmYXVsdDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICB0eXBlOiAncHJpbWFyeScgfCAnc3VjY2VzcycgfCAnZGFuZ2VyJyB8ICd3YXJuaW5nJztcblxuICAvLyNlbmRyZWdpb25cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctbGVmdC5weCcpXG4gIGdldCBwYWRkaW5nTGVmdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5ndXR0ZXIgLyAyO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLXJpZ2h0LnB4JylcbiAgZ2V0IHBhZGRpbmdSaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5ndXR0ZXIgLyAyO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEhvc3QoKVxuICAgIEBPcHRpb25hbCgpXG4gICAgcHVibGljIHBhcmVudDogU1ZDb250YWluZXJDb21wb25lbnQsXG4gICAgcHJpdmF0ZSByZXA6IFJlc3BvbnNpdmVTZXJ2aWNlLFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuOiBSZW5kZXJlcjIsXG4gICkge1xuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3ZdIG11c3QgaW5jbHVkZSAnc3YtY29udGFpbmVyJyBjb21wb25lbnRgKTtcbiAgICB9XG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCkge1xuICAgIGNvbnN0IHsgZWwsIHJlbiwgY29sLCBjbHNNYXAsIHR5cGUsIHJlcCB9ID0gdGhpcztcbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLnJlbW92ZUNsYXNzKGVsLCBjbHMpKTtcbiAgICBjbHNNYXAubGVuZ3RoID0gMDtcbiAgICBjbHNNYXAucHVzaCguLi5yZXAuZ2VuQ2xzKGNvbCAhPSBudWxsID8gY29sIDogdGhpcy5wYXJlbnQuY29sKSk7XG4gICAgY2xzTWFwLnB1c2goYCR7cHJlZml4Q2xzfV9faXRlbWApO1xuICAgIGlmICh0aGlzLnBhcmVudC5sYWJlbFdpZHRoKSBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X19pdGVtLWZpeGVkYCk7XG4gICAgaWYgKHR5cGUpIGNsc01hcC5wdXNoKGAke3ByZWZpeENsc31fX3R5cGUtJHt0eXBlfWApO1xuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4uYWRkQ2xhc3MoZWwsIGNscykpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG5cbiAgY2hlY2tDb250ZW50KCkge1xuICAgIGNvbnN0IHsgY29uRWwgfSA9IHRoaXM7XG4gICAgY29uc3QgZGVmID0gdGhpcy5kZWZhdWx0O1xuICAgIGlmICghKGRlZiAhPSBudWxsID8gZGVmIDogdGhpcy5wYXJlbnQuZGVmYXVsdCkpIHJldHVybjtcbiAgICBjb25zdCBlbCA9IGNvbkVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY2xzID0gYHN2X19kZWZhdWx0YDtcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNscykpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICB9XG4gICAgaWYgKGlzRW1wdHkoZWwpKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgfVxuICB9XG59XG4iXX0=