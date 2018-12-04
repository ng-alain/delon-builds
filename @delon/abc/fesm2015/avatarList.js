import { Component, Input, ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AvatarListItemComponent {
}
AvatarListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'avatar-list-item, [avatar-list-item]',
                template: `<ng-content></ng-content>`
            }] }
];
AvatarListItemComponent.propDecorators = {
    src: [{ type: Input }],
    text: [{ type: Input }],
    icon: [{ type: Input }],
    tips: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AvatarListComponent {
    constructor() {
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
    }
}
AvatarListComponent.decorators = [
    { type: Component, args: [{
                selector: 'avatar-list',
                template: `
  <ul class="avatar-list__wrap">
    <li *ngFor="let i of _items" class="avatar-list__item{{_size ? ' avatar-list__item-' + _size : ''}}">
      <nz-tooltip *ngIf="i.tips" [nzTitle]="i.tips">
        <nz-avatar nz-tooltip [nzSrc]="i.src" [nzText]="i.text" [nzIcon]="i.icon" [nzSize]="_avatarSize"></nz-avatar>
      </nz-tooltip>
      <nz-avatar *ngIf="!i.tips" [nzSrc]="i.src" [nzText]="i.text" [nzIcon]="i.icon" [nzSize]="_avatarSize"></nz-avatar>
    </li>
  </ul>
  `,
                host: { '[class.avatar-list]': 'true' },
                preserveWhitespaces: false
            }] }
];
AvatarListComponent.propDecorators = {
    size: [{ type: Input }],
    _items: [{ type: ContentChildren, args: [AvatarListItemComponent,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { AvatarListItemComponent, AvatarListComponent, AvatarListModule };

//# sourceMappingURL=avatarList.js.map