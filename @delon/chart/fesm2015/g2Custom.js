import { __decorate, __metadata } from 'tslib';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, NgModule } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputNumber } from '@delon/util/decorator';
import { untilDestroyed } from '@ngneat/until-destroy';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

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
            .pipe(untilDestroyed(this), debounceTime(Math.min(200, this.resizeTime)))
            .subscribe(() => this.resize.emit(this.el));
    }
}
G2CustomComponent.decorators = [
    { type: Component, args: [{
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
                encapsulation: ViewEncapsulation.None
            },] }
];
G2CustomComponent.propDecorators = {
    height: [{ type: Input }],
    resizeTime: [{ type: Input }],
    render: [{ type: Output }],
    resize: [{ type: Output }],
    destroy: [{ type: Output }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], G2CustomComponent.prototype, "height", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2CustomComponent.prototype, "resizeTime", void 0);

const COMPONENTS = [G2CustomComponent];
class G2CustomModule {
}
G2CustomModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzSkeletonModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { G2CustomComponent, G2CustomModule };
//# sourceMappingURL=g2Custom.js.map
