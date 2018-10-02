import { __decorate, __metadata, __spread } from 'tslib';
import { Component, Input, ViewChild, ContentChildren, ChangeDetectionStrategy, Inject, NgModule } from '@angular/core';
import { InputBoolean, DelonUtilModule } from '@delon/util';
import { WINDOW } from '@delon/theme';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GlobalFooterItemComponent = /** @class */ (function () {
    function GlobalFooterItemComponent() {
    }
    GlobalFooterItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'global-footer-item',
                    template: "<ng-template #host><ng-content></ng-content></ng-template>"
                }] }
    ];
    GlobalFooterItemComponent.propDecorators = {
        host: [{ type: ViewChild, args: ['host',] }],
        href: [{ type: Input }],
        blankTarget: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], GlobalFooterItemComponent.prototype, "blankTarget", void 0);
    return GlobalFooterItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GlobalFooterComponent = /** @class */ (function () {
    function GlobalFooterComponent(router, win) {
        this.router = router;
        this.win = win;
        this.links = [];
    }
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
                    template: "<div *ngIf=\"links.length > 0 || items.length > 0\" class=\"global-footer__links\">\r\n  <a *ngFor=\"let i of links\" class=\"global-footer__links-item\" (click)=\"to(i)\" [innerHTML]=\"i.title\"></a>\r\n  <a *ngFor=\"let i of items\" class=\"global-footer__links-item\" (click)=\"to(i)\">\r\n    <ng-container *ngTemplateOutlet=\"i.host\"></ng-container>\r\n  </a>\r\n</div>\r\n<div class=\"global-footer__copyright\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    host: { '[class.global-footer]': 'true' },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    GlobalFooterComponent.ctorParameters = function () { return [
        { type: Router },
        { type: Window, decorators: [{ type: Inject, args: [WINDOW,] }] }
    ]; };
    GlobalFooterComponent.propDecorators = {
        links: [{ type: Input }],
        items: [{ type: ContentChildren, args: [GlobalFooterItemComponent,] }]
    };
    return GlobalFooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [GlobalFooterComponent, GlobalFooterItemComponent];
var GlobalFooterModule = /** @class */ (function () {
    function GlobalFooterModule() {
    }
    /**
     * @return {?}
     */
    GlobalFooterModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: GlobalFooterModule, providers: [] };
    };
    GlobalFooterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return GlobalFooterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { GlobalFooterComponent, GlobalFooterItemComponent, GlobalFooterModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsRm9vdGVyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL2dsb2JhbC1mb290ZXIvZ2xvYmFsLWZvb3Rlci1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2FiYy9nbG9iYWwtZm9vdGVyL2dsb2JhbC1mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL2dsb2JhbC1mb290ZXIvZ2xvYmFsLWZvb3Rlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2xvYmFsLWZvb3Rlci1pdGVtJyxcclxuICB0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZSAjaG9zdD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5gLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2xvYmFsRm9vdGVySXRlbUNvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZCgnaG9zdCcpXHJcbiAgaG9zdDogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KClcclxuICBocmVmOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgYmxhbmtUYXJnZXQ6IGJvb2xlYW47XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBJbmplY3QsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBHbG9iYWxGb290ZXJMaW5rIH0gZnJvbSAnLi9nbG9iYWwtZm9vdGVyLnR5cGVzJztcclxuaW1wb3J0IHsgR2xvYmFsRm9vdGVySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vZ2xvYmFsLWZvb3Rlci1pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dsb2JhbC1mb290ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nbG9iYWwtZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7ICdbY2xhc3MuZ2xvYmFsLWZvb3Rlcl0nOiAndHJ1ZScgfSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdsb2JhbEZvb3RlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBsaW5rczogR2xvYmFsRm9vdGVyTGlua1tdID0gW107XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oR2xvYmFsRm9vdGVySXRlbUNvbXBvbmVudClcclxuICBpdGVtcyE6IFF1ZXJ5TGlzdDxHbG9iYWxGb290ZXJJdGVtQ29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgQEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luOiBXaW5kb3cpIHt9XHJcblxyXG4gIHRvKGl0ZW06IEdsb2JhbEZvb3RlckxpbmspIHtcclxuICAgIGlmICghaXRlbS5ocmVmKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChpdGVtLmJsYW5rVGFyZ2V0KSB7XHJcbiAgICAgIHRoaXMud2luLm9wZW4oaXRlbS5ocmVmKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKC9eaHR0cHM/OlxcL1xcLy8udGVzdChpdGVtLmhyZWYpKSB7XHJcbiAgICAgIHRoaXMud2luLmxvY2F0aW9uLmhyZWYgPSBpdGVtLmhyZWY7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGl0ZW0uaHJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmltcG9ydCB7IEdsb2JhbEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vZ2xvYmFsLWZvb3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHbG9iYWxGb290ZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9nbG9iYWwtZm9vdGVyLWl0ZW0uY29tcG9uZW50JztcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbR2xvYmFsRm9vdGVyQ29tcG9uZW50LCBHbG9iYWxGb290ZXJJdGVtQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxyXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdsb2JhbEZvb3Rlck1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4geyBuZ01vZHVsZTogR2xvYmFsRm9vdGVyTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Z0JBR0MsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSw0REFBNEQ7aUJBQ3ZFOzs7dUJBRUUsU0FBUyxTQUFDLE1BQU07dUJBR2hCLEtBQUs7OEJBR0wsS0FBSzs7O1FBQ0wsWUFBWSxFQUFFOzs7b0NBZmpCOzs7Ozs7O0FDQUE7SUE0QkUsK0JBQW9CLE1BQWMsRUFBMEIsR0FBVztRQUFuRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQTBCLFFBQUcsR0FBSCxHQUFHLENBQVE7cUJBTDNDLEVBQUU7S0FLNkM7Ozs7O0lBRTNFLGtDQUFFOzs7O0lBQUYsVUFBRyxJQUFzQjtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsT0FBTztTQUNSO1FBQ0QsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNwQzthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0tBQ0Y7O2dCQTdCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLDRkQUE2QztvQkFDN0MsSUFBSSxFQUFFLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFO29CQUN6QyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBWFEsTUFBTTtnQkFtQm9ELE1BQU0sdUJBQWxDLE1BQU0sU0FBQyxNQUFNOzs7d0JBTmpELEtBQUs7d0JBR0wsZUFBZSxTQUFDLHlCQUF5Qjs7Z0NBekI1Qzs7Ozs7Ozs7QUNRQSxJQUFNLFVBQVUsR0FBRyxDQUFDLHFCQUFxQixFQUFFLHlCQUF5QixDQUFDLENBQUM7Ozs7Ozs7SUFRN0QsMEJBQU87OztJQUFkO1FBQ0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDeEQ7O2dCQVJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGVBQWUsQ0FBQztvQkFDdEQsWUFBWSxXQUFNLFVBQVUsQ0FBQztvQkFDN0IsT0FBTyxXQUFNLFVBQVUsQ0FBQztpQkFDekI7OzZCQWREOzs7Ozs7Ozs7Ozs7Ozs7In0=