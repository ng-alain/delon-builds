import { Component, Input, ViewChild, NgModule } from '@angular/core';
import { isEmpty, DelonUtilModule } from '@delon/util';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { ExceptionComponent, ExceptionModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL2V4Y2VwdGlvbi9leGNlcHRpb24uY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL2V4Y2VwdGlvbi9leGNlcHRpb24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleGNlcHRpb24nLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiZXhjZXB0aW9uX19pbWctYmxvY2tcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhjZXB0aW9uX19pbWdcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyBfaW1nICsgJyknfVwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImV4Y2VwdGlvbl9fY29udFwiPlxuICAgIDxoMSBjbGFzcz1cImV4Y2VwdGlvbl9fY29udC10aXRsZVwiIFtpbm5lckhUTUxdPVwiX3RpdGxlXCI+PC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwiZXhjZXB0aW9uX19jb250LWRlc2NcIiBbaW5uZXJIVE1MXT1cIl9kZXNjIHx8IGxvY2FsZVtfdHlwZV1cIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhjZXB0aW9uX19jb250LWFjdGlvbnNcIj5cbiAgICAgIDxkaXYgKGNka09ic2VydmVDb250ZW50KT1cImNoZWNrQ29udGVudCgpXCIgI2NvblRwbD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgICA8YnV0dG9uICpuZ0lmPVwiIWhhc0NvblwiIG56LWJ1dHRvbiBbcm91dGVyTGlua109XCJbJy8nXVwiIFtuelR5cGVdPVwiJ3ByaW1hcnknXCI+e3tsb2NhbGUuYmFja1RvSG9tZX19PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBob3N0OiB7ICdbY2xhc3MuZXhjZXB0aW9uXSc6ICd0cnVlJyB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgRXhjZXB0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG4gIEBWaWV3Q2hpbGQoJ2NvblRwbCcpXG4gIHByaXZhdGUgY29uVHBsOiBFbGVtZW50UmVmO1xuXG4gIF90eXBlOiBudW1iZXI7XG4gIGxvY2FsZTogYW55ID0ge307XG4gIGhhc0NvbiA9IGZhbHNlO1xuXG4gIF9pbWcgPSAnJztcbiAgX3RpdGxlID0gJyc7XG4gIF9kZXNjID0gJyc7XG5cbiAgQElucHV0KClcbiAgc2V0IHR5cGUodmFsdWU6IDQwMyB8IDQwNCB8IDUwMCkge1xuICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICA0MDM6IHtcbiAgICAgICAgaW1nOlxuICAgICAgICAgICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvd1pjbkdxUkR5aFBPRVlGY1pEbmIuc3ZnJyxcbiAgICAgICAgdGl0bGU6ICc0MDMnLFxuICAgICAgfSxcbiAgICAgIDQwNDoge1xuICAgICAgICBpbWc6XG4gICAgICAgICAgJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9LcG5wY2hYc29iUmdMRWxFb3p6SS5zdmcnLFxuICAgICAgICB0aXRsZTogJzQwNCcsXG4gICAgICB9LFxuICAgICAgNTAwOiB7XG4gICAgICAgIGltZzpcbiAgICAgICAgICAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL1JWUlVBWWRDR2VZTkJXb0tpSXdCLnN2ZycsXG4gICAgICAgIHRpdGxlOiAnNTAwJyxcbiAgICAgIH0sXG4gICAgfVt2YWx1ZV07XG5cbiAgICBpZiAoIWl0ZW0pIHJldHVybjtcblxuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICB0aGlzLl9pbWcgPSBpdGVtLmltZztcbiAgICB0aGlzLl90aXRsZSA9IGl0ZW0udGl0bGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaW1nKHZhbHVlKSB7XG4gICAgdGhpcy5faW1nID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGVzYyh2YWx1ZSkge1xuICAgIHRoaXMuX2Rlc2MgPSB2YWx1ZTtcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpIHtcbiAgICB0aGlzLmhhc0NvbiA9ICFpc0VtcHR5KHRoaXMuY29uVHBsLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4bi5jaGFuZ2Uuc3Vic2NyaWJlKFxuICAgICAgKCkgPT4gKHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldERhdGEoJ2V4Y2VwdGlvbicpKSxcbiAgICApO1xuICAgIHRoaXMuY2hlY2tDb250ZW50KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IERlbG9uTG9jYWxlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgRXhjZXB0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9leGNlcHRpb24uY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtFeGNlcHRpb25Db21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBEZWxvblV0aWxNb2R1bGUsXG4gICAgRGVsb25Mb2NhbGVNb2R1bGUsXG4gICAgTmdab3Jyb0FudGRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBFeGNlcHRpb25Nb2R1bGUsIHByb3ZpZGVyczogW10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0lBd0ZFLDRCQUFvQixJQUF3QjtRQUF4QixTQUFJLEdBQUosSUFBSSxDQUFvQjtRQW5ENUMsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUNqQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixVQUFLLEdBQUcsRUFB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