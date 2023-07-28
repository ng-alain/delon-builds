import { ChangeDetectionStrategy, Component, ContentChildren, DestroyRef, Inject, Input, Optional, ViewEncapsulation, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WINDOW } from '@delon/util/token';
import { GlobalFooterItemComponent } from './global-footer-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/cdk/bidi";
import * as i4 from "@angular/common";
export class GlobalFooterComponent {
    set links(val) {
        val.forEach(i => (i._title = this.dom.bypassSecurityTrustHtml(i.title)));
        this._links = val;
    }
    get links() {
        return this._links;
    }
    constructor(router, win, dom, directionality, cdr) {
        this.router = router;
        this.win = win;
        this.dom = dom;
        this.directionality = directionality;
        this.cdr = cdr;
        this.destroy$ = inject(DestroyRef);
        this._links = [];
        this.dir = 'ltr';
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
        this.dir = this.directionality.value;
        this.directionality.change?.pipe(takeUntilDestroyed(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: GlobalFooterComponent, deps: [{ token: i1.Router }, { token: WINDOW }, { token: i2.DomSanitizer }, { token: i3.Directionality, optional: true }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.7", type: GlobalFooterComponent, selector: "global-footer", inputs: { links: "links" }, host: { properties: { "class.global-footer": "true", "class.global-footer-rtl": "dir === 'rtl'" } }, queries: [{ propertyName: "items", predicate: GlobalFooterItemComponent }], exportAs: ["globalFooter"], ngImport: i0, template: "<div *ngIf=\"links.length > 0 || items.length > 0\" class=\"global-footer__links\">\n  <a *ngFor=\"let i of links\" class=\"global-footer__links-item\" (click)=\"to(i)\" [innerHTML]=\"i._title\"></a>\n  <a *ngFor=\"let i of items\" class=\"global-footer__links-item\" (click)=\"to(i)\">\n    <ng-container *ngTemplateOutlet=\"i.host\"></ng-container>\n  </a>\n</div>\n<div class=\"global-footer__copyright\">\n  <ng-content></ng-content>\n</div>\n", dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: GlobalFooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'global-footer', exportAs: 'globalFooter', host: {
                        '[class.global-footer]': 'true',
                        '[class.global-footer-rtl]': `dir === 'rtl'`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"links.length > 0 || items.length > 0\" class=\"global-footer__links\">\n  <a *ngFor=\"let i of links\" class=\"global-footer__links-item\" (click)=\"to(i)\" [innerHTML]=\"i._title\"></a>\n  <a *ngFor=\"let i of items\" class=\"global-footer__links-item\" (click)=\"to(i)\">\n    <ng-container *ngTemplateOutlet=\"i.host\"></ng-container>\n  </a>\n</div>\n<div class=\"global-footer__copyright\">\n  <ng-content></ng-content>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [WINDOW]
                }] }, { type: i2.DomSanitizer }, { type: i3.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { links: [{
                type: Input
            }], items: [{
                type: ContentChildren,
                args: [GlobalFooterItemComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvZ2xvYmFsLWZvb3Rlci9nbG9iYWwtZm9vdGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9nbG9iYWwtZm9vdGVyL2dsb2JhbC1mb290ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUVMLFFBQVEsRUFFUixpQkFBaUIsRUFDakIsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSWhFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUczQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7O0FBZTNFLE1BQU0sT0FBTyxxQkFBcUI7SUFNaEMsSUFDSSxLQUFLLENBQUMsR0FBdUI7UUFDL0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBSUQsWUFDVSxNQUFjLEVBQ0UsR0FBYyxFQUM5QixHQUFpQixFQUNMLGNBQThCLEVBQzFDLEdBQXNCO1FBSnRCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDRSxRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQzlCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDTCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDMUMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFyQnhCLGFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUIsV0FBTSxHQUF1QixFQUFFLENBQUM7UUFFeEMsUUFBRyxHQUFjLEtBQUssQ0FBQztJQW1CcEIsQ0FBQztJQUVKLEVBQUUsQ0FBQyxJQUFrRDtRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsT0FBTztTQUNSO1FBQ0QsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNwQzthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7WUFDckcsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OEdBOUNVLHFCQUFxQix3Q0FtQnRCLE1BQU07a0dBbkJMLHFCQUFxQiw0TUFlZix5QkFBeUIseURDcEQ1QyxpY0FTQTs7MkZENEJhLHFCQUFxQjtrQkFaakMsU0FBUzsrQkFDRSxlQUFlLFlBQ2YsY0FBYyxRQUVsQjt3QkFDSix1QkFBdUIsRUFBRSxNQUFNO3dCQUMvQiwyQkFBMkIsRUFBRSxlQUFlO3FCQUM3Qyx1QkFDb0IsS0FBSyxtQkFDVCx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJOzswQkFxQmxDLE1BQU07MkJBQUMsTUFBTTs7MEJBRWIsUUFBUTs0RUFkUCxLQUFLO3NCQURSLEtBQUs7Z0JBU3NDLEtBQUs7c0JBQWhELGVBQWU7dUJBQUMseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIERlc3Ryb3lSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIGluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnQGRlbG9uL3V0aWwvdG9rZW4nO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBHbG9iYWxGb290ZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9nbG9iYWwtZm9vdGVyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEdsb2JhbEZvb3RlckxpbmsgfSBmcm9tICcuL2dsb2JhbC1mb290ZXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbG9iYWwtZm9vdGVyJyxcbiAgZXhwb3J0QXM6ICdnbG9iYWxGb290ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2xvYmFsLWZvb3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmdsb2JhbC1mb290ZXJdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuZ2xvYmFsLWZvb3Rlci1ydGxdJzogYGRpciA9PT0gJ3J0bCdgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBHbG9iYWxGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGRlc3Ryb3kkID0gaW5qZWN0KERlc3Ryb3lSZWYpO1xuICBwcml2YXRlIF9saW5rczogR2xvYmFsRm9vdGVyTGlua1tdID0gW107XG5cbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICBASW5wdXQoKVxuICBzZXQgbGlua3ModmFsOiBHbG9iYWxGb290ZXJMaW5rW10pIHtcbiAgICB2YWwuZm9yRWFjaChpID0+IChpLl90aXRsZSA9IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGkudGl0bGUpKSk7XG4gICAgdGhpcy5fbGlua3MgPSB2YWw7XG4gIH1cbiAgZ2V0IGxpbmtzKCk6IEdsb2JhbEZvb3RlckxpbmtbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpbmtzO1xuICB9XG5cbiAgQENvbnRlbnRDaGlsZHJlbihHbG9iYWxGb290ZXJJdGVtQ29tcG9uZW50KSBpdGVtcyE6IFF1ZXJ5TGlzdDxHbG9iYWxGb290ZXJJdGVtQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHdpbjogTnpTYWZlQW55LFxuICAgIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICB0byhpdGVtOiBHbG9iYWxGb290ZXJMaW5rIHwgR2xvYmFsRm9vdGVySXRlbUNvbXBvbmVudCk6IHZvaWQge1xuICAgIGlmICghaXRlbS5ocmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpdGVtLmJsYW5rVGFyZ2V0KSB7XG4gICAgICB0aGlzLndpbi5vcGVuKGl0ZW0uaHJlZik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgvXmh0dHBzPzpcXC9cXC8vLnRlc3QoaXRlbS5ocmVmKSkge1xuICAgICAgdGhpcy53aW4ubG9jYXRpb24uaHJlZiA9IGl0ZW0uaHJlZjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChpdGVtLmhyZWYpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWxEZXN0cm95ZWQodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwibGlua3MubGVuZ3RoID4gMCB8fCBpdGVtcy5sZW5ndGggPiAwXCIgY2xhc3M9XCJnbG9iYWwtZm9vdGVyX19saW5rc1wiPlxuICA8YSAqbmdGb3I9XCJsZXQgaSBvZiBsaW5rc1wiIGNsYXNzPVwiZ2xvYmFsLWZvb3Rlcl9fbGlua3MtaXRlbVwiIChjbGljayk9XCJ0byhpKVwiIFtpbm5lckhUTUxdPVwiaS5fdGl0bGVcIj48L2E+XG4gIDxhICpuZ0Zvcj1cImxldCBpIG9mIGl0ZW1zXCIgY2xhc3M9XCJnbG9iYWwtZm9vdGVyX19saW5rcy1pdGVtXCIgKGNsaWNrKT1cInRvKGkpXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImkuaG9zdFwiPjwvbmctY29udGFpbmVyPlxuICA8L2E+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJnbG9iYWwtZm9vdGVyX19jb3B5cmlnaHRcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG4iXX0=