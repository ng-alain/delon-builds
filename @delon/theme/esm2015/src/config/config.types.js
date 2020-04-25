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
export class AlainSVConfig {
}
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
export const ALAIN_CONFIG = new InjectionToken('alain-config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnR5cGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL2NvbmZpZy9jb25maWcudHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBTS9DLGlDQWVDOzs7SUFkQyxnQ0FBdUM7O0lBQ3ZDLG1DQUF1Qzs7SUFDdkMsNEJBQXlCOztJQUN6Qiw4QkFBNkI7O0lBQzdCLDRCQUF5Qjs7SUFDekIsaUNBQW1DOztJQUNuQyx5QkFBbUI7O0lBQ25CLHlCQUFtQjs7SUFDbkIseUJBQW1COztJQUNuQix5QkFBbUI7O0lBQ25CLHlCQUFtQjs7SUFDbkIsMkJBQXVCOztJQUN2QiwwQkFBcUI7O0lBQ3JCLDRCQUF5Qjs7Ozs7QUFHM0IsNkNBU0M7Ozs7OztJQUxDLHVDQUFjOzs7OztJQUlkLDRDQUFtQjs7Ozs7QUFHckIsc0NBVUM7Ozs7OztJQU5DLGdDQUFjOzs7OztJQUtkLGlDQUFlOzs7OztBQUdqQix3Q0F5QkM7Ozs7OztJQXJCQyxrQ0FBMkM7Ozs7O0lBSTNDLGtDQUFjOztJQUNkLGtDQU9FOztJQUNGLG9DQUdFOzs7OztJQUlGLG1DQUFlOzs7OztBQUdqQixzQ0FnQ0M7Ozs7OztJQTVCQyxtQ0FBaUI7Ozs7O0lBSWpCLG9DQUFrQjs7Ozs7SUFJbEIsb0NBQWtCOzs7OztJQUlsQix1Q0FBcUI7Ozs7Ozs7O0lBT3JCLCtCQUFhOzs7OztJQUliLGdDQUFjOzs7OztJQUlkLHlDQUF1Qjs7Ozs7QUFHekIsMkNBc0NDOzs7Ozs7SUFsQ0MscUNBQWM7Ozs7O0lBSWQseUNBQWtCOzs7OztJQUlsQix5Q0FBa0I7Ozs7O0lBSWxCLCtDQUF5Qjs7Ozs7O0lBS3pCLG9EQUE4Qjs7Ozs7SUFJOUIsMENBQW9COzs7OztJQUlwQiwwQ0FBb0I7Ozs7O0lBSXBCLHNDQUFnQjs7Ozs7SUFJaEIsK0NBQXdCOzs7OztBQUcxQixtQ0FpQkM7Ozs7OztJQWZDLG1DQUFvQjs7Ozs7SUFFcEIsd0NBQXlCOzs7OztJQUV6QixtQ0FBb0I7Ozs7O0lBRXBCLHdDQUF5Qjs7Ozs7SUFFekIsOEJBQThCOzs7OztJQUU5Qiw2QkFBYzs7Ozs7SUFFZCxnQ0FBaUI7Ozs7O0lBRWpCLDZCQUFjOzs7OztBQUdoQixtQ0EyQkM7Ozs7Ozs7SUF0QkMsNkJBQTZCOzs7Ozs7SUFLN0IsaUNBQWdEOzs7OztJQUloRCwrQkFBZ0I7Ozs7O0lBSWhCLDRCQUFhOzs7OztJQUliLG1DQUFvQjs7Ozs7SUFJcEIsb0NBQXNCOzs7OztBQUd4QixtQ0FTQzs7Ozs7O0lBTEMsK0JBQWdCOzs7OztJQUloQiw0QkFBYTs7QUFHZixNQUFNLE9BQU8sYUFBYTtDQWF6Qjs7Ozs7O0lBWEMsNkJBQXlCOzs7OztJQUV6QiwrQkFBZ0I7Ozs7O0lBRWhCLCtCQUFtQzs7Ozs7SUFFbkMsNEJBQWE7Ozs7O0lBRWIsZ0NBQWtCOzs7OztJQUVsQixtQ0FBb0I7Ozs7O0FBR3RCLHFDQVdDOzs7Ozs7SUFQQyw4QkFBYTs7Ozs7OztJQU1iLGtDQUFtQjs7Ozs7QUFHckIsb0NBU0M7Ozs7OztJQUxDLDZCQUFhOzs7OztJQUliLCtCQUFpQjs7Ozs7QUFHbkIsc0NBRUM7OztJQURDLGlDQUE4Qzs7O0FBS2hELE1BQU0sT0FBTyxZQUFZLEdBQUcsSUFBSSxjQUFjLENBQWMsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgQWxhaW5EYXRlUmFuZ2VQaWNrZXJDb25maWcgfSBmcm9tICcuL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLnR5cGUnO1xuaW1wb3J0IHsgQWxhaW5TVENvbmZpZyB9IGZyb20gJy4vc3Qvc3QudHlwZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxhaW5Db25maWcge1xuICBkYXRhUmFuZ2U/OiBBbGFpbkRhdGVSYW5nZVBpY2tlckNvbmZpZztcbiAgZXJyb3JDb2xsZWN0PzogQWxhaW5FcnJvckNvbGxlY3RDb25maWc7XG4gIGltYWdlPzogQWxhaW5JbWFnZUNvbmZpZztcbiAgbG9hZGluZz86IEFsYWluTG9hZGluZ0NvbmZpZztcbiAgbG9kb3A/OiBBbGFpbkxvZG9wQ29uZmlnO1xuICBwYWdlSGVhZGVyPzogQWxhaW5QYWdlSGVhZGVyQ29uZmlnO1xuICBxcj86IEFsYWluUVJDb25maWc7XG4gIHNlPzogQWxhaW5TRUNvbmZpZztcbiAgc2c/OiBBbGFpblNHQ29uZmlnO1xuICBzdj86IEFsYWluU1ZDb25maWc7XG4gIHN0PzogQWxhaW5TVENvbmZpZztcbiAgeGxzeD86IEFsYWluWGxzeENvbmZpZztcbiAgemlwPzogQWxhaW5aaXBDb25maWc7XG4gIGNoYXJ0PzogQWxhaW5DaGFydENvbmZpZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGFpbkVycm9yQ29sbGVjdENvbmZpZyB7XG4gIC8qKlxuICAgKiDnm5HlkKzpopHnjofvvIzpu5jorqTvvJpgNTAwYFxuICAgKi9cbiAgZnJlcT86IG51bWJlcjtcbiAgLyoqXG4gICAqIOmhtumDqOWBj+enu+WAvO+8jOm7mOiupO+8mmAxNDVgXG4gICAqL1xuICBvZmZzZXRUb3A/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxhaW5JbWFnZUNvbmZpZyB7XG4gIC8qKlxuICAgKiDpu5jorqTlpKflsI/vvIzpu5jorqTlgLzvvJpgNjRg77yM5Y2V5L2N77yacHhcbiAgICovXG4gIHNpemU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIOmUmeivr+WbvueJh++8jOm7mOiupO+8mmAuL2Fzc2V0cy9pbWcvbG9nby5zdmdgXG4gICAqL1xuICBlcnJvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGFpbkxvYWRpbmdDb25maWcge1xuICAvKipcbiAgICog57G75Z6L77yM6buY6K6k77yaYHNwaW5gXG4gICAqL1xuICB0eXBlPzogJ3RleHQnIHwgJ2ljb24nIHwgJ3NwaW4nIHwgJ2N1c3RvbSc7XG4gIC8qKlxuICAgKiDmmL7npLrmlofmnKzvvIzpu5jorqTvvJpg5Yqg6L295LitLi4uYFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgaWNvbj86IHtcbiAgICAvKiogYG56LWljb24ubnpUeXBlYO+8jOm7mOiupO+8mmBsb2FkaW5nYCAqL1xuICAgIHR5cGU/OiBzdHJpbmc7XG4gICAgLyoqIGBuei1pY29uLm56VGhlbWVg77yM6buY6K6k77yaYG91dGxpbmVgICovXG4gICAgdGhlbWU/OiAnZmlsbCcgfCAnb3V0bGluZScgfCAndHdvdG9uZSc7XG4gICAgLyoqIGBuei1pY29uLm56U3BpbmDvvIzpu5jorqTvvJpgdHJ1ZWAgKi9cbiAgICBzcGluPzogYm9vbGVhbjtcbiAgfTtcbiAgY3VzdG9tPzoge1xuICAgIGh0bWw/OiBzdHJpbmcgfCBTYWZlSHRtbDtcbiAgICBzdHlsZT86IG9iamVjdDtcbiAgfTtcbiAgLyoqXG4gICAqIOW7tui/n++8jOm7mOiupO+8mmAwYFxuICAgKi9cbiAgZGVsYXk/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxhaW5Mb2RvcENvbmZpZyB7XG4gIC8qKlxuICAgKiDms6jlhozkv6Hmga/vvJrkuLvms6jlhozlj7dcbiAgICovXG4gIGxpY2Vuc2U/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDms6jlhozkv6Hmga/vvJrpmYTliqDms6jlhozlj7dBXG4gICAqL1xuICBsaWNlbnNlQT86IHN0cmluZztcbiAgLyoqXG4gICAqIOazqOWGjOS/oeaBr++8mumZhOWKoOazqOWGjOWPt0JcbiAgICovXG4gIGxpY2Vuc2VCPzogc3RyaW5nO1xuICAvKipcbiAgICog5rOo5YaM5L+h5oGv77ya5rOo5YaM5Y2V5L2N5ZCN56ewXG4gICAqL1xuICBjb21wYW55TmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIExvZG9wIOi/nOeoi+iEmuacrFVSTOWcsOWdgO+8jCoq5rOo5oSPKirliqHlv4Xkvb/nlKggYG5hbWVgIOWxnuaAp+aMh+WumuWPmOmHj+WAvFxuICAgKlxuICAgKiAtIGh0dHA6Ly9sb2NhbGhvc3Q6MTgwMDAvQ0xvZG9wZnVuY3MuanNcbiAgICogLSBodHRwczovL2xvY2FsaG9zdDo4NDQzL0NMb2RvcGZ1bmNzLmpzIFvpu5jorqRdXG4gICAqL1xuICB1cmw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBMb2RvcCDlj5jph4/lkI3vvIzpu5jorqTvvJpgQ0xPRE9QYFxuICAgKi9cbiAgbmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOajgOafpeasoeaVsO+8jOm7mOiupCBgMTAwYO+8jOW9k+ajgOafpei2hei/h+aXtuinhuS4uuW8guW4uO+8jOi/meaYr+WboOS4uiBMb2RvcCDpnIDopoHov57mjqUgV2ViU29ja2V0XG4gICAqL1xuICBjaGVja01heENvdW50PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluUGFnZUhlYWRlckNvbmZpZyB7XG4gIC8qKlxuICAgKiDpppbpobXmlofmnKzvvIzoi6XmjIflrprnqbrooajnpLrkuI3mmL7npLrvvIzpu5jorqTvvJpg6aaW6aG1YFxuICAgKi9cbiAgaG9tZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOmmlumhtemTvuaOpe+8jOm7mOiupO+8mmAvYFxuICAgKi9cbiAgaG9tZUxpbms/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDpppbpobXpk77mjqXlm73pmYXljJblj4LmlbBcbiAgICovXG4gIGhvbWVJMThuPzogc3RyaW5nO1xuICAvKipcbiAgICog6Ieq5Yqo55Sf5oiQ5a+86Iiq77yM5Lul5b2T5YmN6Lev55Sx5LuO5Li76I+c5Y2V5Lit5a6a5L2N77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBhdXRvQnJlYWRjcnVtYj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDoh6rliqjlkJHkuIrpgJLlvZLmn6Xmib7vvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqICAtIOiPnOWNleaVsOaNrua6kOWMheWQqyBgL3dhcmVg77yM5YiZIGAvd2FyZS8xYCDkuZ/op4bkuLogYC93YXJlYCDpoblcbiAgICovXG4gIHJlY3Vyc2l2ZUJyZWFkY3J1bWI/OiBib29sZWFuO1xuICAvKipcbiAgICog6Ieq5Yqo55Sf5oiQ5qCH6aKY77yM5Lul5b2T5YmN6Lev55Sx5LuO5Li76I+c5Y2V5Lit5a6a5L2N77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBhdXRvVGl0bGU/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm6Ieq5Yqo5bCG5qCH5YeG5L+h5oGv5ZCM5q2l6IezIGBUaXRsZVNlcnZpY2Vg44CBYFJldXNlU2VydmljZWAg5LiL77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBzeW5jVGl0bGU/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5Zu65a6a5qih5byP77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgZml4ZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5Zu65a6a5YGP56e75YC877yM6buY6K6k77yaYDY0YFxuICAgKi9cbiAgZml4ZWRPZmZzZXRUb3A/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxhaW5RUkNvbmZpZyB7XG4gIC8qKiDog4zmma/vvIzpu5jorqTvvJpgd2hpdGVgICovXG4gIGJhY2tncm91bmQ/OiBzdHJpbmc7XG4gIC8qKiDog4zmma/pgI/mmI7nuqfliKvvvIzojIPlm7TvvJpgMC0xYCDkuYvpl7TvvIzpu5jorqTvvJpgMWAgKi9cbiAgYmFja2dyb3VuZEFscGhhPzogbnVtYmVyO1xuICAvKiog5YmN5pmv77yM6buY6K6k77yaYGJsYWNrYCAqL1xuICBmb3JlZ3JvdW5kPzogc3RyaW5nO1xuICAvKiog5YmN5pmv6YCP5piO57qn5Yir77yM6IyD5Zu077yaYDAtMWAg5LmL6Ze077yM6buY6K6k77yaYDFgICovXG4gIGZvcmVncm91bmRBbHBoYT86IG51bWJlcjtcbiAgLyoqIOivr+W3ruagoeato+e6p+WIq++8jOm7mOiupO+8mmBMYCAqL1xuICBsZXZlbD86ICdMJyB8ICdNJyB8ICdRJyB8ICdIJztcbiAgLyoqIOS6jOe7tOeggei+k+WHuuWbvueJh01JTUXnsbvlnovvvIzpu5jorqTvvJpgaW1hZ2UvcG5nYCAqL1xuICBtaW1lPzogc3RyaW5nO1xuICAvKiog5YaF6L656Led77yI5Y2V5L2N77yacHjvvInvvIzpu5jorqTvvJpgMTBgICovXG4gIHBhZGRpbmc/OiBudW1iZXI7XG4gIC8qKiDlpKflsI/vvIjljZXkvY3vvJpweO+8ie+8jOm7mOiupO+8mmAyMjBgICovXG4gIHNpemU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxhaW5TRUNvbmZpZyB7XG4gIC8qKlxuICAgKiDlpKflsI/vvIzpu5jorqTvvJpgZGVmYXVsdGBcbiAgICogLSBgY29tcGFjdGAg57Sn5YeR5Z6L77yM5by65Yi25b+955WlIGBlcnJvcmDjgIFgZXh0cmFgIOWxleekulxuICAgKi9cbiAgc2l6ZT86ICdkZWZhdWx0JyB8ICdjb21wYWN0JztcbiAgLyoqXG4gICAqIOW4g+WxgOexu+Wei++8jOetieWQjCBgbnpMYXlvdXRg77yM6buY6K6k77yaYGhvcml6b250YWxgXG4gICAqIC0gYGlubGluZWAg5pe25by65Yi25aSn5bCP5Li6IGBjb21wYWN0YFxuICAgKi9cbiAgbnpMYXlvdXQ/OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnIHwgJ2lubGluZSc7XG4gIC8qKlxuICAgKiDpl7Tot53vvIzlvZMgYG56TGF5b3V0Omhvcml6b250YWxgIOaXtuacieaViO+8jOm7mOiupO+8mmAzMmBcbiAgICovXG4gIGd1dHRlcj86IG51bWJlcjtcbiAgLyoqXG4gICAqIOWIl+aVsO+8jOm7mOiupO+8mmAyYFxuICAgKi9cbiAgY29sPzogbnVtYmVyO1xuICAvKipcbiAgICog5qCH562+5paH5pys5a695bqm77yM5Y2V5L2N77yaYHB4YO+8jOm7mOiupO+8mmAxNTBgXG4gICAqL1xuICBsYWJlbFdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICog5piv5ZCm56uL5Y2z5ZGI546w6ZSZ6K+v6KeG6KeJ77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgZmlyc3RWaXN1YWw/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluU0dDb25maWcge1xuICAvKipcbiAgICog6Ze06Led77yM6buY6K6k77yaYDMyYFxuICAgKi9cbiAgZ3V0dGVyPzogbnVtYmVyO1xuICAvKipcbiAgICog5YiX5pWw77yM6buY6K6k77yaYDJgXG4gICAqL1xuICBjb2w/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBBbGFpblNWQ29uZmlnIHtcbiAgLyoqIOWkp+Wwj++8jOm7mOiupO+8mmBsYXJnZWAgKi9cbiAgc2l6ZT86ICdzbWFsbCcgfCAnbGFyZ2UnO1xuICAvKiog6Ze06Led77yM6buY6K6k77yaYDMyYCAqL1xuICBndXR0ZXI/OiBudW1iZXI7XG4gIC8qKiDluIPlsYDvvIzpu5jorqTvvJpgaG9yaXpvbnRhbGAgKi9cbiAgbGF5b3V0PzogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcbiAgLyoqIOWIl+aVsO+8jOm7mOiupO+8mmAzYCAqL1xuICBjb2w/OiBudW1iZXI7XG4gIC8qKiDmmK/lkKbmmL7npLrpu5jorqTlgLzvvIzlvZPlhoXlrrnkuLrnqbrlgLzml7bmmL7npLogYC1g77yM6buY6K6k77yaYHRydWVgICovXG4gIGRlZmF1bHQ/OiBib29sZWFuO1xuICAvKiogYGxhYmVsYCDlm7rlrprlrr3luqbvvIzoi6UgYG51bGxgIOaIliBgdW5kZWZpbmVkYCDooajnpLrpnZ7lm7rlrprvvIzpu5jorqTvvJpgbnVsbGAgKi9cbiAgbGFiZWxXaWR0aD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGFpblhsc3hDb25maWcge1xuICAvKipcbiAgICogWGxzeCBsaWJyYXJ5IHBhdGgsIGRlZmF1bHQ6IGAvL2Nkbi5ib290Y3NzLmNvbS94bHN4LzAuMTUuNi94bHN4LmZ1bGwubWluLmpzYFxuICAgKi9cbiAgdXJsPzogc3RyaW5nO1xuICAvKipcbiAgICogRGVmaW5lcyB3aGljaCBYbHN4IG9wdGlvbmFsIG1vZHVsZXMgc2hvdWxkIGdldCBsb2FkZWQsIGUuZzpcbiAgICpcbiAgICogYFsgJy8vY2RuLmJvb3Rjc3MuY29tL3hsc3gvMC4xNS42L2NwZXhjZWwuanMnIF1gXG4gICAqL1xuICBtb2R1bGVzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxhaW5aaXBDb25maWcge1xuICAvKipcbiAgICogWmlwIGxpYnJhcnkgcGF0aCwgRGVmYXVsdDogYC8vY2RuLmJvb3Rjc3MuY29tL2pzemlwLzMuMy4wL2pzemlwLm1pbi5qc2BcbiAgICovXG4gIHVybD86IHN0cmluZztcbiAgLyoqXG4gICAqIERlZmluZXMgd2hpY2ggemlwIG9wdGlvbmFsIHV0aWxzIHNob3VsZCBnZXQgbG9hZGVkXG4gICAqL1xuICB1dGlscz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluQ2hhcnRDb25maWcge1xuICB0aGVtZT86IHN0cmluZyB8IHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55IH07XG59XG5cbmV4cG9ydCB0eXBlIEFsYWluQ29uZmlnS2V5ID0ga2V5b2YgQWxhaW5Db25maWc7XG5cbmV4cG9ydCBjb25zdCBBTEFJTl9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48QWxhaW5Db25maWc+KCdhbGFpbi1jb25maWcnKTtcbiJdfQ==