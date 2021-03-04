import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, Component, ContentChildren, Inject, Input, Optional, QueryList, ViewEncapsulation, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { WINDOW } from '@delon/util/token';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { GlobalFooterItemComponent } from './global-footer-item.component';
let GlobalFooterComponent = class GlobalFooterComponent {
    constructor(router, win, dom, directionality) {
        this.router = router;
        this.win = win;
        this.dom = dom;
        this.directionality = directionality;
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
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(untilDestroyed(this)).subscribe((direction) => {
            this.dir = direction;
        });
    }
};
GlobalFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'global-footer',
                exportAs: 'globalFooter',
                template: "<div *ngIf=\"links.length > 0 || items.length > 0\" class=\"global-footer__links\">\n  <a *ngFor=\"let i of links\" class=\"global-footer__links-item\" (click)=\"to(i)\" [innerHTML]=\"i._title\"></a>\n  <a *ngFor=\"let i of items\" class=\"global-footer__links-item\" (click)=\"to(i)\">\n    <ng-container *ngTemplateOutlet=\"i.host\"></ng-container>\n  </a>\n</div>\n<div class=\"global-footer__copyright\">\n  <ng-content></ng-content>\n</div>\n",
                host: {
                    '[class.global-footer]': 'true',
                    '[class.global-footer-rtl]': `dir === 'rtl'`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
/** @nocollapse */
GlobalFooterComponent.ctorParameters = () => [
    { type: Router },
    { type: undefined, decorators: [{ type: Inject, args: [WINDOW,] }] },
    { type: DomSanitizer },
    { type: Directionality, decorators: [{ type: Optional }] }
];
GlobalFooterComponent.propDecorators = {
    links: [{ type: Input }],
    items: [{ type: ContentChildren, args: [GlobalFooterItemComponent,] }]
};
GlobalFooterComponent = __decorate([
    UntilDestroy(),
    __metadata("design:paramtypes", [Router, Object, DomSanitizer,
        Directionality])
], GlobalFooterComponent);
export { GlobalFooterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvZ2xvYmFsLWZvb3Rlci9nbG9iYWwtZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGVBQWUsRUFDZixNQUFNLEVBQ04sS0FBSyxFQUVMLFFBQVEsRUFDUixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7SUFnQjlELHFCQUFxQixTQUFyQixxQkFBcUI7SUFnQmhDLFlBQ1UsTUFBYyxFQUNFLEdBQVEsRUFDeEIsR0FBaUIsRUFDTCxjQUE4QjtRQUgxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ0UsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUN4QixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ0wsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBbkI1QyxXQUFNLEdBQXVCLEVBQUUsQ0FBQztRQUV4QyxRQUFHLEdBQWMsS0FBSyxDQUFDO0lBa0JwQixDQUFDO0lBaEJKLElBQ0ksS0FBSyxDQUFDLEdBQXVCO1FBQy9CLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQVdELEVBQUUsQ0FBQyxJQUFrRDtRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsT0FBTztTQUNSO1FBQ0QsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNwQzthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUVELFFBQVE7O1FBQ04sSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUNyQyxNQUFBLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSwwQ0FBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLFNBQW9CLEVBQUUsRUFBRTtZQUN4RixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztRQUN2QixDQUFDLEVBQUU7SUFDTCxDQUFDO0NBQ0YsQ0FBQTs7WUF4REEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsY0FBYztnQkFDeEIsMmNBQTZDO2dCQUM3QyxJQUFJLEVBQUU7b0JBQ0osdUJBQXVCLEVBQUUsTUFBTTtvQkFDL0IsMkJBQTJCLEVBQUUsZUFBZTtpQkFDN0M7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBbEJRLE1BQU07NENBcUNWLE1BQU0sU0FBQyxNQUFNO1lBdENULFlBQVk7WUFaRCxjQUFjLHVCQW9EN0IsUUFBUTs7O29CQWZWLEtBQUs7b0JBU0wsZUFBZSxTQUFDLHlCQUF5Qjs7QUFkL0IscUJBQXFCO0lBYmpDLFlBQVksRUFBRTtxQ0E4QkssTUFBTSxVQUVULFlBQVk7UUFDVyxjQUFjO0dBcEJ6QyxxQkFBcUIsQ0E0Q2pDO1NBNUNZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnQGRlbG9uL3V0aWwvdG9rZW4nO1xuaW1wb3J0IHsgVW50aWxEZXN0cm95LCB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0BuZ25lYXQvdW50aWwtZGVzdHJveSc7XG5pbXBvcnQgeyBHbG9iYWxGb290ZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9nbG9iYWwtZm9vdGVyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEdsb2JhbEZvb3RlckxpbmsgfSBmcm9tICcuL2dsb2JhbC1mb290ZXIudHlwZXMnO1xuXG5AVW50aWxEZXN0cm95KClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsb2JhbC1mb290ZXInLFxuICBleHBvcnRBczogJ2dsb2JhbEZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbG9iYWwtZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZ2xvYmFsLWZvb3Rlcl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5nbG9iYWwtZm9vdGVyLXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgR2xvYmFsRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfbGlua3M6IEdsb2JhbEZvb3RlckxpbmtbXSA9IFtdO1xuXG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgQElucHV0KClcbiAgc2V0IGxpbmtzKHZhbDogR2xvYmFsRm9vdGVyTGlua1tdKSB7XG4gICAgdmFsLmZvckVhY2goaSA9PiAoaS5fdGl0bGUgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChpLnRpdGxlKSkpO1xuICAgIHRoaXMuX2xpbmtzID0gdmFsO1xuICB9XG4gIGdldCBsaW5rcygpOiBHbG9iYWxGb290ZXJMaW5rW10ge1xuICAgIHJldHVybiB0aGlzLl9saW5rcztcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oR2xvYmFsRm9vdGVySXRlbUNvbXBvbmVudCkgaXRlbXMhOiBRdWVyeUxpc3Q8R2xvYmFsRm9vdGVySXRlbUNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSB3aW46IGFueSxcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxuICApIHt9XG5cbiAgdG8oaXRlbTogR2xvYmFsRm9vdGVyTGluayB8IEdsb2JhbEZvb3Rlckl0ZW1Db21wb25lbnQpOiB2b2lkIHtcbiAgICBpZiAoIWl0ZW0uaHJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXRlbS5ibGFua1RhcmdldCkge1xuICAgICAgdGhpcy53aW4ub3BlbihpdGVtLmhyZWYpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoL15odHRwcz86XFwvXFwvLy50ZXN0KGl0ZW0uaHJlZikpIHtcbiAgICAgIHRoaXMud2luLmxvY2F0aW9uLmhyZWYgPSBpdGVtLmhyZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoaXRlbS5ocmVmKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgIH0pO1xuICB9XG59XG4iXX0=