import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy } from '@angular/core';
import { App, SettingsService } from '@delon/theme';
import { LayoutDefaultComponent } from './layout.component';
import { LayoutDefaultHeaderItemDirection, LayoutDefaultHeaderItemHidden, LayoutDefaultOptions } from './types';
import * as i0 from "@angular/core";
interface LayoutDefaultHeaderItem {
    host: ElementRef;
    hidden?: LayoutDefaultHeaderItemHidden;
    direction?: LayoutDefaultHeaderItemDirection;
}
export declare class LayoutDefaultHeaderComponent implements AfterViewInit, OnDestroy {
    private settings;
    private parent;
    private cdr;
    private destroy$;
    left: LayoutDefaultHeaderItem[];
    middle: LayoutDefaultHeaderItem[];
    right: LayoutDefaultHeaderItem[];
    get options(): LayoutDefaultOptions;
    get app(): App;
    get collapsed(): boolean;
    get collapsedIcon(): string;
    constructor(settings: SettingsService, parent: LayoutDefaultComponent, cdr: ChangeDetectorRef);
    private refresh;
    ngAfterViewInit(): void;
    toggleCollapsed(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<LayoutDefaultHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LayoutDefaultHeaderComponent, "layout-default-header", never, {}, {}, never, never>;
}
export {};
