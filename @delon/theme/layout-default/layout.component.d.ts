import { ElementRef, OnInit, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
import { LayoutDefaultOptions } from './types';
export declare class LayoutDefaultComponent implements OnInit {
    private settings;
    private el;
    private renderer;
    private doc;
    headerItems: QueryList<LayoutDefaultHeaderItemComponent>;
    options: LayoutDefaultOptions;
    asideUser: TemplateRef<void>;
    nav: TemplateRef<void>;
    content: TemplateRef<void>;
    isFetching: boolean;
    constructor(router: Router, msgSrv: NzMessageService, settings: SettingsService, el: ElementRef, renderer: Renderer2, doc: any);
    private setClass;
    ngOnInit(): void;
}
