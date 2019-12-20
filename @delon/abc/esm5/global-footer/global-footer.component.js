/**
 * @fileoverview added by tsickle
 * Generated from: global-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomSanitizer } from '@angular/platform-browser';
import { ChangeDetectionStrategy, Component, ContentChildren, Inject, Input, QueryList, ViewEncapsulation, } from '@angular/core';
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
            function (i) { return i._title = _this.dom.bypassSecurityTrustHtml(i.title); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2dsb2JhbC1mb290ZXIvIiwic291cmNlcyI6WyJnbG9iYWwtZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXRDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzNFO0lBdUJFLCtCQUFvQixNQUFjLEVBQTBCLEdBQVcsRUFBVSxHQUFpQjtRQUE5RSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQTBCLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBYjFGLFdBQU0sR0FBdUIsRUFBRSxDQUFDO0lBYThELENBQUM7SUFYdkcsc0JBQ0ksd0NBQUs7Ozs7UUFJVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7OztRQVBELFVBQ1UsR0FBdUI7WUFEakMsaUJBSUM7WUFGQyxHQUFHLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBcEQsQ0FBb0QsRUFBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBOzs7OztJQVNELGtDQUFFOzs7O0lBQUYsVUFBRyxJQUFzQjtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsT0FBTztTQUNSO1FBQ0QsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNwQzthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7Z0JBdENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLDJjQUE2QztvQkFDN0MsSUFBSSxFQUFFLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFO29CQUN6QyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQWRRLE1BQU07Z0JBNkJvRCxNQUFNLHVCQUFsQyxNQUFNLFNBQUMsTUFBTTtnQkF2QzNDLFlBQVk7Ozt3QkE0QmxCLEtBQUs7d0JBU0wsZUFBZSxTQUFDLHlCQUF5Qjs7SUFrQjVDLDRCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0E5QlkscUJBQXFCOzs7Ozs7SUFDaEMsdUNBQXdDOztJQVd4QyxzQ0FBeUY7Ozs7O0lBRTdFLHVDQUFzQjs7Ozs7SUFBRSxvQ0FBbUM7Ozs7O0lBQUUsb0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7IEdsb2JhbEZvb3Rlckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2dsb2JhbC1mb290ZXItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2xvYmFsRm9vdGVyTGluayB9IGZyb20gJy4vZ2xvYmFsLWZvb3Rlci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsb2JhbC1mb290ZXInLFxuICBleHBvcnRBczogJ2dsb2JhbEZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbG9iYWwtZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDogeyAnW2NsYXNzLmdsb2JhbC1mb290ZXJdJzogJ3RydWUnIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgR2xvYmFsRm9vdGVyQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBfbGlua3M6IEdsb2JhbEZvb3RlckxpbmtbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBsaW5rcyh2YWw6IEdsb2JhbEZvb3RlckxpbmtbXSkge1xuICAgIHZhbC5mb3JFYWNoKGkgPT4gaS5fdGl0bGUgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChpLnRpdGxlKSk7XG4gICAgdGhpcy5fbGlua3MgPSB2YWw7XG4gIH1cbiAgZ2V0IGxpbmtzKCkge1xuICAgIHJldHVybiB0aGlzLl9saW5rcztcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oR2xvYmFsRm9vdGVySXRlbUNvbXBvbmVudCkgaXRlbXMhOiBRdWVyeUxpc3Q8R2xvYmFsRm9vdGVySXRlbUNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgQEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luOiBXaW5kb3csIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIpIHsgfVxuXG4gIHRvKGl0ZW06IEdsb2JhbEZvb3RlckxpbmspIHtcbiAgICBpZiAoIWl0ZW0uaHJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXRlbS5ibGFua1RhcmdldCkge1xuICAgICAgdGhpcy53aW4ub3BlbihpdGVtLmhyZWYpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoL15odHRwcz86XFwvXFwvLy50ZXN0KGl0ZW0uaHJlZikpIHtcbiAgICAgIHRoaXMud2luLmxvY2F0aW9uLmhyZWYgPSBpdGVtLmhyZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoaXRlbS5ocmVmKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==