import { Directionality } from '@angular/cdk/bidi';
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, DestroyRef, Input, ViewEncapsulation, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { WINDOW } from '@delon/util/token';
import { GlobalFooterItemComponent } from './global-footer-item.component';
import * as i0 from "@angular/core";
export class GlobalFooterComponent {
    constructor() {
        this.router = inject(Router);
        this.win = inject(WINDOW);
        this.dom = inject(DomSanitizer);
        this.directionality = inject(Directionality, { optional: true });
        this.cdr = inject(ChangeDetectorRef);
        this.destroy$ = inject(DestroyRef);
        this.dir$ = this.directionality?.change?.pipe(takeUntilDestroyed());
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
        this.dir = this.directionality?.value;
        this.dir$?.pipe(takeUntilDestroyed(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: GlobalFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: GlobalFooterComponent, isStandalone: true, selector: "global-footer", inputs: { links: "links" }, host: { properties: { "class.global-footer": "true", "class.global-footer-rtl": "dir === 'rtl'" } }, queries: [{ propertyName: "items", predicate: GlobalFooterItemComponent }], exportAs: ["globalFooter"], ngImport: i0, template: "@if (links.length > 0 || items.length > 0) {\n  <div class=\"global-footer__links\">\n    @for (i of links; track $index) {\n      <a class=\"global-footer__links-item\" (click)=\"to(i)\" [innerHTML]=\"i._title\"></a>\n    }\n    @for (i of items; track $index) {\n      <a class=\"global-footer__links-item\" (click)=\"to(i)\">\n        <ng-container *ngTemplateOutlet=\"i.host\" />\n      </a>\n    }\n  </div>\n}\n<div class=\"global-footer__copyright\">\n  <ng-content />\n</div>\n", dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: GlobalFooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'global-footer', exportAs: 'globalFooter', host: {
                        '[class.global-footer]': 'true',
                        '[class.global-footer-rtl]': `dir === 'rtl'`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NgTemplateOutlet], template: "@if (links.length > 0 || items.length > 0) {\n  <div class=\"global-footer__links\">\n    @for (i of links; track $index) {\n      <a class=\"global-footer__links-item\" (click)=\"to(i)\" [innerHTML]=\"i._title\"></a>\n    }\n    @for (i of items; track $index) {\n      <a class=\"global-footer__links-item\" (click)=\"to(i)\">\n        <ng-container *ngTemplateOutlet=\"i.host\" />\n      </a>\n    }\n  </div>\n}\n<div class=\"global-footer__copyright\">\n  <ng-content />\n</div>\n" }]
        }], propDecorators: { links: [{
                type: Input
            }], items: [{
                type: ContentChildren,
                args: [GlobalFooterItemComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvZ2xvYmFsLWZvb3Rlci9nbG9iYWwtZm9vdGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9nbG9iYWwtZm9vdGVyL2dsb2JhbC1mb290ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLEtBQUssRUFHTCxpQkFBaUIsRUFDakIsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQWlCM0UsTUFBTSxPQUFPLHFCQUFxQjtJQWRsQztRQWVtQixXQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLFFBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckIsUUFBRyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQixtQkFBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM1RCxRQUFHLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDaEMsYUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV2QyxTQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUMvRCxXQUFNLEdBQXVCLEVBQUUsQ0FBQztRQUV4QyxRQUFHLEdBQWUsS0FBSyxDQUFDO0tBbUN6QjtJQWpDQyxJQUNJLEtBQUssQ0FBQyxHQUF1QjtRQUMvQixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFJRCxFQUFFLENBQUMsSUFBa0Q7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNmLE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JDLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBb0IsRUFBRSxFQUFFO1lBQ3BGLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzhHQTdDVSxxQkFBcUI7a0dBQXJCLHFCQUFxQixnT0FzQmYseUJBQXlCLHlEQzNENUMsdWVBZUEsNENEb0JZLGdCQUFnQjs7MkZBRWYscUJBQXFCO2tCQWRqQyxTQUFTOytCQUNFLGVBQWUsWUFDZixjQUFjLFFBRWxCO3dCQUNKLHVCQUF1QixFQUFFLE1BQU07d0JBQy9CLDJCQUEyQixFQUFFLGVBQWU7cUJBQzdDLHVCQUNvQixLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksY0FDekIsSUFBSSxXQUNQLENBQUMsZ0JBQWdCLENBQUM7OEJBZ0J2QixLQUFLO3NCQURSLEtBQUs7Z0JBUytDLEtBQUs7c0JBQXpELGVBQWU7dUJBQUMseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IE5nVGVtcGxhdGVPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRGVzdHJveVJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgaW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICdAZGVsb24vdXRpbC90b2tlbic7XG5cbmltcG9ydCB7IEdsb2JhbEZvb3Rlckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2dsb2JhbC1mb290ZXItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2xvYmFsRm9vdGVyTGluayB9IGZyb20gJy4vZ2xvYmFsLWZvb3Rlci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsb2JhbC1mb290ZXInLFxuICBleHBvcnRBczogJ2dsb2JhbEZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbG9iYWwtZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZ2xvYmFsLWZvb3Rlcl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5nbG9iYWwtZm9vdGVyLXJ0bF0nOiBgZGlyID09PSAncnRsJ2BcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdUZW1wbGF0ZU91dGxldF1cbn0pXG5leHBvcnQgY2xhc3MgR2xvYmFsRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXIgPSBpbmplY3QoUm91dGVyKTtcbiAgcHJpdmF0ZSByZWFkb25seSB3aW4gPSBpbmplY3QoV0lORE9XKTtcbiAgcHJpdmF0ZSByZWFkb25seSBkb20gPSBpbmplY3QoRG9tU2FuaXRpemVyKTtcbiAgcHJpdmF0ZSByZWFkb25seSBkaXJlY3Rpb25hbGl0eSA9IGluamVjdChEaXJlY3Rpb25hbGl0eSwgeyBvcHRpb25hbDogdHJ1ZSB9KTtcbiAgcHJpdmF0ZSByZWFkb25seSBjZHIgPSBpbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuICBwcml2YXRlIHJlYWRvbmx5IGRlc3Ryb3kkID0gaW5qZWN0KERlc3Ryb3lSZWYpO1xuXG4gIHByaXZhdGUgZGlyJCA9IHRoaXMuZGlyZWN0aW9uYWxpdHk/LmNoYW5nZT8ucGlwZSh0YWtlVW50aWxEZXN0cm95ZWQoKSk7XG4gIHByaXZhdGUgX2xpbmtzOiBHbG9iYWxGb290ZXJMaW5rW10gPSBbXTtcblxuICBkaXI/OiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICBASW5wdXQoKVxuICBzZXQgbGlua3ModmFsOiBHbG9iYWxGb290ZXJMaW5rW10pIHtcbiAgICB2YWwuZm9yRWFjaChpID0+IChpLl90aXRsZSA9IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGkudGl0bGUpKSk7XG4gICAgdGhpcy5fbGlua3MgPSB2YWw7XG4gIH1cbiAgZ2V0IGxpbmtzKCk6IEdsb2JhbEZvb3RlckxpbmtbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpbmtzO1xuICB9XG5cbiAgQENvbnRlbnRDaGlsZHJlbihHbG9iYWxGb290ZXJJdGVtQ29tcG9uZW50KSByZWFkb25seSBpdGVtcyE6IFF1ZXJ5TGlzdDxHbG9iYWxGb290ZXJJdGVtQ29tcG9uZW50PjtcblxuICB0byhpdGVtOiBHbG9iYWxGb290ZXJMaW5rIHwgR2xvYmFsRm9vdGVySXRlbUNvbXBvbmVudCk6IHZvaWQge1xuICAgIGlmICghaXRlbS5ocmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpdGVtLmJsYW5rVGFyZ2V0KSB7XG4gICAgICB0aGlzLndpbi5vcGVuKGl0ZW0uaHJlZik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgvXmh0dHBzPzpcXC9cXC8vLnRlc3QoaXRlbS5ocmVmKSkge1xuICAgICAgdGhpcy53aW4ubG9jYXRpb24uaHJlZiA9IGl0ZW0uaHJlZjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChpdGVtLmhyZWYpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eT8udmFsdWU7XG4gICAgdGhpcy5kaXIkPy5waXBlKHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIkBpZiAobGlua3MubGVuZ3RoID4gMCB8fCBpdGVtcy5sZW5ndGggPiAwKSB7XG4gIDxkaXYgY2xhc3M9XCJnbG9iYWwtZm9vdGVyX19saW5rc1wiPlxuICAgIEBmb3IgKGkgb2YgbGlua3M7IHRyYWNrICRpbmRleCkge1xuICAgICAgPGEgY2xhc3M9XCJnbG9iYWwtZm9vdGVyX19saW5rcy1pdGVtXCIgKGNsaWNrKT1cInRvKGkpXCIgW2lubmVySFRNTF09XCJpLl90aXRsZVwiPjwvYT5cbiAgICB9XG4gICAgQGZvciAoaSBvZiBpdGVtczsgdHJhY2sgJGluZGV4KSB7XG4gICAgICA8YSBjbGFzcz1cImdsb2JhbC1mb290ZXJfX2xpbmtzLWl0ZW1cIiAoY2xpY2spPVwidG8oaSlcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImkuaG9zdFwiIC8+XG4gICAgICA8L2E+XG4gICAgfVxuICA8L2Rpdj5cbn1cbjxkaXYgY2xhc3M9XCJnbG9iYWwtZm9vdGVyX19jb3B5cmlnaHRcIj5cbiAgPG5nLWNvbnRlbnQgLz5cbjwvZGl2PlxuIl19