/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Host, Input, Optional, Renderer2, ViewChild, } from '@angular/core';
import { ResponsiveService } from '@delon/theme';
import { isEmpty, InputBoolean, InputNumber } from '@delon/util';
import { SVContainerComponent } from './view-container.component';
/** @type {?} */
var prefixCls = "sv";
var SVComponent = /** @class */ (function () {
    function SVComponent(el, parent, rep, ren) {
        this.parent = parent;
        this.rep = rep;
        this.ren = ren;
        this.clsMap = [];
        if (parent == null) {
            throw new Error("[sv] must include 'sv-container' component");
        }
        this.el = el.nativeElement;
    }
    Object.defineProperty(SVComponent.prototype, "paddingValue", {
        // #endregion
        get: 
        // #endregion
        /**
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
        var el = (/** @type {?} */ (conEl.nativeElement));
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
                    template: "<div class=\"sv__label\"\n     [class.sv__label-empty]=\"!label\"\n     [style.width.px]=\"parent.labelWidth\">\n  <ng-container *stringTemplateOutlet=\"label\">{{label}}</ng-container>\n</div>\n<div class=\"sv__detail\"\n     (cdkObserveContent)=\"checkContent()\"\n     #conEl>\n  <ng-content></ng-content>\n</div>\n",
                    host: {
                        '[style.padding-left.px]': 'paddingValue',
                        '[style.padding-right.px]': 'paddingValue',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SVComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: SVContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
        { type: ResponsiveService },
        { type: Renderer2 }
    ]; };
    SVComponent.propDecorators = {
        conEl: [{ type: ViewChild, args: ['conEl',] }],
        label: [{ type: Input }],
        col: [{ type: Input }],
        default: [{ type: Input }],
        type: [{ type: Input }]
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
    SVComponent.prototype.label;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3ZpZXcvIiwic291cmNlcyI6WyJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFDUixTQUFTLEVBRVQsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0lBRTVELFNBQVMsR0FBRyxJQUFJO0FBRXRCO0lBNEJFLHFCQUNFLEVBQWMsRUFDYSxNQUE0QixFQUMvQyxHQUFzQixFQUN0QixHQUFjO1FBRkssV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDL0MsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsUUFBRyxHQUFILEdBQUcsQ0FBVztRQW5CaEIsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQXFCNUIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUM3QixDQUFDO0lBZEQsc0JBQUkscUNBQVk7UUFGaEIsYUFBYTs7Ozs7O1FBRWI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUM7OztPQUFBOzs7O0lBY08sOEJBQVE7OztJQUFoQjtRQUNRLElBQUEsU0FBMEMsRUFBeEMsVUFBRSxFQUFF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RDs7SUFDdkQsMEJBQThCOztJQUM5QiwwQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3BvbnNpdmVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGlzRW1wdHksIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IFNWQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3LWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5jb25zdCBwcmVmaXhDbHMgPSBgc3ZgO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdiwgW3N2XScsXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUucGFkZGluZy1sZWZ0LnB4XSc6ICdwYWRkaW5nVmFsdWUnLFxuICAgICdbc3R5bGUucGFkZGluZy1yaWdodC5weF0nOiAncGFkZGluZ1ZhbHVlJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNWQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnY29uRWwnKVxuICBwcml2YXRlIGNvbkVsOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBjbHNNYXA6IHN0cmluZ1tdID0gW107XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBjb2w6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbihudWxsKSBkZWZhdWx0OiBib29sZWFuO1xuICBASW5wdXQoKSB0eXBlOiAncHJpbWFyeScgfCAnc3VjY2VzcycgfCAnZGFuZ2VyJyB8ICd3YXJuaW5nJztcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgZ2V0IHBhZGRpbmdWYWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5ndXR0ZXIgLyAyO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgcGFyZW50OiBTVkNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBwcml2YXRlIHJlcDogUmVzcG9uc2l2ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW46IFJlbmRlcmVyMixcbiAgKSB7XG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdl0gbXVzdCBpbmNsdWRlICdzdi1jb250YWluZXInIGNvbXBvbmVudGApO1xuICAgIH1cbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKSB7XG4gICAgY29uc3QgeyBlbCwgcmVuLCBjb2wsIGNsc01hcCwgdHlwZSwgcmVwIH0gPSB0aGlzO1xuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4ucmVtb3ZlQ2xhc3MoZWwsIGNscykpO1xuICAgIGNsc01hcC5sZW5ndGggPSAwO1xuICAgIGNsc01hcC5wdXNoKC4uLnJlcC5nZW5DbHMoY29sICE9IG51bGwgPyBjb2wgOiB0aGlzLnBhcmVudC5jb2wpKTtcbiAgICBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X19pdGVtYCk7XG4gICAgaWYgKHRoaXMucGFyZW50LmxhYmVsV2lkdGgpIGNsc01hcC5wdXNoKGAke3ByZWZpeENsc31fX2l0ZW0tZml4ZWRgKTtcbiAgICBpZiAodHlwZSkgY2xzTWFwLnB1c2goYCR7cHJlZml4Q2xzfV9fdHlwZS0ke3R5cGV9YCk7XG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5hZGRDbGFzcyhlbCwgY2xzKSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICAgIHRoaXMuY2hlY2tDb250ZW50KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cblxuICBjaGVja0NvbnRlbnQoKSB7XG4gICAgY29uc3QgeyBjb25FbCB9ID0gdGhpcztcbiAgICBjb25zdCBkZWYgPSB0aGlzLmRlZmF1bHQ7XG4gICAgaWYgKCEoZGVmICE9IG51bGwgPyBkZWYgOiB0aGlzLnBhcmVudC5kZWZhdWx0KSkgcmV0dXJuO1xuICAgIGNvbnN0IGVsID0gY29uRWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBjbHMgPSBgc3ZfX2RlZmF1bHRgO1xuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xzKSkge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xuICAgIH1cbiAgICBpZiAoaXNFbXB0eShlbCkpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==