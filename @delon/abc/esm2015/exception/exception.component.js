import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, Component, Input, Optional, ViewChild, ViewEncapsulation, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DelonLocaleService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export class ExceptionComponent {
    constructor(i18n, dom, directionality) {
        this.i18n = i18n;
        this.dom = dom;
        this.directionality = directionality;
        this.destroy$ = new Subject();
        this.locale = {};
        this.hasCon = false;
        this.dir = 'ltr';
        this._img = '';
        this._title = '';
        this._desc = '';
    }
    set type(value) {
        const item = {
            403: {
                img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
                title: '403',
            },
            404: {
                img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
                title: '404',
            },
            500: {
                img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
                title: '500',
            },
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
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
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
ExceptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'exception',
                exportAs: 'exception',
                template: "<div class=\"exception__img-block\">\n  <div class=\"exception__img\" [style.backgroundImage]=\"_img\"></div>\n</div>\n<div class=\"exception__cont\">\n  <h1 class=\"exception__cont-title\" [innerHTML]=\"_title\"></h1>\n  <div class=\"exception__cont-desc\" [innerHTML]=\"_desc || locale[_type]\"></div>\n  <div class=\"exception__cont-actions\">\n    <div (cdkObserveContent)=\"checkContent()\" #conTpl>\n      <ng-content></ng-content>\n    </div>\n    <button *ngIf=\"!hasCon\" nz-button [routerLink]=\"['/']\" [nzType]=\"'primary'\">{{ locale.backToHome }}</button>\n  </div>\n</div>\n",
                host: {
                    '[class.exception]': 'true',
                    '[class.exception-rtl]': `dir === 'rtl'`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
ExceptionComponent.ctorParameters = () => [
    { type: DelonLocaleService },
    { type: DomSanitizer },
    { type: Directionality, decorators: [{ type: Optional }] }
];
ExceptionComponent.propDecorators = {
    conTpl: [{ type: ViewChild, args: ['conTpl', { static: true },] }],
    type: [{ type: Input }],
    img: [{ type: Input }],
    title: [{ type: Input }],
    desc: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9leGNlcHRpb24vZXhjZXB0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsS0FBSyxFQUdMLFFBQVEsRUFDUixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQXFCLE1BQU0sMkJBQTJCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFjLE1BQU0sY0FBYyxDQUFDO0FBQzlELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWdCM0MsTUFBTSxPQUFPLGtCQUFrQjtJQStEN0IsWUFBb0IsSUFBd0IsRUFBVSxHQUFpQixFQUFzQixjQUE4QjtRQUF2RyxTQUFJLEdBQUosSUFBSSxDQUFvQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFBc0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBNURuSCxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUl2QyxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBQ3hCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixRQUFHLEdBQWMsS0FBSyxDQUFDO1FBRXZCLFNBQUksR0FBWSxFQUFFLENBQUM7UUFDbkIsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUN0QixVQUFLLEdBQWEsRUFBRSxDQUFDO0lBa0R5RyxDQUFDO0lBaEQvSCxJQUNJLElBQUksQ0FBQyxLQUFvQjtRQUMzQixNQUFN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QWMsdUJBK0YwQyxRQUFROzs7cUJBM0RqRixTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTttQkFXcEMsS0FBSztrQkE2QkwsS0FBSztvQkFLTCxLQUFLO21CQUtMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sLCBTYWZlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UsIExvY2FsZURhdGEgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ0BkZWxvbi91dGlsL2Jyb3dzZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgdHlwZSBFeGNlcHRpb25UeXBlID0gNDAzIHwgNDA0IHwgNTAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleGNlcHRpb24nLFxuICBleHBvcnRBczogJ2V4Y2VwdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9leGNlcHRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5leGNlcHRpb25dJzogJ3RydWUnLFxuICAgICdbY2xhc3MuZXhjZXB0aW9uLXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRXhjZXB0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdHlwZTogRXhjZXB0aW9uVHlwZSB8IHN0cmluZztcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgQFZpZXdDaGlsZCgnY29uVHBsJywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBjb25UcGw6IEVsZW1lbnRSZWY7XG5cbiAgX3R5cGU6IEV4Y2VwdGlvblR5cGU7XG4gIGxvY2FsZTogTG9jYWxlRGF0YSA9IHt9O1xuICBoYXNDb24gPSBmYWxzZTtcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICBfaW1nOiBTYWZlVXJsID0gJyc7XG4gIF90aXRsZTogU2FmZUh0bWwgPSAnJztcbiAgX2Rlc2M6IFNhZmVIdG1sID0gJyc7XG5cbiAgQElucHV0KClcbiAgc2V0IHR5cGUodmFsdWU6IEV4Y2VwdGlvblR5cGUpIHtcbiAgICBjb25zdCBpdGVtOiB7IGltZzogc3RyaW5nOyB0aXRsZTogc3RyaW5nIH0gPSB7XG4gICAgICA0MDM6IHtcbiAgICAgICAgaW1nOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL3daY25HcVJEeWhQT0VZRmNaRG5iLnN2ZycsXG4gICAgICAgIHRpdGxlOiAnNDAzJyxcbiAgICAgIH0sXG4gICAgICA0MDQ6IHtcbiAgICAgICAgaW1nOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL0twbnBjaFhzb2JSZ0xFbEVvenpJLnN2ZycsXG4gICAgICAgIHRpdGxlOiAnNDA0JyxcbiAgICAgIH0sXG4gICAgICA1MDA6IHtcbiAgICAgICAgaW1nOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL1JWUlVBWWRDR2VZTkJXb0tpSXdCLnN2ZycsXG4gICAgICAgIHRpdGxlOiAnNTAwJyxcbiAgICAgIH0sXG4gICAgfVt2YWx1ZV07XG5cbiAgICBpZiAoIWl0ZW0pIHJldHVybjtcblxuICAgIHRoaXMuZml4SW1nKGl0ZW0uaW1nKTtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgdGhpcy5fdGl0bGUgPSBpdGVtLnRpdGxlO1xuICAgIHRoaXMuX2Rlc2MgPSAnJztcbiAgfVxuXG4gIHByaXZhdGUgZml4SW1nKHNyYzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5faW1nID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGB1cmwoJyR7c3JjfScpYCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaW1nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZpeEltZyh2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RpdGxlID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodmFsdWUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRlc2ModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2MgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZSk7XG4gIH1cblxuICBjaGVja0NvbnRlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5oYXNDb24gPSAhaXNFbXB0eSh0aGlzLmNvblRwbC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLCBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLCBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICB9KTtcbiAgICB0aGlzLmkxOG4uY2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4gKHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldERhdGEoJ2V4Y2VwdGlvbicpKSk7XG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19