import { __decorate, __metadata } from 'tslib';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { InputBoolean } from '@delon/util/decorator';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

class TrendComponent {
    constructor() {
        /** 是否彩色标记 */
        this.colorful = true;
        /** 颜色反转 */
        this.reverseColor = false;
    }
}
TrendComponent.decorators = [
    { type: Component, args: [{
                selector: 'trend',
                exportAs: 'trend',
                template: "<ng-content></ng-content>\n<span *ngIf=\"flag\" class=\"trend__{{ flag }}\"><i nz-icon nzType=\"caret-{{ flag }}\"></i></span>\n",
                host: {
                    '[class.trend]': 'true',
                    '[class.trend__grey]': '!colorful',
                    '[class.trend__reverse]': 'colorful && reverseColor',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
TrendComponent.propDecorators = {
    flag: [{ type: Input }],
    colorful: [{ type: Input }],
    reverseColor: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], TrendComponent.prototype, "colorful", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], TrendComponent.prototype, "reverseColor", void 0);

const COMPONENTS = [TrendComponent];
class TrendModule {
}
TrendModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzIconModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { TrendComponent, TrendModule };
//# sourceMappingURL=trend.js.map
