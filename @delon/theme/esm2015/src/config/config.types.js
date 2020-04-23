/**
 * @fileoverview added by tsickle
 * Generated from: src/config/config.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/**
 * @record
 */
export function AlainConfig() { }
if (false) {
    /** @type {?|undefined} */
    AlainConfig.prototype.dataRange;
    /** @type {?|undefined} */
    AlainConfig.prototype.errorCollect;
    /** @type {?|undefined} */
    AlainConfig.prototype.image;
    /** @type {?|undefined} */
    AlainConfig.prototype.loading;
    /** @type {?|undefined} */
    AlainConfig.prototype.lodop;
    /** @type {?|undefined} */
    AlainConfig.prototype.pageHeader;
    /** @type {?|undefined} */
    AlainConfig.prototype.chart;
}
/**
 * @record
 */
export function AlainErrorCollectConfig() { }
if (false) {
    /**
     * 监听频率，默认：`500`
     * @type {?|undefined}
     */
    AlainErrorCollectConfig.prototype.freq;
    /**
     * 顶部偏移值，默认：`145`
     * @type {?|undefined}
     */
    AlainErrorCollectConfig.prototype.offsetTop;
}
/**
 * @record
 */
export function AlainImageConfig() { }
if (false) {
    /**
     * 默认大小，默认值：`64`，单位：px
     * @type {?|undefined}
     */
    AlainImageConfig.prototype.size;
    /**
     * 错误图片，默认：`./assets/img/logo.svg`
     * @type {?|undefined}
     */
    AlainImageConfig.prototype.error;
}
/**
 * @record
 */
export function AlainLoadingConfig() { }
if (false) {
    /**
     * 类型，默认：`spin`
     * @type {?|undefined}
     */
    AlainLoadingConfig.prototype.type;
    /**
     * 显示文本，默认：`加载中...`
     * @type {?|undefined}
     */
    AlainLoadingConfig.prototype.text;
    /** @type {?|undefined} */
    AlainLoadingConfig.prototype.icon;
    /** @type {?|undefined} */
    AlainLoadingConfig.prototype.custom;
    /**
     * 延迟，默认：`0`
     * @type {?|undefined}
     */
    AlainLoadingConfig.prototype.delay;
}
/**
 * @record
 */
export function AlainLodopConfig() { }
if (false) {
    /**
     * 注册信息：主注册号
     * @type {?|undefined}
     */
    AlainLodopConfig.prototype.license;
    /**
     * 注册信息：附加注册号A
     * @type {?|undefined}
     */
    AlainLodopConfig.prototype.licenseA;
    /**
     * 注册信息：附加注册号B
     * @type {?|undefined}
     */
    AlainLodopConfig.prototype.licenseB;
    /**
     * 注册信息：注册单位名称
     * @type {?|undefined}
     */
    AlainLodopConfig.prototype.companyName;
    /**
     * Lodop 远程脚本URL地址，**注意**务必使用 `name` 属性指定变量值
     *
     * - http://localhost:18000/CLodopfuncs.js
     * - https://localhost:8443/CLodopfuncs.js [默认]
     * @type {?|undefined}
     */
    AlainLodopConfig.prototype.url;
    /**
     * Lodop 变量名，默认：`CLODOP`
     * @type {?|undefined}
     */
    AlainLodopConfig.prototype.name;
    /**
     * 检查次数，默认 `100`，当检查超过时视为异常，这是因为 Lodop 需要连接 WebSocket
     * @type {?|undefined}
     */
    AlainLodopConfig.prototype.checkMaxCount;
}
/**
 * @record
 */
export function AlainPageHeaderConfig() { }
if (false) {
    /**
     * 首页文本，若指定空表示不显示，默认：`首页`
     * @type {?|undefined}
     */
    AlainPageHeaderConfig.prototype.home;
    /**
     * 首页链接，默认：`/`
     * @type {?|undefined}
     */
    AlainPageHeaderConfig.prototype.homeLink;
    /**
     * 首页链接国际化参数
     * @type {?|undefined}
     */
    AlainPageHeaderConfig.prototype.homeI18n;
    /**
     * 自动生成导航，以当前路由从主菜单中定位，默认：`true`
     * @type {?|undefined}
     */
    AlainPageHeaderConfig.prototype.autoBreadcrumb;
    /**
     * 自动向上递归查找，默认：`false`
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     * @type {?|undefined}
     */
    AlainPageHeaderConfig.prototype.recursiveBreadcrumb;
    /**
     * 自动生成标题，以当前路由从主菜单中定位，默认：`true`
     * @type {?|undefined}
     */
    AlainPageHeaderConfig.prototype.autoTitle;
    /**
     * 是否自动将标准信息同步至 `TitleService`、`ReuseService` 下，默认：`true`
     * @type {?|undefined}
     */
    AlainPageHeaderConfig.prototype.syncTitle;
    /**
     * 是否固定模式，默认：`false`
     * @type {?|undefined}
     */
    AlainPageHeaderConfig.prototype.fixed;
    /**
     * 固定偏移值，默认：`64`
     * @type {?|undefined}
     */
    AlainPageHeaderConfig.prototype.fixedOffsetTop;
}
/**
 * @record
 */
export function AlainChartConfig() { }
if (false) {
    /** @type {?|undefined} */
    AlainChartConfig.prototype.theme;
}
/** @type {?} */
export const ALAIN_CONFIG = new InjectionToken('alain-config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnR5cGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL2NvbmZpZy9jb25maWcudHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBSy9DLGlDQVFDOzs7SUFQQyxnQ0FBdUM7O0lBQ3ZDLG1DQUF1Qzs7SUFDdkMsNEJBQXlCOztJQUN6Qiw4QkFBNkI7O0lBQzdCLDRCQUF5Qjs7SUFDekIsaUNBQW1DOztJQUNuQyw0QkFBeUI7Ozs7O0FBRzNCLDZDQVNDOzs7Ozs7SUFMQyx1Q0FBYzs7Ozs7SUFJZCw0Q0FBbUI7Ozs7O0FBR3JCLHNDQVVDOzs7Ozs7SUFOQyxnQ0FBYzs7Ozs7SUFLZCxpQ0FBZTs7Ozs7QUFHakIsd0NBeUJDOzs7Ozs7SUFyQkMsa0NBQTJDOzs7OztJQUkzQyxrQ0FBYzs7SUFDZCxrQ0FPRTs7SUFDRixvQ0FHRTs7Ozs7SUFJRixtQ0FBZTs7Ozs7QUFHakIsc0NBZ0NDOzs7Ozs7SUE1QkMsbUNBQWlCOzs7OztJQUlqQixvQ0FBa0I7Ozs7O0lBSWxCLG9DQUFrQjs7Ozs7SUFJbEIsdUNBQXFCOzs7Ozs7OztJQU9yQiwrQkFBYTs7Ozs7SUFJYixnQ0FBYzs7Ozs7SUFJZCx5Q0FBdUI7Ozs7O0FBR3pCLDJDQXNDQzs7Ozs7O0lBbENDLHFDQUFjOzs7OztJQUlkLHlDQUFrQjs7Ozs7SUFJbEIseUNBQWtCOzs7OztJQUlsQiwrQ0FBeUI7Ozs7OztJQUt6QixvREFBOEI7Ozs7O0lBSTlCLDBDQUFvQjs7Ozs7SUFJcEIsMENBQW9COzs7OztJQUlwQixzQ0FBZ0I7Ozs7O0lBSWhCLCtDQUF3Qjs7Ozs7QUFHMUIsc0NBRUM7OztJQURDLGlDQUE4Qzs7O0FBS2hELE1BQU0sT0FBTyxZQUFZLEdBQUcsSUFBSSxjQUFjLENBQWMsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBBbGFpbkRhdGVSYW5nZVBpY2tlckNvbmZpZyB9IGZyb20gJy4vdHlwZXMvZGF0ZS1waWNrZXIudHlwZSc7XG5pbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluQ29uZmlnIHtcbiAgZGF0YVJhbmdlPzogQWxhaW5EYXRlUmFuZ2VQaWNrZXJDb25maWc7XG4gIGVycm9yQ29sbGVjdD86IEFsYWluRXJyb3JDb2xsZWN0Q29uZmlnO1xuICBpbWFnZT86IEFsYWluSW1hZ2VDb25maWc7XG4gIGxvYWRpbmc/OiBBbGFpbkxvYWRpbmdDb25maWc7XG4gIGxvZG9wPzogQWxhaW5Mb2RvcENvbmZpZztcbiAgcGFnZUhlYWRlcj86IEFsYWluUGFnZUhlYWRlckNvbmZpZztcbiAgY2hhcnQ/OiBBbGFpbkNoYXJ0Q29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluRXJyb3JDb2xsZWN0Q29uZmlnIHtcbiAgLyoqXG4gICAqIOebkeWQrOmikeeOh++8jOm7mOiupO+8mmA1MDBgXG4gICAqL1xuICBmcmVxPzogbnVtYmVyO1xuICAvKipcbiAgICog6aG26YOo5YGP56e75YC877yM6buY6K6k77yaYDE0NWBcbiAgICovXG4gIG9mZnNldFRvcD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGFpbkltYWdlQ29uZmlnIHtcbiAgLyoqXG4gICAqIOm7mOiupOWkp+Wwj++8jOm7mOiupOWAvO+8mmA2NGDvvIzljZXkvY3vvJpweFxuICAgKi9cbiAgc2l6ZT86IG51bWJlcjtcblxuICAvKipcbiAgICog6ZSZ6K+v5Zu+54mH77yM6buY6K6k77yaYC4vYXNzZXRzL2ltZy9sb2dvLnN2Z2BcbiAgICovXG4gIGVycm9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluTG9hZGluZ0NvbmZpZyB7XG4gIC8qKlxuICAgKiDnsbvlnovvvIzpu5jorqTvvJpgc3BpbmBcbiAgICovXG4gIHR5cGU/OiAndGV4dCcgfCAnaWNvbicgfCAnc3BpbicgfCAnY3VzdG9tJztcbiAgLyoqXG4gICAqIOaYvuekuuaWh+acrO+8jOm7mOiupO+8mmDliqDovb3kuK0uLi5gXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICBpY29uPzoge1xuICAgIC8qKiBgbnotaWNvbi5uelR5cGVg77yM6buY6K6k77yaYGxvYWRpbmdgICovXG4gICAgdHlwZT86IHN0cmluZztcbiAgICAvKiogYG56LWljb24ubnpUaGVtZWDvvIzpu5jorqTvvJpgb3V0bGluZWAgKi9cbiAgICB0aGVtZT86ICdmaWxsJyB8ICdvdXRsaW5lJyB8ICd0d290b25lJztcbiAgICAvKiogYG56LWljb24ubnpTcGluYO+8jOm7mOiupO+8mmB0cnVlYCAqL1xuICAgIHNwaW4/OiBib29sZWFuO1xuICB9O1xuICBjdXN0b20/OiB7XG4gICAgaHRtbD86IHN0cmluZyB8IFNhZmVIdG1sO1xuICAgIHN0eWxlPzogb2JqZWN0O1xuICB9O1xuICAvKipcbiAgICog5bu26L+f77yM6buY6K6k77yaYDBgXG4gICAqL1xuICBkZWxheT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGFpbkxvZG9wQ29uZmlnIHtcbiAgLyoqXG4gICAqIOazqOWGjOS/oeaBr++8muS4u+azqOWGjOWPt1xuICAgKi9cbiAgbGljZW5zZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOazqOWGjOS/oeaBr++8mumZhOWKoOazqOWGjOWPt0FcbiAgICovXG4gIGxpY2Vuc2VBPzogc3RyaW5nO1xuICAvKipcbiAgICog5rOo5YaM5L+h5oGv77ya6ZmE5Yqg5rOo5YaM5Y+3QlxuICAgKi9cbiAgbGljZW5zZUI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDms6jlhozkv6Hmga/vvJrms6jlhozljZXkvY3lkI3np7BcbiAgICovXG4gIGNvbXBhbnlOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogTG9kb3Ag6L+c56iL6ISa5pysVVJM5Zyw5Z2A77yMKirms6jmhI8qKuWKoeW/heS9v+eUqCBgbmFtZWAg5bGe5oCn5oyH5a6a5Y+Y6YeP5YC8XG4gICAqXG4gICAqIC0gaHR0cDovL2xvY2FsaG9zdDoxODAwMC9DTG9kb3BmdW5jcy5qc1xuICAgKiAtIGh0dHBzOi8vbG9jYWxob3N0Ojg0NDMvQ0xvZG9wZnVuY3MuanMgW+m7mOiupF1cbiAgICovXG4gIHVybD86IHN0cmluZztcbiAgLyoqXG4gICAqIExvZG9wIOWPmOmHj+WQje+8jOm7mOiupO+8mmBDTE9ET1BgXG4gICAqL1xuICBuYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICog5qOA5p+l5qyh5pWw77yM6buY6K6kIGAxMDBg77yM5b2T5qOA5p+l6LaF6L+H5pe26KeG5Li65byC5bi477yM6L+Z5piv5Zug5Li6IExvZG9wIOmcgOimgei/nuaOpSBXZWJTb2NrZXRcbiAgICovXG4gIGNoZWNrTWF4Q291bnQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxhaW5QYWdlSGVhZGVyQ29uZmlnIHtcbiAgLyoqXG4gICAqIOmmlumhteaWh+acrO+8jOiLpeaMh+WumuepuuihqOekuuS4jeaYvuekuu+8jOm7mOiupO+8mmDpppbpobVgXG4gICAqL1xuICBob21lPzogc3RyaW5nO1xuICAvKipcbiAgICog6aaW6aG16ZO+5o6l77yM6buY6K6k77yaYC9gXG4gICAqL1xuICBob21lTGluaz86IHN0cmluZztcbiAgLyoqXG4gICAqIOmmlumhtemTvuaOpeWbvemZheWMluWPguaVsFxuICAgKi9cbiAgaG9tZUkxOG4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDoh6rliqjnlJ/miJDlr7zoiKrvvIzku6XlvZPliY3ot6/nlLHku47kuLvoj5zljZXkuK3lrprkvY3vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGF1dG9CcmVhZGNydW1iPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOiHquWKqOWQkeS4iumAkuW9kuafpeaJvu+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICogIC0g6I+c5Y2V5pWw5o2u5rqQ5YyF5ZCrIGAvd2FyZWDvvIzliJkgYC93YXJlLzFgIOS5n+inhuS4uiBgL3dhcmVgIOmhuVxuICAgKi9cbiAgcmVjdXJzaXZlQnJlYWRjcnVtYj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDoh6rliqjnlJ/miJDmoIfpopjvvIzku6XlvZPliY3ot6/nlLHku47kuLvoj5zljZXkuK3lrprkvY3vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGF1dG9UaXRsZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKboh6rliqjlsIbmoIflh4bkv6Hmga/lkIzmraXoh7MgYFRpdGxlU2VydmljZWDjgIFgUmV1c2VTZXJ2aWNlYCDkuIvvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHN5bmNUaXRsZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKblm7rlrprmqKHlvI/vvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBmaXhlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDlm7rlrprlgY/np7vlgLzvvIzpu5jorqTvvJpgNjRgXG4gICAqL1xuICBmaXhlZE9mZnNldFRvcD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGFpbkNoYXJ0Q29uZmlnIHtcbiAgdGhlbWU/OiBzdHJpbmcgfCB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9O1xufVxuXG5leHBvcnQgdHlwZSBBbGFpbkNvbmZpZ0tleSA9IGtleW9mIEFsYWluQ29uZmlnO1xuXG5leHBvcnQgY29uc3QgQUxBSU5fQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPEFsYWluQ29uZmlnPignYWxhaW4tY29uZmlnJyk7XG4iXX0=