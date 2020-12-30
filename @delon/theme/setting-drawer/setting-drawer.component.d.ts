import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Layout, SettingsService } from '@delon/theme';
import { LazyService } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd/message';
export declare class SettingDrawerComponent implements OnInit, OnDestroy {
    private cdr;
    private msg;
    private settingSrv;
    private lazy;
    private zone;
    private doc;
    private directionality;
    autoApplyColor: boolean;
    devTips: string;
    private loadedLess;
    private destroy$;
    dir: Direction;
    isDev: boolean;
    collapse: boolean;
    get layout(): Layout;
    data: any;
    color: string;
    colors: {
        key: string;
        color: string;
    }[];
    constructor(cdr: ChangeDetectorRef, msg: NzMessageService, settingSrv: SettingsService, lazy: LazyService, zone: NgZone, doc: any, directionality: Directionality);
    private get cachedData();
    private get DEFAULT_PRIMARY();
    ngOnInit(): void;
    private loadLess;
    private genVars;
    private runLess;
    toggle(): void;
    changeColor(color: string): void;
    setLayout(name: string, value: any): void;
    private resetData;
    private get validKeys();
    apply(): void;
    reset(): void;
    copyVar(): void;
    ngOnDestroy(): void;
}
