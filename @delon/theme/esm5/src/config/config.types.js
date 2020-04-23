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
    AlainConfig.prototype.qr;
    /** @type {?|undefined} */
    AlainConfig.prototype.se;
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
export function AlainQRConfig() { }
if (false) {
    /**
     * 背景，默认：`white`
     * @type {?|undefined}
     */
    AlainQRConfig.prototype.background;
    /**
     * 背景透明级别，范围：`0-1` 之间，默认：`1`
     * @type {?|undefined}
     */
    AlainQRConfig.prototype.backgroundAlpha;
    /**
     * 前景，默认：`black`
     * @type {?|undefined}
     */
    AlainQRConfig.prototype.foreground;
    /**
     * 前景透明级别，范围：`0-1` 之间，默认：`1`
     * @type {?|undefined}
     */
    AlainQRConfig.prototype.foregroundAlpha;
    /**
     * 误差校正级别，默认：`L`
     * @type {?|undefined}
     */
    AlainQRConfig.prototype.level;
    /**
     * 二维码输出图片MIME类型，默认：`image/png`
     * @type {?|undefined}
     */
    AlainQRConfig.prototype.mime;
    /**
     * 内边距（单位：px），默认：`10`
     * @type {?|undefined}
     */
    AlainQRConfig.prototype.padding;
    /**
     * 大小（单位：px），默认：`220`
     * @type {?|undefined}
     */
    AlainQRConfig.prototype.size;
}
/**
 * @record
 */
export function AlainSEConfig() { }
if (false) {
    /**
     * 大小，默认：`default`
     * - `compact` 紧凑型，强制忽略 `error`、`extra` 展示
     * @type {?|undefined}
     */
    AlainSEConfig.prototype.size;
    /**
     * 布局类型，等同 `nzLayout`，默认：`horizontal`
     * - `inline` 时强制大小为 `compact`
     * @type {?|undefined}
     */
    AlainSEConfig.prototype.nzLayout;
    /**
     * 间距，当 `nzLayout:horizontal` 时有效，默认：`32`
     * @type {?|undefined}
     */
    AlainSEConfig.prototype.gutter;
    /**
     * 列数，默认：`2`
     * @type {?|undefined}
     */
    AlainSEConfig.prototype.col;
    /**
     * 标签文本宽度，单位：`px`，默认：`150`
     * @type {?|undefined}
     */
    AlainSEConfig.prototype.labelWidth;
    /**
     * 是否立即呈现错误视觉，默认：`false`
     * @type {?|undefined}
     */
    AlainSEConfig.prototype.firstVisual;
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
export var ALAIN_CONFIG = new InjectionToken('alain-config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnR5cGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL2NvbmZpZy9jb25maWcudHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBSy9DLGlDQVVDOzs7SUFUQyxnQ0FBdUM7O0lBQ3ZDLG1DQUF1Qzs7SUFDdkMsNEJBQXlCOztJQUN6Qiw4QkFBNkI7O0lBQzdCLDRCQUF5Qjs7SUFDekIsaUNBQW1DOztJQUNuQyx5QkFBbUI7O0lBQ25CLHlCQUFtQjs7SUFDbkIsNEJBQXlCOzs7OztBQUczQiw2Q0FTQzs7Ozs7O0lBTEMsdUNBQWM7Ozs7O0lBSWQsNENBQW1COzs7OztBQUdyQixzQ0FVQzs7Ozs7O0lBTkMsZ0NBQWM7Ozs7O0lBS2QsaUNBQWU7Ozs7O0FBR2pCLHdDQXlCQzs7Ozs7O0lBckJDLGtDQUEyQzs7Ozs7SUFJM0Msa0NBQWM7O0lBQ2Qsa0NBT0U7O0lBQ0Ysb0NBR0U7Ozs7O0lBSUYsbUNBQWU7Ozs7O0FBR2pCLHNDQWdDQzs7Ozs7O0lBNUJDLG1DQUFpQjs7Ozs7SUFJakIsb0NBQWtCOzs7OztJQUlsQixvQ0FBa0I7Ozs7O0lBSWxCLHVDQUFxQjs7Ozs7Ozs7SUFPckIsK0JBQWE7Ozs7O0lBSWIsZ0NBQWM7Ozs7O0lBSWQseUNBQXVCOzs7OztBQUd6QiwyQ0FzQ0M7Ozs7OztJQWxDQyxxQ0FBYzs7Ozs7SUFJZCx5Q0FBa0I7Ozs7O0lBSWxCLHlDQUFrQjs7Ozs7SUFJbEIsK0NBQXlCOzs7Ozs7SUFLekIsb0RBQThCOzs7OztJQUk5QiwwQ0FBb0I7Ozs7O0lBSXBCLDBDQUFvQjs7Ozs7SUFJcEIsc0NBQWdCOzs7OztJQUloQiwrQ0FBd0I7Ozs7O0FBRzFCLG1DQWlCQzs7Ozs7O0lBZkMsbUNBQW9COzs7OztJQUVwQix3Q0FBeUI7Ozs7O0lBRXpCLG1DQUFvQjs7Ozs7SUFFcEIsd0NBQXlCOzs7OztJQUV6Qiw4QkFBOEI7Ozs7O0lBRTlCLDZCQUFjOzs7OztJQUVkLGdDQUFpQjs7Ozs7SUFFakIsNkJBQWM7Ozs7O0FBR2hCLG1DQTJCQzs7Ozs7OztJQXRCQyw2QkFBNkI7Ozs7OztJQUs3QixpQ0FBZ0Q7Ozs7O0lBSWhELCtCQUFnQjs7Ozs7SUFJaEIsNEJBQWE7Ozs7O0lBSWIsbUNBQW9COzs7OztJQUlwQixvQ0FBc0I7Ozs7O0FBR3hCLHNDQUVDOzs7SUFEQyxpQ0FBOEM7OztBQUtoRCxNQUFNLEtBQU8sWUFBWSxHQUFHLElBQUksY0FBYyxDQUFjLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IEFsYWluRGF0ZVJhbmdlUGlja2VyQ29uZmlnIH0gZnJvbSAnLi90eXBlcy9kYXRlLXBpY2tlci50eXBlJztcblxuZXhwb3J0IGludGVyZmFjZSBBbGFpbkNvbmZpZyB7XG4gIGRhdGFSYW5nZT86IEFsYWluRGF0ZVJhbmdlUGlja2VyQ29uZmlnO1xuICBlcnJvckNvbGxlY3Q/OiBBbGFpbkVycm9yQ29sbGVjdENvbmZpZztcbiAgaW1hZ2U/OiBBbGFpbkltYWdlQ29uZmlnO1xuICBsb2FkaW5nPzogQWxhaW5Mb2FkaW5nQ29uZmlnO1xuICBsb2RvcD86IEFsYWluTG9kb3BDb25maWc7XG4gIHBhZ2VIZWFkZXI/OiBBbGFpblBhZ2VIZWFkZXJDb25maWc7XG4gIHFyPzogQWxhaW5RUkNvbmZpZztcbiAgc2U/OiBBbGFpblNFQ29uZmlnO1xuICBjaGFydD86IEFsYWluQ2hhcnRDb25maWc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxhaW5FcnJvckNvbGxlY3RDb25maWcge1xuICAvKipcbiAgICog55uR5ZCs6aKR546H77yM6buY6K6k77yaYDUwMGBcbiAgICovXG4gIGZyZXE/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDpobbpg6jlgY/np7vlgLzvvIzpu5jorqTvvJpgMTQ1YFxuICAgKi9cbiAgb2Zmc2V0VG9wPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluSW1hZ2VDb25maWcge1xuICAvKipcbiAgICog6buY6K6k5aSn5bCP77yM6buY6K6k5YC877yaYDY0YO+8jOWNleS9je+8mnB4XG4gICAqL1xuICBzaXplPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiDplJnor6/lm77niYfvvIzpu5jorqTvvJpgLi9hc3NldHMvaW1nL2xvZ28uc3ZnYFxuICAgKi9cbiAgZXJyb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxhaW5Mb2FkaW5nQ29uZmlnIHtcbiAgLyoqXG4gICAqIOexu+Wei++8jOm7mOiupO+8mmBzcGluYFxuICAgKi9cbiAgdHlwZT86ICd0ZXh0JyB8ICdpY29uJyB8ICdzcGluJyB8ICdjdXN0b20nO1xuICAvKipcbiAgICog5pi+56S65paH5pys77yM6buY6K6k77yaYOWKoOi9veS4rS4uLmBcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIGljb24/OiB7XG4gICAgLyoqIGBuei1pY29uLm56VHlwZWDvvIzpu5jorqTvvJpgbG9hZGluZ2AgKi9cbiAgICB0eXBlPzogc3RyaW5nO1xuICAgIC8qKiBgbnotaWNvbi5uelRoZW1lYO+8jOm7mOiupO+8mmBvdXRsaW5lYCAqL1xuICAgIHRoZW1lPzogJ2ZpbGwnIHwgJ291dGxpbmUnIHwgJ3R3b3RvbmUnO1xuICAgIC8qKiBgbnotaWNvbi5uelNwaW5g77yM6buY6K6k77yaYHRydWVgICovXG4gICAgc3Bpbj86IGJvb2xlYW47XG4gIH07XG4gIGN1c3RvbT86IHtcbiAgICBodG1sPzogc3RyaW5nIHwgU2FmZUh0bWw7XG4gICAgc3R5bGU/OiBvYmplY3Q7XG4gIH07XG4gIC8qKlxuICAgKiDlu7bov5/vvIzpu5jorqTvvJpgMGBcbiAgICovXG4gIGRlbGF5PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluTG9kb3BDb25maWcge1xuICAvKipcbiAgICog5rOo5YaM5L+h5oGv77ya5Li75rOo5YaM5Y+3XG4gICAqL1xuICBsaWNlbnNlPzogc3RyaW5nO1xuICAvKipcbiAgICog5rOo5YaM5L+h5oGv77ya6ZmE5Yqg5rOo5YaM5Y+3QVxuICAgKi9cbiAgbGljZW5zZUE/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDms6jlhozkv6Hmga/vvJrpmYTliqDms6jlhozlj7dCXG4gICAqL1xuICBsaWNlbnNlQj86IHN0cmluZztcbiAgLyoqXG4gICAqIOazqOWGjOS/oeaBr++8muazqOWGjOWNleS9jeWQjeensFxuICAgKi9cbiAgY29tcGFueU5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBMb2RvcCDov5znqIvohJrmnKxVUkzlnLDlnYDvvIwqKuazqOaEjyoq5Yqh5b+F5L2/55SoIGBuYW1lYCDlsZ7mgKfmjIflrprlj5jph4/lgLxcbiAgICpcbiAgICogLSBodHRwOi8vbG9jYWxob3N0OjE4MDAwL0NMb2RvcGZ1bmNzLmpzXG4gICAqIC0gaHR0cHM6Ly9sb2NhbGhvc3Q6ODQ0My9DTG9kb3BmdW5jcy5qcyBb6buY6K6kXVxuICAgKi9cbiAgdXJsPzogc3RyaW5nO1xuICAvKipcbiAgICogTG9kb3Ag5Y+Y6YeP5ZCN77yM6buY6K6k77yaYENMT0RPUGBcbiAgICovXG4gIG5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmo4Dmn6XmrKHmlbDvvIzpu5jorqQgYDEwMGDvvIzlvZPmo4Dmn6XotoXov4fml7bop4bkuLrlvILluLjvvIzov5nmmK/lm6DkuLogTG9kb3Ag6ZyA6KaB6L+e5o6lIFdlYlNvY2tldFxuICAgKi9cbiAgY2hlY2tNYXhDb3VudD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGFpblBhZ2VIZWFkZXJDb25maWcge1xuICAvKipcbiAgICog6aaW6aG15paH5pys77yM6Iul5oyH5a6a56m66KGo56S65LiN5pi+56S677yM6buY6K6k77yaYOmmlumhtWBcbiAgICovXG4gIGhvbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDpppbpobXpk77mjqXvvIzpu5jorqTvvJpgL2BcbiAgICovXG4gIGhvbWVMaW5rPzogc3RyaW5nO1xuICAvKipcbiAgICog6aaW6aG16ZO+5o6l5Zu96ZmF5YyW5Y+C5pWwXG4gICAqL1xuICBob21lSTE4bj86IHN0cmluZztcbiAgLyoqXG4gICAqIOiHquWKqOeUn+aIkOWvvOiIqu+8jOS7peW9k+WJjei3r+eUseS7juS4u+iPnOWNleS4reWumuS9je+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgYXV0b0JyZWFkY3J1bWI/OiBib29sZWFuO1xuICAvKipcbiAgICog6Ieq5Yqo5ZCR5LiK6YCS5b2S5p+l5om+77yM6buY6K6k77yaYGZhbHNlYFxuICAgKiAgLSDoj5zljZXmlbDmja7mupDljIXlkKsgYC93YXJlYO+8jOWImSBgL3dhcmUvMWAg5Lmf6KeG5Li6IGAvd2FyZWAg6aG5XG4gICAqL1xuICByZWN1cnNpdmVCcmVhZGNydW1iPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOiHquWKqOeUn+aIkOagh+mimO+8jOS7peW9k+WJjei3r+eUseS7juS4u+iPnOWNleS4reWumuS9je+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgYXV0b1RpdGxlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuiHquWKqOWwhuagh+WHhuS/oeaBr+WQjOatpeiHsyBgVGl0bGVTZXJ2aWNlYOOAgWBSZXVzZVNlcnZpY2VgIOS4i++8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgc3luY1RpdGxlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuWbuuWumuaooeW8j++8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGZpeGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOWbuuWumuWBj+enu+WAvO+8jOm7mOiupO+8mmA2NGBcbiAgICovXG4gIGZpeGVkT2Zmc2V0VG9wPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluUVJDb25maWcge1xuICAvKiog6IOM5pmv77yM6buY6K6k77yaYHdoaXRlYCAqL1xuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xuICAvKiog6IOM5pmv6YCP5piO57qn5Yir77yM6IyD5Zu077yaYDAtMWAg5LmL6Ze077yM6buY6K6k77yaYDFgICovXG4gIGJhY2tncm91bmRBbHBoYT86IG51bWJlcjtcbiAgLyoqIOWJjeaZr++8jOm7mOiupO+8mmBibGFja2AgKi9cbiAgZm9yZWdyb3VuZD86IHN0cmluZztcbiAgLyoqIOWJjeaZr+mAj+aYjue6p+WIq++8jOiMg+WbtO+8mmAwLTFgIOS5i+mXtO+8jOm7mOiupO+8mmAxYCAqL1xuICBmb3JlZ3JvdW5kQWxwaGE/OiBudW1iZXI7XG4gIC8qKiDor6/lt67moKHmraPnuqfliKvvvIzpu5jorqTvvJpgTGAgKi9cbiAgbGV2ZWw/OiAnTCcgfCAnTScgfCAnUScgfCAnSCc7XG4gIC8qKiDkuoznu7TnoIHovpPlh7rlm77niYdNSU1F57G75Z6L77yM6buY6K6k77yaYGltYWdlL3BuZ2AgKi9cbiAgbWltZT86IHN0cmluZztcbiAgLyoqIOWGhei+uei3ne+8iOWNleS9je+8mnB477yJ77yM6buY6K6k77yaYDEwYCAqL1xuICBwYWRkaW5nPzogbnVtYmVyO1xuICAvKiog5aSn5bCP77yI5Y2V5L2N77yacHjvvInvvIzpu5jorqTvvJpgMjIwYCAqL1xuICBzaXplPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluU0VDb25maWcge1xuICAvKipcbiAgICog5aSn5bCP77yM6buY6K6k77yaYGRlZmF1bHRgXG4gICAqIC0gYGNvbXBhY3RgIOe0p+WHkeWei++8jOW8uuWItuW/veeVpSBgZXJyb3Jg44CBYGV4dHJhYCDlsZXnpLpcbiAgICovXG4gIHNpemU/OiAnZGVmYXVsdCcgfCAnY29tcGFjdCc7XG4gIC8qKlxuICAgKiDluIPlsYDnsbvlnovvvIznrYnlkIwgYG56TGF5b3V0YO+8jOm7mOiupO+8mmBob3Jpem9udGFsYFxuICAgKiAtIGBpbmxpbmVgIOaXtuW8uuWItuWkp+Wwj+S4uiBgY29tcGFjdGBcbiAgICovXG4gIG56TGF5b3V0PzogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyB8ICdpbmxpbmUnO1xuICAvKipcbiAgICog6Ze06Led77yM5b2TIGBuekxheW91dDpob3Jpem9udGFsYCDml7bmnInmlYjvvIzpu5jorqTvvJpgMzJgXG4gICAqL1xuICBndXR0ZXI/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDliJfmlbDvvIzpu5jorqTvvJpgMmBcbiAgICovXG4gIGNvbD86IG51bWJlcjtcbiAgLyoqXG4gICAqIOagh+etvuaWh+acrOWuveW6pu+8jOWNleS9je+8mmBweGDvvIzpu5jorqTvvJpgMTUwYFxuICAgKi9cbiAgbGFiZWxXaWR0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIOaYr+WQpueri+WNs+WRiOeOsOmUmeivr+inhuinie+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGZpcnN0VmlzdWFsPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGFpbkNoYXJ0Q29uZmlnIHtcbiAgdGhlbWU/OiBzdHJpbmcgfCB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9O1xufVxuXG5leHBvcnQgdHlwZSBBbGFpbkNvbmZpZ0tleSA9IGtleW9mIEFsYWluQ29uZmlnO1xuXG5leHBvcnQgY29uc3QgQUxBSU5fQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPEFsYWluQ29uZmlnPignYWxhaW4tY29uZmlnJyk7XG4iXX0=