import { Component, Input, ViewChild, NgModule } from '@angular/core';
import { isEmpty, DelonUtilModule } from '@delon/util';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ExceptionComponent = /** @class */ (function () {
    function ExceptionComponent(i18n) {
        this.i18n = i18n;
        this.locale = {};
        this.hasCon = false;
        this._img = '';
        this._title = '';
        this._desc = '';
    }
    Object.defineProperty(ExceptionComponent.prototype, "type", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var item = {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExceptionComponent.prototype, "img", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._img = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExceptionComponent.prototype, "title", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExceptionComponent.prototype, "desc", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._desc = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ExceptionComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        this.hasCon = !isEmpty(this.conTpl.nativeElement);
    };
    /**
     * @return {?}
     */
    ExceptionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n$ = this.i18n.change.subscribe(function () { return (_this.locale = _this.i18n.getData('exception')); });
        this.checkContent();
    };
    /**
     * @return {?}
     */
    ExceptionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.i18n$.unsubscribe();
    };
    ExceptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'exception',
                    template: "\n  <div class=\"exception__img-block\">\n    <div class=\"exception__img\" [ngStyle]=\"{'background-image': 'url(' + _img + ')'}\"></div>\n  </div>\n  <div class=\"exception__cont\">\n    <h1 class=\"exception__cont-title\" [innerHTML]=\"_title\"></h1>\n    <div class=\"exception__cont-desc\" [innerHTML]=\"_desc || locale[_type]\"></div>\n    <div class=\"exception__cont-actions\">\n      <div (cdkObserveContent)=\"checkContent()\" #conTpl><ng-content></ng-content></div>\n      <button *ngIf=\"!hasCon\" nz-button [routerLink]=\"['/']\" [nzType]=\"'primary'\">{{locale.backToHome}}</button>\n    </div>\n  </div>\n  ",
                    host: { '[class.exception]': 'true' },
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    ExceptionComponent.ctorParameters = function () { return [
        { type: DelonLocaleService }
    ]; };
    ExceptionComponent.propDecorators = {
        conTpl: [{ type: ViewChild, args: ['conTpl',] }],
        type: [{ type: Input }],
        img: [{ type: Input }],
        title: [{ type: Input }],
        desc: [{ type: Input }]
    };
    return ExceptionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [ExceptionComponent];
var ExceptionModule = /** @class */ (function () {
    function ExceptionModule() {
    }
    /**
     * @return {?}
     */
    ExceptionModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: ExceptionModule, providers: [] };
    };
    ExceptionModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        DelonUtilModule,
                        DelonLocaleModule,
                        NgZorroAntdModule,
                    ],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return ExceptionModule;
}());

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