import * as i0 from '@angular/core';
import { booleanAttribute, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';

class TrendComponent {
    constructor() {
        /** 是否彩色标记 */
        this.colorful = true;
        /** 颜色反转 */
        this.reverseColor = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: TrendComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.1", type: TrendComponent, isStandalone: true, selector: "trend", inputs: { flag: "flag", colorful: ["colorful", "colorful", booleanAttribute], reverseColor: ["reverseColor", "reverseColor", booleanAttribute] }, host: { properties: { "class.trend": "true", "class.trend__grey": "!colorful", "class.trend__reverse": "colorful && reverseColor", "attr.data-flag": "flag" } }, exportAs: ["trend"], ngImport: i0, template: `
    <ng-content />
    @if (flag) {
      <span class="trend__{{ flag }}"><i nz-icon nzType="caret-{{ flag }}"></i></span>
    }
  `, isInline: true, dependencies: [{ kind: "directive", type: NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: TrendComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'trend',
                    exportAs: 'trend',
                    template: `
    <ng-content />
    @if (flag) {
      <span class="trend__{{ flag }}"><i nz-icon nzType="caret-{{ flag }}"></i></span>
    }
  `,
                    host: {
                        '[class.trend]': 'true',
                        '[class.trend__grey]': '!colorful',
                        '[class.trend__reverse]': 'colorful && reverseColor',
                        '[attr.data-flag]': `flag`
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [NzIconDirective]
                }]
        }], propDecorators: { flag: [{
                type: Input
            }], colorful: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], reverseColor: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }] } });

const COMPONENTS = [TrendComponent];
class TrendModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: TrendModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.1.1", ngImport: i0, type: TrendModule, imports: [CommonModule, NzIconModule, TrendComponent], exports: [TrendComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: TrendModule, imports: [CommonModule, NzIconModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: TrendModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzIconModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TrendComponent, TrendModule };
//# sourceMappingURL=trend.mjs.map
