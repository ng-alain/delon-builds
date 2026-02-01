import * as i0 from '@angular/core';
import { EventEmitter, numberAttribute, Output, Input, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { fromEvent, takeUntil, debounceTime } from 'rxjs';
import { G2BaseComponent } from '@delon/chart/core';
import { NzSkeletonComponent, NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { CommonModule } from '@angular/common';

class G2CustomComponent extends G2BaseComponent {
    // #region fields
    height;
    resizeTime = 0;
    render = new EventEmitter();
    resize = new EventEmitter();
    destroy = new EventEmitter();
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: G2CustomComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.1.2", type: G2CustomComponent, isStandalone: true, selector: "g2,g2-custom", inputs: { height: ["height", "height", numberAttribute], resizeTime: ["resizeTime", "resizeTime", numberAttribute] }, outputs: { render: "render", resize: "resize", destroy: "destroy" }, host: { properties: { "style.height.px": "height" } }, exportAs: ["g2Custom"], usesInheritance: true, ngImport: i0, template: `
    @if (!loaded) {
      <nz-skeleton />
    }
    <ng-content />
  `, isInline: true, dependencies: [{ kind: "component", type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: G2CustomComponent, decorators: [{
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
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [NzSkeletonComponent]
                }]
        }], propDecorators: { height: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], resizeTime: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], render: [{
                type: Output
            }], resize: [{
                type: Output
            }], destroy: [{
                type: Output
            }] } });

const COMPONENTS = [G2CustomComponent];
class G2CustomModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: G2CustomModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.1.2", ngImport: i0, type: G2CustomModule, imports: [CommonModule, NzSkeletonModule, G2CustomComponent], exports: [G2CustomComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: G2CustomModule, imports: [CommonModule, NzSkeletonModule, COMPONENTS] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: G2CustomModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzSkeletonModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { G2CustomComponent, G2CustomModule };
//# sourceMappingURL=custom.mjs.map
