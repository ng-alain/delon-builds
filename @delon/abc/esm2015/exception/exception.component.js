import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, Component, ElementRef, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DelonLocaleService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
let ExceptionComponent = class ExceptionComponent {
    constructor(i18n, dom, directionality) {
        this.i18n = i18n;
        this.dom = dom;
        this.directionality = directionality;
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
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(untilDestroyed(this)).subscribe((direction) => {
            this.dir = direction;
        });
        this.i18n.change.pipe(untilDestroyed(this)).subscribe(() => (this.locale = this.i18n.getData('exception')));
        this.checkContent();
    }
};
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
/** @nocollapse */
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
ExceptionComponent = __decorate([
    UntilDestroy(),
    __metadata("design:paramtypes", [DelonLocaleService, DomSanitizer, Directionality])
], ExceptionComponent);
export { ExceptionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9leGNlcHRpb24vZXhjZXB0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxRQUFRLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RJLE9BQU8sRUFBRSxZQUFZLEVBQXFCLE1BQU0sMkJBQTJCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFjLE1BQU0sY0FBYyxDQUFDO0FBQzlELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0lBaUJ4RCxrQkFBa0IsU0FBbEIsa0JBQWtCO0lBOEQ3QixZQUFvQixJQUF3QixFQUFVLEdBQWlCLEVBQXNCLGNBQThCO1FBQXZHLFNBQUksR0FBSixJQUFJLENBQW9CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUFzQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUF4RDNILFdBQU0sR0FBZSxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFFBQUcsR0FBYyxLQUFLLENBQUM7UUFFdkIsU0FBSSxHQUFZLEVBQUUsQ0FBQztRQUNuQixXQUFNLEdBQWEsRUFBRSxDQUFDO1FBQ3RCLFVBQUssR0FBYSxFQUFFLENBQUM7SUFrRHlHLENBQUM7SUFoRC9ILElBQ0ksSUFBSSxDQUFDLEtBQW9CO1FBQzNCLE1BQU0sSUFBSSxHQUFtQztZQUMzQyxHQUFHLEVBQUU7Z0JBQ0gsR0FBRyxFQUFFLHFFQUFxRTtnQkFD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QUFzQyxjQUFjO0dBOURoSCxrQkFBa0IsQ0F3RTlCO1NBeEVZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPcHRpb25hbCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCwgU2FmZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlLCBMb2NhbGVEYXRhIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdAZGVsb24vdXRpbC9icm93c2VyJztcbmltcG9ydCB7IFVudGlsRGVzdHJveSwgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAbmduZWF0L3VudGlsLWRlc3Ryb3knO1xuXG5leHBvcnQgdHlwZSBFeGNlcHRpb25UeXBlID0gNDAzIHwgNDA0IHwgNTAwO1xuXG5AVW50aWxEZXN0cm95KClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4Y2VwdGlvbicsXG4gIGV4cG9ydEFzOiAnZXhjZXB0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4Y2VwdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmV4Y2VwdGlvbl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5leGNlcHRpb24tcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBFeGNlcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdHlwZTogRXhjZXB0aW9uVHlwZSB8IHN0cmluZztcblxuICBAVmlld0NoaWxkKCdjb25UcGwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGNvblRwbDogRWxlbWVudFJlZjtcblxuICBfdHlwZTogRXhjZXB0aW9uVHlwZTtcbiAgbG9jYWxlOiBMb2NhbGVEYXRhID0ge307XG4gIGhhc0NvbiA9IGZhbHNlO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIF9pbWc6IFNhZmVVcmwgPSAnJztcbiAgX3RpdGxlOiBTYWZlSHRtbCA9ICcnO1xuICBfZGVzYzogU2FmZUh0bWwgPSAnJztcblxuICBASW5wdXQoKVxuICBzZXQgdHlwZSh2YWx1ZTogRXhjZXB0aW9uVHlwZSkge1xuICAgIGNvbnN0IGl0ZW06IHsgaW1nOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmcgfSA9IHtcbiAgICAgIDQwMzoge1xuICAgICAgICBpbWc6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvd1pjbkdxUkR5aFBPRVlGY1pEbmIuc3ZnJyxcbiAgICAgICAgdGl0bGU6ICc0MDMnLFxuICAgICAgfSxcbiAgICAgIDQwNDoge1xuICAgICAgICBpbWc6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvS3BucGNoWHNvYlJnTEVsRW96ekkuc3ZnJyxcbiAgICAgICAgdGl0bGU6ICc0MDQnLFxuICAgICAgfSxcbiAgICAgIDUwMDoge1xuICAgICAgICBpbWc6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvUlZSVUFZZENHZVlOQldvS2lJd0Iuc3ZnJyxcbiAgICAgICAgdGl0bGU6ICc1MDAnLFxuICAgICAgfSxcbiAgICB9W3ZhbHVlXTtcblxuICAgIGlmICghaXRlbSkgcmV0dXJuO1xuXG4gICAgdGhpcy5maXhJbWcoaXRlbS5pbWcpO1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICB0aGlzLl90aXRsZSA9IGl0ZW0udGl0bGU7XG4gICAgdGhpcy5fZGVzYyA9ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXhJbWcoc3JjOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9pbWcgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYHVybCgnJHtzcmN9JylgKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBpbWcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZml4SW1nKHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGl0bGUgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGVzYyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzYyA9IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZhbHVlKTtcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpOiB2b2lkIHtcbiAgICB0aGlzLmhhc0NvbiA9ICFpc0VtcHR5KHRoaXMuY29uVHBsLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UsIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5KSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgfSk7XG4gICAgdGhpcy5pMThuLmNoYW5nZS5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKS5zdWJzY3JpYmUoKCkgPT4gKHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldERhdGEoJ2V4Y2VwdGlvbicpKSk7XG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgfVxufVxuIl19