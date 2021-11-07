import { ElementRef, OnDestroy, OnInit, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { Router, Event } from '@angular/router';
import { SettingsService } from '@delon/theme';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
import { LayoutDefaultOptions } from './types';
export declare class LayoutDefaultComponent implements OnInit, OnDestroy {
    private msgSrv;
    private settings;
    private el;
    private renderer;
    private doc;
    headerItems: QueryList<LayoutDefaultHeaderItemComponent>;
    options: LayoutDefaultOptions;
    asideUser: TemplateRef<void>;
    nav: TemplateRef<void>;
    content: TemplateRef<void>;
    customError?: string | null;
    private destroy$;
    isFetching: boolean;
    constructor(router: Router, msgSrv: NzMessageService, settings: SettingsService, el: ElementRef, renderer: Renderer2, doc: NzSafeAny);
    processEv(ev: Event): void;
    private setClass;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
