import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export interface RouteTitle {
    title?: string | Observable<string>;
    titleI18n?: string;
}
export declare class TitleService implements OnDestroy {
    private destroy$;
    private _prefix;
    private _suffix;
    private _separator;
    private _reverse;
    private tit$?;
    readonly DELAY_TIME = 25;
    private readonly doc;
    private readonly injector;
    private readonly title;
    private readonly menuSrv;
    private readonly i18nSrv;
    constructor();
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
    static ɵfac: i0.ɵɵFactoryDeclaration<TitleService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TitleService>;
}
