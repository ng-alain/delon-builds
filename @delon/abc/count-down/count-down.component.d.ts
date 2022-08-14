import { EventEmitter } from '@angular/core';
import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';
import * as i0 from "@angular/core";
export declare class CountDownComponent {
    readonly instance: CountdownComponent;
    config?: CountdownConfig;
    /**
     * 目标时间
     */
    set target(value: number | Date);
    readonly event: EventEmitter<CountdownEvent>;
    handleEvent(e: CountdownEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CountDownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CountDownComponent, "count-down", ["countDown"], { "config": "config"; "target": "target"; }, { "event": "event"; }, never, never, false>;
}
