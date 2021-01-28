import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, Component, ContentChildren, Inject, Input, Optional, QueryList, ViewEncapsulation, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { WINDOW } from '@delon/theme';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GlobalFooterItemComponent } from './global-footer-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/cdk/bidi";
import * as i4 from "@angular/common";
export class GlobalFooterComponent {
    constructor(router, win, dom, directionality) {
        this.router = router;
        this.win = win;
        this.dom = dom;
        this.directionality = directionality;
        this.destroy$ = new Subject();
        this._links = [];
        this.dir = 'ltr';
    }
    set links(val) {
        val.forEach(i => (i._title = this.dom.bypassSecurityTrustHtml(i.title)));
        this._links = val;
    }
    get links() {
        return this._links;
    }
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
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ GlobalFooterComponent.ɵfac = function GlobalFooterComponent_Factory(t) { return new (t || GlobalFooterComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(WINDOW), i0.ɵɵdirectiveInject(i2.DomSanitizer), i0.ɵɵdirectiveInject(i3.Directionality, 8)); };
/** @nocollapse */ GlobalFooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: GlobalFooterComponent, selector: "global-footer", inputs: { links: "links" }, host: { properties: { "class.global-footer": "true", "class.global-footer-rtl": "dir === 'rtl'" } }, queries: [{ propertyName: "items", predicate: GlobalFooterItemComponent, emitDistinctChangesOnly: false }], exportAs: ["globalFooter"], ngImport: i0, template: "<div *ngIf=\"links.length > 0 || items.length > 0\" class=\"global-footer__links\">\n  <a *ngFor=\"let i of links\" class=\"global-footer__links-item\" (click)=\"to(i)\" [innerHTML]=\"i._title\"></a>\n  <a *ngFor=\"let i of items\" class=\"global-footer__links-item\" (click)=\"to(i)\">\n    <ng-container *ngTemplateOutlet=\"i.host\"></ng-container>\n  </a>\n</div>\n<div class=\"global-footer__copyright\">\n  <ng-content></ng-content>\n</div>\n", directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GlobalFooterComponent, [{
        type: Component,
        args: [{
                selector: 'global-footer',
                exportAs: 'globalFooter',
                templateUrl: './global-footer.component.html',
                host: {
                    '[class.global-footer]': 'true',
                    '[class.global-footer-rtl]': `dir === 'rtl'`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i1.Router }, { type: Window, decorators: [{
                type: Inject,
                args: [WINDOW]
            }] }, { type: i2.DomSanitizer }, { type: i3.Directionality, decorators: [{
                type: Optional
            }] }]; }, { links: [{
            type: Input
        }], items: [{
            type: ContentChildren,
            args: [GlobalFooterItemComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvZ2xvYmFsLWZvb3Rlci9nbG9iYWwtZm9vdGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9nbG9iYWwtZm9vdGVyL2dsb2JhbC1mb290ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGVBQWUsRUFDZixNQUFNLEVBQ04sS0FBSyxFQUdMLFFBQVEsRUFDUixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN0QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7O0FBZTNFLE1BQU0sT0FBTyxxQkFBcUI7SUFpQmhDLFlBQ1UsTUFBYyxFQUNFLEdBQVcsRUFDM0IsR0FBaUIsRUFDTCxjQUE4QjtRQUgxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ0UsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUMzQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ0wsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBcEI1QyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMvQixXQUFNLEdBQXVCLEVBQUUsQ0FBQztRQUV4QyxRQUFHLEdBQWMsS0FBSyxDQUFDO0lBa0JwQixDQUFDO0lBaEJKLElBQ0ksS0FBSyxDQUFDLEdBQXVCO1FBQy9CLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQVdELEVBQUUsQ0FBQyxJQUFzQjtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsT0FBTztTQUNSO1FBQ0QsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNwQzthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUVELFFBQVE7O1FBQ04sSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUNyQyxNQUFBLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSwwQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7WUFDNUYsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7UUFDdkIsQ0FBQyxFQUFFO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7NkdBakRVLHFCQUFxQix3REFtQnRCLE1BQU07bUdBbkJMLHFCQUFxQiw0TUFlZix5QkFBeUIseUZDaEQ1QyxpY0FTQTt1RkR3QmEscUJBQXFCO2NBWmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLElBQUksRUFBRTtvQkFDSix1QkFBdUIsRUFBRSxNQUFNO29CQUMvQiwyQkFBMkIsRUFBRSxlQUFlO2lCQUM3QztnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7MkRBb0JnQyxNQUFNO3NCQUFsQyxNQUFNO3VCQUFDLE1BQU07O3NCQUViLFFBQVE7d0JBZFAsS0FBSztrQkFEUixLQUFLO1lBU3NDLEtBQUs7a0JBQWhELGVBQWU7bUJBQUMseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBRdWVyeUxpc3QsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBHbG9iYWxGb290ZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9nbG9iYWwtZm9vdGVyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEdsb2JhbEZvb3RlckxpbmsgfSBmcm9tICcuL2dsb2JhbC1mb290ZXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbG9iYWwtZm9vdGVyJyxcbiAgZXhwb3J0QXM6ICdnbG9iYWxGb290ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2xvYmFsLWZvb3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmdsb2JhbC1mb290ZXJdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuZ2xvYmFsLWZvb3Rlci1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEdsb2JhbEZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgX2xpbmtzOiBHbG9iYWxGb290ZXJMaW5rW10gPSBbXTtcblxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBsaW5rcyh2YWw6IEdsb2JhbEZvb3RlckxpbmtbXSkge1xuICAgIHZhbC5mb3JFYWNoKGkgPT4gKGkuX3RpdGxlID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaS50aXRsZSkpKTtcbiAgICB0aGlzLl9saW5rcyA9IHZhbDtcbiAgfVxuICBnZXQgbGlua3MoKTogR2xvYmFsRm9vdGVyTGlua1tdIHtcbiAgICByZXR1cm4gdGhpcy5fbGlua3M7XG4gIH1cblxuICBAQ29udGVudENoaWxkcmVuKEdsb2JhbEZvb3Rlckl0ZW1Db21wb25lbnQpIGl0ZW1zITogUXVlcnlMaXN0PEdsb2JhbEZvb3Rlckl0ZW1Db21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgQEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luOiBXaW5kb3csXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplcixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcbiAgKSB7fVxuXG4gIHRvKGl0ZW06IEdsb2JhbEZvb3RlckxpbmspOiB2b2lkIHtcbiAgICBpZiAoIWl0ZW0uaHJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXRlbS5ibGFua1RhcmdldCkge1xuICAgICAgdGhpcy53aW4ub3BlbihpdGVtLmhyZWYpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoL15odHRwcz86XFwvXFwvLy50ZXN0KGl0ZW0uaHJlZikpIHtcbiAgICAgIHRoaXMud2luLmxvY2F0aW9uLmhyZWYgPSBpdGVtLmhyZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoaXRlbS5ocmVmKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIiwiPGRpdiAqbmdJZj1cImxpbmtzLmxlbmd0aCA+IDAgfHwgaXRlbXMubGVuZ3RoID4gMFwiIGNsYXNzPVwiZ2xvYmFsLWZvb3Rlcl9fbGlua3NcIj5cbiAgPGEgKm5nRm9yPVwibGV0IGkgb2YgbGlua3NcIiBjbGFzcz1cImdsb2JhbC1mb290ZXJfX2xpbmtzLWl0ZW1cIiAoY2xpY2spPVwidG8oaSlcIiBbaW5uZXJIVE1MXT1cImkuX3RpdGxlXCI+PC9hPlxuICA8YSAqbmdGb3I9XCJsZXQgaSBvZiBpdGVtc1wiIGNsYXNzPVwiZ2xvYmFsLWZvb3Rlcl9fbGlua3MtaXRlbVwiIChjbGljayk9XCJ0byhpKVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpLmhvc3RcIj48L25nLWNvbnRhaW5lcj5cbiAgPC9hPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZ2xvYmFsLWZvb3Rlcl9fY29weXJpZ2h0XCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19