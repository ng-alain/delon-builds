import { ChangeDetectionStrategy, Component, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { isEmpty } from '@delon/util/browser';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/cdk/bidi";
import * as i4 from "@angular/common";
import * as i5 from "@angular/cdk/observers";
import * as i6 from "@angular/router";
import * as i7 from "ng-zorro-antd/button";
import * as i8 from "ng-zorro-antd/core/transition-patch";
import * as i9 from "ng-zorro-antd/core/wave";
export class ExceptionComponent {
    constructor(i18n, dom, directionality, cdr) {
        this.i18n = i18n;
        this.dom = dom;
        this.directionality = directionality;
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.locale = {};
        this.hasCon = false;
        this.dir = 'ltr';
        this._img = '';
        this._title = '';
        this._desc = '';
        this.backRouterLink = '/';
    }
    set type(value) {
        const item = {
            403: {
                img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
                title: '403'
            },
            404: {
                img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
                title: '404'
            },
            500: {
                img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
                title: '500'
            }
        }[value];
        if (!item)
            return;
        this.fixImg(item.img);
        this._type = value;
        this._title = item.title;
        this._desc = '';
    }
    fixImg(src) {
        this._img = this.dom.bypassSecurityTrustStyle(`url('${src}')`);
    }
    set img(value) {
        this.fixImg(value);
    }
    set title(value) {
        this._title = this.dom.bypassSecurityTrustHtml(value);
    }
    set desc(value) {
        this._desc = this.dom.bypassSecurityTrustHtml(value);
    }
    checkContent() {
        this.hasCon = !isEmpty(this.conTpl.nativeElement);
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.dir = this.directionality.value;
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
        this.i18n.change.pipe(takeUntil(this.destroy$)).subscribe(() => (this.locale = this.i18n.getData('exception')));
        this.checkContent();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
ExceptionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: ExceptionComponent, deps: [{ token: i1.DelonLocaleService }, { token: i2.DomSanitizer }, { token: i3.Directionality, optional: true }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
ExceptionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.8", type: ExceptionComponent, selector: "exception", inputs: { type: "type", img: "img", title: "title", desc: "desc", backRouterLink: "backRouterLink" }, host: { properties: { "class.exception": "true", "class.exception-rtl": "dir === 'rtl'" } }, viewQueries: [{ propertyName: "conTpl", first: true, predicate: ["conTpl"], descendants: true, static: true }], exportAs: ["exception"], ngImport: i0, template: "<div class=\"exception__img-block\">\n  <div class=\"exception__img\" [style.backgroundImage]=\"_img\"></div>\n</div>\n<div class=\"exception__cont\">\n  <h1 class=\"exception__cont-title\" [innerHTML]=\"_title\"></h1>\n  <div class=\"exception__cont-desc\" [innerHTML]=\"_desc || locale[_type]\"></div>\n  <div class=\"exception__cont-actions\">\n    <div (cdkObserveContent)=\"checkContent()\" #conTpl>\n      <ng-content></ng-content>\n    </div>\n    <button *ngIf=\"!hasCon\" nz-button [routerLink]=\"backRouterLink\" [nzType]=\"'primary'\">\n      {{ locale.backToHome }}\n    </button>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i5.CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }, { kind: "directive", type: i6.RouterLink, selector: ":not(a):not(area)[routerLink]", inputs: ["queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "component", type: i7.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { kind: "directive", type: i8.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i9.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: ExceptionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'exception', exportAs: 'exception', host: {
                        '[class.exception]': 'true',
                        '[class.exception-rtl]': `dir === 'rtl'`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"exception__img-block\">\n  <div class=\"exception__img\" [style.backgroundImage]=\"_img\"></div>\n</div>\n<div class=\"exception__cont\">\n  <h1 class=\"exception__cont-title\" [innerHTML]=\"_title\"></h1>\n  <div class=\"exception__cont-desc\" [innerHTML]=\"_desc || locale[_type]\"></div>\n  <div class=\"exception__cont-actions\">\n    <div (cdkObserveContent)=\"checkContent()\" #conTpl>\n      <ng-content></ng-content>\n    </div>\n    <button *ngIf=\"!hasCon\" nz-button [routerLink]=\"backRouterLink\" [nzType]=\"'primary'\">\n      {{ locale.backToHome }}\n    </button>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.DelonLocaleService }, { type: i2.DomSanitizer }, { type: i3.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { conTpl: [{
                type: ViewChild,
                args: ['conTpl', { static: true }]
            }], type: [{
                type: Input
            }], img: [{
                type: Input
            }], title: [{
                type: Input
            }], desc: [{
                type: Input
            }], backRouterLink: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9leGNlcHRpb24vZXhjZXB0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9leGNlcHRpb24vZXhjZXB0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULEtBQUssRUFHTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcxQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7O0FBaUI5QyxNQUFNLE9BQU8sa0JBQWtCO0lBa0U3QixZQUNVLElBQXdCLEVBQ3hCLEdBQWlCLEVBQ0wsY0FBOEIsRUFDMUMsR0FBc0I7UUFIdEIsU0FBSSxHQUFKLElBQUksQ0FBb0I7UUFDeEIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUNMLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUMxQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQW5FeEIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFJdkMsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUN4QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsUUFBRyxHQUFjLEtBQUssQ0FBQztRQUV2QixTQUFJLEdBQVksRUFBRSxDQUFDO1FBQ25CLFdBQU0sR0FBYSxFQUFFLENBQUM7UUFDdEIsVUFBSyxHQUFhLEVBQUUsQ0FBQztRQThDWixtQkFBYyxHQUF5QixHQUFHLENBQUM7SUFZakQsQ0FBQztJQXhESixJQUNJLElBQUksQ0FBQyxLQUFvQjtRQUMzQixNQUFNLElBQUksR0FBbUM7WUFDM0MsR0FBRyxF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RSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBWWpDLElBQUk7c0JBRFAsS0FBSztnQkE4QkYsR0FBRztzQkFETixLQUFLO2dCQU1GLEtBQUs7c0JBRFIsS0FBSztnQkFNRixJQUFJO3NCQURQLEtBQUs7Z0JBS0csY0FBYztzQkFBdEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwsIFNhZmVVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFN1YmplY3QsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UsIExvY2FsZURhdGEgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ0BkZWxvbi91dGlsL2Jyb3dzZXInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IHR5cGUgRXhjZXB0aW9uVHlwZSA9IDQwMyB8IDQwNCB8IDUwMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXhjZXB0aW9uJyxcbiAgZXhwb3J0QXM6ICdleGNlcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhjZXB0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZXhjZXB0aW9uXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmV4Y2VwdGlvbi1ydGxdJzogYGRpciA9PT0gJ3J0bCdgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBFeGNlcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV90eXBlOiBFeGNlcHRpb25UeXBlIHwgc3RyaW5nO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBAVmlld0NoaWxkKCdjb25UcGwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGNvblRwbCE6IEVsZW1lbnRSZWY7XG5cbiAgX3R5cGUhOiBFeGNlcHRpb25UeXBlO1xuICBsb2NhbGU6IExvY2FsZURhdGEgPSB7fTtcbiAgaGFzQ29uID0gZmFsc2U7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgX2ltZzogU2FmZVVybCA9ICcnO1xuICBfdGl0bGU6IFNhZmVIdG1sID0gJyc7XG4gIF9kZXNjOiBTYWZlSHRtbCA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB0eXBlKHZhbHVlOiBFeGNlcHRpb25UeXBlKSB7XG4gICAgY29uc3QgaXRlbTogeyBpbWc6IHN0cmluZzsgdGl0bGU6IHN0cmluZyB9ID0ge1xuICAgICAgNDAzOiB7XG4gICAgICAgIGltZzogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC93WmNuR3FSRHloUE9FWUZjWkRuYi5zdmcnLFxuICAgICAgICB0aXRsZTogJzQwMydcbiAgICAgIH0sXG4gICAgICA0MDQ6IHtcbiAgICAgICAgaW1nOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL0twbnBjaFhzb2JSZ0xFbEVvenpJLnN2ZycsXG4gICAgICAgIHRpdGxlOiAnNDA0J1xuICAgICAgfSxcbiAgICAgIDUwMDoge1xuICAgICAgICBpbWc6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvUlZSVUFZZENHZVlOQldvS2lJd0Iuc3ZnJyxcbiAgICAgICAgdGl0bGU6ICc1MDAnXG4gICAgICB9XG4gICAgfVt2YWx1ZV07XG5cbiAgICBpZiAoIWl0ZW0pIHJldHVybjtcblxuICAgIHRoaXMuZml4SW1nKGl0ZW0uaW1nKTtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgdGhpcy5fdGl0bGUgPSBpdGVtLnRpdGxlO1xuICAgIHRoaXMuX2Rlc2MgPSAnJztcbiAgfVxuXG4gIHByaXZhdGUgZml4SW1nKHNyYzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5faW1nID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGB1cmwoJyR7c3JjfScpYCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaW1nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZpeEltZyh2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RpdGxlID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodmFsdWUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRlc2ModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2MgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKSBiYWNrUm91dGVyTGluazogc3RyaW5nIHwgTnpTYWZlQW55W10gPSAnLyc7XG5cbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xuICAgIHRoaXMuaGFzQ29uID0gIWlzRW1wdHkodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplcixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgIH0pO1xuICAgIHRoaXMuaTE4bi5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiAodGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0RGF0YSgnZXhjZXB0aW9uJykpKTtcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhjZXB0aW9uX19pbWctYmxvY2tcIj5cbiAgPGRpdiBjbGFzcz1cImV4Y2VwdGlvbl9faW1nXCIgW3N0eWxlLmJhY2tncm91bmRJbWFnZV09XCJfaW1nXCI+PC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJleGNlcHRpb25fX2NvbnRcIj5cbiAgPGgxIGNsYXNzPVwiZXhjZXB0aW9uX19jb250LXRpdGxlXCIgW2lubmVySFRNTF09XCJfdGl0bGVcIj48L2gxPlxuICA8ZGl2IGNsYXNzPVwiZXhjZXB0aW9uX19jb250LWRlc2NcIiBbaW5uZXJIVE1MXT1cIl9kZXNjIHx8IGxvY2FsZVtfdHlwZV1cIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImV4Y2VwdGlvbl9fY29udC1hY3Rpb25zXCI+XG4gICAgPGRpdiAoY2RrT2JzZXJ2ZUNvbnRlbnQpPVwiY2hlY2tDb250ZW50KClcIiAjY29uVHBsPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gKm5nSWY9XCIhaGFzQ29uXCIgbnotYnV0dG9uIFtyb3V0ZXJMaW5rXT1cImJhY2tSb3V0ZXJMaW5rXCIgW256VHlwZV09XCIncHJpbWFyeSdcIj5cbiAgICAgIHt7IGxvY2FsZS5iYWNrVG9Ib21lIH19XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=