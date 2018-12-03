import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var AvatarListComponent = /** @class */ (function () {
    function AvatarListComponent(cdr) {
        this.cdr = cdr;
        this._size = '';
        this._avatarSize = '';
    }
    Object.defineProperty(AvatarListComponent.prototype, "size", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value === 'default' ? '' : value;
            switch (value) {
                case 'large':
                case 'small':
                case 'default':
                    this._avatarSize = value;
                    break;
                default:
                    this._avatarSize = 'small';
                    break;
            }
            this.cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    AvatarListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'avatar-list',
                    template: "<div class=\"avatar-list__wrap{{_size ? ' avatar-list__' + _size : ''}}\">\n  <ng-content></ng-content>\n</div>\n",
                    host: { '[class.avatar-list]': 'true' },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    AvatarListComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    AvatarListComponent.propDecorators = {
        size: [{ type: Input }]
    };
    return AvatarListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var AvatarListItemComponent = /** @class */ (function () {
    function AvatarListItemComponent(p) {
        this.p = p;
    }
    Object.defineProperty(AvatarListItemComponent.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
            return this.p._avatarSize;
        },
        enumerable: true,
        configurable: true
    });
    AvatarListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'avatar-list-item, [avatar-list-item]',
                    template: "<nz-tooltip *ngIf=\"tips\" [nzTitle]=\"tips\">\n  <nz-avatar nz-tooltip [nzSrc]=\"src\" [nzText]=\"text\" [nzIcon]=\"icon\" [nzSize]=\"size\"></nz-avatar>\n</nz-tooltip>\n<nz-avatar *ngIf=\"!tips\" [nzSrc]=\"src\" [nzText]=\"text\" [nzIcon]=\"icon\" [nzSize]=\"size\"></nz-avatar>\n<ng-content></ng-content>\n",
                    host: {
                        '[class.avatar-list__item]': 'true',
                    }
                }] }
    ];
    /** @nocollapse */
    AvatarListItemComponent.ctorParameters = function () { return [
        { type: AvatarListComponent }
    ]; };
    AvatarListItemComponent.propDecorators = {
        src: [{ type: Input }],
        text: [{ type: Input }],
        icon: [{ type: Input }],
        tips: [{ type: Input }]
    };
    return AvatarListItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [AvatarListComponent, AvatarListItemComponent];
var AvatarListModule = /** @class */ (function () {
    function AvatarListModule() {
    }
    /**
     * @return {?}
     */
    AvatarListModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: AvatarListModule, providers: [] };
    };
    AvatarListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NgZorroAntdModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return AvatarListModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { AvatarListItemComponent, AvatarListComponent, AvatarListModule };

//# sourceMappingURL=avatarList.js.map