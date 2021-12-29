import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Layout, SettingsService } from '@delon/theme';
import { LazyService } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';
export declare class SettingDrawerComponent implements OnInit, OnDestroy {
    private cdr;
    private msg;
    private settingSrv;
    private lazy;
    private ngZone;
    private doc;
    private directionality;
    autoApplyColor: boolean;
    compilingText: string;
    devTips: string;
    private loadedLess;
    private destroy$;
    dir: Direction;
    isDev: boolean;
    collapse: boolean;
    get layout(): Layout;
    data: NzSafeAny;
    color: string;
    colors: {
        key: string;
        color: string;
    }[];
    constructor(cdr: ChangeDetectorRef, msg: NzMessageService, settingSrv: SettingsService, lazy: LazyService, ngZone: NgZone, doc: NzSafeAny, directionality: Directionality);
    private get cachedData();
    private get DEFAULT_PRIMARY();
    ngOnInit(): void;
    private loadLess;
    private genVars;
    private runLess;
    toggle(): void;
    changeColor(color: string): void;
    setLayout(name: string, value: NzSafeAny): void;
    private resetData;
    private get validKeys();
    apply(): void;
    reset(): void;
    copyVar(): void;
    ngOnDestroy(): void;
}
