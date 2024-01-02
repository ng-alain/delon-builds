import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChildren, Inject, Input, Optional, ViewEncapsulation } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WINDOW } from '@delon/util/token';
import { GlobalFooterItemComponent } from './global-footer-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/cdk/bidi";
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
        this.dir$ = this.directionality.change?.pipe(takeUntilDestroyed());
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
        this.dir$.subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GlobalFooterComponent, deps: [{ token: i1.Router }, { token: WINDOW }, { token: i2.DomSanitizer }, { token: i3.Directionality, optional: true }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.2", type: GlobalFooterComponent, isStandalone: true, selector: "global-footer", inputs: { links: "links" }, host: { properties: { "class.global-footer": "true", "class.global-footer-rtl": "dir === 'rtl'" } }, queries: [{ propertyName: "items", predicate: GlobalFooterItemComponent }], exportAs: ["globalFooter"], ngImport: i0, template: "@if (links.length > 0 || items.length > 0) {\n  <div class=\"global-footer__links\">\n    @for (i of links; track $index) {\n      <a class=\"global-footer__links-item\" (click)=\"to(i)\" [innerHTML]=\"i._title\"></a>\n    }\n    @for (i of items; track $index) {\n      <a class=\"global-footer__links-item\" (click)=\"to(i)\">\n        <ng-container *ngTemplateOutlet=\"i.host\" />\n      </a>\n    }\n  </div>\n}\n<div class=\"global-footer__copyright\">\n  <ng-content />\n</div>\n", dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GlobalFooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'global-footer', exportAs: 'globalFooter', host: {
                        '[class.global-footer]': 'true',
                        '[class.global-footer-rtl]': `dir === 'rtl'`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NgTemplateOutlet], template: "@if (links.length > 0 || items.length > 0) {\n  <div class=\"global-footer__links\">\n    @for (i of links; track $index) {\n      <a class=\"global-footer__links-item\" (click)=\"to(i)\" [innerHTML]=\"i._title\"></a>\n    }\n    @for (i of items; track $index) {\n      <a class=\"global-footer__links-item\" (click)=\"to(i)\">\n        <ng-container *ngTemplateOutlet=\"i.host\" />\n      </a>\n    }\n  </div>\n}\n<div class=\"global-footer__copyright\">\n  <ng-content />\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1.Router }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [WINDOW]
                }] }, { type: i2.DomSanitizer }, { type: i3.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i0.ChangeDetectorRef }], propDecorators: { links: [{
                type: Input
            }], items: [{
                type: ContentChildren,
                args: [GlobalFooterItemComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvZ2xvYmFsLWZvb3Rlci9nbG9iYWwtZm9vdGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9nbG9iYWwtZm9vdGVyL2dsb2JhbC1mb290ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLE1BQU0sRUFDTixLQUFLLEVBRUwsUUFBUSxFQUVSLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUloRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7O0FBaUIzRSxNQUFNLE9BQU8scUJBQXFCO0lBTWhDLElBQ0ksS0FBSyxDQUFDLEdBQXVCO1FBQy9CLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUlELFlBQ1UsTUFBYyxFQUNFLEdBQWMsRUFDOUIsR0FBaUIsRUFDTCxjQUE4QixFQUMxQyxHQUFzQjtRQUp0QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ0UsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUM5QixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ0wsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzFDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBckJ4QixTQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUM5RCxXQUFNLEdBQXVCLEVBQUUsQ0FBQztRQUV4QyxRQUFHLEdBQWMsS0FBSyxDQUFDO0lBbUJwQixDQUFDO0lBRUosRUFBRSxDQUFDLElBQWtEO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixPQUFPO1NBQ1I7UUFDRCxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3BDO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7WUFDM0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OEdBOUNVLHFCQUFxQix3Q0FtQnRCLE1BQU07a0dBbkJMLHFCQUFxQixnT0FlZix5QkFBeUIseURDckQ1Qyx1ZUFlQSw0Q0RxQlksZ0JBQWdCOzsyRkFFZixxQkFBcUI7a0JBZGpDLFNBQVM7K0JBQ0UsZUFBZSxZQUNmLGNBQWMsUUFFbEI7d0JBQ0osdUJBQXVCLEVBQUUsTUFBTTt3QkFDL0IsMkJBQTJCLEVBQUUsZUFBZTtxQkFDN0MsdUJBQ29CLEtBQUssbUJBQ1QsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxjQUN6QixJQUFJLFdBQ1AsQ0FBQyxnQkFBZ0IsQ0FBQzs7MEJBcUJ4QixNQUFNOzJCQUFDLE1BQU07OzBCQUViLFFBQVE7eUVBZFAsS0FBSztzQkFEUixLQUFLO2dCQVMrQyxLQUFLO3NCQUF6RCxlQUFlO3VCQUFDLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBOZ1RlbXBsYXRlT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95ZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BkZWxvbi91dGlsL3Rva2VuJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgR2xvYmFsRm9vdGVySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vZ2xvYmFsLWZvb3Rlci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHbG9iYWxGb290ZXJMaW5rIH0gZnJvbSAnLi9nbG9iYWwtZm9vdGVyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2xvYmFsLWZvb3RlcicsXG4gIGV4cG9ydEFzOiAnZ2xvYmFsRm9vdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsb2JhbC1mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5nbG9iYWwtZm9vdGVyXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmdsb2JhbC1mb290ZXItcnRsXSc6IGBkaXIgPT09ICdydGwnYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ1RlbXBsYXRlT3V0bGV0XVxufSlcbmV4cG9ydCBjbGFzcyBHbG9iYWxGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGRpciQgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWxEZXN0cm95ZWQoKSk7XG4gIHByaXZhdGUgX2xpbmtzOiBHbG9iYWxGb290ZXJMaW5rW10gPSBbXTtcblxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBsaW5rcyh2YWw6IEdsb2JhbEZvb3RlckxpbmtbXSkge1xuICAgIHZhbC5mb3JFYWNoKGkgPT4gKGkuX3RpdGxlID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaS50aXRsZSkpKTtcbiAgICB0aGlzLl9saW5rcyA9IHZhbDtcbiAgfVxuICBnZXQgbGlua3MoKTogR2xvYmFsRm9vdGVyTGlua1tdIHtcbiAgICByZXR1cm4gdGhpcy5fbGlua3M7XG4gIH1cblxuICBAQ29udGVudENoaWxkcmVuKEdsb2JhbEZvb3Rlckl0ZW1Db21wb25lbnQpIHJlYWRvbmx5IGl0ZW1zITogUXVlcnlMaXN0PEdsb2JhbEZvb3Rlckl0ZW1Db21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgQEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luOiBOelNhZmVBbnksXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplcixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIHRvKGl0ZW06IEdsb2JhbEZvb3RlckxpbmsgfCBHbG9iYWxGb290ZXJJdGVtQ29tcG9uZW50KTogdm9pZCB7XG4gICAgaWYgKCFpdGVtLmhyZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGl0ZW0uYmxhbmtUYXJnZXQpIHtcbiAgICAgIHRoaXMud2luLm9wZW4oaXRlbS5ocmVmKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKC9eaHR0cHM/OlxcL1xcLy8udGVzdChpdGVtLmhyZWYpKSB7XG4gICAgICB0aGlzLndpbi5sb2NhdGlvbi5ocmVmID0gaXRlbS5ocmVmO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGl0ZW0uaHJlZik7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyJC5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiQGlmIChsaW5rcy5sZW5ndGggPiAwIHx8IGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgPGRpdiBjbGFzcz1cImdsb2JhbC1mb290ZXJfX2xpbmtzXCI+XG4gICAgQGZvciAoaSBvZiBsaW5rczsgdHJhY2sgJGluZGV4KSB7XG4gICAgICA8YSBjbGFzcz1cImdsb2JhbC1mb290ZXJfX2xpbmtzLWl0ZW1cIiAoY2xpY2spPVwidG8oaSlcIiBbaW5uZXJIVE1MXT1cImkuX3RpdGxlXCI+PC9hPlxuICAgIH1cbiAgICBAZm9yIChpIG9mIGl0ZW1zOyB0cmFjayAkaW5kZXgpIHtcbiAgICAgIDxhIGNsYXNzPVwiZ2xvYmFsLWZvb3Rlcl9fbGlua3MtaXRlbVwiIChjbGljayk9XCJ0byhpKVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaS5ob3N0XCIgLz5cbiAgICAgIDwvYT5cbiAgICB9XG4gIDwvZGl2PlxufVxuPGRpdiBjbGFzcz1cImdsb2JhbC1mb290ZXJfX2NvcHlyaWdodFwiPlxuICA8bmctY29udGVudCAvPlxuPC9kaXY+XG4iXX0=