import { Component, Input, ViewChild, NgModule } from '@angular/core';
import { isEmpty, DelonUtilModule } from '@delon/util';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ExceptionComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [ExceptionComponent];
class ExceptionModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ExceptionModule, providers: [] };
    }
}
ExceptionModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    DelonUtilModule,
                    DelonLocaleModule,
                    NgZorroAntdModule,
                ],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ExceptionComponent, ExceptionModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL2V4Y2VwdGlvbi9leGNlcHRpb24uY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL2V4Y2VwdGlvbi9leGNlcHRpb24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIE9uSW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZXhjZXB0aW9uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJleGNlcHRpb25fX2ltZy1ibG9ja1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImV4Y2VwdGlvbl9faW1nXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgX2ltZyArICcpJ31cIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiZXhjZXB0aW9uX19jb250XCI+XHJcbiAgICA8aDEgY2xhc3M9XCJleGNlcHRpb25fX2NvbnQtdGl0bGVcIiBbaW5uZXJIVE1MXT1cIl90aXRsZVwiPjwvaDE+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZXhjZXB0aW9uX19jb250LWRlc2NcIiBbaW5uZXJIVE1MXT1cIl9kZXNjIHx8IGxvY2FsZVtfdHlwZV1cIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJleGNlcHRpb25fX2NvbnQtYWN0aW9uc1wiPlxyXG4gICAgICA8ZGl2IChjZGtPYnNlcnZlQ29udGVudCk9XCJjaGVja0NvbnRlbnQoKVwiICNjb25UcGw+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxyXG4gICAgICA8YnV0dG9uICpuZ0lmPVwiIWhhc0NvblwiIG56LWJ1dHRvbiBbcm91dGVyTGlua109XCJbJy8nXVwiIFtuelR5cGVdPVwiJ3ByaW1hcnknXCI+e3tsb2NhbGUuYmFja1RvSG9tZX19PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIGhvc3Q6IHsgJ1tjbGFzcy5leGNlcHRpb25dJzogJ3RydWUnIH0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeGNlcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xyXG4gIEBWaWV3Q2hpbGQoJ2NvblRwbCcpXHJcbiAgcHJpdmF0ZSBjb25UcGw6IEVsZW1lbnRSZWY7XHJcblxyXG4gIF90eXBlOiBudW1iZXI7XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTtcclxuICBoYXNDb24gPSBmYWxzZTtcclxuXHJcbiAgX2ltZyA9ICcnO1xyXG4gIF90aXRsZSA9ICcnO1xyXG4gIF9kZXNjID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHR5cGUodmFsdWU6IDQwMyB8IDQwNCB8IDUwMCkge1xyXG4gICAgY29uc3QgaXRlbSA9IHtcclxuICAgICAgNDAzOiB7XHJcbiAgICAgICAgaW1nOlxyXG4gICAgICAgICAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC93WmNuR3FSRHloUE9FWUZjWkRuYi5zdmcnLFxyXG4gICAgICAgIHRpdGxlOiAnNDAzJyxcclxuICAgICAgfSxcclxuICAgICAgNDA0OiB7XHJcbiAgICAgICAgaW1nOlxyXG4gICAgICAgICAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9LcG5wY2hYc29iUmdMRWxFb3p6SS5zdmcnLFxyXG4gICAgICAgIHRpdGxlOiAnNDA0JyxcclxuICAgICAgfSxcclxuICAgICAgNTAwOiB7XHJcbiAgICAgICAgaW1nOlxyXG4gICAgICAgICAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9SVlJVQVlkQ0dlWU5CV29LaUl3Qi5zdmcnLFxyXG4gICAgICAgIHRpdGxlOiAnNTAwJyxcclxuICAgICAgfSxcclxuICAgIH1bdmFsdWVdO1xyXG5cclxuICAgIGlmICghaXRlbSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcclxuICAgIHRoaXMuX2ltZyA9IGl0ZW0uaW1nO1xyXG4gICAgdGhpcy5fdGl0bGUgPSBpdGVtLnRpdGxlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgaW1nKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9pbWcgPSB2YWx1ZTtcclxuICB9XHJcbiAgQElucHV0KClcclxuICBzZXQgdGl0bGUodmFsdWUpIHtcclxuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XHJcbiAgfVxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRlc2ModmFsdWUpIHtcclxuICAgIHRoaXMuX2Rlc2MgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGNoZWNrQ29udGVudCgpIHtcclxuICAgIHRoaXMuaGFzQ29uID0gIWlzRW1wdHkodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmNoYW5nZS5zdWJzY3JpYmUoXHJcbiAgICAgICgpID0+ICh0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXREYXRhKCdleGNlcHRpb24nKSksXHJcbiAgICApO1xyXG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBFeGNlcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2V4Y2VwdGlvbi5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtFeGNlcHRpb25Db21wb25lbnRdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICBEZWxvblV0aWxNb2R1bGUsXHJcbiAgICBEZWxvbkxvY2FsZU1vZHVsZSxcclxuICAgIE5nWm9ycm9BbnRkTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXHJcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhjZXB0aW9uTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBF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