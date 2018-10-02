/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ContentChildren, QueryList, ChangeDetectionStrategy, Inject, } from '@angular/core';
import { WINDOW } from '@delon/theme';
import { Router } from '@angular/router';
import { GlobalFooterItemComponent } from './global-footer-item.component';
export class GlobalFooterComponent {
    /**
     * @param {?} router
     * @param {?} win
     */
    constructor(router, win) {
        this.router = router;
        this.win = win;
        this.links = [];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    to(item) {
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
    }
}
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
GlobalFooterComponent.ctorParameters = () => [
    { type: Router },
    { type: Window, decorators: [{ type: Inject, args: [WINDOW,] }] }
];
GlobalFooterComponent.propDecorators = {
    links: [{ type: Input }],
    items: [{ type: ContentChildren, args: [GlobalFooterItemComponent,] }]
};
if (false) {
    /** @type {?} */
    GlobalFooterComponent.prototype.links;
    /** @type {?} */
    GlobalFooterComponent.prototype.items;
    /** @type {?} */
    GlobalFooterComponent.prototype.router;
    /** @type {?} */
    GlobalFooterComponent.prototype.win;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2dsb2JhbC1mb290ZXIvIiwic291cmNlcyI6WyJnbG9iYWwtZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUNmLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDdEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3pDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBUzNFLE1BQU07Ozs7O0lBT0osWUFBb0IsTUFBYyxFQUEwQixHQUFXO1FBQW5ELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBMEIsUUFBRyxHQUFILEdBQUcsQ0FBUTtxQkFMM0MsRUFBRTtLQUs2Qzs7Ozs7SUFFM0UsRUFBRSxDQUFDLElBQXNCO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixPQUFPO1NBQ1I7UUFDRCxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3BDO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7S0FDRjs7O1lBN0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsNGRBQTZDO2dCQUM3QyxJQUFJLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUU7Z0JBQ3pDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBWFEsTUFBTTtZQW1Cb0QsTUFBTSx1QkFBbEMsTUFBTSxTQUFDLE1BQU07OztvQkFOakQsS0FBSztvQkFHTCxlQUFlLFNBQUMseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBJbmplY3QsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBHbG9iYWxGb290ZXJMaW5rIH0gZnJvbSAnLi9nbG9iYWwtZm9vdGVyLnR5cGVzJztcclxuaW1wb3J0IHsgR2xvYmFsRm9vdGVySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vZ2xvYmFsLWZvb3Rlci1pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dsb2JhbC1mb290ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nbG9iYWwtZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7ICdbY2xhc3MuZ2xvYmFsLWZvb3Rlcl0nOiAndHJ1ZScgfSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdsb2JhbEZvb3RlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBsaW5rczogR2xvYmFsRm9vdGVyTGlua1tdID0gW107XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oR2xvYmFsRm9vdGVySXRlbUNvbXBvbmVudClcclxuICBpdGVtcyE6IFF1ZXJ5TGlzdDxHbG9iYWxGb290ZXJJdGVtQ29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgQEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luOiBXaW5kb3cpIHt9XHJcblxyXG4gIHRvKGl0ZW06IEdsb2JhbEZvb3RlckxpbmspIHtcclxuICAgIGlmICghaXRlbS5ocmVmKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChpdGVtLmJsYW5rVGFyZ2V0KSB7XHJcbiAgICAgIHRoaXMud2luLm9wZW4oaXRlbS5ocmVmKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKC9eaHR0cHM/OlxcL1xcLy8udGVzdChpdGVtLmhyZWYpKSB7XHJcbiAgICAgIHRoaXMud2luLmxvY2F0aW9uLmhyZWYgPSBpdGVtLmhyZWY7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGl0ZW0uaHJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==