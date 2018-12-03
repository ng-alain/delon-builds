import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ResultComponent {
    constructor() {
        this._type = '';
        this._icon = '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
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
    }
}
ResultComponent.decorators = [
    { type: Component, args: [{
                selector: 'result',
                template: "<div class=\"result__icon\"><i nz-icon class=\"anticon anticon-{{_icon}} result__icon-{{_type}}\"></i></div>\n<div class=\"result__title\">\n  <ng-container *stringTemplateOutlet=\"title\">{{title}}</ng-container>\n</div>\n<div *ngIf=\"description\" class=\"result__desc\">\n  <ng-container *stringTemplateOutlet=\"description\">{{description}}</ng-container>\n</div>\n<div *ngIf=\"extra\" class=\"result__extra\">\n  <ng-container *stringTemplateOutlet=\"extra\">{{extra}}</ng-container>\n</div>\n<div class=\"result__actions\">\n  <ng-content></ng-content>\n</div>",
                host: { '[class.result]': 'true' }
            }] }
];
ResultComponent.propDecorators = {
    type: [{ type: Input }],
    title: [{ type: Input }],
    description: [{ type: Input }],
    extra: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [ResultComponent];
class ResultModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ResultModule, providers: [] };
    }
}
ResultModule.decorators = [
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

export { ResultComponent, ResultModule };

//# sourceMappingURL=result.js.map