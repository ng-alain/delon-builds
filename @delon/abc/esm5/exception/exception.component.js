/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild, } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { isEmpty } from '@delon/util';
var ExceptionComponent = /** @class */ (function () {
    function ExceptionComponent(i18n) {
        this.i18n = i18n;
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.hasCon = false;
        this._img = '';
        this._title = '';
        this._desc = '';
    }
    Object.defineProperty(ExceptionComponent.prototype, "type", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var item = {
                403: {
                    img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
                    title: '403',
                },
                404: {
                    img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
                    title: '404',
                },
                500: {
                    img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
                    title: '500',
                },
            }[value];
            if (!item)
                return;
            this._type = value;
            this._img = item.img;
            this._title = item.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExceptionComponent.prototype, "img", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._img = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExceptionComponent.prototype, "title", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExceptionComponent.prototype, "desc", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._desc = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ExceptionComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        this.hasCon = !isEmpty(this.conTpl.nativeElement);
    };
    /**
     * @return {?}
     */
    ExceptionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n$ = this.i18n.change.subscribe(function () { return (_this.locale = _this.i18n.getData('exception')); });
        this.checkContent();
    };
    /**
     * @return {?}
     */
    ExceptionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.i18n$.unsubscribe();
    };
    ExceptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'exception',
                    template: "<div class=\"exception__img-block\">\n  <div class=\"exception__img\" [ngStyle]=\"{'background-image': 'url(' + _img + ')'}\"></div>\n</div>\n<div class=\"exception__cont\">\n  <h1 class=\"exception__cont-title\" [innerHTML]=\"_title\"></h1>\n  <div class=\"exception__cont-desc\" [innerHTML]=\"_desc || locale[_type]\"></div>\n  <div class=\"exception__cont-actions\">\n    <div (cdkObserveContent)=\"checkContent()\" #conTpl><ng-content></ng-content></div>\n    <button *ngIf=\"!hasCon\" nz-button [routerLink]=\"['/']\" [nzType]=\"'primary'\">{{locale.backToHome}}</button>\n  </div>\n</div>\n",
                    host: { '[class.exception]': 'true' }
                }] }
    ];
    /** @nocollapse */
    ExceptionComponent.ctorParameters = function () { return [
        { type: DelonLocaleService }
    ]; };
    ExceptionComponent.propDecorators = {
        conTpl: [{ type: ViewChild, args: ['conTpl',] }],
        type: [{ type: Input }],
        img: [{ type: Input }],
        title: [{ type: Input }],
        desc: [{ type: Input }]
    };
    return ExceptionComponent;
}());
export { ExceptionComponent };
if (false) {
    /** @type {?} */
    ExceptionComponent.prototype.i18n$;
    /** @type {?} */
    ExceptionComponent.prototype.conTpl;
    /** @type {?} */
    ExceptionComponent.prototype._type;
    /** @type {?} */
    ExceptionComponent.prototype.locale;
    /** @type {?} */
    ExceptionComponent.prototype.hasCon;
    /** @type {?} */
    ExceptionComponent.prototype._img;
    /** @type {?} */
    ExceptionComponent.prototype._title;
    /** @type {?} */
    ExceptionComponent.prototype._desc;
    /** @type {?} */
    ExceptionComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZXhjZXB0aW9uLyIsInNvdXJjZXMiOlsiZXhjZXB0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV0QztJQStERSw0QkFBb0IsSUFBd0I7UUFBeEIsU0FBSSxHQUFKLElBQUksQ0FBb0I7O1FBbkQ1QyxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFZixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFVBQUssR0FBRyxFQUFFLENBQUM7SUE4Q3FDLENBQUM7SUE1Q2pELHNCQUNJLG9DQUFJOzs7OztRQURSLFVBQ1MsS0FBc0I7O2dCQUN2QixJQUFJLEdBQUc7Z0JBQ1gsR0FBRyxFQUFFO29CQUNILEdBQUcsRUFDRCxxRUFBcUU7b0JBQ3ZFLEtBQUssRUFBRSxLQUFLO2lCQUNiO2dCQUNELEdBQUcsRUFBRTtvQkFDSCxHQUFHLEVBQ0QscUVBQXFFO29CQUN2RSxLQUFLLEVBQUUsS0FBSztpQkFDYjtnQkFDRCxHQUFHLEVBQUU7b0JBQ0gsR0FBRyxFQUNELHFFQUFxRTtvQkFDdkUsS0FBSyxFQUFFLEtBQUs7aUJBQ2I7YUFDRixDQUFDLEtBQUssQ0FBQztZQUVSLElBQUksQ0FBQyxJQUFJO2dCQUFFLE9BQU87WUFFbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUNJLG1DQUFHOzs7OztRQURQLFVBQ1EsS0FBSztZQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQ0kscUNBQUs7Ozs7O1FBRFQsVUFDVSxLQUFLO1lBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFDSSxvQ0FBSTs7Ozs7UUFEUixVQUNTLEtBQUs7WUFDWixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDOzs7T0FBQTs7OztJQUVELHlDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBSUQscUNBQVE7OztJQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FDckMsY0FBTSxPQUFBLENBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUE5QyxDQUE4QyxDQUNyRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQTFFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGdtQkFBeUM7b0JBQ3pDLElBQUksRUFBRSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRTtpQkFDdEM7Ozs7Z0JBUFEsa0JBQWtCOzs7eUJBVXhCLFNBQVMsU0FBQyxRQUFRO3VCQVlsQixLQUFLO3NCQTJCTCxLQUFLO3dCQUlMLEtBQUs7dUJBSUwsS0FBSzs7SUFxQlIseUJBQUM7Q0FBQSxBQTNFRCxJQTJFQztTQXRFWSxrQkFBa0I7OztJQUM3QixtQ0FBNEI7O0lBQzVCLG9DQUMyQjs7SUFFM0IsbUNBQWM7O0lBRWQsb0NBQWlCOztJQUNqQixvQ0FBZTs7SUFFZixrQ0FBVTs7SUFDVixvQ0FBWTs7SUFDWixtQ0FBVzs7SUE4Q0Msa0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4Y2VwdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9leGNlcHRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7ICdbY2xhc3MuZXhjZXB0aW9uXSc6ICd0cnVlJyB9LFxufSlcbmV4cG9ydCBjbGFzcyBFeGNlcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcbiAgQFZpZXdDaGlsZCgnY29uVHBsJylcbiAgcHJpdmF0ZSBjb25UcGw6IEVsZW1lbnRSZWY7XG5cbiAgX3R5cGU6IG51bWJlcjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBsb2NhbGU6IGFueSA9IHt9O1xuICBoYXNDb24gPSBmYWxzZTtcblxuICBfaW1nID0gJyc7XG4gIF90aXRsZSA9ICcnO1xuICBfZGVzYyA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB0eXBlKHZhbHVlOiA0MDMgfCA0MDQgfCA1MDApIHtcbiAgICBjb25zdCBpdGVtID0ge1xuICAgICAgNDAzOiB7XG4gICAgICAgIGltZzpcbiAgICAgICAgICAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL3daY25HcVJEeWhQT0VZRmNaRG5iLnN2ZycsXG4gICAgICAgIHRpdGxlOiAnNDAzJyxcbiAgICAgIH0sXG4gICAgICA0MDQ6IHtcbiAgICAgICAgaW1nOlxuICAgICAgICAgICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvS3BucGNoWHNvYlJnTEVsRW96ekkuc3ZnJyxcbiAgICAgICAgdGl0bGU6ICc0MDQnLFxuICAgICAgfSxcbiAgICAgIDUwMDoge1xuICAgICAgICBpbWc6XG4gICAgICAgICAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9SVlJVQVlkQ0dlWU5CV29LaUl3Qi5zdmcnLFxuICAgICAgICB0aXRsZTogJzUwMCcsXG4gICAgICB9LFxuICAgIH1bdmFsdWVdO1xuXG4gICAgaWYgKCFpdGVtKSByZXR1cm47XG5cbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgdGhpcy5faW1nID0gaXRlbS5pbWc7XG4gICAgdGhpcy5fdGl0bGUgPSBpdGVtLnRpdGxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGltZyh2YWx1ZSkge1xuICAgIHRoaXMuX2ltZyA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRlc2ModmFsdWUpIHtcbiAgICB0aGlzLl9kZXNjID0gdmFsdWU7XG4gIH1cblxuICBjaGVja0NvbnRlbnQoKSB7XG4gICAgdGhpcy5oYXNDb24gPSAhaXNFbXB0eSh0aGlzLmNvblRwbC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmNoYW5nZS5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiAodGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0RGF0YSgnZXhjZXB0aW9uJykpLFxuICAgICk7XG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19