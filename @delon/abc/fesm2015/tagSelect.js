import { __decorate, __metadata } from 'tslib';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, Output, NgModule } from '@angular/core';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { InputBoolean, DelonUtilModule } from '@delon/util';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TagSelectComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     */
    constructor(i18n, cdr) {
        this.i18n = i18n;
        this.cdr = cdr;
        // tslint:disable-next-line:no-any
        this.locale = {};
        /**
         * 是否启用 `展开与收进`
         */
        this.expandable = true;
        this.expand = false;
        this.change = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n$ = this.i18n.change.subscribe(() => {
            this.locale = this.i18n.getData('tagSelect');
            this.cdr.detectChanges();
        });
    }
    /**
     * @return {?}
     */
    trigger() {
        this.expand = !this.expand;
        this.change.emit(this.expand);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.i18n$.unsubscribe();
    }
}
TagSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'tag-select',
                template: "<ng-content></ng-content>\n<a *ngIf=\"expandable\" class=\"tag-select__trigger\" (click)=\"trigger()\">\n  {{expand ? locale.collapse : locale.expand}}<i nz-icon [type]=\"expand ? 'up' : 'down'\" class=\"tag-select__trigger-icon\"></i>\n</a>\n",
                host: { '[class.tag-select]': 'true' },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TagSelectComponent.ctorParameters = () => [
    { type: DelonLocaleService },
    { type: ChangeDetectorRef }
];
TagSelectComponent.propDecorators = {
    expandable: [{ type: Input }, { type: HostBinding, args: ['class.tag-select__has-expand',] }],
    expand: [{ type: HostBinding, args: ['class.tag-select__expanded',] }],
    change: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], TagSelectComponent.prototype, "expandable", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [TagSelectComponent];
class TagSelectModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: TagSelectModule, providers: [] };
    }
}
TagSelectModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NgZorroAntdModule, DelonLocaleModule, DelonUtilModule],
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

export { TagSelectComponent, TagSelectModule };

//# sourceMappingURL=tagSelect.js.map