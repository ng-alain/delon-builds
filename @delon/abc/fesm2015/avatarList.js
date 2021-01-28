import * as i0 from '@angular/core';
import { ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵsetClassMetadata, Component, Input, ɵɵdirectiveInject, ChangeDetectorRef, Optional, ContentChildren, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
import { Directionality } from '@angular/cdk/bidi';
import { InputNumber } from '@delon/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgForOf, NgClass, NgIf, NgStyle, CommonModule } from '@angular/common';
import { NzAvatarComponent, NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTooltipDirective, NzToolTipModule } from 'ng-zorro-antd/tooltip';

class AvatarListItemComponent {
}
/** @nocollapse */ AvatarListItemComponent.ɵfac = function AvatarListItemComponent_Factory(t) { return new (t || AvatarListItemComponent)(); };
/** @nocollapse */ AvatarListItemComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: AvatarListItemComponent, selector: "avatar-list-item, [avatar-list-item]", inputs: { src: "src", text: "text", icon: "icon", tips: "tips" }, exportAs: ["avatarListItem"], ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AvatarListItemComponent, [{
        type: Component,
        args: [{
                selector: 'avatar-list-item, [avatar-list-item]',
                exportAs: 'avatarListItem',
                template: `<ng-content></ng-content>`,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { src: [{
            type: Input
        }], text: [{
            type: Input
        }], icon: [{
            type: Input
        }], tips: [{
            type: Input
        }] }); })();

class AvatarListComponent {
    constructor(cdr, directionality) {
        this.cdr = cdr;
        this.directionality = directionality;
        this.inited = false;
        this.destroy$ = new Subject();
        this.items = [];
        this.exceedCount = 0;
        this.dir = 'ltr';
        this.cls = '';
        this.avatarSize = '';
        this.maxLength = 0;
    }
    set size(value) {
        this.cls = 'avatar-list__item' + (value === 'default' ? '' : ` avatar-list__${value}`);
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
    }
    gen() {
        const { _items } = this;
        const maxLength = this.maxLength > 0 ? this.maxLength : _items.length;
        const numOfChildren = _items.length;
        const numToShow = maxLength > 0 && maxLength >= numOfChildren ? numOfChildren : maxLength;
        this.items = _items.toArray().slice(0, numToShow);
        this.exceedCount = numToShow < numOfChildren ? numOfChildren - maxLength : 0;
        this.cdr.detectChanges();
    }
    ngAfterViewInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
        this.gen();
        this.inited = true;
    }
    ngOnChanges() {
        if (this.inited) {
            this.gen();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ AvatarListComponent.ɵfac = function AvatarListComponent_Factory(t) { return new (t || AvatarListComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8)); };
/** @nocollapse */ AvatarListComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: AvatarListComponent, selector: "avatar-list", inputs: { size: "size", maxLength: "maxLength", excessItemsStyle: "excessItemsStyle" }, host: { properties: { "class.avatar-list": "true", "class.avatar-list-rtl": "dir === 'rtl'" } }, queries: [{ propertyName: "_items", predicate: AvatarListItemComponent, emitDistinctChangesOnly: false }], exportAs: ["avatarList"], usesOnChanges: true, ngImport: i0, template: "<ul class=\"avatar-list__wrap\">\n  <li *ngFor=\"let i of items\" [ngClass]=\"cls\">\n    <nz-avatar *ngIf=\"i.tips\" nz-tooltip [nzTooltipTitle]=\"i.tips\" [nzSrc]=\"i.src\" [nzText]=\"i.text\" [nzIcon]=\"i.icon\" [nzSize]=\"avatarSize\"></nz-avatar>\n    <nz-avatar *ngIf=\"!i.tips\" [nzSrc]=\"i.src\" [nzText]=\"i.text\" [nzIcon]=\"i.icon\" [nzSize]=\"avatarSize\"></nz-avatar>\n  </li>\n  <li *ngIf=\"exceedCount > 0\" [ngClass]=\"cls\">\n    <nz-avatar [nzSize]=\"avatarSize\" style=\"cursor: auto;\" [ngStyle]=\"excessItemsStyle\" [nzText]=\"'+' + exceedCount\"></nz-avatar>\n  </li>\n</ul>\n", directives: [{ type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: NzAvatarComponent, selector: "nz-avatar", inputs: ["nzShape", "nzSize", "nzGap", "nzText", "nzSrc", "nzSrcSet", "nzAlt", "nzIcon"], outputs: ["nzError"], exportAs: ["nzAvatar"] }, { type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipTitle", "nz-tooltip", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], AvatarListComponent.prototype, "maxLength", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AvatarListComponent, [{
        type: Component,
        args: [{
                selector: 'avatar-list',
                exportAs: 'avatarList',
                templateUrl: './avatar-list.component.html',
                host: {
                    '[class.avatar-list]': 'true',
                    '[class.avatar-list-rtl]': `dir === 'rtl'`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: Directionality, decorators: [{
                type: Optional
            }] }]; }, { _items: [{
            type: ContentChildren,
            args: [AvatarListItemComponent, { descendants: false }]
        }], size: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], excessItemsStyle: [{
            type: Input
        }] }); })();

const COMPONENTS = [AvatarListComponent, AvatarListItemComponent];
class AvatarListModule {
}
/** @nocollapse */ AvatarListModule.ɵmod = ɵɵdefineNgModule({ type: AvatarListModule });
/** @nocollapse */ AvatarListModule.ɵinj = ɵɵdefineInjector({ factory: function AvatarListModule_Factory(t) { return new (t || AvatarListModule)(); }, imports: [[CommonModule, NzAvatarModule, NzToolTipModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AvatarListModule, { declarations: [AvatarListComponent, AvatarListItemComponent], imports: [CommonModule, NzAvatarModule, NzToolTipModule], exports: [AvatarListComponent, AvatarListItemComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AvatarListModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzAvatarModule, NzToolTipModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AvatarListComponent, AvatarListItemComponent, AvatarListModule };
//# sourceMappingURL=avatarList.js.map
