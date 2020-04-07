/**
 * @license ng-alain(cipchk@qq.com) v8.9.2
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@delon/abc/avatar-list'), require('@delon/abc/count-down'), require('@delon/abc/table'), require('@delon/abc/view'), require('@delon/abc/edit'), require('@delon/abc/grid'), require('@delon/abc/error-collect'), require('@delon/abc/footer-toolbar'), require('@delon/abc/sidebar-nav'), require('@delon/abc/down-file'), require('@delon/abc/image'), require('@delon/abc/ellipsis'), require('@delon/abc/global-footer'), require('@delon/abc/exception'), require('@delon/abc/notice-icon'), require('@delon/abc/page-header'), require('@delon/abc/result'), require('@delon/abc/tag-select'), require('@delon/abc/reuse-tab'), require('@delon/abc/full-content'), require('@delon/abc/xlsx'), require('@delon/abc/zip'), require('@delon/abc/number-to-chinese'), require('@delon/abc/lodop'), require('@delon/abc/quick-menu'), require('@delon/abc/qr'), require('@delon/abc/date-picker'), require('@delon/abc/loading'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@delon/abc', ['exports', '@delon/abc/avatar-list', '@delon/abc/count-down', '@delon/abc/table', '@delon/abc/view', '@delon/abc/edit', '@delon/abc/grid', '@delon/abc/error-collect', '@delon/abc/footer-toolbar', '@delon/abc/sidebar-nav', '@delon/abc/down-file', '@delon/abc/image', '@delon/abc/ellipsis', '@delon/abc/global-footer', '@delon/abc/exception', '@delon/abc/notice-icon', '@delon/abc/page-header', '@delon/abc/result', '@delon/abc/tag-select', '@delon/abc/reuse-tab', '@delon/abc/full-content', '@delon/abc/xlsx', '@delon/abc/zip', '@delon/abc/number-to-chinese', '@delon/abc/lodop', '@delon/abc/quick-menu', '@delon/abc/qr', '@delon/abc/date-picker', '@delon/abc/loading', '@angular/core'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.abc = {}), global.delon.abc['avatar-list'], global.delon.abc['count-down'], global.delon.abc.table, global.delon.abc.view, global.delon.abc.edit, global.delon.abc.grid, global.delon.abc['error-collect'], global.delon.abc['footer-toolbar'], global.delon.abc['sidebar-nav'], global.delon.abc['down-file'], global.delon.abc.image, global.delon.abc.ellipsis, global.delon.abc['global-footer'], global.delon.abc.exception, global.delon.abc['notice-icon'], global.delon.abc['page-header'], global.delon.abc.result, global.delon.abc['tag-select'], global.delon.abc['reuse-tab'], global.delon.abc['full-content'], global.delon.abc.xlsx, global.delon.abc.zip, global.delon.abc['number-to-chinese'], global.delon.abc.lodop, global.delon.abc['quick-menu'], global.delon.abc.qr, global.delon.abc['date-picker'], global.delon.abc.loading, global.ng.core));
}(this, (function (exports, avatarList, countDown, table, view, edit, grid, errorCollect, footerToolbar, sidebarNav, downFile, image, ellipsis, globalFooter, exception, noticeIcon, pageHeader, result, tagSelect, reuseTab, fullContent, xlsx, zip, numberToChinese, lodop, quickMenu, qr, datePicker, loading, core) { 'use strict';

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
        table.STModule,
        reuseTab.ReuseTabModule,
        fullContent.FullContentModule,
        xlsx.XlsxModule,
        zip.ZipModule,
        numberToChinese.NumberToChineseModule,
        lodop.LodopModule,
        quickMenu.QuickMenuModule,
        qr.QRModule,
        view.SVModule,
        edit.SEModule,
        grid.SGModule,
        datePicker.DatePickerModule,
        loading.LoadingModule,
    ];
    var DelonABCModule = /** @class */ (function () {
        function DelonABCModule() {
        }
        DelonABCModule.decorators = [
            { type: core.NgModule, args: [{ exports: MODULES },] }
        ];
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
            return table.STColumnSource;
        }
    });
    Object.defineProperty(exports, 'STComponent', {
        enumerable: true,
        get: function () {
            return table.STComponent;
        }
    });
    Object.defineProperty(exports, 'STConfig', {
        enumerable: true,
        get: function () {
            return table.STConfig;
        }
    });
    Object.defineProperty(exports, 'STDataSource', {
        enumerable: true,
        get: function () {
            return table.STDataSource;
        }
    });
    Object.defineProperty(exports, 'STExport', {
        enumerable: true,
        get: function () {
            return table.STExport;
        }
    });
    Object.defineProperty(exports, 'STModule', {
        enumerable: true,
        get: function () {
            return table.STModule;
        }
    });
    Object.defineProperty(exports, 'STRowDirective', {
        enumerable: true,
        get: function () {
            return table.STRowDirective;
        }
    });
    Object.defineProperty(exports, 'ɵa', {
        enumerable: true,
        get: function () {
            return table.ɵa;
        }
    });
    Object.defineProperty(exports, 'SVComponent', {
        enumerable: true,
        get: function () {
            return view.SVComponent;
        }
    });
    Object.defineProperty(exports, 'SVConfig', {
        enumerable: true,
        get: function () {
            return view.SVConfig;
        }
    });
    Object.defineProperty(exports, 'SVContainerComponent', {
        enumerable: true,
        get: function () {
            return view.SVContainerComponent;
        }
    });
    Object.defineProperty(exports, 'SVModule', {
        enumerable: true,
        get: function () {
            return view.SVModule;
        }
    });
    Object.defineProperty(exports, 'SVTitleComponent', {
        enumerable: true,
        get: function () {
            return view.SVTitleComponent;
        }
    });
    Object.defineProperty(exports, 'SEComponent', {
        enumerable: true,
        get: function () {
            return edit.SEComponent;
        }
    });
    Object.defineProperty(exports, 'SEConfig', {
        enumerable: true,
        get: function () {
            return edit.SEConfig;
        }
    });
    Object.defineProperty(exports, 'SEContainerComponent', {
        enumerable: true,
        get: function () {
            return edit.SEContainerComponent;
        }
    });
    Object.defineProperty(exports, 'SEErrorComponent', {
        enumerable: true,
        get: function () {
            return edit.SEErrorComponent;
        }
    });
    Object.defineProperty(exports, 'SEModule', {
        enumerable: true,
        get: function () {
            return edit.SEModule;
        }
    });
    Object.defineProperty(exports, 'SETitleComponent', {
        enumerable: true,
        get: function () {
            return edit.SETitleComponent;
        }
    });
    Object.defineProperty(exports, 'SGComponent', {
        enumerable: true,
        get: function () {
            return grid.SGComponent;
        }
    });
    Object.defineProperty(exports, 'SGConfig', {
        enumerable: true,
        get: function () {
            return grid.SGConfig;
        }
    });
    Object.defineProperty(exports, 'SGContainerComponent', {
        enumerable: true,
        get: function () {
            return grid.SGContainerComponent;
        }
    });
    Object.defineProperty(exports, 'SGModule', {
        enumerable: true,
        get: function () {
            return grid.SGModule;
        }
    });
    Object.defineProperty(exports, 'ErrorCollectComponent', {
        enumerable: true,
        get: function () {
            return errorCollect.ErrorCollectComponent;
        }
    });
    Object.defineProperty(exports, 'ErrorCollectConfig', {
        enumerable: true,
        get: function () {
            return errorCollect.ErrorCollectConfig;
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
    Object.defineProperty(exports, 'ImageConfig', {
        enumerable: true,
        get: function () {
            return image.ImageConfig;
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
    Object.defineProperty(exports, 'PageHeaderConfig', {
        enumerable: true,
        get: function () {
            return pageHeader.PageHeaderConfig;
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
    Object.defineProperty(exports, 'XlsxConfig', {
        enumerable: true,
        get: function () {
            return xlsx.XlsxConfig;
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
    Object.defineProperty(exports, 'ZipConfig', {
        enumerable: true,
        get: function () {
            return zip.ZipConfig;
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
    Object.defineProperty(exports, 'LodopConfig', {
        enumerable: true,
        get: function () {
            return lodop.LodopConfig;
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
    Object.defineProperty(exports, 'QRConfig', {
        enumerable: true,
        get: function () {
            return qr.QRConfig;
        }
    });
    Object.defineProperty(exports, 'QRModule', {
        enumerable: true,
        get: function () {
            return qr.QRModule;
        }
    });
    Object.defineProperty(exports, 'QRService', {
        enumerable: true,
        get: function () {
            return qr.QRService;
        }
    });
    Object.defineProperty(exports, 'DatePickerConfig', {
        enumerable: true,
        get: function () {
            return datePicker.DatePickerConfig;
        }
    });
    Object.defineProperty(exports, 'DatePickerModule', {
        enumerable: true,
        get: function () {
            return datePicker.DatePickerModule;
        }
    });
    Object.defineProperty(exports, 'DateRangePickerConfig', {
        enumerable: true,
        get: function () {
            return datePicker.DateRangePickerConfig;
        }
    });
    Object.defineProperty(exports, 'RangePickerComponent', {
        enumerable: true,
        get: function () {
            return datePicker.RangePickerComponent;
        }
    });
    Object.defineProperty(exports, 'LoadingConfig', {
        enumerable: true,
        get: function () {
            return loading.LoadingConfig;
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
