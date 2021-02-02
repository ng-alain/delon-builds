import { __decorate, __metadata } from 'tslib';
import { Directionality } from '@angular/cdk/bidi';
import * as i0 from '@angular/core';
import { EventEmitter, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵsetClassMetadata, Component, Optional, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { InputBoolean } from '@delon/util/decorator';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgIf, CommonModule } from '@angular/common';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';

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
/** @nocollapse */ TagSelectComponent.ɵfac = function TagSelectComponent_Factory(t) { return new (t || TagSelectComponent)(ɵɵdirectiveInject(DelonLocaleService), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ TagSelectComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: TagSelectComponent, selector: "tag-select", inputs: { expandable: "expandable" }, outputs: { change: "change" }, host: { properties: { "class.tag-select": "true", "class.tag-select-rtl": "dir === 'rtl'", "class.tag-select-rtl__has-expand": "dir === 'rtl' && expandable", "class.tag-select__has-expand": "expandable", "class.tag-select__expanded": "expand" } }, exportAs: ["tagSelect"], ngImport: i0, template: "<ng-content></ng-content>\n<a *ngIf=\"expandable\" class=\"tag-select__trigger\" (click)=\"trigger()\">\n  {{ expand ? locale.collapse : locale.expand }}<i nz-icon [nzType]=\"expand ? 'up' : 'down'\" class=\"tag-select__trigger-icon\"></i>\n</a>\n", directives: [{ type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzRotate", "nzSpin", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], TagSelectComponent.prototype, "expandable", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TagSelectComponent, [{
        type: Component,
        args: [{
                selector: 'tag-select',
                exportAs: 'tagSelect',
                templateUrl: './tag-select.component.html',
                host: {
                    '[class.tag-select]': 'true',
                    '[class.tag-select-rtl]': `dir === 'rtl'`,
                    '[class.tag-select-rtl__has-expand]': `dir === 'rtl' && expandable`,
                    '[class.tag-select__has-expand]': 'expandable',
                    '[class.tag-select__expanded]': 'expand',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: DelonLocaleService }, { type: Directionality, decorators: [{
                type: Optional
            }] }, { type: ChangeDetectorRef }]; }, { expandable: [{
            type: Input
        }], change: [{
            type: Output
        }] }); })();

const COMPONENTS = [TagSelectComponent];
class TagSelectModule {
}
/** @nocollapse */ TagSelectModule.ɵmod = ɵɵdefineNgModule({ type: TagSelectModule });
/** @nocollapse */ TagSelectModule.ɵinj = ɵɵdefineInjector({ factory: function TagSelectModule_Factory(t) { return new (t || TagSelectModule)(); }, imports: [[CommonModule, NzIconModule, DelonLocaleModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TagSelectModule, { declarations: [TagSelectComponent], imports: [CommonModule, NzIconModule, DelonLocaleModule], exports: [TagSelectComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TagSelectModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzIconModule, DelonLocaleModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { TagSelectComponent, TagSelectModule };
//# sourceMappingURL=tagSelect.js.map
