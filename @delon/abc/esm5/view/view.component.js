/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        get: 
        //#endregion
        /**
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
                    template: "<div class=\"sv__label\" [class.sv__label-empty]=\"!_label && !_labelTpl\"\n  [style.width.px]=\"parent.labelWidth\">\n  <ng-container *ngIf=\"_label; else _labelTpl\">{{_label}}</ng-container>\n</div>\n<div class=\"sv__detail\" (cdkObserveContent)=\"checkContent()\" #conEl>\n  <ng-content></ng-content>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3ZpZXcvIiwic291cmNlcyI6WyJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLElBQUksRUFDSixVQUFVLEVBQ1YsU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBRVQsV0FBVyxFQUNYLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRWpFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztJQUU1RCxTQUFTLEdBQUcsSUFBSTtBQUV0QjtJQStDRSxxQkFHUyxNQUE0QixFQUMzQixHQUFzQixFQUM5QixFQUFjLEVBQ04sR0FBYztRQUhmLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQzNCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBRXRCLFFBQUcsR0FBSCxHQUFHLENBQVc7UUE3Q2hCLFdBQU0sR0FBYSxFQUFFLENBQUM7O1FBSTlCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUEyQ1YsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUM3QixDQUFDO0lBN0NELHNCQUNJLDhCQUFLOzs7OztRQURULFVBQ1UsS0FBZ0M7WUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFD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QUs7MEJBSUwsS0FBSzt1QkFJTCxLQUFLOzhCQUtMLFdBQVcsU0FBQyx1QkFBdUI7K0JBS25DLFdBQVcsU0FBQyx3QkFBd0I7O0lBaEJyQztRQURDLFdBQVcsQ0FBQyxJQUFJLENBQUM7OzRDQUNOO0lBSVo7UUFEQyxZQUFZLENBQUMsSUFBSSxDQUFDOztnREFDRjtJQWdFbkIsa0JBQUM7Q0FBQSxBQTlGRCxJQThGQztTQTFGWSxXQUFXOzs7SUFDdEIsNEJBQzBCOztJQUMxQix5QkFBd0I7O0lBQ3hCLDZCQUE4Qjs7SUFJOUIsNkJBQVk7O0lBQ1osZ0NBQTRCOztJQVc1QiwwQkFFWTs7SUFFWiw4QkFFaUI7O0lBRWpCLDJCQUNtRDs7SUFlakQsNkJBRW1DOztJQUNuQywwQkFBOEI7O0lBRTlCLDBCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEhvc3QsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgT25DaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBBZnRlclZpZXdJbml0LFxuICBIb3N0QmluZGluZyxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgaXNFbXB0eSwgSW5wdXROdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgU1ZDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3ZpZXctY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbmNvbnN0IHByZWZpeENscyA9IGBzdmA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N2LCBbc3ZdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZpZXcuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTVkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ2NvbkVsJylcbiAgcHJpdmF0ZSBjb25FbDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgY2xzTWFwOiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8vI3JlZ2lvbiBmaWVsZHNcblxuICBfbGFiZWwgPSAnJztcbiAgX2xhYmVsVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgbGFiZWwodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fbGFiZWwgPSBudWxsO1xuICAgICAgdGhpcy5fbGFiZWxUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbGFiZWwgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIobnVsbClcbiAgY29sOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbihudWxsKVxuICBkZWZhdWx0OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHR5cGU6ICdwcmltYXJ5JyB8ICdzdWNjZXNzJyB8ICdkYW5nZXInIHwgJ3dhcm5pbmcnO1xuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1sZWZ0LnB4JylcbiAgZ2V0IHBhZGRpbmdMZWZ0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50Lmd1dHRlciAvIDI7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctcmlnaHQucHgnKVxuICBnZXQgcGFkZGluZ1JpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50Lmd1dHRlciAvIDI7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASG9zdCgpXG4gICAgQE9wdGlvbmFsKClcbiAgICBwdWJsaWMgcGFyZW50OiBTVkNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBwcml2YXRlIHJlcDogUmVzcG9uc2l2ZVNlcnZpY2UsXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW46IFJlbmRlcmVyMixcbiAgKSB7XG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdl0gbXVzdCBpbmNsdWRlICdzdi1jb250YWluZXInIGNvbXBvbmVudGApO1xuICAgIH1cbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKSB7XG4gICAgY29uc3QgeyBlbCwgcmVuLCBjb2wsIGNsc01hcCwgdHlwZSwgcmVwIH0gPSB0aGlzO1xuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4ucmVtb3ZlQ2xhc3MoZWwsIGNscykpO1xuICAgIGNsc01hcC5sZW5ndGggPSAwO1xuICAgIGNsc01hcC5wdXNoKC4uLnJlcC5nZW5DbHMoY29sICE9IG51bGwgPyBjb2wgOiB0aGlzLnBhcmVudC5jb2wpKTtcbiAgICBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X19pdGVtYCk7XG4gICAgaWYgKHRoaXMucGFyZW50LmxhYmVsV2lkdGgpIGNsc01hcC5wdXNoKGAke3ByZWZpeENsc31fX2l0ZW0tZml4ZWRgKTtcbiAgICBpZiAodHlwZSkgY2xzTWFwLnB1c2goYCR7cHJlZml4Q2xzfV9fdHlwZS0ke3R5cGV9YCk7XG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5hZGRDbGFzcyhlbCwgY2xzKSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICAgIHRoaXMuY2hlY2tDb250ZW50KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cblxuICBjaGVja0NvbnRlbnQoKSB7XG4gICAgY29uc3QgeyBjb25FbCB9ID0gdGhpcztcbiAgICBjb25zdCBkZWYgPSB0aGlzLmRlZmF1bHQ7XG4gICAgaWYgKCEoZGVmICE9IG51bGwgPyBkZWYgOiB0aGlzLnBhcmVudC5kZWZhdWx0KSkgcmV0dXJuO1xuICAgIGNvbnN0IGVsID0gY29uRWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBjbHMgPSBgc3ZfX2RlZmF1bHRgO1xuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xzKSkge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xuICAgIH1cbiAgICBpZiAoaXNFbXB0eShlbCkpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==