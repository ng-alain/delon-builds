import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, Component, ElementRef, Input, Optional, ViewChild, ViewEncapsulation, } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9leGNlcHRpb24vZXhjZXB0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFxQixNQUFNLDJCQUEyQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBYyxNQUFNLGNBQWMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFnQjNDLE1BQU0sT0FBTyxrQkFBa0I7SUErRDdCLFlBQW9CLElBQXdCLEVBQVUsR0FBaUIsRUFBc0IsY0FBOEI7UUFBdkcsU0FBSSxHQUFKLElBQUksQ0FBb0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQXNCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQTVEbkgsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFJdkMsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUN4QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsUUFBRyxHQUFjLEtBQUssQ0FBQztRQUV2QixTQUFJLEdBQVksRUFBRSxDQUFDO1FBQ25CLFdBQU0sR0FBYSxFQUFFLENBQUM7UUFDdEIsVUFBSyxHQUFhLEVBQUUsQ0FBQztJQWtEeUcsQ0FBQztJQWhEL0gsSUFDSSxJQUFJLENBQUMsS0FBb0I7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RCxjQUFjLHVCQStGMEMsUUFBUTs7O3FCQTNEakYsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7bUJBV3BDLEtBQUs7a0JBNkJMLEtBQUs7b0JBS0wsS0FBSzttQkFLTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCwgU2FmZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlLCBMb2NhbGVEYXRhIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdAZGVsb24vdXRpbC9icm93c2VyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IHR5cGUgRXhjZXB0aW9uVHlwZSA9IDQwMyB8IDQwNCB8IDUwMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXhjZXB0aW9uJyxcbiAgZXhwb3J0QXM6ICdleGNlcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhjZXB0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZXhjZXB0aW9uXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmV4Y2VwdGlvbi1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3R5cGU6IEV4Y2VwdGlvblR5cGUgfCBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIEBWaWV3Q2hpbGQoJ2NvblRwbCcsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgY29uVHBsOiBFbGVtZW50UmVmO1xuXG4gIF90eXBlOiBFeGNlcHRpb25UeXBlO1xuICBsb2NhbGU6IExvY2FsZURhdGEgPSB7fTtcbiAgaGFzQ29uID0gZmFsc2U7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgX2ltZzogU2FmZVVybCA9ICcnO1xuICBfdGl0bGU6IFNhZmVIdG1sID0gJyc7XG4gIF9kZXNjOiBTYWZlSHRtbCA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB0eXBlKHZhbHVlOiBFeGNlcHRpb25UeXBlKSB7XG4gICAgY29uc3QgaXRlbSA9IHtcbiAgICAgIDQwMzoge1xuICAgICAgICBpbWc6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvd1pjbkdxUkR5aFBPRVlGY1pEbmIuc3ZnJyxcbiAgICAgICAgdGl0bGU6ICc0MDMnLFxuICAgICAgfSxcbiAgICAgIDQwNDoge1xuICAgICAgICBpbWc6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvS3BucGNoWHNvYlJnTEVsRW96ekkuc3ZnJyxcbiAgICAgICAgdGl0bGU6ICc0MDQnLFxuICAgICAgfSxcbiAgICAgIDUwMDoge1xuICAgICAgICBpbWc6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvUlZSVUFZZENHZVlOQldvS2lJd0Iuc3ZnJyxcbiAgICAgICAgdGl0bGU6ICc1MDAnLFxuICAgICAgfSxcbiAgICB9W3ZhbHVlXTtcblxuICAgIGlmICghaXRlbSkgcmV0dXJuO1xuXG4gICAgdGhpcy5maXhJbWcoaXRlbS5pbWcpO1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICB0aGlzLl90aXRsZSA9IGl0ZW0udGl0bGU7XG4gICAgdGhpcy5fZGVzYyA9ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXhJbWcoc3JjOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9pbWcgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYHVybCgnJHtzcmN9JylgKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBpbWcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZml4SW1nKHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGl0bGUgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGVzYyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzYyA9IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZhbHVlKTtcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpOiB2b2lkIHtcbiAgICB0aGlzLmhhc0NvbiA9ICFpc0VtcHR5KHRoaXMuY29uVHBsLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UsIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5KSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgIH0pO1xuICAgIHRoaXMuaTE4bi5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiAodGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0RGF0YSgnZXhjZXB0aW9uJykpKTtcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=