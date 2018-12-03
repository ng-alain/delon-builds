import { __decorate, __metadata } from 'tslib';
import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { InputBoolean, DelonUtilModule } from '@delon/util';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TrendComponent {
    constructor() {
        /**
         * 是否彩色标记
         */
        this.colorful = true;
        /**
         * 颜色反转
         */
        this.reverseColor = false;
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
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], TrendComponent.prototype, "colorful", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], TrendComponent.prototype, "reverseColor", void 0);

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