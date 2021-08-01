import { ElementRef, OnDestroy, OnInit, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SettingsService } from '@delon/theme';
import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
import { LayoutDefaultOptions } from './types';
export declare class LayoutDefaultComponent implements OnInit, OnDestroy {
    private settings;
    private el;
    private renderer;
    private doc;
    headerItems: QueryList<LayoutDefaultHeaderItemComponent>;
    options: LayoutDefaultOptions;
    asideUser: TemplateRef<void>;
    nav: TemplateRef<void>;
    content: TemplateRef<void>;
    private destroy$;
    isFetching: boolean;
    constructor(router: Router, msgSrv: NzMessageService, settings: SettingsService, el: ElementRef, renderer: Renderer2, doc: NzSafeAny);
    private setClass;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
