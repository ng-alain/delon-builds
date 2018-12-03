import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class AvatarListComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this._size = '';
        this._avatarSize = '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set size(value) {
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
    }
}
AvatarListComponent.decorators = [
    { type: Component, args: [{
                selector: 'avatar-list',
                template: "<div class=\"avatar-list__wrap{{_size ? ' avatar-list__' + _size : ''}}\">\n  <ng-content></ng-content>\n</div>\n",
                host: { '[class.avatar-list]': 'true' },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
AvatarListComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
AvatarListComponent.propDecorators = {
    size: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class AvatarListItemComponent {
    /**
     * @param {?} p
     */
    constructor(p) {
        this.p = p;
    }
    /**
     * @return {?}
     */
    get size() {
        return this.p._avatarSize;
    }
}
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
AvatarListItemComponent.ctorParameters = () => [
    { type: AvatarListComponent }
];
AvatarListItemComponent.propDecorators = {
    src: [{ type: Input }],
    text: [{ type: Input }],
    icon: [{ type: Input }],
    tips: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [AvatarListComponent, AvatarListItemComponent];
class AvatarListModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: AvatarListModule, providers: [] };
    }
}
AvatarListModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NgZorroAntdModule],
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

export { AvatarListItemComponent, AvatarListComponent, AvatarListModule };

//# sourceMappingURL=avatarList.js.map