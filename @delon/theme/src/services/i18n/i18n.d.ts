import { InjectionToken } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlainConfigService } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
export interface AlainI18NService {
    [key: string]: NzSafeAny;
    /**
     * Call `use` to trigger change notification
     *
     * 调用 `use` 触发变更通知
     */
    readonly change: Observable<string>;
    /**
     * Get the default language
     *
     * 获取默认语言
     */
    readonly defaultLang: string;
    /**
     * Get current language
     *
     * 获取当前语言
     */
    readonly currentLang: string;
    /**
     * Change language
     *
     * 变更语言
     *
     * @param emit 是否触发 `change`，默认：true ; Should be removed, please use `change` event instead.
     */
    use(lang: string, data?: Record<string, unknown>): void;
    /**
     * Return to the current language list
     *
     * 返回当前语言列表
     */
    getLangs(): NzSafeAny[];
    /**
     * Translate 翻译
     *
     * @param params 模板所需要的参数对象
     * @param isSafe 是否返回安全字符，自动调用 `bypassSecurityTrustHtml`; Should be removed, If you need SafeHtml support, please use `| html` pipe instead.
     */
    fanyi(path: string, params?: unknown): string;
}
export declare const ALAIN_I18N_TOKEN: InjectionToken<AlainI18NService>;
export declare abstract class AlainI18nBaseService implements AlainI18NService {
    private cog;
    protected _change$: BehaviorSubject<string | null>;
    protected _currentLang: string;
    protected _defaultLang: string;
    protected _data: Record<string, string>;
    get change(): Observable<string>;
    get defaultLang(): string;
    get currentLang(): string;
    get data(): Record<string, string>;
    constructor(cogSrv: AlainConfigService);
    /**
     * Flattened data source
     *
     * @example
     * {
     *   "name": "Name",
     *   "sys": {
     *     "": "System",
     *     "title": "Title"
     *   }
     * }
     * =>
     * {
     *   "name": "Name",
     *   "sys": "System",
     *   "sys.title": "Title"
     * }
     */
    flatData(data: Record<string, unknown>, parentKey: string[]): Record<string, string>;
    abstract use(lang: string, data?: Record<string, unknown>): void;
    abstract getLangs(): NzSafeAny[];
    fanyi(path: string, params?: Record<string, unknown>): string;
}
export declare class AlainI18NServiceFake extends AlainI18nBaseService {
    use(lang: string, data: Record<string, unknown>): void;
    getLangs(): NzSafeAny[];
}
