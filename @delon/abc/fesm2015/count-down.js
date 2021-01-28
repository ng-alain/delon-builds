import * as i0 from '@angular/core';
import { EventEmitter, ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵsetClassMetadata, Component, ViewChild, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import addSeconds from 'date-fns/addSeconds';
import format from 'date-fns/format';
import { CountdownComponent, CountdownModule } from 'ngx-countdown';
import { NgIf, CommonModule } from '@angular/common';

class CountDownComponent {
    constructor() {
        this.event = new EventEmitter();
    }
    /**
     * 目标时间
     */
    set target(value) {
        this.config = {
            format: `HH:mm:ss`,
            stopTime: typeof value === 'number' ? addSeconds(new Date(), value).valueOf() : +format(value, 't'),
        };
    }
    handleEvent(e) {
        this.event.emit(e);
    }
}
/** @nocollapse */ CountDownComponent.ɵfac = function CountDownComponent_Factory(t) { return new (t || CountDownComponent)(); };
/** @nocollapse */ CountDownComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: CountDownComponent, selector: "count-down", inputs: { config: "config", target: "target" }, outputs: { event: "event" }, viewQueries: [{ propertyName: "instance", first: true, predicate: ["cd"], emitDistinctChangesOnly: false, descendants: true }], exportAs: ["countDown"], ngImport: i0, template: ` <countdown #cd *ngIf="config" [config]="config" (event)="handleEvent($event)"></countdown> `, isInline: true, directives: [{ type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: CountdownComponent, selector: "countdown", inputs: ["config", "render"], outputs: ["event"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CountDownComponent, [{
        type: Component,
        args: [{
                selector: 'count-down',
                exportAs: 'countDown',
                template: ` <countdown #cd *ngIf="config" [config]="config" (event)="handleEvent($event)"></countdown> `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { instance: [{
            type: ViewChild,
            args: ['cd', { static: false }]
        }], config: [{
            type: Input
        }], target: [{
            type: Input
        }], event: [{
            type: Output
        }] }); })();

const COMPONENTS = [CountDownComponent];
class CountDownModule {
}
/** @nocollapse */ CountDownModule.ɵmod = ɵɵdefineNgModule({ type: CountDownModule });
/** @nocollapse */ CountDownModule.ɵinj = ɵɵdefineInjector({ factory: function CountDownModule_Factory(t) { return new (t || CountDownModule)(); }, imports: [[CommonModule, CountdownModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CountDownModule, { declarations: [CountDownComponent], imports: [CommonModule, CountdownModule], exports: [CountDownComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CountDownModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, CountdownModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CountDownComponent, CountDownModule };
//# sourceMappingURL=count-down.js.map
