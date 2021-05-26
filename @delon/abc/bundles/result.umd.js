/**
 * @license ng-alain(cipchk@qq.com) v11.10.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/bidi'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/result', ['exports', '@angular/cdk/bidi', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/icon'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.result = {}), global.ng.cdk.bidi, global.ng.core, global.rxjs, global.rxjs.operators, global.ng.common, global['ng-zorro-antd/core/outlet'], global['ng-zorro-antd/icon']));
}(this, (function (exports, bidi, core, rxjs, operators, common, outlet, icon) { 'use strict';

    var ResultComponent = /** @class */ (function () {
        function ResultComponent(directionality) {
            this.directionality = directionality;
            this.destroy$ = new rxjs.Subject();
            this._type = '';
            this._icon = '';
            this.dir = 'ltr';
        }
        Object.defineProperty(ResultComponent.prototype, "type", {
            set: function (value) {
                this._type = value;
                switch (value) {
                    case 'success':
                        this._icon = 'check-circle';
                        break;
                    case 'error':
                        this._icon = 'close-circle';
                        break;
                    default:
                        this._icon = value;
                        break;
                }
            },
            enumerable: false,
            configurable: true
        });
        ResultComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
            });
        };
        ResultComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        return ResultComponent;
    }());
    ResultComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'result',
                    exportAs: 'result',
                    template: "<div class=\"result__icon\">\n  <i nz-icon [nzType]=\"_icon\" class=\"result__icon-{{ _type }}\"></i>\n</div>\n<div class=\"result__title\">\n  <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n</div>\n<div *ngIf=\"description\" class=\"result__desc\">\n  <ng-container *nzStringTemplateOutlet=\"description\">{{ description }}</ng-container>\n</div>\n<div *ngIf=\"extra\" class=\"result__extra\">\n  <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n</div>\n<div class=\"result__actions\">\n  <ng-content></ng-content>\n</div>\n",
                    host: {
                        '[class.result]': 'true',
                        '[class.result-rtl]': "dir === 'rtl'",
                    },
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None
                },] }
    ];
    /** @nocollapse */
    ResultComponent.ctorParameters = function () { return [
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
    ]; };
    ResultComponent.propDecorators = {
        type: [{ type: core.Input }],
        title: [{ type: core.Input }],
        description: [{ type: core.Input }],
        extra: [{ type: core.Input }]
    };

    var COMPONENTS = [ResultComponent];
    var ResultModule = /** @class */ (function () {
        function ResultModule() {
        }
        return ResultModule;
    }());
    ResultModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, icon.NzIconModule, outlet.NzOutletModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS,
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ResultComponent = ResultComponent;
    exports.ResultModule = ResultModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=result.umd.js.map
