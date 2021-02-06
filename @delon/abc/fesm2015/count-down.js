import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, Input, Output, NgModule } from '@angular/core';
import addSeconds from 'date-fns/addSeconds';
import format from 'date-fns/format';
import { CountdownModule } from 'ngx-countdown';
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
            stopTime: typeof value === 'number' ? addSeconds(new Date(), value).valueOf() : +format(value, 't'),
        };
    }
    handleEvent(e) {
        this.event.emit(e);
    }
}
CountDownComponent.decorators = [
    { type: Component, args: [{
                selector: 'count-down',
                exportAs: 'countDown',
                template: ` <countdown #cd *ngIf="config" [config]="config" (event)="handleEvent($event)"></countdown> `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
CountDownComponent.propDecorators = {
    instance: [{ type: ViewChild, args: ['cd', { static: false },] }],
    config: [{ type: Input }],
    target: [{ type: Input }],
    event: [{ type: Output }]
};

const COMPONENTS = [CountDownComponent];
class CountDownModule {
}
CountDownModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, CountdownModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { CountDownComponent, CountDownModule };
//# sourceMappingURL=count-down.js.map
