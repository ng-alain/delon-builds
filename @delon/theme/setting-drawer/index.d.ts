import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from '@angular/core';
import { OnInit } from '@angular/core';
import { Direction } from '@angular/cdk/bidi';
import { Layout } from '@delon/theme';

declare class SettingDrawerItemComponent {
    i: NzSafeAny;
    set data(val: NzSafeAny);
    pxVal: number;
    pxChange(val: number): void;
    format: (value: number) => string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SettingDrawerItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SettingDrawerItemComponent, "setting-drawer-item", never, { "data": { "alias": "data"; "required": false; }; }, {}, never, never, true, never>;
}

declare class SettingDrawerComponent implements OnInit {
    private readonly cdr;
    private readonly msg;
    private readonly settingSrv;
    private readonly lazy;
    private readonly ngZone;
    private readonly doc;
    private readonly directionality;
    private readonly destroy$;
    autoApplyColor: boolean;
    compilingText: string;
    devTips: string;
    lessJs: string;
    private loadedLess;
    dir?: Direction;
    isDev: boolean;
    collapse: boolean;
    get layout(): Layout;
    data: NzSafeAny;
    color: string;
    colors: {
        key: string;
        color: string;
    }[];
    constructor();
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
    static ɵfac: i0.ɵɵFactoryDeclaration<SettingDrawerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SettingDrawerComponent, "setting-drawer", never, { "autoApplyColor": { "alias": "autoApplyColor"; "required": false; }; "compilingText": { "alias": "compilingText"; "required": false; }; "devTips": { "alias": "devTips"; "required": false; }; "lessJs": { "alias": "lessJs"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_autoApplyColor: unknown;
}

declare class SettingDrawerModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SettingDrawerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SettingDrawerModule, never, [typeof SettingDrawerItemComponent, typeof SettingDrawerComponent], [typeof SettingDrawerItemComponent, typeof SettingDrawerComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SettingDrawerModule>;
}

export { SettingDrawerComponent, SettingDrawerItemComponent, SettingDrawerModule };
