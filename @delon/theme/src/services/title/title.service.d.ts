import { Injector, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { AlainI18NService } from '../i18n/i18n';
import { MenuService } from '../menu/menu.service';
import * as i0 from "@angular/core";
export interface RouteTitle {
    title?: string | Observable<string>;
    titleI18n?: string;
}
export declare class TitleService implements OnDestroy {
    private injector;
    private title;
    private menuSrv;
    private i18nSrv;
    private doc;
    private _prefix;
    private _suffix;
    private _separator;
    private _reverse;
    private destroy$;
    private tit$?;
    readonly DELAY_TIME = 25;
    constructor(injector: Injector, title: Title, menuSrv: MenuService, i18nSrv: AlainI18NService, doc: NzSafeAny);
    /**
     * Set separator
     *
     * 设置分隔符
     */
    set separator(value: string);
    /**
     * Set prefix
     *
     * 设置前缀
     */
    set prefix(value: string);
    /**
     * Set suffix
     *
     * 设置后缀
     */
    set suffix(value: string);
    /**
     * Set whether to reverse
     *
     * 设置是否反转
     */
    set reverse(value: boolean);
    /**
     * Set the default CSS selector string
     *
     * 设置默认CSS选择器字符串
     */
    selector?: string | null;
    /**
     * Set default title name
     *
     * 设置默认标题名
     */
    default: string;
    private getByElement;
    private getByRoute;
    private getByMenu;
    /**
     * Set the document title
     */
    setTitle(title?: string | string[]): void;
    /**
     * Set i18n key of the document title
     */
    setTitleByI18n(key: string, params?: unknown): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TitleService, [null, null, null, { optional: true; }, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TitleService>;
}
