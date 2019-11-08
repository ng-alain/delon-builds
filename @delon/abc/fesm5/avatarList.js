import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ChangeDetectorRef, ContentChildren, NgModule } from '@angular/core';
import { __decorate, __metadata, __spread } from 'tslib';
import { InputNumber } from '@delon/util';
import { CommonModule } from '@angular/common';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

/**
 * @fileoverview added by tsickle
 * Generated from: avatar-list-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AvatarListItemComponent = /** @class */ (function () {
    function AvatarListItemComponent() {
    }
    AvatarListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'avatar-list-item, [avatar-list-item]',
                    exportAs: 'avatarListItem',
                    template: "\n    <ng-content></ng-content>\n  ",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    AvatarListItemComponent.propDecorators = {
        src: [{ type: Input }],
        text: [{ type: Input }],
        icon: [{ type: Input }],
        tips: [{ type: Input }]
    };
    return AvatarListItemComponent;
}());
if (false) {
    /** @type {?} */
    AvatarListItemComponent.prototype.src;
    /** @type {?} */
    AvatarListItemComponent.prototype.text;
    /** @type {?} */
    AvatarListItemComponent.prototype.icon;
    /** @type {?} */
    AvatarListItemComponent.prototype.tips;
}

/**
 * @fileoverview added by tsickle
 * Generated from: avatar-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AvatarListComponent = /** @class */ (function () {
    function AvatarListComponent(cdr) {
        this.cdr = cdr;
        this.inited = false;
        this.items = [];
        this.exceedCount = 0;
        this.cls = '';
        this.avatarSize = '';
        this.maxLength = 0;
    }
    Object.defineProperty(AvatarListComponent.prototype, "size", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.cls = 'avatar-list__item' + (value === 'default' ? '' : " avatar-list__" + value);
            switch (value) {
                case 'large':
                case 'small':
                case 'default':
                    this.avatarSize = value;
                    break;
                default:
                    this.avatarSize = 'small';
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    AvatarListComponent.prototype.gen = /**
     * @private
     * @return {?}
     */
    function () {
        var _items = this._items;
        /** @type {?} */
        var maxLength = this.maxLength > 0 ? this.maxLength : _items.length;
        /** @type {?} */
        var numOfChildren = _items.length;
        /** @type {?} */
        var numToShow = maxLength > 0 && maxLength >= numOfChildren ? numOfChildren : maxLength;
        this.items = _items.toArray().slice(0, numToShow);
        this.exceedCount = numToShow < numOfChildren ? numOfChildren - maxLength : 0;
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    AvatarListComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.gen();
        this.inited = true;
    };
    /**
     * @return {?}
     */
    AvatarListComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.inited) {
            this.gen();
        }
    };
    AvatarListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'avatar-list',
                    exportAs: 'avatarList',
                    template: "<ul class=\"avatar-list__wrap\">\n  <li *ngFor=\"let i of items\"\n      [class]=\"cls\">\n    <nz-avatar *ngIf=\"i.tips\"\n                nz-tooltip [nzTooltipTitle]=\"i.tips\"\n                [nzSrc]=\"i.src\"\n                [nzText]=\"i.text\"\n                [nzIcon]=\"i.icon\"\n                [nzSize]=\"avatarSize\"></nz-avatar>\n    <nz-avatar *ngIf=\"!i.tips\"\n               [nzSrc]=\"i.src\"\n               [nzText]=\"i.text\"\n               [nzIcon]=\"i.icon\"\n               [nzSize]=\"avatarSize\"></nz-avatar>\n  </li>\n  <li *ngIf=\"exceedCount > 0\"\n      [class]=\"cls\">\n    <nz-avatar [nzSize]=\"avatarSize\"\n               style=\"cursor: auto\"\n               [ngStyle]=\"excessItemsStyle\"\n               [nzText]=\"'+' + exceedCount\"></nz-avatar>\n  </li>\n</ul>\n",
                    host: { '[class.avatar-list]': 'true' },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    AvatarListComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    AvatarListComponent.propDecorators = {
        _items: [{ type: ContentChildren, args: [AvatarListItemComponent, { descendants: false },] }],
        size: [{ type: Input }],
        maxLength: [{ type: Input }],
        excessItemsStyle: [{ type: Input }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], AvatarListComponent.prototype, "maxLength", void 0);
    return AvatarListComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    AvatarListComponent.prototype.inited;
    /**
     * @type {?}
     * @private
     */
    AvatarListComponent.prototype._items;
    /** @type {?} */
    AvatarListComponent.prototype.items;
    /** @type {?} */
    AvatarListComponent.prototype.exceedCount;
    /** @type {?} */
    AvatarListComponent.prototype.cls;
    /** @type {?} */
    AvatarListComponent.prototype.avatarSize;
    /** @type {?} */
    AvatarListComponent.prototype.maxLength;
    /** @type {?} */
    AvatarListComponent.prototype.excessItemsStyle;
    /**
     * @type {?}
     * @private
     */
    AvatarListComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: avatar-list.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [AvatarListComponent, AvatarListItemComponent];
var AvatarListModule = /** @class */ (function () {
    function AvatarListModule() {
    }
    AvatarListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzAvatarModule, NzToolTipModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return AvatarListModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: avatarList.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AvatarListComponent, AvatarListItemComponent, AvatarListModule };
//# sourceMappingURL=avatarList.js.map
