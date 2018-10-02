import { EventEmitter, OnInit } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { ReuseContextI18n, ReuseContextCloseEvent, ReuseItem, CloseType } from './reuse-tab.interfaces';
export declare class ReuseTabContextMenuComponent implements OnInit {
    private i18nSrv;
    private _i18n;
    i18n: ReuseContextI18n;
    item: ReuseItem;
    event: MouseEvent;
    close: EventEmitter<ReuseContextCloseEvent>;
    readonly includeNonCloseable: boolean;
    constructor(i18nSrv: DelonLocaleService);
    private notify;
    ngOnInit(): void;
    click(e: MouseEvent, type: CloseType): void;
    closeMenu(event: MouseEvent): void;
}
