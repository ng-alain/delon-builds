import { AfterViewInit, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { App, SettingsService } from '@delon/theme';
import { LayoutDefaultComponent } from './layout.component';
import { LayoutDefaultHeaderItemDirection, LayoutDefaultHeaderItemHidden, LayoutDefaultOptions } from './types';
interface LayoutDefaultHeaderItem {
    host: TemplateRef<any>;
    hidden?: LayoutDefaultHeaderItemHidden;
    direction?: LayoutDefaultHeaderItemDirection;
}
export declare class LayoutDefaultHeaderComponent implements AfterViewInit {
    private settings;
    private parent;
    private cdr;
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
}
export {};
