/**
 * @license ng-alain(cipchk@qq.com) v9.2.4
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@delon/abc/avatar-list'), require('@delon/abc/count-down'), require('@delon/abc/st'), require('@delon/abc/sv'), require('@delon/abc/se'), require('@delon/abc/sg'), require('@delon/abc/error-collect'), require('@delon/abc/footer-toolbar'), require('@delon/abc/sidebar-nav'), require('@delon/abc/down-file'), require('@delon/abc/image'), require('@delon/abc/ellipsis'), require('@delon/abc/global-footer'), require('@delon/abc/exception'), require('@delon/abc/notice-icon'), require('@delon/abc/page-header'), require('@delon/abc/result'), require('@delon/abc/tag-select'), require('@delon/abc/reuse-tab'), require('@delon/abc/full-content'), require('@delon/abc/xlsx'), require('@delon/abc/zip'), require('@delon/abc/number-to-chinese'), require('@delon/abc/lodop'), require('@delon/abc/quick-menu'), require('@delon/abc/qr'), require('@delon/abc/date-picker'), require('@delon/abc/loading'), require('@angular/core'), require('@delon/util'), require('@delon/abc/media')) :
    typeof define === 'function' && define.amd ? define('@delon/abc', ['exports', '@delon/abc/avatar-list', '@delon/abc/count-down', '@delon/abc/st', '@delon/abc/sv', '@delon/abc/se', '@delon/abc/sg', '@delon/abc/error-collect', '@delon/abc/footer-toolbar', '@delon/abc/sidebar-nav', '@delon/abc/down-file', '@delon/abc/image', '@delon/abc/ellipsis', '@delon/abc/global-footer', '@delon/abc/exception', '@delon/abc/notice-icon', '@delon/abc/page-header', '@delon/abc/result', '@delon/abc/tag-select', '@delon/abc/reuse-tab', '@delon/abc/full-content', '@delon/abc/xlsx', '@delon/abc/zip', '@delon/abc/number-to-chinese', '@delon/abc/lodop', '@delon/abc/quick-menu', '@delon/abc/qr', '@delon/abc/date-picker', '@delon/abc/loading', '@angular/core', '@delon/util', '@delon/abc/media'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.abc = {}), global.delon.abc['avatar-list'], global.delon.abc['count-down'], global.delon.abc.st, global.delon.abc.sv, global.delon.abc.se, global.delon.abc.sg, global.delon.abc['error-collect'], global.delon.abc['footer-toolbar'], global.delon.abc['sidebar-nav'], global.delon.abc['down-file'], global.delon.abc.image, global.delon.abc.ellipsis, global.delon.abc['global-footer'], global.delon.abc.exception, global.delon.abc['notice-icon'], global.delon.abc['page-header'], global.delon.abc.result, global.delon.abc['tag-select'], global.delon.abc['reuse-tab'], global.delon.abc['full-content'], global.delon.abc.xlsx, global.delon.abc.zip, global.delon.abc['number-to-chinese'], global.delon.abc.lodop, global.delon.abc['quick-menu'], global.delon.abc.qr, global.delon.abc['date-picker'], global.delon.abc.loading, global.ng.core, global.util, global.delon.abc.media));
}(this, (function (exports, avatarList, countDown, st, sv, se, sg, errorCollect, footerToolbar, sidebarNav, downFile, image, ellipsis, globalFooter, exception, noticeIcon, pageHeader, result, tagSelect, reuseTab, fullContent, xlsx, zip, numberToChinese, lodop, quickMenu, qr, datePicker, loading, core, util, media) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: abc.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MODULES = [
        errorCollect.ErrorCollectModule,
        footerToolbar.FooterToolbarModule,
        sidebarNav.SidebarNavModule,
        downFile.DownFileModule,
        image.ImageModule,
        avatarList.AvatarListModule,
        ellipsis.EllipsisModule,
        globalFooter.GlobalFooterModule,
        exception.ExceptionModule,
        noticeIcon.NoticeIconModule,
        pageHeader.PageHeaderModule,
        result.ResultModule,
        tagSelect.TagSelectModule,
        countDown.CountDownModule,
        st.STModule,
        reuseTab.ReuseTabModule,
        fullContent.FullContentModule,
        xlsx.XlsxModule,
        zip.ZipModule,
        numberToChinese.NumberToChineseModule,
        lodop.LodopModule,
        quickMenu.QuickMenuModule,
        qr.QRModule,
        sv.SVModule,
        se.SEModule,
        sg.SGModule,
        datePicker.DatePickerModule,
        loading.LoadingModule,
        media.MediaModule,
    ];
    /**
     * @deprecated Use secondary entry eg: `import { STModule } from 'ng-zorro-antd/st';`.
     */
    var DelonABCModule = /** @class */ (function () {
        function DelonABCModule() {
            util.warnDeprecation("The `DelonABCModule` has been deprecated and will be removed in 10.0.0. Please use secondary entry instead.\ne.g. `import { STModule } from 'ng-zorro-antd/st';`");
        }
        DelonABCModule.decorators = [
            { type: core.NgModule, args: [{ exports: MODULES },] }
        ];
        /** @nocollapse */
        DelonABCModule.ctorParameters = function () { return []; };
        return DelonABCModule;
    }());

    Object.defineProperty(exports, 'AvatarListComponent', {
        enumerable: true,
        get: function () {
            return avatarList.AvatarListComponent;
        }
    });
    Object.defineProperty(exports, 'AvatarListItemComponent', {
        enumerable: true,
        get: function () {
            return avatarList.AvatarListItemComponent;
        }
    });
    Object.defineProperty(exports, 'AvatarListModule', {
        enumerable: true,
        get: function () {
            return avatarList.AvatarListModule;
        }
    });
    Object.defineProperty(exports, 'CountDownComponent', {
        enumerable: true,
        get: function () {
            return countDown.CountDownComponent;
        }
    });
    Object.defineProperty(exports, 'CountDownModule', {
        enumerable: true,
        get: function () {
            return countDown.CountDownModule;
        }
    });
    Object.defineProperty(exports, 'STColumnSource', {
        enumerable: true,
        get: function () {
            return st.STColumnSource;
        }
    });
    Object.defineProperty(exports, 'STComponent', {
        enumerable: true,
        get: function () {
            return st.STComponent;
        }
    });
    Object.defineProperty(exports, 'STDataSource', {
        enumerable: true,
        get: function () {
            return st.STDataSource;
        }
    });
    Object.defineProperty(exports, 'STExport', {
        enumerable: true,
        get: function () {
            return st.STExport;
        }
    });
    Object.defineProperty(exports, 'STModule', {
        enumerable: true,
        get: function () {
            return st.STModule;
        }
    });
    Object.defineProperty(exports, 'STRowDirective', {
        enumerable: true,
        get: function () {
            return st.STRowDirective;
        }
    });
    Object.defineProperty(exports, 'STWidgetRegistry', {
        enumerable: true,
        get: function () {
            return st.STWidgetRegistry;
        }
    });
    Object.defineProperty(exports, 'ST_DEFULAT_CONFIG', {
        enumerable: true,
        get: function () {
            return st.ST_DEFULAT_CONFIG;
        }
    });
    Object.defineProperty(exports, 'ɵa', {
        enumerable: true,
        get: function () {
            return st.ɵa;
        }
    });
    Object.defineProperty(exports, 'ɵb', {
        enumerable: true,
        get: function () {
            return st.ɵb;
        }
    });
    Object.defineProperty(exports, 'SVComponent', {
        enumerable: true,
        get: function () {
            return sv.SVComponent;
        }
    });
    Object.defineProperty(exports, 'SVContainerComponent', {
        enumerable: true,
        get: function () {
            return sv.SVContainerComponent;
        }
    });
    Object.defineProperty(exports, 'SVModule', {
        enumerable: true,
        get: function () {
            return sv.SVModule;
        }
    });
    Object.defineProperty(exports, 'SVTitleComponent', {
        enumerable: true,
        get: function () {
            return sv.SVTitleComponent;
        }
    });
    Object.defineProperty(exports, 'SEComponent', {
        enumerable: true,
        get: function () {
            return se.SEComponent;
        }
    });
    Object.defineProperty(exports, 'SEContainerComponent', {
        enumerable: true,
        get: function () {
            return se.SEContainerComponent;
        }
    });
    Object.defineProperty(exports, 'SEModule', {
        enumerable: true,
        get: function () {
            return se.SEModule;
        }
    });
    Object.defineProperty(exports, 'SETitleComponent', {
        enumerable: true,
        get: function () {
            return se.SETitleComponent;
        }
    });
    Object.defineProperty(exports, 'SGComponent', {
        enumerable: true,
        get: function () {
            return sg.SGComponent;
        }
    });
    Object.defineProperty(exports, 'SGContainerComponent', {
        enumerable: true,
        get: function () {
            return sg.SGContainerComponent;
        }
    });
    Object.defineProperty(exports, 'SGModule', {
        enumerable: true,
        get: function () {
            return sg.SGModule;
        }
    });
    Object.defineProperty(exports, 'ErrorCollectComponent', {
        enumerable: true,
        get: function () {
            return errorCollect.ErrorCollectComponent;
        }
    });
    Object.defineProperty(exports, 'ErrorCollectModule', {
        enumerable: true,
        get: function () {
            return errorCollect.ErrorCollectModule;
        }
    });
    Object.defineProperty(exports, 'FooterToolbarComponent', {
        enumerable: true,
        get: function () {
            return footerToolbar.FooterToolbarComponent;
        }
    });
    Object.defineProperty(exports, 'FooterToolbarModule', {
        enumerable: true,
        get: function () {
            return footerToolbar.FooterToolbarModule;
        }
    });
    Object.defineProperty(exports, 'SidebarNavComponent', {
        enumerable: true,
        get: function () {
            return sidebarNav.SidebarNavComponent;
        }
    });
    Object.defineProperty(exports, 'SidebarNavModule', {
        enumerable: true,
        get: function () {
            return sidebarNav.SidebarNavModule;
        }
    });
    Object.defineProperty(exports, 'DownFileDirective', {
        enumerable: true,
        get: function () {
            return downFile.DownFileDirective;
        }
    });
    Object.defineProperty(exports, 'DownFileModule', {
        enumerable: true,
        get: function () {
            return downFile.DownFileModule;
        }
    });
    Object.defineProperty(exports, 'ImageDirective', {
        enumerable: true,
        get: function () {
            return image.ImageDirective;
        }
    });
    Object.defineProperty(exports, 'ImageModule', {
        enumerable: true,
        get: function () {
            return image.ImageModule;
        }
    });
    Object.defineProperty(exports, 'EllipsisComponent', {
        enumerable: true,
        get: function () {
            return ellipsis.EllipsisComponent;
        }
    });
    Object.defineProperty(exports, 'EllipsisModule', {
        enumerable: true,
        get: function () {
            return ellipsis.EllipsisModule;
        }
    });
    Object.defineProperty(exports, 'GlobalFooterComponent', {
        enumerable: true,
        get: function () {
            return globalFooter.GlobalFooterComponent;
        }
    });
    Object.defineProperty(exports, 'GlobalFooterItemComponent', {
        enumerable: true,
        get: function () {
            return globalFooter.GlobalFooterItemComponent;
        }
    });
    Object.defineProperty(exports, 'GlobalFooterModule', {
        enumerable: true,
        get: function () {
            return globalFooter.GlobalFooterModule;
        }
    });
    Object.defineProperty(exports, 'ExceptionComponent', {
        enumerable: true,
        get: function () {
            return exception.ExceptionComponent;
        }
    });
    Object.defineProperty(exports, 'ExceptionModule', {
        enumerable: true,
        get: function () {
            return exception.ExceptionModule;
        }
    });
    Object.defineProperty(exports, 'NoticeIconComponent', {
        enumerable: true,
        get: function () {
            return noticeIcon.NoticeIconComponent;
        }
    });
    Object.defineProperty(exports, 'NoticeIconModule', {
        enumerable: true,
        get: function () {
            return noticeIcon.NoticeIconModule;
        }
    });
    Object.defineProperty(exports, 'NoticeIconTabComponent', {
        enumerable: true,
        get: function () {
            return noticeIcon.NoticeIconTabComponent;
        }
    });
    Object.defineProperty(exports, 'PageHeaderComponent', {
        enumerable: true,
        get: function () {
            return pageHeader.PageHeaderComponent;
        }
    });
    Object.defineProperty(exports, 'PageHeaderModule', {
        enumerable: true,
        get: function () {
            return pageHeader.PageHeaderModule;
        }
    });
    Object.defineProperty(exports, 'ResultComponent', {
        enumerable: true,
        get: function () {
            return result.ResultComponent;
        }
    });
    Object.defineProperty(exports, 'ResultModule', {
        enumerable: true,
        get: function () {
            return result.ResultModule;
        }
    });
    Object.defineProperty(exports, 'TagSelectComponent', {
        enumerable: true,
        get: function () {
            return tagSelect.TagSelectComponent;
        }
    });
    Object.defineProperty(exports, 'TagSelectModule', {
        enumerable: true,
        get: function () {
            return tagSelect.TagSelectModule;
        }
    });
    Object.defineProperty(exports, 'ReuseTabComponent', {
        enumerable: true,
        get: function () {
            return reuseTab.ReuseTabComponent;
        }
    });
    Object.defineProperty(exports, 'ReuseTabContextComponent', {
        enumerable: true,
        get: function () {
            return reuseTab.ReuseTabContextComponent;
        }
    });
    Object.defineProperty(exports, 'ReuseTabContextDirective', {
        enumerable: true,
        get: function () {
            return reuseTab.ReuseTabContextDirective;
        }
    });
    Object.defineProperty(exports, 'ReuseTabContextMenuComponent', {
        enumerable: true,
        get: function () {
            return reuseTab.ReuseTabContextMenuComponent;
        }
    });
    Object.defineProperty(exports, 'ReuseTabContextService', {
        enumerable: true,
        get: function () {
            return reuseTab.ReuseTabContextService;
        }
    });
    Object.defineProperty(exports, 'ReuseTabMatchMode', {
        enumerable: true,
        get: function () {
            return reuseTab.ReuseTabMatchMode;
        }
    });
    Object.defineProperty(exports, 'ReuseTabModule', {
        enumerable: true,
        get: function () {
            return reuseTab.ReuseTabModule;
        }
    });
    Object.defineProperty(exports, 'ReuseTabService', {
        enumerable: true,
        get: function () {
            return reuseTab.ReuseTabService;
        }
    });
    Object.defineProperty(exports, 'ReuseTabStrategy', {
        enumerable: true,
        get: function () {
            return reuseTab.ReuseTabStrategy;
        }
    });
    Object.defineProperty(exports, 'FullContentComponent', {
        enumerable: true,
        get: function () {
            return fullContent.FullContentComponent;
        }
    });
    Object.defineProperty(exports, 'FullContentModule', {
        enumerable: true,
        get: function () {
            return fullContent.FullContentModule;
        }
    });
    Object.defineProperty(exports, 'FullContentService', {
        enumerable: true,
        get: function () {
            return fullContent.FullContentService;
        }
    });
    Object.defineProperty(exports, 'FullContentToggleDirective', {
        enumerable: true,
        get: function () {
            return fullContent.FullContentToggleDirective;
        }
    });
    Object.defineProperty(exports, 'XlsxDirective', {
        enumerable: true,
        get: function () {
            return xlsx.XlsxDirective;
        }
    });
    Object.defineProperty(exports, 'XlsxModule', {
        enumerable: true,
        get: function () {
            return xlsx.XlsxModule;
        }
    });
    Object.defineProperty(exports, 'XlsxService', {
        enumerable: true,
        get: function () {
            return xlsx.XlsxService;
        }
    });
    Object.defineProperty(exports, 'ZipModule', {
        enumerable: true,
        get: function () {
            return zip.ZipModule;
        }
    });
    Object.defineProperty(exports, 'ZipService', {
        enumerable: true,
        get: function () {
            return zip.ZipService;
        }
    });
    Object.defineProperty(exports, 'NaNumberToChinesePipe', {
        enumerable: true,
        get: function () {
            return numberToChinese.NaNumberToChinesePipe;
        }
    });
    Object.defineProperty(exports, 'NumberToChineseModule', {
        enumerable: true,
        get: function () {
            return numberToChinese.NumberToChineseModule;
        }
    });
    Object.defineProperty(exports, 'numberToChinese', {
        enumerable: true,
        get: function () {
            return numberToChinese.numberToChinese;
        }
    });
    Object.defineProperty(exports, 'LodopModule', {
        enumerable: true,
        get: function () {
            return lodop.LodopModule;
        }
    });
    Object.defineProperty(exports, 'LodopService', {
        enumerable: true,
        get: function () {
            return lodop.LodopService;
        }
    });
    Object.defineProperty(exports, 'QuickMenuComponent', {
        enumerable: true,
        get: function () {
            return quickMenu.QuickMenuComponent;
        }
    });
    Object.defineProperty(exports, 'QuickMenuModule', {
        enumerable: true,
        get: function () {
            return quickMenu.QuickMenuModule;
        }
    });
    Object.defineProperty(exports, 'QRComponent', {
        enumerable: true,
        get: function () {
            return qr.QRComponent;
        }
    });
    Object.defineProperty(exports, 'QRModule', {
        enumerable: true,
        get: function () {
            return qr.QRModule;
        }
    });
    Object.defineProperty(exports, 'QR_DEFULAT_CONFIG', {
        enumerable: true,
        get: function () {
            return qr.QR_DEFULAT_CONFIG;
        }
    });
    Object.defineProperty(exports, 'DatePickerModule', {
        enumerable: true,
        get: function () {
            return datePicker.DatePickerModule;
        }
    });
    Object.defineProperty(exports, 'RangePickerComponent', {
        enumerable: true,
        get: function () {
            return datePicker.RangePickerComponent;
        }
    });
    Object.defineProperty(exports, 'LoadingDefaultComponent', {
        enumerable: true,
        get: function () {
            return loading.LoadingDefaultComponent;
        }
    });
    Object.defineProperty(exports, 'LoadingModule', {
        enumerable: true,
        get: function () {
            return loading.LoadingModule;
        }
    });
    Object.defineProperty(exports, 'LoadingService', {
        enumerable: true,
        get: function () {
            return loading.LoadingService;
        }
    });
    exports.DelonABCModule = DelonABCModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=abc.umd.js.map
