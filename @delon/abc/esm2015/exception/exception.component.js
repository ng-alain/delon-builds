/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                template: `
  <div class="exception__img-block">
    <div class="exception__img" [ngStyle]="{'background-image': 'url(' + _img + ')'}"></div>
  </div>
  <div class="exception__cont">
    <h1 class="exception__cont-title" [innerHTML]="_title"></h1>
    <div class="exception__cont-desc" [innerHTML]="_desc || locale[_type]"></div>
    <div class="exception__cont-actions">
      <div (cdkObserveContent)="checkContent()" #conTpl><ng-content></ng-content></div>
      <button *ngIf="!hasCon" nz-button [routerLink]="['/']" [nzType]="'primary'">{{locale.backToHome}}</button>
    </div>
  </div>
  `,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZXhjZXB0aW9uLyIsInNvdXJjZXMiOlsiZXhjZXB0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsU0FBUyxFQUNULFVBQVUsR0FHWCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQW9CbEQsTUFBTTs7OztJQXlESixZQUFvQixJQUF3QjtRQUF4QixTQUFJLEdBQUosSUFBSSxDQUFvQjtzQkFuRDlCLEVBQUU7c0JBQ1AsS0FBSztvQkFFUCxFQUFFO3NCQUNBLEVBQUU7cUJBQ0gsRUFBRTtLQThDc0M7Ozs7O0lBNUNoRCxJQUNJLElBQUksQ0FBQyxLQUFzQjs7UUFDN0IsTUFBTSxJQUFJLEdBQUc7WUFDWCxHQUFHLEVBQUU7Z0JBQ0gsR0FBRyxFQUNELHFFQUFxRTtnQkFDdkUsS0FBSyxFQUFFLEtBQUs7YUFDYjtZQUNELEdBQUcsRUFBRTtnQkFDSCxHQUFHLEVBQ0QscUVBQXFFO2dCQUN2RSxLQUFLLEVBQUUsS0FBSzthQUNiO1lBQ0QsR0FBRyxFQUFFO2dCQUNILEdBQUcsRUFDRCxxRUFBcUU7Z0JBQ3ZFLEtBQUssRUFBRSxLQUFLO2FBQ2I7U0FDRixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRWxCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDMUI7Ozs7O0lBRUQsSUFDSSxHQUFHLENBQUMsS0FBSztRQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0tBQ25COzs7OztJQUNELElBQ0ksS0FBSyxDQUFDLEtBQUs7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztLQUNyQjs7Ozs7SUFDRCxJQUNJLElBQUksQ0FBQyxLQUFLO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDcEI7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ25EOzs7O0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUNyQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FDckQsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNyQjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzFCOzs7WUF0RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztHQVlUO2dCQUNELElBQUksRUFBRSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7OztZQW5CUSxrQkFBa0I7OztxQkFzQnhCLFNBQVMsU0FBQyxRQUFRO21CQVdsQixLQUFLO2tCQTJCTCxLQUFLO29CQUlMLEtBQUs7bUJBSUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIE9uSW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZXhjZXB0aW9uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJleGNlcHRpb25fX2ltZy1ibG9ja1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImV4Y2VwdGlvbl9faW1nXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgX2ltZyArICcpJ31cIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiZXhjZXB0aW9uX19jb250XCI+XHJcbiAgICA8aDEgY2xhc3M9XCJleGNlcHRpb25fX2NvbnQtdGl0bGVcIiBbaW5uZXJIVE1MXT1cIl90aXRsZVwiPjwvaDE+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZXhjZXB0aW9uX19jb250LWRlc2NcIiBbaW5uZXJIVE1MXT1cIl9kZXNjIHx8IGxvY2FsZVtfdHlwZV1cIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJleGNlcHRpb25fX2NvbnQtYWN0aW9uc1wiPlxyXG4gICAgICA8ZGl2IChjZGtPYnNlcnZlQ29udGVudCk9XCJjaGVja0NvbnRlbnQoKVwiICNjb25UcGw+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxyXG4gICAgICA8YnV0dG9uICpuZ0lmPVwiIWhhc0NvblwiIG56LWJ1dHRvbiBbcm91dGVyTGlua109XCJbJy8nXVwiIFtuelR5cGVdPVwiJ3ByaW1hcnknXCI+e3tsb2NhbGUuYmFja1RvSG9tZX19PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIGhvc3Q6IHsgJ1tjbGFzcy5leGNlcHRpb25dJzogJ3RydWUnIH0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeGNlcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xyXG4gIEBWaWV3Q2hpbGQoJ2NvblRwbCcpXHJcbiAgcHJpdmF0ZSBjb25UcGw6IEVsZW1lbnRSZWY7XHJcblxyXG4gIF90eXBlOiBudW1iZXI7XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTtcclxuICBoYXNDb24gPSBmYWxzZTtcclxuXHJcbiAgX2ltZyA9ICcnO1xyXG4gIF90aXRsZSA9ICcnO1xyXG4gIF9kZXNjID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHR5cGUodmFsdWU6IDQwMyB8IDQwNCB8IDUwMCkge1xyXG4gICAgY29uc3QgaXRlbSA9IHtcclxuICAgICAgNDAzOiB7XHJcbiAgICAgICAgaW1nOlxyXG4gICAgICAgICAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC93WmNuR3FSRHloUE9FWUZjWkRuYi5zdmcnLFxyXG4gICAgICAgIHRpdGxlOiAnNDAzJyxcclxuICAgICAgfSxcclxuICAgICAgNDA0OiB7XHJcbiAgICAgICAgaW1nOlxyXG4gICAgICAgICAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9LcG5wY2hYc29iUmdMRWxFb3p6SS5zdmcnLFxyXG4gICAgICAgIHRpdGxlOiAnNDA0JyxcclxuICAgICAgfSxcclxuICAgICAgNTAwOiB7XHJcbiAgICAgICAgaW1nOlxyXG4gICAgICAgICAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9SVlJVQVlkQ0dlWU5CV29LaUl3Qi5zdmcnLFxyXG4gICAgICAgIHRpdGxlOiAnNTAwJyxcclxuICAgICAgfSxcclxuICAgIH1bdmFsdWVdO1xyXG5cclxuICAgIGlmICghaXRlbSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcclxuICAgIHRoaXMuX2ltZyA9IGl0ZW0uaW1nO1xyXG4gICAgdGhpcy5fdGl0bGUgPSBpdGVtLnRpdGxlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgaW1nKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9pbWcgPSB2YWx1ZTtcclxuICB9XHJcbiAgQElucHV0KClcclxuICBzZXQgdGl0bGUodmFsdWUpIHtcclxuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XHJcbiAgfVxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRlc2ModmFsdWUpIHtcclxuICAgIHRoaXMuX2Rlc2MgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGNoZWNrQ29udGVudCgpIHtcclxuICAgIHRoaXMuaGFzQ29uID0gIWlzRW1wdHkodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmNoYW5nZS5zdWJzY3JpYmUoXHJcbiAgICAgICgpID0+ICh0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXREYXRhKCdleGNlcHRpb24nKSksXHJcbiAgICApO1xyXG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=