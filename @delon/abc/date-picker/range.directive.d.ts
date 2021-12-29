import { AfterViewInit, ComponentFactoryResolver, EventEmitter, Injector, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlainConfigService, AlainDateRangePickerShortcut } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzRangePickerComponent } from 'ng-zorro-antd/date-picker';
export declare class RangePickerDirective implements OnDestroy, AfterViewInit {
    private dom;
    private nativeComp;
    private resolver;
    private injector;
    static ngAcceptInputType_shortcut: AlainDateRangePickerShortcut | string | null;
    private defaultShortcuts;
    private _shortcut;
    private destroy$;
    private shortcutFactory;
    start: Date | null;
    end: Date | null;
    set shortcut(val: AlainDateRangePickerShortcut | null);
    get shortcut(): AlainDateRangePickerShortcut | null;
    ngModelEnd: NzSafeAny;
    readonly ngModelEndChange: EventEmitter<any>;
    private get dp();
    private get srv();
    constructor(dom: DomSanitizer, configSrv: AlainConfigService, nativeComp: NzRangePickerComponent, resolver: ComponentFactoryResolver, injector: Injector);
    private cd;
    private overrideNative;
    private refreshShortcut;
    ngAfterViewInit(): void;
    private destoryShortcut;
    ngOnDestroy(): void;
}
