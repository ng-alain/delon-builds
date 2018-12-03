/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                template: "<div *ngIf=\"links.length > 0 || items.length > 0\" class=\"global-footer__links\">\n  <a *ngFor=\"let i of links\" class=\"global-footer__links-item\" (click)=\"to(i)\" [innerHTML]=\"i.title\"></a>\n  <a *ngFor=\"let i of items\" class=\"global-footer__links-item\" (click)=\"to(i)\">\n    <ng-container *ngTemplateOutlet=\"i.host\"></ng-container>\n  </a>\n</div>\n<div class=\"global-footer__copyright\">\n  <ng-content></ng-content>\n</div>\n",
                host: { '[class.global-footer]': 'true' },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2dsb2JhbC1mb290ZXIvIiwic291cmNlcyI6WyJnbG9iYWwtZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUNmLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDdEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3pDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBUTNFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBT2hDLFlBQW9CLE1BQWMsRUFBMEIsR0FBVztRQUFuRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQTBCLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFMdkUsVUFBSyxHQUF1QixFQUFFLENBQUM7SUFLMkMsQ0FBQzs7Ozs7SUFFM0UsRUFBRSxDQUFDLElBQXNCO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixPQUFPO1NBQ1I7UUFDRCxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3BDO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QiwwY0FBNkM7Z0JBQzdDLElBQUksRUFBRSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sRUFBRTtnQkFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFWUSxNQUFNO1lBa0JvRCxNQUFNLHVCQUFsQyxNQUFNLFNBQUMsTUFBTTs7O29CQU5qRCxLQUFLO29CQUdMLGVBQWUsU0FBQyx5QkFBeUI7Ozs7SUFIMUMsc0NBQytCOztJQUUvQixzQ0FDNkM7O0lBRWpDLHVDQUFzQjs7SUFBRSxvQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgR2xvYmFsRm9vdGVyTGluayB9IGZyb20gJy4vZ2xvYmFsLWZvb3Rlci50eXBlcyc7XG5pbXBvcnQgeyBHbG9iYWxGb290ZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9nbG9iYWwtZm9vdGVyLWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2xvYmFsLWZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbG9iYWwtZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDogeyAnW2NsYXNzLmdsb2JhbC1mb290ZXJdJzogJ3RydWUnIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBHbG9iYWxGb290ZXJDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBsaW5rczogR2xvYmFsRm9vdGVyTGlua1tdID0gW107XG5cbiAgQENvbnRlbnRDaGlsZHJlbihHbG9iYWxGb290ZXJJdGVtQ29tcG9uZW50KVxuICBpdGVtcyE6IFF1ZXJ5TGlzdDxHbG9iYWxGb290ZXJJdGVtQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSB3aW46IFdpbmRvdykge31cblxuICB0byhpdGVtOiBHbG9iYWxGb290ZXJMaW5rKSB7XG4gICAgaWYgKCFpdGVtLmhyZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGl0ZW0uYmxhbmtUYXJnZXQpIHtcbiAgICAgIHRoaXMud2luLm9wZW4oaXRlbS5ocmVmKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKC9eaHR0cHM/OlxcL1xcLy8udGVzdChpdGVtLmhyZWYpKSB7XG4gICAgICB0aGlzLndpbi5sb2NhdGlvbi5ocmVmID0gaXRlbS5ocmVmO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGl0ZW0uaHJlZik7XG4gICAgfVxuICB9XG59XG4iXX0=