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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL2V4Y2VwdGlvbi9leGNlcHRpb24uY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL2V4Y2VwdGlvbi9leGNlcHRpb24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleGNlcHRpb24nLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiZXhjZXB0aW9uX19pbWctYmxvY2tcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhjZXB0aW9uX19pbWdcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyBfaW1nICsgJyknfVwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImV4Y2VwdGlvbl9fY29udFwiPlxuICAgIDxoMSBjbGFzcz1cImV4Y2VwdGlvbl9fY29udC10aXRsZVwiIFtpbm5lckhUTUxdPVwiX3RpdGxlXCI+PC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwiZXhjZXB0aW9uX19jb250LWRlc2NcIiBbaW5uZXJIVE1MXT1cIl9kZXNjIHx8IGxvY2FsZVtfdHlwZV1cIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhjZXB0aW9uX19jb250LWFjdGlvbnNcIj5cbiAgICAgIDxkaXYgKGNka09ic2VydmVDb250ZW50KT1cImNoZWNrQ29udGVudCgpXCIgI2NvblRwbD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgICA8YnV0dG9uICpuZ0lmPVwiIWhhc0NvblwiIG56LWJ1dHRvbiBbcm91dGVyTGlua109XCJbJy8nXVwiIFtuelR5cGVdPVwiJ3ByaW1hcnknXCI+e3tsb2NhbGUuYmFja1RvSG9tZX19PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBob3N0OiB7ICdbY2xhc3MuZXhjZXB0aW9uXSc6ICd0cnVlJyB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgRXhjZXB0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG4gIEBWaWV3Q2hpbGQoJ2NvblRwbCcpXG4gIHByaXZhdGUgY29uVHBsOiBFbGVtZW50UmVmO1xuXG4gIF90eXBlOiBudW1iZXI7XG4gIGxvY2FsZTogYW55ID0ge307XG4gIGhhc0NvbiA9IGZhbHNlO1xuXG4gIF9pbWcgPSAnJztcbiAgX3RpdGxlID0gJyc7XG4gIF9kZXNjID0gJyc7XG5cbiAgQElucHV0KClcbiAgc2V0IHR5cGUodmFsdWU6IDQwMyB8IDQwNCB8IDUwMCkge1xuICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICA0MDM6IHtcbiAgICAgICAgaW1nOlxuICAgICAgICAgICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvd1pjbkdxUkR5aFBPRVlGY1pEbmIuc3ZnJyxcbiAgICAgICAgdGl0bGU6ICc0MDMnLFxuICAgICAgfSxcbiAgICAgIDQwNDoge1xuICAgICAgICBpbWc6XG4gICAgICAgICAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9LcG5wY2hYc29iUmdMRWxFb3p6SS5zdmcnLFxuICAgICAgICB0aXRsZTogJzQwNCcsXG4gICAgICB9LFxuICAgICAgNTAwOiB7XG4gICAgICAgIGltZzpcbiAgICAgICAgICAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL1JWUlVBWWRDR2VZTkJXb0tpSXdCLnN2ZycsXG4gICAgICAgIHRpdGxlOiAnNTAwJyxcbiAgICAgIH0sXG4gICAgfVt2YWx1ZV07XG5cbiAgICBpZiAoIWl0ZW0pIHJldHVybjtcblxuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICB0aGlzLl9pbWcgPSBpdGVtLmltZztcbiAgICB0aGlzLl90aXRsZSA9IGl0ZW0udGl0bGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaW1nKHZhbHVlKSB7XG4gICAgdGhpcy5faW1nID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGVzYyh2YWx1ZSkge1xuICAgIHRoaXMuX2Rlc2MgPSB2YWx1ZTtcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpIHtcbiAgICB0aGlzLmhhc0NvbiA9ICFpc0VtcHR5KHRoaXMuY29uVHBsLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4bi5jaGFuZ2Uuc3Vic2NyaWJlKFxuICAgICAgKCkgPT4gKHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldERhdGEoJ2V4Y2VwdGlvbicpKSxcbiAgICApO1xuICAgIHRoaXMuY2hlY2tDb250ZW50KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IERlbG9uTG9jYWxlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgRXhjZXB0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9leGNlcHRpb24uY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtFeGNlcHRpb25Db21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBEZWxvblV0aWxNb2R1bGUsXG4gICAgRGVsb25Mb2NhbGVNb2R1bGUsXG4gICAgTmdab3Jyb0FudGRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBFeGNlcHRpb25Nb2R1bGUsIHByb3ZpZGVyczogW10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0lBd0ZFLDRCQUFvQixJQUF3QjtRQUF4QixTQUFJLEdBQUosSUFBSSxDQUFvQjtzQkFuRDlCLEVBQUU7c0JBQ1AsS0FBSztvQkFFUCxFQUFFO3NCQUNBLEVBQUU7cUJBQ0gsRUFBRTtLQThDc0M7SUE1Q2hELHNCQUNJLG9DQUFJOzs7OztRQURSLFVBQ1MsS0FBc0I7O1lBQzdCLElBQU0sSUFBSSxH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