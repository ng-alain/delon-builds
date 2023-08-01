import { Direction, Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlainI18NService } from '@delon/theme';
import { BooleanInput, NumberInput } from '@delon/util/decorator';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { ReuseCanClose, ReuseContextCloseEvent, ReuseContextI18n, ReuseCustomContextMenu, ReuseItem, ReuseTabMatchMode, ReuseTabRouteParamMatchMode } from './reuse-tab.interfaces';
import { ReuseTabService } from './reuse-tab.service';
import { ReuseTabStorageState } from './reuse-tab.state';
import * as i0 from "@angular/core";
export declare class ReuseTabComponent implements OnInit, OnChanges, OnDestroy {
    private srv;
    private cdr;
    private router;
    private route;
    private i18nSrv;
    private doc;
    private platform;
    private directionality;
    private stateKey;
    private stateSrv;
    static ngAcceptInputType_debug: BooleanInput;
    static ngAcceptInputType_max: NumberInput;
    static ngAcceptInputType_tabMaxWidth: NumberInput;
    static ngAcceptInputType_allowClose: BooleanInput;
    static ngAcceptInputType_keepingScroll: BooleanInput;
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_storageState: BooleanInput;
    private tabset;
    private destroy$;
    private _keepingScrollContainer?;
    list: ReuseItem[];
    item?: ReuseItem;
    pos: number;
    dir: Direction;
    mode: ReuseTabMatchMode;
    i18n?: ReuseContextI18n;
    debug: boolean;
    max?: number;
    tabMaxWidth?: number;
    excludes?: RegExp[];
    allowClose: boolean;
    keepingScroll: boolean;
    storageState: boolean;
    set keepingScrollContainer(value: string | Element);
    customContextMenu: ReuseCustomContextMenu[];
    tabBarExtraContent?: TemplateRef<void>;
    tabBarGutter?: number;
    tabBarStyle: {
        [key: string]: string;
    } | null;
    tabType: 'line' | 'card';
    routeParamMatchMode: ReuseTabRouteParamMatchMode;
    disabled: boolean;
    titleRender?: TemplateRef<{
        $implicit: ReuseItem;
    }>;
    canClose?: ReuseCanClose;
    readonly change: EventEmitter<ReuseItem>;
    readonly close: EventEmitter<ReuseItem | null>;
    constructor(srv: ReuseTabService, cdr: ChangeDetectorRef, router: Router, route: ActivatedRoute, i18nSrv: AlainI18NService, doc: NzSafeAny, platform: Platform, directionality: Directionality, stateKey: string, stateSrv: ReuseTabStorageState);
    private genTit;
    private get curUrl();
    private genCurItem;
    private genList;
    private updateTitle;
    private refresh;
    private saveState;
    contextMenuChange(res: ReuseContextCloseEvent): void;
    _to(index: number, cb?: () => void): void;
    _close(e: Event | null, idx: number, includeNonCloseable: boolean): boolean;
    /**
     * 设置激活路由的实例，在 `src/app/layout/basic/basic.component.ts` 修改：
     *
     * @example
     * <reuse-tab #reuseTab></reuse-tab>
     * <router-outlet (activate)="reuseTab.activate($event)" (attach)="reuseTab.activate($event)"></router-outlet>
     */
    activate(instance: NzSafeAny): void;
    private updatePos;
    ngOnInit(): void;
    ngOnChanges(changes: {
        [P in keyof this]?: SimpleChange;
    } & SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReuseTabComponent, [null, null, null, null, { optional: true; }, null, null, { optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReuseTabComponent, "reuse-tab, [reuse-tab]", ["reuseTab"], { "mode": { "alias": "mode"; "required": false; }; "i18n": { "alias": "i18n"; "required": false; }; "debug": { "alias": "debug"; "required": false; }; "max": { "alias": "max"; "required": false; }; "tabMaxWidth": { "alias": "tabMaxWidth"; "required": false; }; "excludes": { "alias": "excludes"; "required": false; }; "allowClose": { "alias": "allowClose"; "required": false; }; "keepingScroll": { "alias": "keepingScroll"; "required": false; }; "storageState": { "alias": "storageState"; "required": false; }; "keepingScrollContainer": { "alias": "keepingScrollContainer"; "required": false; }; "customContextMenu": { "alias": "customContextMenu"; "required": false; }; "tabBarExtraContent": { "alias": "tabBarExtraContent"; "required": false; }; "tabBarGutter": { "alias": "tabBarGutter"; "required": false; }; "tabBarStyle": { "alias": "tabBarStyle"; "required": false; }; "tabType": { "alias": "tabType"; "required": false; }; "routeParamMatchMode": { "alias": "routeParamMatchMode"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "titleRender": { "alias": "titleRender"; "required": false; }; "canClose": { "alias": "canClose"; "required": false; }; }, { "change": "change"; "close": "close"; }, never, never, false, never>;
}
