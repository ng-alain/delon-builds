/**
 * @fileoverview added by tsickle
 * Generated from: exception.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, Component, ElementRef, Input, Optional, ViewChild, ViewEncapsulation, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DelonLocaleService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export class ExceptionComponent {
    /**
     * @param {?} i18n
     * @param {?} dom
     * @param {?} directionality
     */
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
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        /** @type {?} */
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
    /**
     * @private
     * @param {?} src
     * @return {?}
     */
    fixImg(src) {
        this._img = this.dom.bypassSecurityTrustStyle(`url('${src}')`);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set img(value) {
        this.fixImg(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set title(value) {
        this._title = this.dom.bypassSecurityTrustHtml(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set desc(value) {
        this._desc = this.dom.bypassSecurityTrustHtml(value);
    }
    /**
     * @return {?}
     */
    checkContent() {
        this.hasCon = !isEmpty(this.conTpl.nativeElement);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} direction
         * @return {?}
         */
        (direction) => {
            this.dir = direction;
        }));
        this.i18n.change.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => (this.locale = this.i18n.getData('exception'))));
        this.checkContent();
    }
    /**
     * @return {?}
     */
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
            }] }
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
if (false) {
    /** @type {?} */
    ExceptionComponent.ngAcceptInputType_type;
    /**
     * @type {?}
     * @private
     */
    ExceptionComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    ExceptionComponent.prototype.conTpl;
    /** @type {?} */
    ExceptionComponent.prototype._type;
    /** @type {?} */
    ExceptionComponent.prototype.locale;
    /** @type {?} */
    ExceptionComponent.prototype.hasCon;
    /** @type {?} */
    ExceptionComponent.prototype.dir;
    /** @type {?} */
    ExceptionComponent.prototype._img;
    /** @type {?} */
    ExceptionComponent.prototype._title;
    /** @type {?} */
    ExceptionComponent.prototype._desc;
    /**
     * @type {?}
     * @private
     */
    ExceptionComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    ExceptionComponent.prototype.dom;
    /**
     * @type {?}
     * @private
     */
    ExceptionComponent.prototype.directionality;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9leGNlcHRpb24vZXhjZXB0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBYSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLFFBQVEsRUFDUixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQXFCLE1BQU0sMkJBQTJCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFjLE1BQU0sY0FBYyxDQUFDO0FBQzlELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWdCM0MsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBK0Q3QixZQUFvQixJQUF3QixFQUFVLEdBQWlCLEVBQXNCLGNBQThCO1FBQXZHLFNBQUksR0FBSixJQUFJLENBQW9CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUFzQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUE1RG5ILGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBSXZDLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFFBQUcsR0FBYyxLQUFLLENBQUM7UUFFdkIsU0FBSSxHQUFZLEVBQUUsQ0FBQztRQUNuQixXQUFNLEdBQWEsRUFBRSxDQUFDO1FBQ3RCLFVBQUssR0FBYSxFQUFFLENBQUM7SUFrRHlHLENBQUM7Ozs7O0lBaEQvSCxJQUNJLElB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YUFDdEM7Ozs7WUFsQlEsa0JBQWtCO1lBRGxCLFlBQVk7WUFaRCxjQUFjLHVCQStGMEMsUUFBUTs7O3FCQTNEakYsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7bUJBV3BDLEtBQUs7a0JBNkJMLEtBQUs7b0JBS0wsS0FBSzttQkFLTCxLQUFLOzs7O0lBckROLDBDQUFzRDs7Ozs7SUFFdEQsc0NBQXVDOzs7OztJQUN2QyxvQ0FBa0U7O0lBRWxFLG1DQUFxQjs7SUFDckIsb0NBQXdCOztJQUN4QixvQ0FBZTs7SUFDZixpQ0FBdUI7O0lBRXZCLGtDQUFtQjs7SUFDbkIsb0NBQXNCOztJQUN0QixtQ0FBcUI7Ozs7O0lBa0RULGtDQUFnQzs7Ozs7SUFBRSxpQ0FBeUI7Ozs7O0lBQUUsNENBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCwgU2FmZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlLCBMb2NhbGVEYXRhIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdAZGVsb24vdXRpbC9icm93c2VyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IHR5cGUgRXhjZXB0aW9uVHlwZSA9IDQwMyB8IDQwNCB8IDUwMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXhjZXB0aW9uJyxcbiAgZXhwb3J0QXM6ICdleGNlcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhjZXB0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZXhjZXB0aW9uXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmV4Y2VwdGlvbi1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3R5cGU6IEV4Y2VwdGlvblR5cGUgfCBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIEBWaWV3Q2hpbGQoJ2NvblRwbCcsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgY29uVHBsOiBFbGVtZW50UmVmO1xuXG4gIF90eXBlOiBFeGNlcHRpb25UeXBlO1xuICBsb2NhbGU6IExvY2FsZURhdGEgPSB7fTtcbiAgaGFzQ29uID0gZmFsc2U7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgX2ltZzogU2FmZVVybCA9ICcnO1xuICBfdGl0bGU6IFNhZmVIdG1sID0gJyc7XG4gIF9kZXNjOiBTYWZlSHRtbCA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB0eXBlKHZhbHVlOiBFeGNlcHRpb25UeXBlKSB7XG4gICAgY29uc3QgaXRlbSA9IHtcbiAgICAgIDQwMzoge1xuICAgICAgICBpbWc6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvd1pjbkdxUkR5aFBPRVlGY1pEbmIuc3ZnJyxcbiAgICAgICAgdGl0bGU6ICc0MDMnLFxuICAgICAgfSxcbiAgICAgIDQwNDoge1xuICAgICAgICBpbWc6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvS3BucGNoWHNvYlJnTEVsRW96ekkuc3ZnJyxcbiAgICAgICAgdGl0bGU6ICc0MDQnLFxuICAgICAgfSxcbiAgICAgIDUwMDoge1xuICAgICAgICBpbWc6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvUlZSVUFZZENHZVlOQldvS2lJd0Iuc3ZnJyxcbiAgICAgICAgdGl0bGU6ICc1MDAnLFxuICAgICAgfSxcbiAgICB9W3ZhbHVlXTtcblxuICAgIGlmICghaXRlbSkgcmV0dXJuO1xuXG4gICAgdGhpcy5maXhJbWcoaXRlbS5pbWcpO1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICB0aGlzLl90aXRsZSA9IGl0ZW0udGl0bGU7XG4gICAgdGhpcy5fZGVzYyA9ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXhJbWcoc3JjOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9pbWcgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYHVybCgnJHtzcmN9JylgKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBpbWcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZml4SW1nKHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGl0bGUgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGVzYyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzYyA9IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZhbHVlKTtcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpOiB2b2lkIHtcbiAgICB0aGlzLmhhc0NvbiA9ICFpc0VtcHR5KHRoaXMuY29uVHBsLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UsIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5KSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgIH0pO1xuICAgIHRoaXMuaTE4bi5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiAodGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0RGF0YSgnZXhjZXB0aW9uJykpKTtcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=