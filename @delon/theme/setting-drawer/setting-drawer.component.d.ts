import { ChangeDetectorRef, NgZone, OnInit } from '@angular/core';
import { Layout, SettingsService } from '@delon/theme';
import { LazyService } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd/message';
export declare class SettingDrawerComponent implements OnInit {
    private cdr;
    private msg;
    private settingSrv;
    private lazy;
    private zone;
    private doc;
    autoApplyColor: boolean;
    devTips: string;
    private loadedLess;
    isDev: boolean;
    collapse: boolean;
    get layout(): Layout;
    data: any;
    color: string;
    colors: {
        key: string;
        color: string;
    }[];
    constructor(cdr: ChangeDetectorRef, msg: NzMessageService, settingSrv: SettingsService, lazy: LazyService, zone: NgZone, doc: any);
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
}
