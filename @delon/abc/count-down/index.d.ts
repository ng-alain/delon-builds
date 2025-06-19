import * as i0 from '@angular/core';
import { EventEmitter } from '@angular/core';
import * as i2 from 'ngx-countdown';
import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';
import * as i1 from '@angular/common';

declare class CountDownComponent {
    readonly instance: CountdownComponent;
    config?: CountdownConfig;
    /**
     * 目标时间
     */
    set target(value: number | Date);
    readonly event: EventEmitter<CountdownEvent>;
    handleEvent(e: CountdownEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CountDownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CountDownComponent, "count-down", ["countDown"], { "config": { "alias": "config"; "required": false; }; "target": { "alias": "target"; "required": false; }; }, { "event": "event"; }, never, never, true, never>;
}

declare class CountDownModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CountDownModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CountDownModule, never, [typeof i1.CommonModule, typeof i2.CountdownModule, typeof CountDownComponent], [typeof CountDownComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CountDownModule>;
}

export { CountDownComponent, CountDownModule };
