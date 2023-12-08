import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, NgModule } from '@angular/core';
import { takeUntil, debounceTime, fromEvent } from 'rxjs';
import { G2BaseComponent } from '@delon/chart/core';
import { InputNumber } from '@delon/util/decorator';
import * as i1 from 'ng-zorro-antd/skeleton';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { CommonModule } from '@angular/common';

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
    installResizeEvent() {
        if (this.resizeTime <= 0)
            return;
        fromEvent(window, 'resize')
            .pipe(takeUntil(this.destroy$), debounceTime(Math.min(200, this.resizeTime)))
            .subscribe(() => this.resize.emit(this.el));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: G2CustomComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.6", type: G2CustomComponent, selector: "g2,g2-custom", inputs: { height: "height", resizeTime: "resizeTime" }, outputs: { render: "render", resize: "resize", destroy: "destroy" }, host: { properties: { "style.height.px": "height" } }, exportAs: ["g2Custom"], usesInheritance: true, ngImport: i0, template: `
    @if (!loaded) {
      <nz-skeleton />
    }
    <ng-content />
  `, isInline: true, dependencies: [{ kind: "component", type: i1.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputNumber()
], G2CustomComponent.prototype, "height", void 0);
__decorate([
    InputNumber()
], G2CustomComponent.prototype, "resizeTime", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: G2CustomComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'g2,g2-custom',
                    exportAs: 'g2Custom',
                    template: `
    @if (!loaded) {
      <nz-skeleton />
    }
    <ng-content />
  `,
                    host: {
                        '[style.height.px]': 'height'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], propDecorators: { height: [{
                type: Input
            }], resizeTime: [{
                type: Input
            }], render: [{
                type: Output
            }], resize: [{
                type: Output
            }], destroy: [{
                type: Output
            }] } });

const COMPONENTS = [G2CustomComponent];
class G2CustomModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: G2CustomModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.6", ngImport: i0, type: G2CustomModule, declarations: [G2CustomComponent], imports: [CommonModule, NzSkeletonModule], exports: [G2CustomComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: G2CustomModule, imports: [CommonModule, NzSkeletonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: G2CustomModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzSkeletonModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { G2CustomComponent, G2CustomModule };
//# sourceMappingURL=custom.mjs.map
