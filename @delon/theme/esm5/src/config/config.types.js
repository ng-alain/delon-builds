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
    AlainConfig.prototype.sg;
    /** @type {?|undefined} */
    AlainConfig.prototype.sv;
    /** @type {?|undefined} */
    AlainConfig.prototype.st;
    /** @type {?|undefined} */
    AlainConfig.prototype.xlsx;
    /** @type {?|undefined} */
    AlainConfig.prototype.zip;
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
export function AlainSGConfig() { }
if (false) {
    /**
     * 间距，默认：`32`
     * @type {?|undefined}
     */
    AlainSGConfig.prototype.gutter;
    /**
     * 列数，默认：`2`
     * @type {?|undefined}
     */
    AlainSGConfig.prototype.col;
}
var AlainSVConfig = /** @class */ (function () {
    function AlainSVConfig() {
    }
    return AlainSVConfig;
}());
export { AlainSVConfig };
if (false) {
    /**
     * 大小，默认：`large`
     * @type {?}
     */
    AlainSVConfig.prototype.size;
    /**
     * 间距，默认：`32`
     * @type {?}
     */
    AlainSVConfig.prototype.gutter;
    /**
     * 布局，默认：`horizontal`
     * @type {?}
     */
    AlainSVConfig.prototype.layout;
    /**
     * 列数，默认：`3`
     * @type {?}
     */
    AlainSVConfig.prototype.col;
    /**
     * 是否显示默认值，当内容为空值时显示 `-`，默认：`true`
     * @type {?}
     */
    AlainSVConfig.prototype.default;
    /**
     * `label` 固定宽度，若 `null` 或 `undefined` 表示非固定，默认：`null`
     * @type {?}
     */
    AlainSVConfig.prototype.labelWidth;
}
/**
 * @record
 */
export function AlainXlsxConfig() { }
if (false) {
    /**
     * Xlsx library path, default: `//cdn.bootcss.com/xlsx/0.15.6/xlsx.full.min.js`
     * @type {?|undefined}
     */
    AlainXlsxConfig.prototype.url;
    /**
     * Defines which Xlsx optional modules should get loaded, e.g:
     *
     * `[ '//cdn.bootcss.com/xlsx/0.15.6/cpexcel.js' ]`
     * @type {?|undefined}
     */
    AlainXlsxConfig.prototype.modules;
}
/**
 * @record
 */
export function AlainZipConfig() { }
if (false) {
    /**
     * Zip library path, Default: `//cdn.bootcss.com/jszip/3.3.0/jszip.min.js`
     * @type {?|undefined}
     */
    AlainZipConfig.prototype.url;
    /**
     * Defines which zip optional utils should get loaded
     * @type {?|undefined}
     */
    AlainZipConfig.prototype.utils;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnR5cGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL2NvbmZpZy9jb25maWcudHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBTS9DLGlDQWVDOzs7SUFkQyxnQ0FBdUM7O0lBQ3ZDLG1DQUF1Qzs7SUFDdkMsNEJBQXlCOztJQUN6Qiw4QkFBNkI7O0lBQzdCLDRCQUF5Qjs7SUFDekIsaUNBQW1DOztJQUNuQyx5QkFBbUI7O0lBQ25CLHlCQUFtQjs7SUFDbkIseUJBQW1COztJQUNuQix5QkFBbUI7O0lBQ25CLHlCQUFtQjs7SUFDbkIsMkJBQXVCOztJQUN2QiwwQkFBcUI7O0lBQ3JCLDRCQUF5Qjs7Ozs7QUFHM0IsNkNBU0M7Ozs7OztJQUxDLHVDQUFjOzs7OztJQUlkLDRDQUFtQjs7Ozs7QUFHckIsc0NBVUM7Ozs7OztJQU5DLGdDQUFjOzs7OztJQUtkLGlDQUFlOzs7OztBQUdqQix3Q0F5QkM7Ozs7OztJQXJCQyxrQ0FBMkM7Ozs7O0lBSTNDLGtDQUFjOztJQUNkLGtDQU9FOztJQUNGLG9DQUdFOzs7OztJQUlGLG1DQUFlOzs7OztBQUdqQixzQ0FnQ0M7Ozs7OztJQTVCQyxtQ0FBaUI7Ozs7O0lBSWpCLG9DQUFrQjs7Ozs7SUFJbEIsb0NBQWtCOzs7OztJQUlsQix1Q0FBcUI7Ozs7Ozs7O0lBT3JCLCtCQUFhOzs7OztJQUliLGdDQUFjOzs7OztJQUlkLHlDQUF1Qjs7Ozs7QUFHekIsMkNBc0NDOzs7Ozs7SUFsQ0MscUNBQWM7Ozs7O0lBSWQseUNBQWtCOzs7OztJQUlsQix5Q0FBa0I7Ozs7O0lBSWxCLCtDQUF5Qjs7Ozs7O0lBS3pCLG9EQUE4Qjs7Ozs7SUFJOUIsMENBQW9COzs7OztJQUlwQiwwQ0FBb0I7Ozs7O0lBSXBCLHNDQUFnQjs7Ozs7SUFJaEIsK0NBQXdCOzs7OztBQUcxQixtQ0FpQkM7Ozs7OztJQWZDLG1DQUFvQjs7Ozs7SUFFcEIsd0NBQXlCOzs7OztJQUV6QixtQ0FBb0I7Ozs7O0lBRXBCLHdDQUF5Qjs7Ozs7SUFFekIsOEJBQThCOzs7OztJQUU5Qiw2QkFBYzs7Ozs7SUFFZCxnQ0FBaUI7Ozs7O0lBRWpCLDZCQUFjOzs7OztBQUdoQixtQ0EyQkM7Ozs7Ozs7SUF0QkMsNkJBQTZCOzs7Ozs7SUFLN0IsaUNBQWdEOzs7OztJQUloRCwrQkFBZ0I7Ozs7O0lBSWhCLDRCQUFhOzs7OztJQUliLG1DQUFvQjs7Ozs7SUFJcEIsb0NBQXNCOzs7OztBQUd4QixtQ0FTQzs7Ozs7O0lBTEMsK0JBQWdCOzs7OztJQUloQiw0QkFBYTs7QUFHZjtJQUFBO0lBYUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7Ozs7Ozs7SUFYQyw2QkFBeUI7Ozs7O0lBRXpCLCtCQUFnQjs7Ozs7SUFFaEIsK0JBQW1DOzs7OztJQUVuQyw0QkFBYTs7Ozs7SUFFYixnQ0FBa0I7Ozs7O0lBRWxCLG1DQUFvQjs7Ozs7QUFHdEIscUNBV0M7Ozs7OztJQVBDLDhCQUFhOzs7Ozs7O0lBTWIsa0NBQW1COzs7OztBQUdyQixvQ0FTQzs7Ozs7O0lBTEMsNkJBQWE7Ozs7O0lBSWIsK0JBQWlCOzs7OztBQUduQixzQ0FFQzs7O0lBREMsaUNBQThDOzs7QUFLaEQsTUFBTSxLQUFPLFlBQVksR0FBRyxJQUFJLGNBQWMsQ0FBYyxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBBbGFpbkRhdGVSYW5nZVBpY2tlckNvbmZpZyB9IGZyb20gJy4vZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIudHlwZSc7XG5pbXBvcnQgeyBBbGFpblNUQ29uZmlnIH0gZnJvbSAnLi9zdC9zdC50eXBlJztcblxuZXhwb3J0IGludGVyZmFjZSBBbGFpbkNvbmZpZyB7XG4gIGRhdGFSYW5nZT86IEFsYWluRGF0ZVJhbmdlUGlja2VyQ29uZmlnO1xuICBlcnJvckNvbGxlY3Q/OiBBbGFpbkVycm9yQ29sbGVjdENvbmZpZztcbiAgaW1hZ2U/OiBBbGFpbkltYWdlQ29uZmlnO1xuICBsb2FkaW5nPzogQWxhaW5Mb2FkaW5nQ29uZmlnO1xuICBsb2RvcD86IEFsYWluTG9kb3BDb25maWc7XG4gIHBhZ2VIZWFkZXI/OiBBbGFpblBhZ2VIZWFkZXJDb25maWc7XG4gIHFyPzogQWxhaW5RUkNvbmZpZztcbiAgc2U/OiBBbGFpblNFQ29uZmlnO1xuICBzZz86IEFsYWluU0dDb25maWc7XG4gIHN2PzogQWxhaW5TVkNvbmZpZztcbiAgc3Q/OiBBbGFpblNUQ29uZmlnO1xuICB4bHN4PzogQWxhaW5YbHN4Q29uZmlnO1xuICB6aXA/OiBBbGFpblppcENvbmZpZztcbiAgY2hhcnQ/OiBBbGFpbkNoYXJ0Q29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluRXJyb3JDb2xsZWN0Q29uZmlnIHtcbiAgLyoqXG4gICAqIOebkeWQrOmikeeOh++8jOm7mOiupO+8mmA1MDBgXG4gICAqL1xuICBmcmVxPzogbnVtYmVyO1xuICAvKipcbiAgICog6aG26YOo5YGP56e75YC877yM6buY6K6k77yaYDE0NWBcbiAgICovXG4gIG9mZnNldFRvcD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGFpbkltYWdlQ29uZmlnIHtcbiAgLyoqXG4gICAqIOm7mOiupOWkp+Wwj++8jOm7mOiupOWAvO+8mmA2NGDvvIzljZXkvY3vvJpweFxuICAgKi9cbiAgc2l6ZT86IG51bWJlcjtcblxuICAvKipcbiAgICog6ZSZ6K+v5Zu+54mH77yM6buY6K6k77yaYC4vYXNzZXRzL2ltZy9sb2dvLnN2Z2BcbiAgICovXG4gIGVycm9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluTG9hZGluZ0NvbmZpZyB7XG4gIC8qKlxuICAgKiDnsbvlnovvvIzpu5jorqTvvJpgc3BpbmBcbiAgICovXG4gIHR5cGU/OiAndGV4dCcgfCAnaWNvbicgfCAnc3BpbicgfCAnY3VzdG9tJztcbiAgLyoqXG4gICAqIOaYvuekuuaWh+acrO+8jOm7mOiupO+8mmDliqDovb3kuK0uLi5gXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICBpY29uPzoge1xuICAgIC8qKiBgbnotaWNvbi5uelR5cGVg77yM6buY6K6k77yaYGxvYWRpbmdgICovXG4gICAgdHlwZT86IHN0cmluZztcbiAgICAvKiogYG56LWljb24ubnpUaGVtZWDvvIzpu5jorqTvvJpgb3V0bGluZWAgKi9cbiAgICB0aGVtZT86ICdmaWxsJyB8ICdvdXRsaW5lJyB8ICd0d290b25lJztcbiAgICAvKiogYG56LWljb24ubnpTcGluYO+8jOm7mOiupO+8mmB0cnVlYCAqL1xuICAgIHNwaW4/OiBib29sZWFuO1xuICB9O1xuICBjdXN0b20/OiB7XG4gICAgaHRtbD86IHN0cmluZyB8IFNhZmVIdG1sO1xuICAgIHN0eWxlPzogb2JqZWN0O1xuICB9O1xuICAvKipcbiAgICog5bu26L+f77yM6buY6K6k77yaYDBgXG4gICAqL1xuICBkZWxheT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGFpbkxvZG9wQ29uZmlnIHtcbiAgLyoqXG4gICAqIOazqOWGjOS/oeaBr++8muS4u+azqOWGjOWPt1xuICAgKi9cbiAgbGljZW5zZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOazqOWGjOS/oeaBr++8mumZhOWKoOazqOWGjOWPt0FcbiAgICovXG4gIGxpY2Vuc2VBPzogc3RyaW5nO1xuICAvKipcbiAgICog5rOo5YaM5L+h5oGv77ya6ZmE5Yqg5rOo5YaM5Y+3QlxuICAgKi9cbiAgbGljZW5zZUI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDms6jlhozkv6Hmga/vvJrms6jlhozljZXkvY3lkI3np7BcbiAgICovXG4gIGNvbXBhbnlOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogTG9kb3Ag6L+c56iL6ISa5pysVVJM5Zyw5Z2A77yMKirms6jmhI8qKuWKoeW/heS9v+eUqCBgbmFtZWAg5bGe5oCn5oyH5a6a5Y+Y6YeP5YC8XG4gICAqXG4gICAqIC0gaHR0cDovL2xvY2FsaG9zdDoxODAwMC9DTG9kb3BmdW5jcy5qc1xuICAgKiAtIGh0dHBzOi8vbG9jYWxob3N0Ojg0NDMvQ0xvZG9wZnVuY3MuanMgW+m7mOiupF1cbiAgICovXG4gIHVybD86IHN0cmluZztcbiAgLyoqXG4gICAqIExvZG9wIOWPmOmHj+WQje+8jOm7mOiupO+8mmBDTE9ET1BgXG4gICAqL1xuICBuYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICog5qOA5p+l5qyh5pWw77yM6buY6K6kIGAxMDBg77yM5b2T5qOA5p+l6LaF6L+H5pe26KeG5Li65byC5bi477yM6L+Z5piv5Zug5Li6IExvZG9wIOmcgOimgei/nuaOpSBXZWJTb2NrZXRcbiAgICovXG4gIGNoZWNrTWF4Q291bnQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxhaW5QYWdlSGVhZGVyQ29uZmlnIHtcbiAgLyoqXG4gICAqIOmmlumhteaWh+acrO+8jOiLpeaMh+WumuepuuihqOekuuS4jeaYvuekuu+8jOm7mOiupO+8mmDpppbpobVgXG4gICAqL1xuICBob21lPzogc3RyaW5nO1xuICAvKipcbiAgICog6aaW6aG16ZO+5o6l77yM6buY6K6k77yaYC9gXG4gICAqL1xuICBob21lTGluaz86IHN0cmluZztcbiAgLyoqXG4gICAqIOmmlumhtemTvuaOpeWbvemZheWMluWPguaVsFxuICAgKi9cbiAgaG9tZUkxOG4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDoh6rliqjnlJ/miJDlr7zoiKrvvIzku6XlvZPliY3ot6/nlLHku47kuLvoj5zljZXkuK3lrprkvY3vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGF1dG9CcmVhZGNydW1iPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOiHquWKqOWQkeS4iumAkuW9kuafpeaJvu+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICogIC0g6I+c5Y2V5pWw5o2u5rqQ5YyF5ZCrIGAvd2FyZWDvvIzliJkgYC93YXJlLzFgIOS5n+inhuS4uiBgL3dhcmVgIOmhuVxuICAgKi9cbiAgcmVjdXJzaXZlQnJlYWRjcnVtYj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDoh6rliqjnlJ/miJDmoIfpopjvvIzku6XlvZPliY3ot6/nlLHku47kuLvoj5zljZXkuK3lrprkvY3vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGF1dG9UaXRsZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKboh6rliqjlsIbmoIflh4bkv6Hmga/lkIzmraXoh7MgYFRpdGxlU2VydmljZWDjgIFgUmV1c2VTZXJ2aWNlYCDkuIvvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHN5bmNUaXRsZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKblm7rlrprmqKHlvI/vvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBmaXhlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDlm7rlrprlgY/np7vlgLzvvIzpu5jorqTvvJpgNjRgXG4gICAqL1xuICBmaXhlZE9mZnNldFRvcD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGFpblFSQ29uZmlnIHtcbiAgLyoqIOiDjOaZr++8jOm7mOiupO+8mmB3aGl0ZWAgKi9cbiAgYmFja2dyb3VuZD86IHN0cmluZztcbiAgLyoqIOiDjOaZr+mAj+aYjue6p+WIq++8jOiMg+WbtO+8mmAwLTFgIOS5i+mXtO+8jOm7mOiupO+8mmAxYCAqL1xuICBiYWNrZ3JvdW5kQWxwaGE/OiBudW1iZXI7XG4gIC8qKiDliY3mma/vvIzpu5jorqTvvJpgYmxhY2tgICovXG4gIGZvcmVncm91bmQ/OiBzdHJpbmc7XG4gIC8qKiDliY3mma/pgI/mmI7nuqfliKvvvIzojIPlm7TvvJpgMC0xYCDkuYvpl7TvvIzpu5jorqTvvJpgMWAgKi9cbiAgZm9yZWdyb3VuZEFscGhhPzogbnVtYmVyO1xuICAvKiog6K+v5beu5qCh5q2j57qn5Yir77yM6buY6K6k77yaYExgICovXG4gIGxldmVsPzogJ0wnIHwgJ00nIHwgJ1EnIHwgJ0gnO1xuICAvKiog5LqM57u056CB6L6T5Ye65Zu+54mHTUlNReexu+Wei++8jOm7mOiupO+8mmBpbWFnZS9wbmdgICovXG4gIG1pbWU/OiBzdHJpbmc7XG4gIC8qKiDlhoXovrnot53vvIjljZXkvY3vvJpweO+8ie+8jOm7mOiupO+8mmAxMGAgKi9cbiAgcGFkZGluZz86IG51bWJlcjtcbiAgLyoqIOWkp+Wwj++8iOWNleS9je+8mnB477yJ77yM6buY6K6k77yaYDIyMGAgKi9cbiAgc2l6ZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGFpblNFQ29uZmlnIHtcbiAgLyoqXG4gICAqIOWkp+Wwj++8jOm7mOiupO+8mmBkZWZhdWx0YFxuICAgKiAtIGBjb21wYWN0YCDntKflh5HlnovvvIzlvLrliLblv73nlaUgYGVycm9yYOOAgWBleHRyYWAg5bGV56S6XG4gICAqL1xuICBzaXplPzogJ2RlZmF1bHQnIHwgJ2NvbXBhY3QnO1xuICAvKipcbiAgICog5biD5bGA57G75Z6L77yM562J5ZCMIGBuekxheW91dGDvvIzpu5jorqTvvJpgaG9yaXpvbnRhbGBcbiAgICogLSBgaW5saW5lYCDml7blvLrliLblpKflsI/kuLogYGNvbXBhY3RgXG4gICAqL1xuICBuekxheW91dD86ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgfCAnaW5saW5lJztcbiAgLyoqXG4gICAqIOmXtOi3ne+8jOW9kyBgbnpMYXlvdXQ6aG9yaXpvbnRhbGAg5pe25pyJ5pWI77yM6buY6K6k77yaYDMyYFxuICAgKi9cbiAgZ3V0dGVyPzogbnVtYmVyO1xuICAvKipcbiAgICog5YiX5pWw77yM6buY6K6k77yaYDJgXG4gICAqL1xuICBjb2w/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDmoIfnrb7mlofmnKzlrr3luqbvvIzljZXkvY3vvJpgcHhg77yM6buY6K6k77yaYDE1MGBcbiAgICovXG4gIGxhYmVsV2lkdGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDmmK/lkKbnq4vljbPlkYjnjrDplJnor6/op4bop4nvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBmaXJzdFZpc3VhbD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxhaW5TR0NvbmZpZyB7XG4gIC8qKlxuICAgKiDpl7Tot53vvIzpu5jorqTvvJpgMzJgXG4gICAqL1xuICBndXR0ZXI/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDliJfmlbDvvIzpu5jorqTvvJpgMmBcbiAgICovXG4gIGNvbD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEFsYWluU1ZDb25maWcge1xuICAvKiog5aSn5bCP77yM6buY6K6k77yaYGxhcmdlYCAqL1xuICBzaXplPzogJ3NtYWxsJyB8ICdsYXJnZSc7XG4gIC8qKiDpl7Tot53vvIzpu5jorqTvvJpgMzJgICovXG4gIGd1dHRlcj86IG51bWJlcjtcbiAgLyoqIOW4g+WxgO+8jOm7mOiupO+8mmBob3Jpem9udGFsYCAqL1xuICBsYXlvdXQ/OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xuICAvKiog5YiX5pWw77yM6buY6K6k77yaYDNgICovXG4gIGNvbD86IG51bWJlcjtcbiAgLyoqIOaYr+WQpuaYvuekuum7mOiupOWAvO+8jOW9k+WGheWuueS4uuepuuWAvOaXtuaYvuekuiBgLWDvvIzpu5jorqTvvJpgdHJ1ZWAgKi9cbiAgZGVmYXVsdD86IGJvb2xlYW47XG4gIC8qKiBgbGFiZWxgIOWbuuWumuWuveW6pu+8jOiLpSBgbnVsbGAg5oiWIGB1bmRlZmluZWRgIOihqOekuumdnuWbuuWumu+8jOm7mOiupO+8mmBudWxsYCAqL1xuICBsYWJlbFdpZHRoPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluWGxzeENvbmZpZyB7XG4gIC8qKlxuICAgKiBYbHN4IGxpYnJhcnkgcGF0aCwgZGVmYXVsdDogYC8vY2RuLmJvb3Rjc3MuY29tL3hsc3gvMC4xNS42L3hsc3guZnVsbC5taW4uanNgXG4gICAqL1xuICB1cmw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBEZWZpbmVzIHdoaWNoIFhsc3ggb3B0aW9uYWwgbW9kdWxlcyBzaG91bGQgZ2V0IGxvYWRlZCwgZS5nOlxuICAgKlxuICAgKiBgWyAnLy9jZG4uYm9vdGNzcy5jb20veGxzeC8wLjE1LjYvY3BleGNlbC5qcycgXWBcbiAgICovXG4gIG1vZHVsZXM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGFpblppcENvbmZpZyB7XG4gIC8qKlxuICAgKiBaaXAgbGlicmFyeSBwYXRoLCBEZWZhdWx0OiBgLy9jZG4uYm9vdGNzcy5jb20vanN6aXAvMy4zLjAvanN6aXAubWluLmpzYFxuICAgKi9cbiAgdXJsPzogc3RyaW5nO1xuICAvKipcbiAgICogRGVmaW5lcyB3aGljaCB6aXAgb3B0aW9uYWwgdXRpbHMgc2hvdWxkIGdldCBsb2FkZWRcbiAgICovXG4gIHV0aWxzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxhaW5DaGFydENvbmZpZyB7XG4gIHRoZW1lPzogc3RyaW5nIHwgeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfTtcbn1cblxuZXhwb3J0IHR5cGUgQWxhaW5Db25maWdLZXkgPSBrZXlvZiBBbGFpbkNvbmZpZztcblxuZXhwb3J0IGNvbnN0IEFMQUlOX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBbGFpbkNvbmZpZz4oJ2FsYWluLWNvbmZpZycpO1xuIl19