/**
 * @fileoverview added by tsickle
 * Generated from: global-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ContentChildren, Inject, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { WINDOW } from '@delon/theme';
import { GlobalFooterItemComponent } from './global-footer-item.component';
export class GlobalFooterComponent {
    /**
     * @param {?} router
     * @param {?} win
     * @param {?} dom
     */
    constructor(router, win, dom) {
        this.router = router;
        this.win = win;
        this.dom = dom;
        this._links = [];
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set links(val) {
        val.forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => (i._title = this.dom.bypassSecurityTrustHtml(i.title))));
        this._links = val;
    }
    /**
     * @return {?}
     */
    get links() {
        return this._links;
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
                exportAs: 'globalFooter',
                template: "<div *ngIf=\"links.length > 0 || items.length > 0\" class=\"global-footer__links\">\n  <a *ngFor=\"let i of links\" class=\"global-footer__links-item\" (click)=\"to(i)\" [innerHTML]=\"i._title\"></a>\n  <a *ngFor=\"let i of items\" class=\"global-footer__links-item\" (click)=\"to(i)\">\n    <ng-container *ngTemplateOutlet=\"i.host\"></ng-container>\n  </a>\n</div>\n<div class=\"global-footer__copyright\">\n  <ng-content></ng-content>\n</div>\n",
                host: { '[class.global-footer]': 'true' },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
GlobalFooterComponent.ctorParameters = () => [
    { type: Router },
    { type: Window, decorators: [{ type: Inject, args: [WINDOW,] }] },
    { type: DomSanitizer }
];
GlobalFooterComponent.propDecorators = {
    links: [{ type: Input }],
    items: [{ type: ContentChildren, args: [GlobalFooterItemComponent,] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvZ2xvYmFsLWZvb3Rlci9nbG9iYWwtZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN0QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQVkzRSxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7SUFjaEMsWUFBb0IsTUFBYyxFQUEwQixHQUFXLEVBQVUsR0FBaUI7UUFBOUUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUEwQixRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBYztRQWIxRixXQUFNLEdBQXVCLEVBQUUsQ0FBQztJQWE2RCxDQUFDOzs7OztJQVh0RyxJQUNJLEtBQUssQ0FBQyxHQUF1QjtRQUMvQixHQUFHLENBQUMsT0FBTzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUNwQixDQUFDOzs7O0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBTUQsRUFBRSxDQUFDLElBQXNCO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixPQUFPO1NBQ1I7UUFDRCxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3BDO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsY0FBYztnQkFDeEIsMmNBQTZDO2dCQUM3QyxJQUFJLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUU7Z0JBQ3pDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztZQWJRLE1BQU07WUE0Qm9ELE1BQU0sdUJBQWxDLE1BQU0sU0FBQyxNQUFNO1lBN0IzQyxZQUFZOzs7b0JBa0JsQixLQUFLO29CQVNMLGVBQWUsU0FBQyx5QkFBeUI7Ozs7Ozs7SUFYMUMsdUNBQXdDOztJQVd4QyxzQ0FBeUY7Ozs7O0lBRTdFLHVDQUFzQjs7Ozs7SUFBRSxvQ0FBbUM7Ozs7O0lBQUUsb0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBJbmplY3QsIElucHV0LCBRdWVyeUxpc3QsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgR2xvYmFsRm9vdGVySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vZ2xvYmFsLWZvb3Rlci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHbG9iYWxGb290ZXJMaW5rIH0gZnJvbSAnLi9nbG9iYWwtZm9vdGVyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2xvYmFsLWZvb3RlcicsXG4gIGV4cG9ydEFzOiAnZ2xvYmFsRm9vdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsb2JhbC1mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7ICdbY2xhc3MuZ2xvYmFsLWZvb3Rlcl0nOiAndHJ1ZScgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBHbG9iYWxGb290ZXJDb21wb25lbnQge1xuICBwcml2YXRlIF9saW5rczogR2xvYmFsRm9vdGVyTGlua1tdID0gW107XG5cbiAgQElucHV0KClcbiAgc2V0IGxpbmtzKHZhbDogR2xvYmFsRm9vdGVyTGlua1tdKSB7XG4gICAgdmFsLmZvckVhY2goaSA9PiAoaS5fdGl0bGUgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChpLnRpdGxlKSkpO1xuICAgIHRoaXMuX2xpbmtzID0gdmFsO1xuICB9XG4gIGdldCBsaW5rcygpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlua3M7XG4gIH1cblxuICBAQ29udGVudENoaWxkcmVuKEdsb2JhbEZvb3Rlckl0ZW1Db21wb25lbnQpIGl0ZW1zITogUXVlcnlMaXN0PEdsb2JhbEZvb3Rlckl0ZW1Db21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHdpbjogV2luZG93LCBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyKSB7fVxuXG4gIHRvKGl0ZW06IEdsb2JhbEZvb3RlckxpbmspIHtcbiAgICBpZiAoIWl0ZW0uaHJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXRlbS5ibGFua1RhcmdldCkge1xuICAgICAgdGhpcy53aW4ub3BlbihpdGVtLmhyZWYpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoL15odHRwcz86XFwvXFwvLy50ZXN0KGl0ZW0uaHJlZikpIHtcbiAgICAgIHRoaXMud2luLmxvY2F0aW9uLmhyZWYgPSBpdGVtLmhyZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoaXRlbS5ocmVmKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==