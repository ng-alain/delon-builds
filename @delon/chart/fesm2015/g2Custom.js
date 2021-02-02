import { __decorate, __metadata } from 'tslib';
import * as i0 from '@angular/core';
import { EventEmitter, ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵɵgetInheritedFactory, ɵsetClassMetadata, Component, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputNumber } from '@delon/util/decorator';
import { fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { NgIf, CommonModule } from '@angular/common';
import { NzSkeletonComponent, NzSkeletonModule } from 'ng-zorro-antd/skeleton';

class G2CustomComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        this.resizeTime = 0;
        this.render = new EventEmitter();
        this.resize = new EventEmitter();
        this.destroy = new EventEmitter();
    }
    // #endregion
    install() {
        this.el.nativeElement.innerHTML = '';
        this.render.emit(this.el);
        this.installResizeEvent();
    }
    attachChart() { }
    installResizeEvent() {
        if (this.resizeTime <= 0)
            return;
        fromEvent(window, 'resize')
            .pipe(takeUntil(this.destroy$), debounceTime(Math.min(200, this.resizeTime)))
            .subscribe(() => this.resize.emit(this.el));
    }
}
/** @nocollapse */ G2CustomComponent.ɵfac = function G2CustomComponent_Factory(t) { return ɵG2CustomComponent_BaseFactory(t || G2CustomComponent); };
/** @nocollapse */ G2CustomComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: G2CustomComponent, selector: "g2,g2-custom", inputs: { height: "height", resizeTime: "resizeTime" }, outputs: { render: "render", resize: "resize", destroy: "destroy" }, host: { properties: { "style.height.px": "height" } }, exportAs: ["g2Custom"], usesInheritance: true, ngImport: i0, template: `
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <ng-content></ng-content>
  `, isInline: true, directives: [{ type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], G2CustomComponent.prototype, "height", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2CustomComponent.prototype, "resizeTime", void 0);
const ɵG2CustomComponent_BaseFactory = /*@__PURE__*/ ɵɵgetInheritedFactory(G2CustomComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(G2CustomComponent, [{
        type: Component,
        args: [{
                selector: 'g2,g2-custom',
                exportAs: 'g2Custom',
                template: `
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <ng-content></ng-content>
  `,
                host: {
                    '[style.height.px]': 'height',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { height: [{
            type: Input
        }], resizeTime: [{
            type: Input
        }], render: [{
            type: Output
        }], resize: [{
            type: Output
        }], destroy: [{
            type: Output
        }] }); })();

const COMPONENTS = [G2CustomComponent];
class G2CustomModule {
}
/** @nocollapse */ G2CustomModule.ɵmod = ɵɵdefineNgModule({ type: G2CustomModule });
/** @nocollapse */ G2CustomModule.ɵinj = ɵɵdefineInjector({ factory: function G2CustomModule_Factory(t) { return new (t || G2CustomModule)(); }, imports: [[CommonModule, NzSkeletonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(G2CustomModule, { declarations: [G2CustomComponent], imports: [CommonModule, NzSkeletonModule], exports: [G2CustomComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(G2CustomModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzSkeletonModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { G2CustomComponent, G2CustomModule };
//# sourceMappingURL=g2Custom.js.map
