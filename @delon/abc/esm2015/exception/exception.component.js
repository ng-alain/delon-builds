/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, } from '@angular/core';
import { isEmpty } from '@delon/util';
import { DelonLocaleService } from '@delon/theme';
export class ExceptionComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        this.locale = {};
        this.hasCon = false;
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
        this._type = value;
        this._img = item.img;
        this._title = item.title;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set img(value) {
        this._img = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set title(value) {
        this._title = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set desc(value) {
        this._desc = value;
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
        this.i18n$ = this.i18n.change.subscribe(() => (this.locale = this.i18n.getData('exception')));
        this.checkContent();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.i18n$.unsubscribe();
    }
}
ExceptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'exception',
                template: "<div class=\"exception__img-block\">\n  <div class=\"exception__img\" [ngStyle]=\"{'background-image': 'url(' + _img + ')'}\"></div>\n</div>\n<div class=\"exception__cont\">\n  <h1 class=\"exception__cont-title\" [innerHTML]=\"_title\"></h1>\n  <div class=\"exception__cont-desc\" [innerHTML]=\"_desc || locale[_type]\"></div>\n  <div class=\"exception__cont-actions\">\n    <div (cdkObserveContent)=\"checkContent()\" #conTpl><ng-content></ng-content></div>\n    <button *ngIf=\"!hasCon\" nz-button [routerLink]=\"['/']\" [nzType]=\"'primary'\">{{locale.backToHome}}</button>\n  </div>\n</div>\n",
                host: { '[class.exception]': 'true' },
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
ExceptionComponent.ctorParameters = () => [
    { type: DelonLocaleService }
];
ExceptionComponent.propDecorators = {
    conTpl: [{ type: ViewChild, args: ['conTpl',] }],
    type: [{ type: Input }],
    img: [{ type: Input }],
    title: [{ type: Input }],
    desc: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ExceptionComponent.prototype.i18n$;
    /** @type {?} */
    ExceptionComponent.prototype.conTpl;
    /** @type {?} */
    ExceptionComponent.prototype._type;
    /** @type {?} */
    ExceptionComponent.prototype.locale;
    /** @type {?} */
    ExceptionComponent.prototype.hasCon;
    /** @type {?} */
    ExceptionComponent.prototype._img;
    /** @type {?} */
    ExceptionComponent.prototype._title;
    /** @type {?} */
    ExceptionComponent.prototype._desc;
    /** @type {?} */
    ExceptionComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZXhjZXB0aW9uLyIsInNvdXJjZXMiOlsiZXhjZXB0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsU0FBUyxFQUNULFVBQVUsR0FHWCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVFsRCxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBeUQ3QixZQUFvQixJQUF3QjtRQUF4QixTQUFJLEdBQUosSUFBSSxDQUFvQjtRQW5ENUMsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUNqQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixVQUFLLEdBQUcsRUFBRSxDQUFDO0lBOENvQyxDQUFDOzs7OztJQTVDaEQsSUFDSSxJQUFJLENBQUMsS0FBc0I7O2NBQ3ZCLElBQUksR0FBRztZQUNYLEdBQUcsRUFBRTtnQkFDSCxHQUFHLEVBQ0QscUVBQXFFO2dCQUN2RSxLQUFLLEVBQUUsS0FBSzthQUNiO1lBQ0QsR0FBRyxFQUFFO2dCQUNILEdBQUcsRUFDRCxxRUFBcUU7Z0JBQ3ZFLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRCxHQUFHLEVBQUU7Z0JBQ0gsR0FBRyxFQUNELHFFQUFxRTtnQkFDdkUsS0FBSyxFQUFFLEtBQUs7YUFDYjtTQUNGLENBQUMsS0FBSyxDQUFDO1FBRVIsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRWxCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxJQUNJLEdBQUcsQ0FBQyxLQUFLO1FBQ1gsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFDRCxJQUNJLEtBQUssQ0FBQyxLQUFLO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFDRCxJQUNJLElBQUksQ0FBQyxLQUFLO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUlELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FDckMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQ3JELENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQTFFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLGdtQkFBeUM7Z0JBQ3pDLElBQUksRUFBRSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7OztZQVBRLGtCQUFrQjs7O3FCQVV4QixTQUFTLFNBQUMsUUFBUTttQkFXbEIsS0FBSztrQkEyQkwsS0FBSztvQkFJTCxLQUFLO21CQUlMLEtBQUs7Ozs7SUEvQ04sbUNBQTRCOztJQUM1QixvQ0FDMkI7O0lBRTNCLG1DQUFjOztJQUNkLG9DQUFpQjs7SUFDakIsb0NBQWU7O0lBRWYsa0NBQVU7O0lBQ1Ysb0NBQVk7O0lBQ1osbUNBQVc7O0lBOENDLGtDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleGNlcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhjZXB0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDogeyAnW2NsYXNzLmV4Y2VwdGlvbl0nOiAndHJ1ZScgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuICBAVmlld0NoaWxkKCdjb25UcGwnKVxuICBwcml2YXRlIGNvblRwbDogRWxlbWVudFJlZjtcblxuICBfdHlwZTogbnVtYmVyO1xuICBsb2NhbGU6IGFueSA9IHt9O1xuICBoYXNDb24gPSBmYWxzZTtcblxuICBfaW1nID0gJyc7XG4gIF90aXRsZSA9ICcnO1xuICBfZGVzYyA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB0eXBlKHZhbHVlOiA0MDMgfCA0MDQgfCA1MDApIHtcbiAgICBjb25zdCBpdGVtID0ge1xuICAgICAgNDAzOiB7XG4gICAgICAgIGltZzpcbiAgICAgICAgICAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL3daY25HcVJEeWhQT0VZRmNaRG5iLnN2ZycsXG4gICAgICAgIHRpdGxlOiAnNDAzJyxcbiAgICAgIH0sXG4gICAgICA0MDQ6IHtcbiAgICAgICAgaW1nOlxuICAgICAgICAgICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvS3BucGNoWHNvYlJnTEVsRW96ekkuc3ZnJyxcbiAgICAgICAgdGl0bGU6ICc0MDQnLFxuICAgICAgfSxcbiAgICAgIDUwMDoge1xuICAgICAgICBpbWc6XG4gICAgICAgICAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9SVlJVQVlkQ0dlWU5CV29LaUl3Qi5zdmcnLFxuICAgICAgICB0aXRsZTogJzUwMCcsXG4gICAgICB9LFxuICAgIH1bdmFsdWVdO1xuXG4gICAgaWYgKCFpdGVtKSByZXR1cm47XG5cbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgdGhpcy5faW1nID0gaXRlbS5pbWc7XG4gICAgdGhpcy5fdGl0bGUgPSBpdGVtLnRpdGxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGltZyh2YWx1ZSkge1xuICAgIHRoaXMuX2ltZyA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRlc2ModmFsdWUpIHtcbiAgICB0aGlzLl9kZXNjID0gdmFsdWU7XG4gIH1cblxuICBjaGVja0NvbnRlbnQoKSB7XG4gICAgdGhpcy5oYXNDb24gPSAhaXNFbXB0eSh0aGlzLmNvblRwbC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG4uY2hhbmdlLnN1YnNjcmliZShcbiAgICAgICgpID0+ICh0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXREYXRhKCdleGNlcHRpb24nKSksXG4gICAgKTtcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=