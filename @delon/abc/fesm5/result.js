import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { DelonUtilModule } from '@delon/util';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * Generated from: result.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ResultComponent = /** @class */ (function () {
    function ResultComponent() {
        this._type = '';
        this._icon = '';
    }
    Object.defineProperty(ResultComponent.prototype, "type", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        enumerable: true,
        configurable: true
    });
    ResultComponent.decorators = [
        { type: Component, args: [{
                    selector: 'result',
                    exportAs: 'result',
                    template: "<div class=\"result__icon\">\n  <i nz-icon\n     [nzType]=\"_icon\"\n     class=\"result__icon-{{_type}}\"></i>\n</div>\n<div class=\"result__title\">\n  <ng-container *nzStringTemplateOutlet=\"title\">{{title}}</ng-container>\n</div>\n<div *ngIf=\"description\"\n     class=\"result__desc\">\n  <ng-container *nzStringTemplateOutlet=\"description\">{{description}}</ng-container>\n</div>\n<div *ngIf=\"extra\"\n     class=\"result__extra\">\n  <ng-container *nzStringTemplateOutlet=\"extra\">{{extra}}</ng-container>\n</div>\n<div class=\"result__actions\">\n  <ng-content></ng-content>\n</div>\n",
                    host: { '[class.result]': 'true' },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    ResultComponent.propDecorators = {
        type: [{ type: Input }],
        title: [{ type: Input }],
        description: [{ type: Input }],
        extra: [{ type: Input }]
    };
    return ResultComponent;
}());
if (false) {
    /** @type {?} */
    ResultComponent.prototype._type;
    /** @type {?} */
    ResultComponent.prototype._icon;
    /** @type {?} */
    ResultComponent.prototype.title;
    /** @type {?} */
    ResultComponent.prototype.description;
    /** @type {?} */
    ResultComponent.prototype.extra;
}

/**
 * @fileoverview added by tsickle
 * Generated from: result.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [ResultComponent];
var ResultModule = /** @class */ (function () {
    function ResultModule() {
    }
    ResultModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzIconModule, DelonUtilModule, NzOutletModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return ResultModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: result.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ResultComponent, ResultModule };
//# sourceMappingURL=result.js.map
