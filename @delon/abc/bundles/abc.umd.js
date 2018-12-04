/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/abc/table'), require('@delon/abc/view'), require('@delon/abc/edit'), require('@delon/abc/error-collect'), require('@delon/abc/footer-toolbar'), require('@delon/abc/sidebar-nav'), require('@delon/abc/down-file'), require('@delon/abc/image'), require('@delon/abc/avatar-list'), require('@delon/abc/ellipsis'), require('@delon/abc/global-footer'), require('@delon/abc/exception'), require('@delon/abc/notice-icon'), require('@delon/abc/page-header'), require('@delon/abc/result'), require('@delon/abc/tag-select'), require('@delon/abc/count-down'), require('@delon/abc/reuse-tab'), require('@delon/abc/full-content'), require('@delon/abc/xlsx'), require('@delon/abc/zip'), require('@delon/abc/number-to-chinese'), require('@delon/abc/lodop'), require('@delon/abc/quick-menu'), require('@delon/abc/qr'), require('@delon/abc/date-picker'), require('@delon/abc/grid')) :
    typeof define === 'function' && define.amd ? define('@delon/abc', ['exports', '@angular/core', '@delon/abc/table', '@delon/abc/view', '@delon/abc/edit', '@delon/abc/error-collect', '@delon/abc/footer-toolbar', '@delon/abc/sidebar-nav', '@delon/abc/down-file', '@delon/abc/image', '@delon/abc/avatar-list', '@delon/abc/ellipsis', '@delon/abc/global-footer', '@delon/abc/exception', '@delon/abc/notice-icon', '@delon/abc/page-header', '@delon/abc/result', '@delon/abc/tag-select', '@delon/abc/count-down', '@delon/abc/reuse-tab', '@delon/abc/full-content', '@delon/abc/xlsx', '@delon/abc/zip', '@delon/abc/number-to-chinese', '@delon/abc/lodop', '@delon/abc/quick-menu', '@delon/abc/qr', '@delon/abc/date-picker', '@delon/abc/grid'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = {}),global.ng.core,global.delon.abc.table,global.delon.abc.view,global.delon.abc.edit,global.delon.abc['error-collect'],global.delon.abc['footer-toolbar'],global.delon.abc['sidebar-nav'],global.delon.abc['down-file'],global.delon.abc.image,global.delon.abc['avatar-list'],global.delon.abc.ellipsis,global.delon.abc['global-footer'],global.delon.abc.exception,global.delon.abc['notice-icon'],global.delon.abc['page-header'],global.delon.abc.result,global.delon.abc['tag-select'],global.delon.abc['count-down'],global.delon.abc['reuse-tab'],global.delon.abc['full-content'],global.delon.abc.xlsx,global.delon.abc.zip,global.delon.abc['number-to-chinese'],global.delon.abc.lodop,global.delon.abc['quick-menu'],global.delon.abc.qr,global.delon.abc['date-picker'],global.delon.abc.grid));
}(this, (function (exports,core,table,view,edit,errorCollect,footerToolbar,sidebarNav,downFile,image,avatarList,ellipsis,globalFooter,exception,noticeIcon,pageHeader,result,tagSelect,countDown,reuseTab,fullContent,xlsx,zip,numberToChinese,lodop,quickMenu,qr,datePicker,grid) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    ];
    var DelonABCRootModule = /** @class */ (function () {
        function DelonABCRootModule() {
        }
        DelonABCRootModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            errorCollect.ErrorCollectModule.forRoot(),
                            footerToolbar.FooterToolbarModule.forRoot(),
                            sidebarNav.SidebarNavModule.forRoot(),
                            downFile.DownFileModule.forRoot(),
                            image.ImageModule.forRoot(),
                            avatarList.AvatarListModule.forRoot(),
                            ellipsis.EllipsisModule.forRoot(),
                            exception.ExceptionModule.forRoot(),
                            exception.ExceptionModule.forRoot(),
                            noticeIcon.NoticeIconModule.forRoot(),
                            pageHeader.PageHeaderModule.forRoot(),
                            result.ResultModule.forRoot(),
                            tagSelect.TagSelectModule.forRoot(),
                            countDown.CountDownModule.forRoot(),
                            table.STModule.forRoot(),
                            reuseTab.ReuseTabModule.forRoot(),
                            fullContent.FullContentModule.forRoot(),
                            xlsx.XlsxModule.forRoot(),
                            zip.ZipModule.forRoot(),
                            numberToChinese.NumberToChineseModule.forRoot(),
                            lodop.LodopModule.forRoot(),
                            quickMenu.QuickMenuModule.forRoot(),
                            qr.QRModule.forRoot(),
                            view.SVModule.forRoot(),
                            edit.SEModule.forRoot(),
                            grid.SGModule.forRoot(),
                            datePicker.DatePickerModule.forRoot(),
                        ],
                        exports: MODULES,
                    },] }
        ];
        return DelonABCRootModule;
    }());
    var DelonABCModule = /** @class */ (function () {
        function DelonABCModule() {
        }
        /**
         * @return {?}
         */
        DelonABCModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: DelonABCRootModule };
            };
        DelonABCModule.decorators = [
            { type: core.NgModule, args: [{ exports: MODULES },] }
        ];
        return DelonABCModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.ɵa = table.ɵa;
    exports.STComponent = table.STComponent;
    exports.STRowDirective = table.STRowDirective;
    exports.STConfig = table.STConfig;
    exports.STModule = table.STModule;
    exports.STColumnSource = table.STColumnSource;
    exports.STDataSource = table.STDataSource;
    exports.STExport = table.STExport;
    exports.SVContainerComponent = view.SVContainerComponent;
    exports.SVTitleComponent = view.SVTitleComponent;
    exports.SVComponent = view.SVComponent;
    exports.SVConfig = view.SVConfig;
    exports.SVModule = view.SVModule;
    exports.SEContainerComponent = edit.SEContainerComponent;
    exports.SEErrorComponent = edit.SEErrorComponent;
    exports.SETitleComponent = edit.SETitleComponent;
    exports.SEComponent = edit.SEComponent;
    exports.SEConfig = edit.SEConfig;
    exports.SEModule = edit.SEModule;
    exports.ErrorCollectComponent = errorCollect.ErrorCollectComponent;
    exports.ErrorCollectConfig = errorCollect.ErrorCollectConfig;
    exports.ErrorCollectModule = errorCollect.ErrorCollectModule;
    exports.FooterToolbarComponent = footerToolbar.FooterToolbarComponent;
    exports.FooterToolbarModule = footerToolbar.FooterToolbarModule;
    exports.SidebarNavComponent = sidebarNav.SidebarNavComponent;
    exports.SidebarNavModule = sidebarNav.SidebarNavModule;
    exports.DownFileDirective = downFile.DownFileDirective;
    exports.DownFileModule = downFile.DownFileModule;
    exports.ImageDirective = image.ImageDirective;
    exports.ImageConfig = image.ImageConfig;
    exports.ImageModule = image.ImageModule;
    exports.AvatarListItemComponent = avatarList.AvatarListItemComponent;
    exports.AvatarListComponent = avatarList.AvatarListComponent;
    exports.AvatarListModule = avatarList.AvatarListModule;
    exports.EllipsisComponent = ellipsis.EllipsisComponent;
    exports.EllipsisModule = ellipsis.EllipsisModule;
    exports.GlobalFooterComponent = globalFooter.GlobalFooterComponent;
    exports.GlobalFooterItemComponent = globalFooter.GlobalFooterItemComponent;
    exports.GlobalFooterModule = globalFooter.GlobalFooterModule;
    exports.ExceptionComponent = exception.ExceptionComponent;
    exports.ExceptionModule = exception.ExceptionModule;
    exports.NoticeIconTabComponent = noticeIcon.NoticeIconTabComponent;
    exports.NoticeIconComponent = noticeIcon.NoticeIconComponent;
    exports.NoticeIconModule = noticeIcon.NoticeIconModule;
    exports.PageHeaderConfig = pageHeader.PageHeaderConfig;
    exports.PageHeaderComponent = pageHeader.PageHeaderComponent;
    exports.PageHeaderModule = pageHeader.PageHeaderModule;
    exports.ResultComponent = result.ResultComponent;
    exports.ResultModule = result.ResultModule;
    exports.TagSelectComponent = tagSelect.TagSelectComponent;
    exports.TagSelectModule = tagSelect.TagSelectModule;
    exports.CountDownComponent = countDown.CountDownComponent;
    exports.CountDownModule = countDown.CountDownModule;
    exports.ReuseTabContextMenuComponent = reuseTab.ReuseTabContextMenuComponent;
    exports.ReuseTabContextComponent = reuseTab.ReuseTabContextComponent;
    exports.ReuseTabContextDirective = reuseTab.ReuseTabContextDirective;
    exports.ReuseTabContextService = reuseTab.ReuseTabContextService;
    exports.ReuseTabComponent = reuseTab.ReuseTabComponent;
    exports.ReuseTabService = reuseTab.ReuseTabService;
    exports.ReuseTabStrategy = reuseTab.ReuseTabStrategy;
    exports.ReuseTabModule = reuseTab.ReuseTabModule;
    exports.ReuseTabMatchMode = reuseTab.ReuseTabMatchMode;
    exports.FullContentComponent = fullContent.FullContentComponent;
    exports.FullContentService = fullContent.FullContentService;
    exports.FullContentToggleDirective = fullContent.FullContentToggleDirective;
    exports.FullContentModule = fullContent.FullContentModule;
    exports.XlsxConfig = xlsx.XlsxConfig;
    exports.XlsxService = xlsx.XlsxService;
    exports.XlsxDirective = xlsx.XlsxDirective;
    exports.XlsxModule = xlsx.XlsxModule;
    exports.ZipService = zip.ZipService;
    exports.ZipModule = zip.ZipModule;
    exports.ZipConfig = zip.ZipConfig;
    exports.numberToChinese = numberToChinese.numberToChinese;
    exports.NaNumberToChinesePipe = numberToChinese.NaNumberToChinesePipe;
    exports.NumberToChineseModule = numberToChinese.NumberToChineseModule;
    exports.LodopService = lodop.LodopService;
    exports.LodopConfig = lodop.LodopConfig;
    exports.LodopModule = lodop.LodopModule;
    exports.QuickMenuComponent = quickMenu.QuickMenuComponent;
    exports.QuickMenuModule = quickMenu.QuickMenuModule;
    exports.QRService = qr.QRService;
    exports.QRComponent = qr.QRComponent;
    exports.QRConfig = qr.QRConfig;
    exports.QRModule = qr.QRModule;
    exports.RangePickerComponent = datePicker.RangePickerComponent;
    exports.DatePickerModule = datePicker.DatePickerModule;
    exports.DateRangePickerConfig = datePicker.DateRangePickerConfig;
    exports.DatePickerConfig = datePicker.DatePickerConfig;
    exports.SGContainerComponent = grid.SGContainerComponent;
    exports.SGComponent = grid.SGComponent;
    exports.SGConfig = grid.SGConfig;
    exports.SGModule = grid.SGModule;
    exports.DelonABCRootModule = DelonABCRootModule;
    exports.DelonABCModule = DelonABCModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=abc.umd.js.map