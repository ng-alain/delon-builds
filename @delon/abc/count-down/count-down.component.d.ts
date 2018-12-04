import { EventEmitter } from '@angular/core';
export declare class CountDownComponent {
    config: {};
    /**
     * 目标时间
     */
    target: number | Date;
    readonly begin: EventEmitter<{}>;
    readonly notify: EventEmitter<number>;
    readonly end: EventEmitter<{}>;
    _start(): void;
    _notify(time: number): void;
    _finished(): void;
}
