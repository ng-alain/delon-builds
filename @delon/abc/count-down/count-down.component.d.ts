import { EventEmitter } from '@angular/core';
export declare class CountDownComponent {
    config: any;
    /**
     * 目标时间
     */
    target: number | Date;
    begin: EventEmitter<{}>;
    notify: EventEmitter<number>;
    end: EventEmitter<{}>;
    _start(): void;
    _notify(time: number): void;
    _finished(): void;
}
