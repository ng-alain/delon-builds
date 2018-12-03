import { Component, Input, NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { toBoolean, DelonUtilModule } from '@delon/util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TrendComponent {
    constructor() {
        this._colorful = true;
        this._reverseColor = false;
    }
    /**
     * 是否彩色标记
     * @return {?}
     */
    get colorful() {
        return this._colorful;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set colorful(value) {
        this._colorful = toBoolean(value);
    }
    /**
     * 颜色反转
     * @return {?}
     */
    get reverseColor() {
        return this._reverseColor;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set reverseColor(value) {
        this._reverseColor = toBoolean(value);
    }
}
TrendComponent.decorators = [
    { type: Component, args: [{
                selector: 'trend',
                template: "<ng-content></ng-content>\n<span *ngIf=\"flag\" class=\"trend__{{flag}}\"><i nz-icon type=\"caret-{{flag}}\"></i></span>\n",
                host: {
                    '[class.trend]': 'true',
                    '[class.trend__grey]': '!colorful',
                    '[class.trend__reverse]': 'colorful && reverseColor',
                }
            }] }
];
TrendComponent.propDecorators = {
    flag: [{ type: Input }],
    colorful: [{ type: Input }],
    reverseColor: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [TrendComponent];
class TrendModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: TrendModule, providers: [] };
    }
}
TrendModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NgZorroAntdModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { TrendComponent, TrendModule };

//# sourceMappingURL=trend.js.map