import * as i0 from '@angular/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, Input, Output, NgModule } from '@angular/core';
import { addSeconds, format } from 'date-fns';
import { CountdownComponent, CountdownModule } from 'ngx-countdown';
import { CommonModule } from '@angular/common';

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
            stopTime: typeof value === 'number' ? addSeconds(new Date(), value).valueOf() : +format(value, 't')
        };
    }
    handleEvent(e) {
        this.event.emit(e);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: CountDownComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.1", type: CountDownComponent, isStandalone: true, selector: "count-down", inputs: { config: "config", target: "target" }, outputs: { event: "event" }, viewQueries: [{ propertyName: "instance", first: true, predicate: ["cd"], descendants: true }], exportAs: ["countDown"], ngImport: i0, template: `@if (config) {
    <countdown #cd [config]="config" (event)="handleEvent($event)" />
  }`, isInline: true, dependencies: [{ kind: "component", type: CountdownComponent, selector: "countdown", inputs: ["config", "render"], outputs: ["event"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: CountDownComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'count-down',
                    exportAs: 'countDown',
                    template: `@if (config) {
    <countdown #cd [config]="config" (event)="handleEvent($event)" />
  }`,
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [CountdownComponent]
                }]
        }], propDecorators: { instance: [{
                type: ViewChild,
                args: ['cd', { static: false }]
            }], config: [{
                type: Input
            }], target: [{
                type: Input
            }], event: [{
                type: Output
            }] } });

const COMPONENTS = [CountDownComponent];
class CountDownModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: CountDownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.1", ngImport: i0, type: CountDownModule, imports: [CommonModule, CountdownModule, CountDownComponent], exports: [CountDownComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: CountDownModule, imports: [CommonModule, CountdownModule, COMPONENTS] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: CountDownModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, CountdownModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CountDownComponent, CountDownModule };
//# sourceMappingURL=count-down.mjs.map
