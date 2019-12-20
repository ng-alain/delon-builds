import { EventEmitter } from '@angular/core';
import { CountdownEvent, CountdownConfig, CountdownComponent } from 'ngx-countdown';
export declare class CountDownComponent {
    readonly instance: CountdownComponent;
    config: CountdownConfig;
    /**
     * 目标时间
     */
    target: number | Date;
    readonly event: EventEmitter<CountdownEvent>;
    handleEvent(e: CountdownEvent): void;
}
