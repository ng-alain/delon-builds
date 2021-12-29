import { EventEmitter } from '@angular/core';
import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';
export declare class CountDownComponent {
    readonly instance: CountdownComponent;
    config: CountdownConfig;
    /**
     * 目标时间
     */
    set target(value: number | Date);
    readonly event: EventEmitter<CountdownEvent>;
    handleEvent(e: CountdownEvent): void;
}
