import { ElementRef, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { Router, Event } from '@angular/router';
import { SettingsService } from '@delon/theme';
import { BooleanInput } from '@delon/util/decorator';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
import { LayoutDefaultService } from './layout.service';
import { LayoutDefaultOptions } from './types';
import * as i0 from "@angular/core";
export declare class LayoutDefaultComponent {
    private msgSrv;
    private settings;
    private el;
    private renderer;
    private doc;
    private srv;
    static ngAcceptInputType_fetchingStrictly: BooleanInput;
    static ngAcceptInputType_fetching: BooleanInput;
    headerItems: QueryList<LayoutDefaultHeaderItemComponent>;
    get opt(): LayoutDefaultOptions;
    set options(value: LayoutDefaultOptions | null | undefined);
    asideUser: TemplateRef<void> | null;
    asideBottom: TemplateRef<NzSafeAny> | null;
    nav: TemplateRef<void> | null;
    content: TemplateRef<void> | null;
    customError?: string | null;
    fetchingStrictly: boolean;
    fetching: boolean;
    private isFetching;
    get showFetching(): boolean;
    get collapsed(): boolean;
    get collapsedIcon(): string;
    toggleCollapsed(): void;
    constructor(router: Router, msgSrv: NzMessageService, settings: SettingsService, el: ElementRef, renderer: Renderer2, doc: NzSafeAny, srv: LayoutDefaultService);
    processEv(ev: Event): void;
    private setClass;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutDefaultComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutDefaultComponent, "layout-default", ["layoutDefault"], { "options": { "alias": "options"; "required": false; }; "asideUser": { "alias": "asideUser"; "required": false; }; "asideBottom": { "alias": "asideBottom"; "required": false; }; "nav": { "alias": "nav"; "required": false; }; "content": { "alias": "content"; "required": false; }; "customError": { "alias": "customError"; "required": false; }; "fetchingStrictly": { "alias": "fetchingStrictly"; "required": false; }; "fetching": { "alias": "fetching"; "required": false; }; }, {}, ["headerItems"], ["*"], false, never>;
}
