/**
 * @fileoverview added by tsickle
 * Generated from: exception.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DelonLocaleService } from '@delon/theme';
import { isEmpty } from '@delon/util';
var ExceptionComponent = /** @class */ (function () {
    function ExceptionComponent(i18n, dom) {
        this.i18n = i18n;
        this.dom = dom;
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
            this.fixImg(item.img);
            this._type = value;
            this._title = item.title;
            this._desc = '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} src
     * @return {?}
     */
    ExceptionComponent.prototype.fixImg = /**
     * @private
     * @param {?} src
     * @return {?}
     */
    function (src) {
        this._img = this.dom.bypassSecurityTrustStyle("url('" + src + "')");
    };
    Object.defineProperty(ExceptionComponent.prototype, "img", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.fixImg(value);
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
            this._title = this.dom.bypassSecurityTrustHtml(value);
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
            this._desc = this.dom.bypassSecurityTrustHtml(value);
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
        this.i18n$ = this.i18n.change.subscribe((/**
         * @return {?}
         */
        function () { return (_this.locale = _this.i18n.getData('exception')); }));
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
                    exportAs: 'exception',
                    template: "<div class=\"exception__img-block\">\n  <div class=\"exception__img\" [style.backgroundImage]=\"_img\"></div>\n</div>\n<div class=\"exception__cont\">\n  <h1 class=\"exception__cont-title\"\n      [innerHTML]=\"_title\"></h1>\n  <div class=\"exception__cont-desc\"\n       [innerHTML]=\"_desc || locale[_type]\"></div>\n  <div class=\"exception__cont-actions\">\n    <div (cdkObserveContent)=\"checkContent()\"\n         #conTpl>\n      <ng-content></ng-content>\n    </div>\n    <button *ngIf=\"!hasCon\"\n            nz-button\n            [routerLink]=\"['/']\"\n            [nzType]=\"'primary'\">{{locale.backToHome}}</button>\n  </div>\n</div>\n",
                    host: { '[class.exception]': 'true' },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    ExceptionComponent.ctorParameters = function () { return [
        { type: DelonLocaleService },
        { type: DomSanitizer }
    ]; };
    ExceptionComponent.propDecorators = {
        conTpl: [{ type: ViewChild, args: ['conTpl', { static: true },] }],
        type: [{ type: Input }],
        img: [{ type: Input }],
        title: [{ type: Input }],
        desc: [{ type: Input }]
    };
    return ExceptionComponent;
}());
export { ExceptionComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExceptionComponent.prototype.i18n$;
    /**
     * @type {?}
     * @private
     */
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
    /**
     * @type {?}
     * @private
     */
    ExceptionComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    ExceptionComponent.prototype.dom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZXhjZXB0aW9uLyIsInNvdXJjZXMiOlsiZXhjZXB0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxZQUFZLEVBQXFCLE1BQU0sMkJBQTJCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFjLE1BQU0sY0FBYyxDQUFDO0FBQzlELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFLdEM7SUFxRUUsNEJBQW9CLElBQXdCLEVBQVUsR0FBaUI7UUFBbkQsU0FBSSxHQUFKLElBQUksQ0FBb0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBdkR2RSxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBQ3hCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFZixTQUFJLEdBQVksRUFBRSxDQUFDO1FBQ25CLFdBQU0sR0FBYSxFQUFFLENBQUM7UUFDdEIsVUFBSyxHQUFhLEVBQUUsQ0FBQztJQWtEcUQsQ0FBQztJQWhEM0Usc0JBQ0ksb0NBQUk7Ozs7O1FBRFIsVUFDUyxLQUFvQjs7Z0JBQ3JCLElBQUksR0FBRztnQkFDWCxHQUFHLEVBQUU7b0JBQ0gsR0FBRyxFQUFFLHFFQUFxRTtvQkFDMUUsS0FBSyxFQUFFLEtBQUs7aUJBQ2I7Z0JBQ0QsR0FBRyxFQUFFO29CQUNILEdBQUcsRUFBRSxxRUFBcUU7b0JBQzFFLEtBQUssRUFBRSxLQUFLO2lCQUNiO2dCQUNELEdBQUcsRUFBRTtvQkFDSCxHQUFHLEVBQUUscUVBQXFFO29CQUMxRSxLQUFLLEVBQUUsS0FBSztpQkFDYjthQUNGLENBQUMsS0FBSyxDQUFDO1lBRVIsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTztZQUVsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7Ozs7OztJQUVPLG1DQUFNOzs7OztJQUFkLFVBQWUsR0FBVztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsVUFBUSxHQUFHLE9BQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxzQkFDSSxtQ0FBRzs7Ozs7UUFEUCxVQUNRLEtBQWE7WUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUVELHNCQUNJLHFDQUFLOzs7OztRQURULFVBQ1UsS0FBYTtZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSxvQ0FBSTs7Ozs7UUFEUixVQUNTLEtBQWE7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELENBQUM7OztPQUFBOzs7O0lBRUQseUNBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFJRCxxQ0FBUTs7O0lBQVI7UUFBQSxpQkFHQztRQUZDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLENBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUE5QyxDQUE4QyxFQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQTlFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxXQUFXO29CQUNyQix1cEJBQXlDO29CQUN6QyxJQUFJLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUU7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7Ozs7Z0JBZFEsa0JBQWtCO2dCQURsQixZQUFZOzs7eUJBa0JsQixTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt1QkFVcEMsS0FBSztzQkE2QkwsS0FBSzt3QkFLTCxLQUFLO3VCQUtMLEtBQUs7O0lBbUJSLHlCQUFDO0NBQUEsQUEvRUQsSUErRUM7U0F0RVksa0JBQWtCOzs7Ozs7SUFDN0IsbUNBQTRCOzs7OztJQUM1QixvQ0FBa0U7O0lBRWxFLG1DQUFxQjs7SUFDckIsb0NBQXdCOztJQUN4QixvQ0FBZTs7SUFFZixrQ0FBbUI7O0lBQ25CLG9DQUFzQjs7SUFDdEIsbUNBQXFCOzs7OztJQWtEVCxrQ0FBZ0M7Ozs7O0lBQUUsaUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sLCBTYWZlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UsIExvY2FsZURhdGEgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgdHlwZSBFeGNlcHRpb25UeXBlID0gNDAzIHwgNDA0IHwgNTAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleGNlcHRpb24nLFxuICBleHBvcnRBczogJ2V4Y2VwdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9leGNlcHRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7ICdbY2xhc3MuZXhjZXB0aW9uXSc6ICd0cnVlJyB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuICBAVmlld0NoaWxkKCdjb25UcGwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGNvblRwbDogRWxlbWVudFJlZjtcblxuICBfdHlwZTogRXhjZXB0aW9uVHlwZTtcbiAgbG9jYWxlOiBMb2NhbGVEYXRhID0ge307XG4gIGhhc0NvbiA9IGZhbHNlO1xuXG4gIF9pbWc6IFNhZmVVcmwgPSAnJztcbiAgX3RpdGxlOiBTYWZlSHRtbCA9ICcnO1xuICBfZGVzYzogU2FmZUh0bWwgPSAnJztcblxuICBASW5wdXQoKVxuICBzZXQgdHlwZSh2YWx1ZTogRXhjZXB0aW9uVHlwZSkge1xuICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICA0MDM6IHtcbiAgICAgICAgaW1nOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL3daY25HcVJEeWhQT0VZRmNaRG5iLnN2ZycsXG4gICAgICAgIHRpdGxlOiAnNDAzJyxcbiAgICAgIH0sXG4gICAgICA0MDQ6IHtcbiAgICAgICAgaW1nOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL0twbnBjaFhzb2JSZ0xFbEVvenpJLnN2ZycsXG4gICAgICAgIHRpdGxlOiAnNDA0JyxcbiAgICAgIH0sXG4gICAgICA1MDA6IHtcbiAgICAgICAgaW1nOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL1JWUlVBWWRDR2VZTkJXb0tpSXdCLnN2ZycsXG4gICAgICAgIHRpdGxlOiAnNTAwJyxcbiAgICAgIH0sXG4gICAgfVt2YWx1ZV07XG5cbiAgICBpZiAoIWl0ZW0pIHJldHVybjtcblxuICAgIHRoaXMuZml4SW1nKGl0ZW0uaW1nKTtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgdGhpcy5fdGl0bGUgPSBpdGVtLnRpdGxlO1xuICAgIHRoaXMuX2Rlc2MgPSAnJztcbiAgfVxuXG4gIHByaXZhdGUgZml4SW1nKHNyYzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5faW1nID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGB1cmwoJyR7c3JjfScpYCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaW1nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZpeEltZyh2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RpdGxlID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodmFsdWUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRlc2ModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2MgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZSk7XG4gIH1cblxuICBjaGVja0NvbnRlbnQoKSB7XG4gICAgdGhpcy5oYXNDb24gPSAhaXNFbXB0eSh0aGlzLmNvblRwbC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLCBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG4uY2hhbmdlLnN1YnNjcmliZSgoKSA9PiAodGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0RGF0YSgnZXhjZXB0aW9uJykpKTtcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=