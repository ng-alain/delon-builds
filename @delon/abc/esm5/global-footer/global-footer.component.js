/**
 * @fileoverview added by tsickle
 * Generated from: global-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ContentChildren, Inject, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { WINDOW } from '@delon/theme';
import { GlobalFooterItemComponent } from './global-footer-item.component';
var GlobalFooterComponent = /** @class */ (function () {
    function GlobalFooterComponent(router, win, dom) {
        this.router = router;
        this.win = win;
        this.dom = dom;
        this._links = [];
    }
    Object.defineProperty(GlobalFooterComponent.prototype, "links", {
        get: /**
         * @return {?}
         */
        function () {
            return this._links;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            val.forEach((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return (i._title = _this.dom.bypassSecurityTrustHtml(i.title)); }));
            this._links = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} item
     * @return {?}
     */
    GlobalFooterComponent.prototype.to = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item.href) {
            return;
        }
        if (item.blankTarget) {
            this.win.open(item.href);
            return;
        }
        if (/^https?:\/\//.test(item.href)) {
            this.win.location.href = item.href;
        }
        else {
            this.router.navigateByUrl(item.href);
        }
    };
    GlobalFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'global-footer',
                    exportAs: 'globalFooter',
                    template: "<div *ngIf=\"links.length > 0 || items.length > 0\" class=\"global-footer__links\">\n  <a *ngFor=\"let i of links\" class=\"global-footer__links-item\" (click)=\"to(i)\" [innerHTML]=\"i._title\"></a>\n  <a *ngFor=\"let i of items\" class=\"global-footer__links-item\" (click)=\"to(i)\">\n    <ng-container *ngTemplateOutlet=\"i.host\"></ng-container>\n  </a>\n</div>\n<div class=\"global-footer__copyright\">\n  <ng-content></ng-content>\n</div>\n",
                    host: { '[class.global-footer]': 'true' },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    GlobalFooterComponent.ctorParameters = function () { return [
        { type: Router },
        { type: Window, decorators: [{ type: Inject, args: [WINDOW,] }] },
        { type: DomSanitizer }
    ]; };
    GlobalFooterComponent.propDecorators = {
        links: [{ type: Input }],
        items: [{ type: ContentChildren, args: [GlobalFooterItemComponent,] }]
    };
    return GlobalFooterComponent;
}());
export { GlobalFooterComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GlobalFooterComponent.prototype._links;
    /** @type {?} */
    GlobalFooterComponent.prototype.items;
    /**
     * @type {?}
     * @private
     */
    GlobalFooterComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    GlobalFooterComponent.prototype.win;
    /**
     * @type {?}
     * @private
     */
    GlobalFooterComponent.prototype.dom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2dsb2JhbC1mb290ZXIvIiwic291cmNlcyI6WyJnbG9iYWwtZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN0QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUczRTtJQXVCRSwrQkFBb0IsTUFBYyxFQUEwQixHQUFXLEVBQVUsR0FBaUI7UUFBOUUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUEwQixRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBYztRQWIxRixXQUFNLEdBQXVCLEVBQUUsQ0FBQztJQWE2RCxDQUFDO0lBWHRHLHNCQUNJLHdDQUFLOzs7O1FBSVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFQRCxVQUNVLEdBQXVCO1lBRGpDLGlCQUlDO1lBRkMsR0FBRyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUF0RCxDQUFzRCxFQUFDLENBQUM7WUFDekUsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7Ozs7O0lBU0Qsa0NBQUU7Ozs7SUFBRixVQUFHLElBQXNCO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixPQUFPO1NBQ1I7UUFDRCxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3BDO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDOztnQkF0Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsY0FBYztvQkFDeEIsMmNBQTZDO29CQUM3QyxJQUFJLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUU7b0JBQ3pDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7Ozs7Z0JBYlEsTUFBTTtnQkE0Qm9ELE1BQU0sdUJBQWxDLE1BQU0sU0FBQyxNQUFNO2dCQTdCM0MsWUFBWTs7O3dCQWtCbEIsS0FBSzt3QkFTTCxlQUFlLFNBQUMseUJBQXlCOztJQWtCNUMsNEJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQTlCWSxxQkFBcUI7Ozs7OztJQUNoQyx1Q0FBd0M7O0lBV3hDLHNDQUF5Rjs7Ozs7SUFFN0UsdUNBQXNCOzs7OztJQUFFLG9DQUFtQzs7Ozs7SUFBRSxvQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEluamVjdCwgSW5wdXQsIFF1ZXJ5TGlzdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBHbG9iYWxGb290ZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9nbG9iYWwtZm9vdGVyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEdsb2JhbEZvb3RlckxpbmsgfSBmcm9tICcuL2dsb2JhbC1mb290ZXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbG9iYWwtZm9vdGVyJyxcbiAgZXhwb3J0QXM6ICdnbG9iYWxGb290ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2xvYmFsLWZvb3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5nbG9iYWwtZm9vdGVyXSc6ICd0cnVlJyB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEdsb2JhbEZvb3RlckNvbXBvbmVudCB7XG4gIHByaXZhdGUgX2xpbmtzOiBHbG9iYWxGb290ZXJMaW5rW10gPSBbXTtcblxuICBASW5wdXQoKVxuICBzZXQgbGlua3ModmFsOiBHbG9iYWxGb290ZXJMaW5rW10pIHtcbiAgICB2YWwuZm9yRWFjaChpID0+IChpLl90aXRsZSA9IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGkudGl0bGUpKSk7XG4gICAgdGhpcy5fbGlua3MgPSB2YWw7XG4gIH1cbiAgZ2V0IGxpbmtzKCkge1xuICAgIHJldHVybiB0aGlzLl9saW5rcztcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oR2xvYmFsRm9vdGVySXRlbUNvbXBvbmVudCkgaXRlbXMhOiBRdWVyeUxpc3Q8R2xvYmFsRm9vdGVySXRlbUNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgQEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luOiBXaW5kb3csIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIpIHt9XG5cbiAgdG8oaXRlbTogR2xvYmFsRm9vdGVyTGluaykge1xuICAgIGlmICghaXRlbS5ocmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpdGVtLmJsYW5rVGFyZ2V0KSB7XG4gICAgICB0aGlzLndpbi5vcGVuKGl0ZW0uaHJlZik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgvXmh0dHBzPzpcXC9cXC8vLnRlc3QoaXRlbS5ocmVmKSkge1xuICAgICAgdGhpcy53aW4ubG9jYXRpb24uaHJlZiA9IGl0ZW0uaHJlZjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChpdGVtLmhyZWYpO1xuICAgIH1cbiAgfVxufVxuIl19