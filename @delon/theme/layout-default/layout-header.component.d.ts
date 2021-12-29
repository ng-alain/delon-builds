import { AfterViewInit, ChangeDetectorRef, OnDestroy, QueryList, TemplateRef } from '@angular/core';
import { App, SettingsService } from '@delon/theme';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
import { LayoutDefaultHeaderItemDirection, LayoutDefaultHeaderItemHidden, LayoutDefaultOptions } from './types';
import * as i0 from "@angular/core";
interface LayoutDefaultHeaderItem {
    host: TemplateRef<NzSafeAny>;
    hidden?: LayoutDefaultHeaderItemHidden;
    direction?: LayoutDefaultHeaderItemDirection;
}
export declare class LayoutDefaultHeaderComponent implements AfterViewInit, OnDestroy {
    private settings;
    private cdr;
    private destroy$;
    items: QueryList<LayoutDefaultHeaderItemComponent>;
    options: LayoutDefaultOptions;
    left: LayoutDefaultHeaderItem[];
    middle: LayoutDefaultHeaderItem[];
    right: LayoutDefaultHeaderItem[];
    get app(): App;
    get collapsed(): boolean;
    get collapsedIcon(): string;
    constructor(settings: SettingsService, cdr: ChangeDetectorRef);
    private refresh;
    ngAfterViewInit(): void;
    toggleCollapsed(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutDefaultHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutDefaultHeaderComponent, "layout-default-header", never, { "items": "items"; "options": "options"; }, {}, never, never>;
}
export {};
