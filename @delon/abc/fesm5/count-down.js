import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, Input, Output, NgModule } from '@angular/core';
import addSeconds from 'date-fns/add_seconds';
import format from 'date-fns/format';
import { CountdownModule } from 'ngx-countdown';
import { warnDeprecation } from 'ng-zorro-antd/core';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: count-down.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CountDownComponent = /** @class */ (function () {
    function CountDownComponent() {
        this.begin = new EventEmitter();
        this.notify = new EventEmitter();
        this.end = new EventEmitter();
        this.event = new EventEmitter();
    }
    Object.defineProperty(CountDownComponent.prototype, "target", {
        /**
         * 目标时间
         */
        set: /**
         * 目标时间
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config = {
                format: "HH:mm:ss",
                stopTime: typeof value === 'number' ? addSeconds(new Date(), value).valueOf() : +format(value, 'x'),
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CountDownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.begin.observers.length > 0 || this.notify.observers.length > 0 || this.end.observers.length > 0) {
            warnDeprecation("begin, notify, end events is deprecated and will be removed in 9.0.0. Please use 'event' instead.");
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CountDownComponent.prototype.handleEvent = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        switch (e.action) {
            case 'start':
                this.begin.emit();
                break;
            case 'notify':
                this.notify.emit(e.left);
                break;
            case 'done':
                this.end.emit();
                break;
        }
        this.event.emit(e);
    };
    CountDownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'count-down',
                    exportAs: 'countDown',
                    template: "\n    <countdown #cd *ngIf=\"config\" [config]=\"config\" (event)=\"handleEvent($event)\"></countdown>\n  ",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    CountDownComponent.propDecorators = {
        instance: [{ type: ViewChild, args: ['cd', { static: false },] }],
        config: [{ type: Input }],
        target: [{ type: Input }],
        begin: [{ type: Output }],
        notify: [{ type: Output }],
        end: [{ type: Output }],
        event: [{ type: Output }]
    };
    return CountDownComponent;
}());
if (false) {
    /** @type {?} */
    CountDownComponent.prototype.instance;
    /** @type {?} */
    CountDownComponent.prototype.config;
    /** @type {?} */
    CountDownComponent.prototype.begin;
    /** @type {?} */
    CountDownComponent.prototype.notify;
    /** @type {?} */
    CountDownComponent.prototype.end;
    /** @type {?} */
    CountDownComponent.prototype.event;
}

/**
 * @fileoverview added by tsickle
 * Generated from: count-down.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [CountDownComponent];
var CountDownModule = /** @class */ (function () {
    function CountDownModule() {
    }
    CountDownModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, CountdownModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return CountDownModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: count-down.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CountDownComponent, CountDownModule };
//# sourceMappingURL=count-down.js.map
