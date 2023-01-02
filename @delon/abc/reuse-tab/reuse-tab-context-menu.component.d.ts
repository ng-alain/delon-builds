import { EventEmitter, OnInit } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { CloseType, ReuseContextCloseEvent, ReuseContextI18n, ReuseCustomContextMenu, ReuseItem } from './reuse-tab.interfaces';
import * as i0 from "@angular/core";
export declare class ReuseTabContextMenuComponent implements OnInit {
    private i18nSrv;
    private _i18n;
    set i18n(value: ReuseContextI18n);
    get i18n(): ReuseContextI18n;
    item: ReuseItem;
    event: MouseEvent;
    customContextMenu: ReuseCustomContextMenu[];
    readonly close: EventEmitter<ReuseContextCloseEvent>;
    get includeNonCloseable(): boolean;
    constructor(i18nSrv: DelonLocaleService);
    private notify;
    ngOnInit(): void;
    click(e: MouseEvent, type: CloseType, custom?: ReuseCustomContextMenu): void;
    isDisabled(custom: ReuseCustomContextMenu): boolean;
    closeMenu(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReuseTabContextMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReuseTabContextMenuComponent, "reuse-tab-context-menu", never, { "i18n": "i18n"; "item": "item"; "event": "event"; "customContextMenu": "customContextMenu"; }, { "close": "close"; }, never, never, false, never>;
}
