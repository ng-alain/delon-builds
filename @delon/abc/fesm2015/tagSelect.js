import { __decorate } from 'tslib';
import { Directionality } from '@angular/cdk/bidi';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, Optional, ChangeDetectorRef, Input, Output, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { InputBoolean } from '@delon/util/decorator';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

class TagSelectComponent {
    constructor(i18n, directionality, cdr) {
        this.i18n = i18n;
        this.directionality = directionality;
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.locale = {};
        this.expand = false;
        this.dir = 'ltr';
        /** 是否启用 `展开与收进` */
        this.expandable = true;
        this.change = new EventEmitter();
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
        this.i18n.change.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getData('tagSelect');
            this.cdr.detectChanges();
        });
    }
    trigger() {
        this.expand = !this.expand;
        this.change.emit(this.expand);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
TagSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'tag-select',
                exportAs: 'tagSelect',
                template: "<ng-content></ng-content>\n<a *ngIf=\"expandable\" class=\"tag-select__trigger\" (click)=\"trigger()\">\n  {{ expand ? locale.collapse : locale.expand\n  }}<i nz-icon [nzType]=\"expand ? 'up' : 'down'\" class=\"tag-select__trigger-icon\"></i>\n</a>\n",
                host: {
                    '[class.tag-select]': 'true',
                    '[class.tag-select-rtl]': `dir === 'rtl'`,
                    '[class.tag-select-rtl__has-expand]': `dir === 'rtl' && expandable`,
                    '[class.tag-select__has-expand]': 'expandable',
                    '[class.tag-select__expanded]': 'expand'
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
TagSelectComponent.ctorParameters = () => [
    { type: DelonLocaleService },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef }
];
TagSelectComponent.propDecorators = {
    expandable: [{ type: Input }],
    change: [{ type: Output }]
};
__decorate([
    InputBoolean()
], TagSelectComponent.prototype, "expandable", void 0);

const COMPONENTS = [TagSelectComponent];
class TagSelectModule {
}
TagSelectModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzIconModule, DelonLocaleModule],
                declarations: COMPONENTS,
                exports: COMPONENTS
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { TagSelectComponent, TagSelectModule };
//# sourceMappingURL=tagSelect.js.map
