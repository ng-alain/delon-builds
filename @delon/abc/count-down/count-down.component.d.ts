import { EventEmitter, OnInit } from '@angular/core';
import { CountdownEvent, CountdownConfig } from 'ngx-countdown';
export declare class CountDownComponent implements OnInit {
    readonly instance: CountDownComponent;
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
