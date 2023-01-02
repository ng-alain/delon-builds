import { ElementRef, OnDestroy, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { Router, Event } from '@angular/router';
import { SettingsService } from '@delon/theme';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
import { LayoutDefaultService } from './layout.service';
import { LayoutDefaultOptions } from './types';
import * as i0 from "@angular/core";
export declare class LayoutDefaultComponent implements OnDestroy {
    private msgSrv;
    private settings;
    private el;
    private renderer;
    private doc;
    private srv;
    headerItems: QueryList<LayoutDefaultHeaderItemComponent>;
    get opt(): LayoutDefaultOptions;
    set options(value: LayoutDefaultOptions | null | undefined);
    asideUser: TemplateRef<void> | null;
    asideBottom: TemplateRef<NzSafeAny> | null;
    nav: TemplateRef<void> | null;
    content: TemplateRef<void> | null;
    customError?: string | null;
    private destroy$;
    isFetching: boolean;
    get collapsed(): boolean;
    get collapsedIcon(): string;
    toggleCollapsed(): void;
    constructor(router: Router, msgSrv: NzMessageService, settings: SettingsService, el: ElementRef, renderer: Renderer2, doc: NzSafeAny, srv: LayoutDefaultService);
    processEv(ev: Event): void;
    private setClass;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutDefaultComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutDefaultComponent, "layout-default", ["layoutDefault"], { "options": "options"; "asideUser": "asideUser"; "asideBottom": "asideBottom"; "nav": "nav"; "content": "content"; "customError": "customError"; }, {}, ["headerItems"], ["*"], false, never>;
}
