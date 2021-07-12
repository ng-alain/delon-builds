import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
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
     * @param lang 语言代码
     * @param emit 是否触发 `change`，默认：true
     */
    use(lang: string, emit?: boolean): void;
    /**
     * Return to the current language list
     *
     * 返回当前语言列表
     */
    getLangs(): NzSafeAny[];
    /**
     * 翻译
     * - `params` 模板所需要的参数对象
     * - `isSafe` 是否返回安全字符，自动调用 `bypassSecurityTrustHtml`
     */
    fanyi(key: string, params?: unknown, isSafe?: boolean): string;
}
export declare const ALAIN_I18N_TOKEN: InjectionToken<AlainI18NService>;
export declare function ALAIN_I18N_TOKEN_FACTORY(): AlainI18NServiceFake;
export declare class AlainI18NServiceFake implements AlainI18NService {
    private change$;
    get change(): Observable<string>;
    get defaultLang(): string;
    get currentLang(): string;
    use(lang: string): void;
    getLangs(): NzSafeAny[];
    fanyi(key: string): string;
}
