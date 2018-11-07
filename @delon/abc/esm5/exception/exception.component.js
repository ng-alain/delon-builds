/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, } from '@angular/core';
import { isEmpty } from '@delon/util';
import { DelonLocaleService } from '@delon/theme';
var ExceptionComponent = /** @class */ (function () {
    function ExceptionComponent(i18n) {
        this.i18n = i18n;
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
                    template: "\n  <div class=\"exception__img-block\">\n    <div class=\"exception__img\" [ngStyle]=\"{'background-image': 'url(' + _img + ')'}\"></div>\n  </div>\n  <div class=\"exception__cont\">\n    <h1 class=\"exception__cont-title\" [innerHTML]=\"_title\"></h1>\n    <div class=\"exception__cont-desc\" [innerHTML]=\"_desc || locale[_type]\"></div>\n    <div class=\"exception__cont-actions\">\n      <div (cdkObserveContent)=\"checkContent()\" #conTpl><ng-content></ng-content></div>\n      <button *ngIf=\"!hasCon\" nz-button [routerLink]=\"['/']\" [nzType]=\"'primary'\">{{locale.backToHome}}</button>\n    </div>\n  </div>\n  ",
                    host: { '[class.exception]': 'true' },
                    preserveWhitespaces: false
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZXhjZXB0aW9uLyIsInNvdXJjZXMiOlsiZXhjZXB0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsU0FBUyxFQUNULFVBQVUsR0FHWCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVsRDtJQTJFRSw0QkFBb0IsSUFBd0I7UUFBeEIsU0FBSSxHQUFKLElBQUksQ0FBb0I7UUFuRDVDLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDakIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVmLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osVUFBSyxHQUFHLEVBQUUsQ0FBQztJQThDb0MsQ0FBQztJQTVDaEQsc0JBQ0ksb0NBQUk7Ozs7O1FBRFIsVUFDUyxLQUFzQjs7Z0JBQ3ZCLElBQUksR0FBRztnQkFDWCxHQUFHLEVBQUU7b0JBQ0gsR0FBRyxFQUNELHFFQUFxRTtvQkFDdkUsS0FBSyxFQUFFLEtBQUs7aUJBQ2I7Z0JBQ0QsR0FBRyxFQUFFO29CQUNILEdBQUcsRUFDRCxxRUFBcUU7b0JBQ3ZFLEtBQUssRUFBRSxLQUFLO2lCQUNiO2dCQUNELEdBQUcsRUFBRTtvQkFDSCxHQUFHLEVBQ0QscUVBQXFFO29CQUN2RSxLQUFLLEVBQUUsS0FBSztpQkFDYjthQUNGLENBQUMsS0FBSyxDQUFDO1lBRVIsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTztZQUVsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksbUNBQUc7Ozs7O1FBRFAsVUFDUSxLQUFLO1lBQ1gsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFDSSxxQ0FBSzs7Ozs7UUFEVCxVQUNVLEtBQUs7WUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUNELHNCQUNJLG9DQUFJOzs7OztRQURSLFVBQ1MsS0FBSztZQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLENBQUM7OztPQUFBOzs7O0lBRUQseUNBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFJRCxxQ0FBUTs7O0lBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUNyQyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQTlDLENBQThDLENBQ3JELENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Z0JBdEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLGduQkFZVDtvQkFDRCxJQUFJLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUU7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7O2dCQW5CUSxrQkFBa0I7Ozt5QkFzQnhCLFNBQVMsU0FBQyxRQUFRO3VCQVdsQixLQUFLO3NCQTJCTCxLQUFLO3dCQUlMLEtBQUs7dUJBSUwsS0FBSzs7SUFxQlIseUJBQUM7Q0FBQSxBQXZGRCxJQXVGQztTQXJFWSxrQkFBa0I7OztJQUM3QixtQ0FBNEI7O0lBQzVCLG9DQUMyQjs7SUFFM0IsbUNBQWM7O0lBQ2Qsb0NBQWlCOztJQUNqQixvQ0FBZTs7SUFFZixrQ0FBVTs7SUFDVixvQ0FBWTs7SUFDWixtQ0FBVzs7SUE4Q0Msa0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4Y2VwdGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJleGNlcHRpb25fX2ltZy1ibG9ja1wiPlxuICAgIDxkaXYgY2xhc3M9XCJleGNlcHRpb25fX2ltZ1wiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArIF9pbWcgKyAnKSd9XCI+PC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZXhjZXB0aW9uX19jb250XCI+XG4gICAgPGgxIGNsYXNzPVwiZXhjZXB0aW9uX19jb250LXRpdGxlXCIgW2lubmVySFRNTF09XCJfdGl0bGVcIj48L2gxPlxuICAgIDxkaXYgY2xhc3M9XCJleGNlcHRpb25fX2NvbnQtZGVzY1wiIFtpbm5lckhUTUxdPVwiX2Rlc2MgfHwgbG9jYWxlW190eXBlXVwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJleGNlcHRpb25fX2NvbnQtYWN0aW9uc1wiPlxuICAgICAgPGRpdiAoY2RrT2JzZXJ2ZUNvbnRlbnQpPVwiY2hlY2tDb250ZW50KClcIiAjY29uVHBsPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cbiAgICAgIDxidXR0b24gKm5nSWY9XCIhaGFzQ29uXCIgbnotYnV0dG9uIFtyb3V0ZXJMaW5rXT1cIlsnLyddXCIgW256VHlwZV09XCIncHJpbWFyeSdcIj57e2xvY2FsZS5iYWNrVG9Ib21lfX08L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5leGNlcHRpb25dJzogJ3RydWUnIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBFeGNlcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcbiAgQFZpZXdDaGlsZCgnY29uVHBsJylcbiAgcHJpdmF0ZSBjb25UcGw6IEVsZW1lbnRSZWY7XG5cbiAgX3R5cGU6IG51bWJlcjtcbiAgbG9jYWxlOiBhbnkgPSB7fTtcbiAgaGFzQ29uID0gZmFsc2U7XG5cbiAgX2ltZyA9ICcnO1xuICBfdGl0bGUgPSAnJztcbiAgX2Rlc2MgPSAnJztcblxuICBASW5wdXQoKVxuICBzZXQgdHlwZSh2YWx1ZTogNDAzIHwgNDA0IHwgNTAwKSB7XG4gICAgY29uc3QgaXRlbSA9IHtcbiAgICAgIDQwMzoge1xuICAgICAgICBpbWc6XG4gICAgICAgICAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC93WmNuR3FSRHloUE9FWUZjWkRuYi5zdmcnLFxuICAgICAgICB0aXRsZTogJzQwMycsXG4gICAgICB9LFxuICAgICAgNDA0OiB7XG4gICAgICAgIGltZzpcbiAgICAgICAgICAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL0twbnBjaFhzb2JSZ0xFbEVvenpJLnN2ZycsXG4gICAgICAgIHRpdGxlOiAnNDA0JyxcbiAgICAgIH0sXG4gICAgICA1MDA6IHtcbiAgICAgICAgaW1nOlxuICAgICAgICAgICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvUlZSVUFZZENHZVlOQldvS2lJd0Iuc3ZnJyxcbiAgICAgICAgdGl0bGU6ICc1MDAnLFxuICAgICAgfSxcbiAgICB9W3ZhbHVlXTtcblxuICAgIGlmICghaXRlbSkgcmV0dXJuO1xuXG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIHRoaXMuX2ltZyA9IGl0ZW0uaW1nO1xuICAgIHRoaXMuX3RpdGxlID0gaXRlbS50aXRsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBpbWcodmFsdWUpIHtcbiAgICB0aGlzLl9pbWcgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkZXNjKHZhbHVlKSB7XG4gICAgdGhpcy5fZGVzYyA9IHZhbHVlO1xuICB9XG5cbiAgY2hlY2tDb250ZW50KCkge1xuICAgIHRoaXMuaGFzQ29uID0gIWlzRW1wdHkodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmNoYW5nZS5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiAodGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0RGF0YSgnZXhjZXB0aW9uJykpLFxuICAgICk7XG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19