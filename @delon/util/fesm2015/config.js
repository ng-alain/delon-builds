import { InjectionToken, Injectable, Optional, Inject, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { deepMergeKey } from '@delon/util/other';

/**
 * @fileoverview added by tsickle
 * Generated from: abc/error-collect.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainErrorCollectConfig() { }
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
 * @fileoverview added by tsickle
 * Generated from: abc/image.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainImageConfig() { }
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
 * @fileoverview added by tsickle
 * Generated from: abc/date-picker.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainDateRangePickerConfig() { }
if (false) {
    /**
     * 默认：`yyyy-MM-dd`
     * @type {?|undefined}
     */
    AlainDateRangePickerConfig.prototype.nzFormat;
    /** @type {?|undefined} */
    AlainDateRangePickerConfig.prototype.nzClassName;
    /** @type {?|undefined} */
    AlainDateRangePickerConfig.prototype.nzSize;
    /** @type {?|undefined} */
    AlainDateRangePickerConfig.prototype.nzStyle;
    /**
     * 默认：`true`
     * @type {?|undefined}
     */
    AlainDateRangePickerConfig.prototype.nzAllowClear;
    /**
     * 默认：`false`
     * @type {?|undefined}
     */
    AlainDateRangePickerConfig.prototype.nzAutoFocus;
    /** @type {?|undefined} */
    AlainDateRangePickerConfig.prototype.nzDisabledDate;
    /** @type {?|undefined} */
    AlainDateRangePickerConfig.prototype.nzDisabledTime;
    /**
     * 默认：`{ position: 'relative' }`
     * @type {?|undefined}
     */
    AlainDateRangePickerConfig.prototype.nzPopupStyle;
    /** @type {?|undefined} */
    AlainDateRangePickerConfig.prototype.nzDropdownClassName;
    /** @type {?|undefined} */
    AlainDateRangePickerConfig.prototype.nzRenderExtraFooter;
    /** @type {?|undefined} */
    AlainDateRangePickerConfig.prototype.nzShowTime;
    /**
     * 默认：`true`
     * @type {?|undefined}
     */
    AlainDateRangePickerConfig.prototype.nzShowToday;
    /** @type {?|undefined} */
    AlainDateRangePickerConfig.prototype.nzMode;
    /** @type {?|undefined} */
    AlainDateRangePickerConfig.prototype.nzRanges;
    /** @type {?|undefined} */
    AlainDateRangePickerConfig.prototype.shortcuts;
}
/**
 * @record
 */
function AlainDateRangePickerShortcut() { }
if (false) {
    /**
     * Whether to enable, default: `false`
     * @type {?|undefined}
     */
    AlainDateRangePickerShortcut.prototype.enabled;
    /**
     * Whether to close the panel after clicking, default: `true`
     * @type {?|undefined}
     */
    AlainDateRangePickerShortcut.prototype.closed;
    /**
     * Shortcut list, default: `今天`, `昨天`, `近3天`, `近7天`, `本周`, `本月`, `全年`
     * @type {?|undefined}
     */
    AlainDateRangePickerShortcut.prototype.list;
}
/**
 * @record
 */
function AlainDateRangePickerShortcutItem() { }
if (false) {
    /** @type {?} */
    AlainDateRangePickerShortcutItem.prototype.text;
    /** @type {?} */
    AlainDateRangePickerShortcutItem.prototype.fn;
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
}

/**
 * @fileoverview added by tsickle
 * Generated from: abc/loading.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainLoadingConfig() { }
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
    /**
     * 文字方向
     * @type {?|undefined}
     */
    AlainLoadingConfig.prototype.direction;
}

/**
 * @fileoverview added by tsickle
 * Generated from: abc/lodop.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainLodopConfig() { }
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
 * @fileoverview added by tsickle
 * Generated from: abc/page-header.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainPageHeaderConfig() { }
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
 * @fileoverview added by tsickle
 * Generated from: abc/qr.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainQRConfig() { }
if (false) {
    /**
     * [qrious](https://neocotic.com/qrious) 外网地址，默认：`https://cdn.bootcdn.net/ajax/libs/qrious/4.0.2/qrious.min.js`
     *
     * 若在 `angular.json` 配置 `"scripts": [ "node_modules/qrious/dist/qrious.min.js" ]` 则优先使用
     * @type {?|undefined}
     */
    AlainQRConfig.prototype.lib;
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
    /** @type {?|undefined} */
    AlainQRConfig.prototype.delay;
}

/**
 * @fileoverview added by tsickle
 * Generated from: abc/se.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainSEConfig() { }
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
    /**
     * 是否忽略 `dirty` 校验，默认：`false`
     * @type {?|undefined}
     */
    AlainSEConfig.prototype.ingoreDirty;
}

/**
 * @fileoverview added by tsickle
 * Generated from: abc/sv.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlainSVConfig {
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
 * @fileoverview added by tsickle
 * Generated from: abc/sg.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainSGConfig() { }
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

/**
 * @fileoverview added by tsickle
 * Generated from: abc/st.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainSTConfig() { }
if (false) {
    /**
     * 起始页码，默认为：`1`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.pi;
    /**
     * 每页数量，默认：`10`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.ps;
    /**
     * 是否显示边框，默认：`false`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.bordered;
    /**
     * table大小，默认：`default`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.size;
    /**
     * 是否开启响应式，默认：`true`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.responsive;
    /**
     * 是否在小屏幕下才显示顶部与底部，默认：`false`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.responsiveHideHeaderFooter;
    /**
     * 请求体配置
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.req;
    /**
     * 返回体配置
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.res;
    /**
     * 返回体配置
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.page;
    /**
     * 重命名排序值，`columns` 的重命名高于属性
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.sortReName;
    /**
     * 单排序规则
     * - 若不指定，则返回：`columnName=ascend|descend`
     * - 若指定，则返回：`sort=columnName.(ascend|descend)`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.singleSort;
    /**
     * 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.multiSort;
    /**
     * 按钮模态框配置
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.modal;
    /**
     * 按钮抽屉配置
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.drawer;
    /**
     * 气泡参数
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.pop;
    /**
     * 行单击多少时长之类为双击（单位：毫秒），默认：`200`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.rowClickTime;
    /**
     * 过滤按钮确认文本
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.filterConfirmText;
    /**
     * 过滤按钮重置文本
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.filterClearText;
    /**
     * 按钮图标
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.btnIcon;
    /**
     * 行号索引，默认：`1`
     * - 计算规则为：`index + noIndex`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.noIndex;
    /**
     * 表格行的类名
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.rowClassName;
    /**
     * 通过点击行来展开子行，Default: `false`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.expandRowByClick;
    /**
     * 手风琴模式，Default: `false`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.expandAccordion;
    /**
     * 指定 `width` 模式
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.widthMode;
    /**
     * Default: `54`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.virtualItemSize;
    /**
     * Default: `200`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.virtualMaxBufferPx;
    /**
     * Default: `100`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.virtualMinBufferPx;
    /**
     * The TrackByFunction to use for tracking changes
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.virtualForTrackBy;
    /**
     * Conditional expression rendering behavior, can be set to `hide` (default) or `disabled`, Default: `hide`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.iifBehavior;
    /**
     * The spinning indicator
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.loadingIndicator;
    /**
     * Specifies a delay in milliseconds for loading state (prevent flush)
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.loadingDelay;
    /**
     * Custom no result content
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.noResult;
}

/**
 * @fileoverview added by tsickle
 * Generated from: abc/xlsx.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainXlsxConfig() { }
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
 * @fileoverview added by tsickle
 * Generated from: abc/zip.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainZipConfig() { }
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
 * @fileoverview added by tsickle
 * Generated from: abc/media.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainMediaConfig() { }
if (false) {
    /**
     * Plyr library path, default: `["https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.min.js", "https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.css"]`
     * @type {?|undefined}
     */
    AlainMediaConfig.prototype.urls;
    /**
     * Please refer to [plyr options](https://github.com/sampotts/plyr#options)
     * @type {?|undefined}
     */
    AlainMediaConfig.prototype.options;
}

/**
 * @fileoverview added by tsickle
 * Generated from: abc/pdf.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainPdfConfig() { }
if (false) {
    /**
     * [pdf.js](https://github.com/mozilla/pdf.js) library root url, Default: `https://cdn.jsdelivr.net/npm/pdfjs-dist\@2.5.207/`
     *
     * **Note** That only the root path, muse be ending with `/`
     * @type {?|undefined}
     */
    AlainPdfConfig.prototype.lib;
    /**
     * Show single or all pages altogether, Default: `true`
     * @type {?|undefined}
     */
    AlainPdfConfig.prototype.showAll;
    /**
     * Enable text rendering, allows to select text, Default: `true`
     * @type {?|undefined}
     */
    AlainPdfConfig.prototype.renderText;
    /**
     * Show page borders, Default: `false`
     * @type {?|undefined}
     */
    AlainPdfConfig.prototype.showBorders;
    /**
     * Default: `true`
     * - if set to `true` - size will be as same as original document
     * - if set to `false` - size will be as same as container block
     * @type {?|undefined}
     */
    AlainPdfConfig.prototype.originalSize;
    /**
     * You can show your document in original size, and make sure that it's not bigger then container block. Default: `false`
     * @type {?|undefined}
     */
    AlainPdfConfig.prototype.fitToPage;
    /**
     * Turn on or off auto resize, Default: `true`
     * **Important** To make work - make sure that `[originalSize]="false"` and pdf-viewer tag has `max-width` or `display` are set.
     * @type {?|undefined}
     */
    AlainPdfConfig.prototype.autoReSize;
}

/**
 * @fileoverview added by tsickle
 * Generated from: abc/onboarding.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainOnboardingConfig() { }
if (false) {
    /**
     * 文字方向
     * @type {?|undefined}
     */
    AlainOnboardingConfig.prototype.direction;
}

/**
 * @fileoverview added by tsickle
 * Generated from: abc/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: acl/acl.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainACLConfig() { }
if (false) {
    /**
     * Router URL when guard fail, default: `/403`
     * @type {?|undefined}
     */
    AlainACLConfig.prototype.guard_url;
    /**
     * `can` before execution callback
     * @type {?|undefined}
     */
    AlainACLConfig.prototype.preCan;
}
/**
 * @record
 */
function AlainACLType() { }
if (false) {
    /**
     * 角色
     * @type {?|undefined}
     */
    AlainACLType.prototype.role;
    /**
     * 权限点
     * @type {?|undefined}
     */
    AlainACLType.prototype.ability;
    /**
     * Validated against, default: `oneOf`
     * - `allOf` the value validates against all the roles or abilities
     * - `oneOf` the value validates against exactly one of the roles or abilities
     * @type {?|undefined}
     */
    AlainACLType.prototype.mode;
    /**
     * 是否取反，即结果为 `true` 时表示未授权
     * @type {?|undefined}
     */
    AlainACLType.prototype.except;
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
}

/**
 * @fileoverview added by tsickle
 * Generated from: auth/auth.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainAuthConfig() { }
if (false) {
    /**
     * 存储KEY值，默认：`_token`
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.store_key;
    /**
     * 无效时跳转至登录页，默认：`true`，包括：
     * - 无效token值
     * - token已过期（限JWT）
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.token_invalid_redirect;
    /**
     * token过期时间偏移值，默认：`10` 秒（单位：秒）
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.token_exp_offset;
    /**
     * 发送token参数名，默认：·
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.token_send_key;
    /**
     * 发送token模板（默认为：`'${token}'`），使用 `${token}` 表示token点位符（**注意：**请务必使用 \`\` 包裹），例如：
     *
     * - `Bearer ${token}`
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.token_send_template;
    /**
     * 发送token参数位置，默认：`header`
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.token_send_place;
    /**
     * 登录页路由地址，默认：`/login`
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.login_url;
    /**
     * 忽略TOKEN的URL地址列表，默认值为：`[/\/login/, /assets\//, /passport\//]`
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.ignores;
    /**
     * 允许匿名登录KEY，若请求参数中带有该KEY表示忽略TOKEN，默认：`_allow_anonymous`
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.allow_anonymous_key;
    /**
     * 是否校验失效时命中后继续调用后续拦截器的 `intercept` 方法，默认：`true`
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.executeOtherInterceptors;
    /**
     * 刷新间隔时长（单位：ms），默认：`3000`
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.refreshTime;
    /**
     * 过期计算偏移值（单位：ms），默认：`6000`
     * - **建议**根据 `refreshTime` 倍数来设置
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.refreshOffset;
}

/**
 * @fileoverview added by tsickle
 * Generated from: cache/cache.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainCacheConfig() { }
if (false) {
    /**
     * Cache mode, default: `promise`
     * - `promise` Convention mode, allowing `key` to get data as http
     * - `none` Normal mode
     * @type {?|undefined}
     */
    AlainCacheConfig.prototype.mode;
    /**
     * Rename the return parameters, default: ``, for example:
     * - `null` The response body is content
     * - `list` The response body should be `{ list: [] }`
     * - `result.list` The response body should be `{ result: { list: [] } }`
     * @type {?|undefined}
     */
    AlainCacheConfig.prototype.reName;
    /**
     * Set the default storage type
     * - `m` Storage via memory
     * - `s` Storage via `localStorage`
     * @type {?|undefined}
     */
    AlainCacheConfig.prototype.type;
    /**
     * Set the default expire time (Unit: second)
     * @type {?|undefined}
     */
    AlainCacheConfig.prototype.expire;
    /**
     * Key prefix of persistent data, default: ``
     * @type {?|undefined}
     */
    AlainCacheConfig.prototype.prefix;
    /**
     * Key name of persistent data metadata storage, default: `__cache_meta`
     * @type {?|undefined}
     */
    AlainCacheConfig.prototype.meta_key;
}

/**
 * @fileoverview added by tsickle
 * Generated from: chart/chart.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainChartConfig() { }
if (false) {
    /**
     * [G2](https://g2.antv.vision/zh/docs/manual/getting-started) library path
     * default: `[
     *  "https://gw.alipayobjects.com/os/lib/antv/g2/4.1.4/dist/g2.min.js",
     *  "https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.7/dist/data-set.js",
     * ]`
     * @type {?|undefined}
     */
    AlainChartConfig.prototype.libs;
    /** @type {?|undefined} */
    AlainChartConfig.prototype.theme;
}

/**
 * @fileoverview added by tsickle
 * Generated from: util/array.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainUtilArrayConfig() { }
if (false) {
    /**
     * 深度项名，默认：`'deep'`
     * @type {?|undefined}
     */
    AlainUtilArrayConfig.prototype.deepMapName;
    /**
     * 扁平后数组的父数据项名，默认：`'parent'`
     * @type {?|undefined}
     */
    AlainUtilArrayConfig.prototype.parentMapName;
    /**
     * 编号项名，默认：`'id'`
     * @type {?|undefined}
     */
    AlainUtilArrayConfig.prototype.idMapName;
    /**
     * 父编号项名，默认：`'parent_id'`
     * @type {?|undefined}
     */
    AlainUtilArrayConfig.prototype.parentIdMapName;
    /**
     * 源数据子项名，默认：`'children'`
     * @type {?|undefined}
     */
    AlainUtilArrayConfig.prototype.childrenMapName;
    /**
     * 标题项名，默认：`'title'`
     * @type {?|undefined}
     */
    AlainUtilArrayConfig.prototype.titleMapName;
    /**
     * 节点 Checkbox 是否选中项名，默认：`'checked'`
     * @type {?|undefined}
     */
    AlainUtilArrayConfig.prototype.checkedMapname;
    /**
     * 节点本身是否选中项名，默认：`'selected'`
     * @type {?|undefined}
     */
    AlainUtilArrayConfig.prototype.selectedMapname;
    /**
     * 节点是否展开(叶子节点无效)项名，默认：`'expanded'`
     * @type {?|undefined}
     */
    AlainUtilArrayConfig.prototype.expandedMapname;
    /**
     * 设置是否禁用节点(不可进行任何操作)项名，默认：`'disabled'`
     * @type {?|undefined}
     */
    AlainUtilArrayConfig.prototype.disabledMapname;
}

/**
 * @fileoverview added by tsickle
 * Generated from: theme/http.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainThemeHttpClientConfig() { }
if (false) {
    /**
     * 空值处理，默认：`include`
     * - include：包含
     * - ignore：忽略
     * @type {?|undefined}
     */
    AlainThemeHttpClientConfig.prototype.nullValueHandling;
    /**
     * 时间值处理，默认：`timestamp`
     * - timestamp：时间戳
     * - ignore：忽略处理，保持原始状态
     * @type {?|undefined}
     */
    AlainThemeHttpClientConfig.prototype.dateValueHandling;
}

/**
 * @fileoverview added by tsickle
 * Generated from: theme/responsive.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainThemeResponsiveConfig() { }
if (false) {
    /** @type {?} */
    AlainThemeResponsiveConfig.prototype.rules;
}

/**
 * @fileoverview added by tsickle
 * Generated from: theme/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: mock/mock.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainMockConfig() { }
if (false) {
    /**
     * 规则定义数据
     * @type {?}
     */
    AlainMockConfig.prototype.data;
    /**
     * 请求延迟，单位：毫秒，默认：`300`
     * @type {?|undefined}
     */
    AlainMockConfig.prototype.delay;
    /**
     * 是否强制所有请求都Mock，默认：`false`，`true` 表示当请求的URL不存在时直接返回 404 错误，`false` 表示未命中时发送真实HTTP请求
     * @type {?|undefined}
     */
    AlainMockConfig.prototype.force;
    /**
     * 是否打印 Mock 请求信息，弥补浏览器无Network信息，默认：`true`
     * @type {?|undefined}
     */
    AlainMockConfig.prototype.log;
    /**
     * 是否拦截命中后继续调用后续拦截器的 `intercept` 方法，默认：`true`
     * @type {?|undefined}
     */
    AlainMockConfig.prototype.executeOtherInterceptors;
}

/**
 * @fileoverview added by tsickle
 * Generated from: sf/sf.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainSFConfigFormatMap() { }
if (false) {
    /* Skipping unnamed member:
    'date-time': { widget?: string; showTime?: boolean; format?: string };*/
    /** @type {?} */
    AlainSFConfigFormatMap.prototype.date;
    /* Skipping unnamed member:
    'full-date': { widget?: string; format?: string };*/
    /** @type {?} */
    AlainSFConfigFormatMap.prototype.time;
    /* Skipping unnamed member:
    'full-time': { widget?: string; format?: string };*/
    /** @type {?} */
    AlainSFConfigFormatMap.prototype.week;
    /** @type {?} */
    AlainSFConfigFormatMap.prototype.month;
    /** @type {?} */
    AlainSFConfigFormatMap.prototype.uri;
    /** @type {?} */
    AlainSFConfigFormatMap.prototype.email;
    /** @type {?} */
    AlainSFConfigFormatMap.prototype.color;
    /* Skipping unnamed member:
    '': { widget?: string };*/
}
/**
 * @record
 */
function AlainSFConfig() { }
if (false) {
    /** @type {?|undefined} */
    AlainSFConfig.prototype.formatMap;
    /**
     * 是否忽略某些数据类型校验 `ERRORSDEFAULT`，默认：`[ 'type', 'enum' ]`
     *
     * - `type` 限定 Schema 中 `type` 类型
     * - `enum` 限定应当是预设定的枚举值之一
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.ingoreKeywords;
    /**
     * [ajv](http://epoberezkin.github.io/ajv/#options) 参数
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.ajv;
    /**
     * 是否实时校验，默认：`true`
     * - `true` 每一次都校验
     * - `false` 提交时校验
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.liveValidate;
    /**
     * 指定表单 `autocomplete` 值，默认：`on`
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.autocomplete;
    /**
     * 是否立即呈现错误视觉，默认：`false`
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.firstVisual;
    /**
     * 是否只展示错误视觉不显示错误文本，默认：`false`
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.onlyVisual;
    /**
     * 自定义通用错误信息，默认：`{}`
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.errors;
    /**
     * 默认全局布局，类型为：`SFUISchemaItem`，使用时加上可智能提示，例如：
     *
     * ```ts
     * ui: {} as SFUISchemaItem
     * ```
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.ui;
    /**
     * 元素组件大小，用于 `nzSize` 值
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.size;
    /**
     * 按钮风格，类型为：`SFButton`，使用时加上可智能提示，例如：
     *
     * ```ts
     * button: {} as SFButton
     * ```
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.button;
    /**
     * date小部件：`type="string"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`yyyy-MM-dd HH:mm:ss`
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.uiDateStringFormat;
    /**
     * date小部件：`type="number"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`T` 13位 Unix Timestamp
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.uiDateNumberFormat;
    /**
     * time小部件：`type="string"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`HH:mm:ss`
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.uiTimeStringFormat;
    /**
     * time小部件：`type="number"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`T` 13位 Unix Timestamp，日期统一使用 `1970-01-01`
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.uiTimeNumberFormat;
    /**
     * 指定 `format: 'email'` 的默认Email后缀，默认：`['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com']`
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.uiEmailSuffixes;
}

/**
 * @fileoverview added by tsickle
 * Generated from: config.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainConfig() { }
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
    AlainConfig.prototype.onboarding;
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
    AlainConfig.prototype.sf;
    /** @type {?|undefined} */
    AlainConfig.prototype.xlsx;
    /** @type {?|undefined} */
    AlainConfig.prototype.zip;
    /** @type {?|undefined} */
    AlainConfig.prototype.pdf;
    /** @type {?|undefined} */
    AlainConfig.prototype.media;
    /** @type {?|undefined} */
    AlainConfig.prototype.acl;
    /** @type {?|undefined} */
    AlainConfig.prototype.auth;
    /** @type {?|undefined} */
    AlainConfig.prototype.cache;
    /** @type {?|undefined} */
    AlainConfig.prototype.chart;
    /** @type {?|undefined} */
    AlainConfig.prototype.mock;
    /** @type {?|undefined} */
    AlainConfig.prototype.utilArray;
    /** @type {?|undefined} */
    AlainConfig.prototype.themeHttp;
    /** @type {?|undefined} */
    AlainConfig.prototype.themeResponsive;
}
/** @type {?} */
const ALAIN_CONFIG = new InjectionToken('alain-config', {
    providedIn: 'root',
    factory: ALAIN_CONFIG_FACTORY,
});
/**
 * @return {?}
 */
function ALAIN_CONFIG_FACTORY() {
    return {};
}

/**
 * @fileoverview added by tsickle
 * Generated from: config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlainConfigService {
    /**
     * @param {?=} defaultConfig
     */
    constructor(defaultConfig) {
        this.config = Object.assign({}, defaultConfig);
    }
    /**
     * @template T
     * @param {?} componentName
     * @param {?=} key
     * @return {?}
     */
    get(componentName, key) {
        /** @type {?} */
        const res = (/** @type {?} */ ((((/** @type {?} */ (this.config[componentName]))) || {})));
        return key ? { [key]: res[key] } : res;
    }
    /**
     * @template T
     * @param {?} componentName
     * @param {...?} defaultValues
     * @return {?}
     */
    merge(componentName, ...defaultValues) {
        return deepMergeKey({}, true, ...defaultValues, this.get(componentName));
    }
    /**
     * @template T
     * @param {?} componentThis
     * @param {?} componentName
     * @param {?} defaultValues
     * @return {?}
     */
    attach(componentThis, componentName, defaultValues) {
        Object.assign(componentThis, this.merge(componentName, defaultValues));
    }
    /**
     * @template T
     * @param {?} componentThis
     * @param {?} componentName
     * @param {?} key
     * @return {?}
     */
    attachKey(componentThis, componentName, key) {
        Object.assign(componentThis, this.get(componentName, key));
    }
    /**
     * @template T
     * @param {?} componentName
     * @param {?} value
     * @return {?}
     */
    set(componentName, value) {
        this.config[componentName] = Object.assign(Object.assign({}, this.config[componentName]), value);
    }
}
AlainConfigService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
AlainConfigService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_CONFIG,] }] }
];
/** @nocollapse */ AlainConfigService.ɵprov = ɵɵdefineInjectable({ factory: function AlainConfigService_Factory() { return new AlainConfigService(ɵɵinject(ALAIN_CONFIG, 8)); }, token: AlainConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AlainConfigService.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ALAIN_CONFIG, ALAIN_CONFIG_FACTORY, AlainConfigService, AlainSVConfig };
//# sourceMappingURL=config.js.map
