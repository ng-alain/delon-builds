import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, EventEmitter, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Menu, MenuService, SettingsService } from '@delon/theme';
import { BooleanInput, NumberInput } from '@delon/util/decorator';
import { Nav } from './sidebar-nav.types';
/**
 * @deprecated Will be removed in 12.0.0, Pls used `layout-default` instead
 */
export declare class SidebarNavComponent implements OnInit, OnDestroy {
    private menuSrv;
    private settings;
    private router;
    private render;
    private cdr;
    private ngZone;
    private sanitizer;
    private doc;
    private win;
    private directionality;
    static ngAcceptInputType_disabledAcl: BooleanInput;
    static ngAcceptInputType_autoCloseUnderPad: BooleanInput;
    static ngAcceptInputType_recursivePath: BooleanInput;
    static ngAcceptInputType_openStrictly: BooleanInput;
    static ngAcceptInputType_maxLevelIcon: NumberInput;
    private bodyEl;
    private floatingEl;
    list: Nav[];
    dir: Direction;
    disabledAcl: boolean;
    autoCloseUnderPad: boolean;
    recursivePath: boolean;
    openStrictly: boolean;
    maxLevelIcon: number;
    readonly select: EventEmitter<Menu>;
    get collapsed(): boolean;
    constructor(menuSrv: MenuService, settings: SettingsService, router: Router, render: Renderer2, cdr: ChangeDetectorRef, ngZone: NgZone, sanitizer: DomSanitizer, doc: any, win: any, directionality: Directionality);
    private getLinkNode;
    private floatingClickHandle;
    private clearFloating;
    private genFloating;
    private genSubNode;
    private hideAll;
    private calPos;
    showSubMenu(e: MouseEvent, item: Nav): void;
    to(item: Menu): void;
    toggleOpen(item: Nav): void;
    _click(): void;
    _docClick(): void;
    private openedByUrl;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private get isPad();
    private underPad;
    private openAside;
}
