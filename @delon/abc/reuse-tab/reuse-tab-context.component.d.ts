import { EventEmitter, OnDestroy } from '@angular/core';
import { ReuseContextI18n, ReuseContextCloseEvent } from './reuse-tab.interfaces';
import { ReuseTabContextService } from './reuse-tab-context.service';
export declare class ReuseTabContextComponent implements OnDestroy {
    private srv;
    private sub$;
    i18n: ReuseContextI18n;
    change: EventEmitter<ReuseContextCloseEvent>;
    constructor(srv: ReuseTabContextService);
    ngOnDestroy(): void;
}
