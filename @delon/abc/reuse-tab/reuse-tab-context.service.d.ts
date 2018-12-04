import { Overlay } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { ReuseContextEvent, ReuseContextI18n, ReuseContextCloseEvent } from './reuse-tab.interfaces';
export declare class ReuseTabContextService {
    private overlay;
    private ref;
    i18n: ReuseContextI18n;
    show: Subject<ReuseContextEvent>;
    close: Subject<ReuseContextCloseEvent>;
    constructor(overlay: Overlay);
    remove(): void;
    open(context: ReuseContextEvent): void;
}
