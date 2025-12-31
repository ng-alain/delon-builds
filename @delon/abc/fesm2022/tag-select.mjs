import { Directionality } from '@angular/cdk/bidi';
import * as i0 from '@angular/core';
import { inject, signal, input, booleanAttribute, output, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';

class TagSelectComponent {
    locale = inject(DelonLocaleService).valueSignal('tagSelect');
    dir = inject(Directionality).valueSignal;
    expand = signal(false, ...(ngDevMode ? [{ debugName: "expand" }] : []));
    /** 是否启用 `展开与收进` */
    expandable = input(true, { ...(ngDevMode ? { debugName: "expandable" } : {}), transform: booleanAttribute });
    change = output();
    trigger() {
        this.expand.set(!this.expand());
        this.change.emit(this.expand());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: TagSelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.0.6", type: TagSelectComponent, isStandalone: true, selector: "tag-select", inputs: { expandable: { classPropertyName: "expandable", publicName: "expandable", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { change: "change" }, host: { properties: { "class.tag-select-rtl": "dir() === 'rtl'", "class.tag-select-rtl__has-expand": "dir() === 'rtl' && expandable()", "class.tag-select__has-expand": "expandable()", "class.tag-select__expanded": "expand()" }, classAttribute: "tag-select" }, exportAs: ["tagSelect"], ngImport: i0, template: `
    <ng-content />
    @if (expandable()) {
      <a class="ant-tag ant-tag-checkable tag-select__trigger" (click)="trigger()">
        {{ expand() ? locale().collapse : locale().expand }}
        <nz-icon nzType="down" [style.transform]="expand() ? 'rotate(-180deg)' : null" />
      </a>
    }
  `, isInline: true, dependencies: [{ kind: "directive", type: NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: TagSelectComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'tag-select',
                    exportAs: 'tagSelect',
                    template: `
    <ng-content />
    @if (expandable()) {
      <a class="ant-tag ant-tag-checkable tag-select__trigger" (click)="trigger()">
        {{ expand() ? locale().collapse : locale().expand }}
        <nz-icon nzType="down" [style.transform]="expand() ? 'rotate(-180deg)' : null" />
      </a>
    }
  `,
                    host: {
                        class: 'tag-select',
                        '[class.tag-select-rtl]': `dir() === 'rtl'`,
                        '[class.tag-select-rtl__has-expand]': `dir() === 'rtl' && expandable()`,
                        '[class.tag-select__has-expand]': 'expandable()',
                        '[class.tag-select__expanded]': 'expand()'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [NzIconDirective]
                }]
        }], propDecorators: { expandable: [{ type: i0.Input, args: [{ isSignal: true, alias: "expandable", required: false }] }], change: [{ type: i0.Output, args: ["change"] }] } });

const COMPONENTS = [TagSelectComponent];
class TagSelectModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: TagSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.0.6", ngImport: i0, type: TagSelectModule, imports: [CommonModule, NzIconModule, DelonLocaleModule, TagSelectComponent], exports: [TagSelectComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: TagSelectModule, imports: [CommonModule, NzIconModule, DelonLocaleModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: TagSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzIconModule, DelonLocaleModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TagSelectComponent, TagSelectModule };
//# sourceMappingURL=tag-select.mjs.map
