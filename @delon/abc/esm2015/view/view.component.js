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
const prefixCls = `sv`;
export class SVComponent {
    /**
     * @param {?} parent
     * @param {?} rep
     * @param {?} el
     * @param {?} ren
     */
    constructor(parent, rep, el, ren) {
        this.parent = parent;
        this.rep = rep;
        this.ren = ren;
        this.clsMap = [];
        //#region fields
        this._label = '';
        if (parent == null) {
            throw new Error(`[sv] must include 'sv-container' component`);
        }
        this.el = el.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set label(value) {
        if (value instanceof TemplateRef) {
            this._label = null;
            this._labelTpl = value;
        }
        else {
            this._label = value;
        }
    }
    //#endregion
    /**
     * @return {?}
     */
    get paddingLeft() {
        return this.parent && this.parent.gutter / 2;
    }
    /**
     * @return {?}
     */
    get paddingRight() {
        return this.parent && this.parent.gutter / 2;
    }
    /**
     * @return {?}
     */
    setClass() {
        const { el, ren, col, clsMap, type, rep } = this;
        clsMap.forEach(cls => ren.removeClass(el, cls));
        clsMap.length = 0;
        clsMap.push(...rep.genCls(col != null ? col : this.parent.col));
        clsMap.push(`${prefixCls}__item`);
        if (this.parent.labelWidth)
            clsMap.push(`${prefixCls}__item-fixed`);
        if (type)
            clsMap.push(`${prefixCls}__type-${type}`);
        clsMap.forEach(cls => ren.addClass(el, cls));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.setClass();
        this.checkContent();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setClass();
    }
    /**
     * @return {?}
     */
    checkContent() {
        const { conEl } = this;
        /** @type {?} */
        const def = this.default;
        if (!(def != null ? def : this.parent.default))
            return;
        /** @type {?} */
        const el = (/** @type {?} */ (conEl.nativeElement));
        /** @type {?} */
        const cls = `sv__default`;
        if (el.classList.contains(cls)) {
            el.classList.remove(cls);
        }
        if (isEmpty(el)) {
            el.classList.add(cls);
        }
    }
}
SVComponent.decorators = [
    { type: Component, args: [{
                selector: 'sv, [sv]',
                template: "<div class=\"sv__label\" [class.sv__label-empty]=\"!_label && !_labelTpl\"\n  [style.width.px]=\"parent.labelWidth\">\n  <ng-container *ngIf=\"_label; else _labelTpl\">{{_label}}</ng-container>\n</div>\n<div class=\"sv__detail\" (cdkObserveContent)=\"checkContent()\" #conEl>\n  <ng-content></ng-content>\n</div>\n",
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
SVComponent.ctorParameters = () => [
    { type: SVContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
    { type: ResponsiveService },
    { type: ElementRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3ZpZXcvIiwic291cmNlcyI6WyJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLElBQUksRUFDSixVQUFVLEVBQ1YsU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBRVQsV0FBVyxFQUNYLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRWpFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztNQUU1RCxTQUFTLEdBQUcsSUFBSTtBQU90QixNQUFNLE9BQU8sV0FBVzs7Ozs7OztJQTJDdEIsWUFHUyxNQUE0QixFQUMzQixHQUFzQixFQUM5QixFQUFjLEVBQ04sR0FBYztRQUhmLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQzNCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBRXRCLFFBQUcsR0FBSCxHQUFHLENBQVc7UUE3Q2hCLFdBQU0sR0FBYSxFQUFFLENBQUM7O1FBSTlCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUEyQ1YsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUM3QixDQUFDOzs7OztJQTdDRCxJQUNJLEtBQUssQ0FBQyxLQUFnQztRQUN4QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxL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LHVCQUF1QjsyQkFLbkMsV0FBVyxTQUFDLHdCQUF3Qjs7QUFoQnJDO0lBREMsV0FBVyxDQUFDLElBQUksQ0FBQzs7d0NBQ047QUFJWjtJQURDLFlBQVksQ0FBQyxJQUFJLENBQUM7OzRDQUNGOzs7SUF6QmpCLDRCQUMwQjs7SUFDMUIseUJBQXdCOztJQUN4Qiw2QkFBOEI7O0lBSTlCLDZCQUFZOztJQUNaLGdDQUE0Qjs7SUFXNUIsMEJBRVk7O0lBRVosOEJBRWlCOztJQUVqQiwyQkFDbUQ7O0lBZWpELDZCQUVtQzs7SUFDbkMsMEJBQThCOztJQUU5QiwwQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBIb3N0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIE9uQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgSG9zdEJpbmRpbmcsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3BvbnNpdmVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGlzRW1wdHksIElucHV0TnVtYmVyLCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IFNWQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3LWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5jb25zdCBwcmVmaXhDbHMgPSBgc3ZgO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdiwgW3N2XScsXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFNWQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnY29uRWwnKVxuICBwcml2YXRlIGNvbkVsOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBjbHNNYXA6IHN0cmluZ1tdID0gW107XG5cbiAgLy8jcmVnaW9uIGZpZWxkc1xuXG4gIF9sYWJlbCA9ICcnO1xuICBfbGFiZWxUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHNldCBsYWJlbCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9sYWJlbCA9IG51bGw7XG4gICAgICB0aGlzLl9sYWJlbFRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sYWJlbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcihudWxsKVxuICBjb2w6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKG51bGwpXG4gIGRlZmF1bHQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgdHlwZTogJ3ByaW1hcnknIHwgJ3N1Y2Nlc3MnIHwgJ2RhbmdlcicgfCAnd2FybmluZyc7XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLWxlZnQucHgnKVxuICBnZXQgcGFkZGluZ0xlZnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ3V0dGVyIC8gMjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1yaWdodC5weCcpXG4gIGdldCBwYWRkaW5nUmlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ3V0dGVyIC8gMjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBIb3N0KClcbiAgICBAT3B0aW9uYWwoKVxuICAgIHB1YmxpYyBwYXJlbnQ6IFNWQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIHByaXZhdGUgcmVwOiBSZXNwb25zaXZlU2VydmljZSxcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbjogUmVuZGVyZXIyLFxuICApIHtcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N2XSBtdXN0IGluY2x1ZGUgJ3N2LWNvbnRhaW5lcicgY29tcG9uZW50YCk7XG4gICAgfVxuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpIHtcbiAgICBjb25zdCB7IGVsLCByZW4sIGNvbCwgY2xzTWFwLCB0eXBlLCByZXAgfSA9IHRoaXM7XG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5yZW1vdmVDbGFzcyhlbCwgY2xzKSk7XG4gICAgY2xzTWFwLmxlbmd0aCA9IDA7XG4gICAgY2xzTWFwLnB1c2goLi4ucmVwLmdlbkNscyhjb2wgIT0gbnVsbCA/IGNvbCA6IHRoaXMucGFyZW50LmNvbCkpO1xuICAgIGNsc01hcC5wdXNoKGAke3ByZWZpeENsc31fX2l0ZW1gKTtcbiAgICBpZiAodGhpcy5wYXJlbnQubGFiZWxXaWR0aCkgY2xzTWFwLnB1c2goYCR7cHJlZml4Q2xzfV9faXRlbS1maXhlZGApO1xuICAgIGlmICh0eXBlKSBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X190eXBlLSR7dHlwZX1gKTtcbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLmFkZENsYXNzKGVsLCBjbHMpKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpIHtcbiAgICBjb25zdCB7IGNvbkVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGRlZiA9IHRoaXMuZGVmYXVsdDtcbiAgICBpZiAoIShkZWYgIT0gbnVsbCA/IGRlZiA6IHRoaXMucGFyZW50LmRlZmF1bHQpKSByZXR1cm47XG4gICAgY29uc3QgZWwgPSBjb25FbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGNscyA9IGBzdl9fZGVmYXVsdGA7XG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhjbHMpKSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gICAgfVxuICAgIGlmIChpc0VtcHR5KGVsKSkge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgIH1cbiAgfVxufVxuIl19