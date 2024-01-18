import { Subject } from 'rxjs';
import { ReuseContextCloseEvent, ReuseContextEvent, ReuseContextI18n } from './reuse-tab.interfaces';
import * as i0 from "@angular/core";
export declare class ReuseTabContextService {
    private readonly overlay;
    private ref;
    i18n?: ReuseContextI18n;
    show: Subject<ReuseContextEvent>;
    close: Subject<ReuseContextCloseEvent>;
    remove(): void;
    open(context: ReuseContextEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReuseTabContextService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ReuseTabContextService>;
}
