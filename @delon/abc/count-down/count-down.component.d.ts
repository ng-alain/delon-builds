import { EventEmitter, OnInit } from '@angular/core';
import { CountdownEvent, CountdownConfig, CountdownComponent } from 'ngx-countdown';
export declare class CountDownComponent implements OnInit {
    readonly instance: CountdownComponent;
    config: CountdownConfig;
    /**
     * 目标时间
     */
    target: number | Date;
    readonly begin: EventEmitter<void>;
    readonly notify: EventEmitter<number>;
    readonly end: EventEmitter<void>;
    readonly event: EventEmitter<CountdownEvent>;
    ngOnInit(): void;
    handleEvent(e: CountdownEvent): void;
}
