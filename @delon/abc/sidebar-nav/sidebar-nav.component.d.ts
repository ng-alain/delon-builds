import { LocationStrategy } from '@angular/common';
import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Menu, MenuService, SettingsService } from '@delon/theme';
import { Nav } from './sidebar-nav.types';
export declare class SidebarNavComponent implements OnInit, OnDestroy {
    private menuSrv;
    private settings;
    private router;
    private locationStrategy;
    private render;
    private cdr;
    private doc;
    private bodyEl;
    private change$;
    /** @inner */
    floatingEl: HTMLDivElement;
    list: Nav[];
    autoCloseUnderPad: boolean;
    readonly select: EventEmitter<Menu>;
    constructor(menuSrv: MenuService, settings: SettingsService, router: Router, locationStrategy: LocationStrategy, render: Renderer2, cdr: ChangeDetectorRef, doc: any);
    readonly collapsed: boolean;
    ngOnInit(): void;
    private floatingAreaClickHandle;
    private clearFloatingContainer;
    private genFloatingContainer;
    private genSubNode;
    private hideAll;
    private calPos;
    showSubMenu(e: MouseEvent, item: Nav): void;
    onSelect(item: Menu): void;
    toggleOpen(item: Nav): void;
    _click(): void;
    _docClick(): void;
    ngOnDestroy(): void;
    private readonly isPad;
    private route$;
    private installUnderPad;
    private underPad;
    private openAside;
}
