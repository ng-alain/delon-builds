import { Direction } from '@angular/cdk/bidi';
import { EventEmitter, OnChanges, OnInit, SimpleChange, SimpleChanges, TemplateRef } from '@angular/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { ReuseCanClose, ReuseContextCloseEvent, ReuseContextI18n, ReuseCustomContextMenu, ReuseItem, ReuseTabMatchMode, ReuseTabRouteParamMatchMode } from './reuse-tab.interfaces';
import * as i0 from "@angular/core";
export declare class ReuseTabComponent implements OnInit, OnChanges {
    private readonly srv;
    private readonly cdr;
    private readonly router;
    private readonly route;
    private readonly i18nSrv;
    private readonly doc;
    private readonly platform;
    private readonly directionality;
    private readonly stateKey;
    private readonly stateSrv;
    private tabset;
    private destroy$;
    private _keepingScrollContainer?;
    list: ReuseItem[];
    item?: ReuseItem;
    pos: number;
    dir?: Direction;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<ReuseTabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReuseTabComponent, "reuse-tab, [reuse-tab]", ["reuseTab"], { "mode": { "alias": "mode"; "required": false; }; "i18n": { "alias": "i18n"; "required": false; }; "debug": { "alias": "debug"; "required": false; }; "max": { "alias": "max"; "required": false; }; "tabMaxWidth": { "alias": "tabMaxWidth"; "required": false; }; "excludes": { "alias": "excludes"; "required": false; }; "allowClose": { "alias": "allowClose"; "required": false; }; "keepingScroll": { "alias": "keepingScroll"; "required": false; }; "storageState": { "alias": "storageState"; "required": false; }; "keepingScrollContainer": { "alias": "keepingScrollContainer"; "required": false; }; "customContextMenu": { "alias": "customContextMenu"; "required": false; }; "tabBarExtraContent": { "alias": "tabBarExtraContent"; "required": false; }; "tabBarGutter": { "alias": "tabBarGutter"; "required": false; }; "tabBarStyle": { "alias": "tabBarStyle"; "required": false; }; "tabType": { "alias": "tabType"; "required": false; }; "routeParamMatchMode": { "alias": "routeParamMatchMode"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "titleRender": { "alias": "titleRender"; "required": false; }; "canClose": { "alias": "canClose"; "required": false; }; }, { "change": "change"; "close": "close"; }, never, never, true, never>;
    static ngAcceptInputType_debug: unknown;
    static ngAcceptInputType_max: unknown;
    static ngAcceptInputType_tabMaxWidth: unknown;
    static ngAcceptInputType_allowClose: unknown;
    static ngAcceptInputType_keepingScroll: unknown;
    static ngAcceptInputType_storageState: unknown;
    static ngAcceptInputType_disabled: unknown;
}
