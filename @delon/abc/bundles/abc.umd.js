/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.5-add216a
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJjLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9hYmMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vICNyZWdpb24gYWxsIG1vZHVsZXNcbmltcG9ydCB7IFNUTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy90YWJsZSc7XG5pbXBvcnQgeyBTVk1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvdmlldyc7XG5pbXBvcnQgeyBTRU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZWRpdCc7XG5pbXBvcnQgeyBFcnJvckNvbGxlY3RNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2Vycm9yLWNvbGxlY3QnO1xuaW1wb3J0IHsgRm9vdGVyVG9vbGJhck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZm9vdGVyLXRvb2xiYXInO1xuaW1wb3J0IHsgU2lkZWJhck5hdk1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvc2lkZWJhci1uYXYnO1xuaW1wb3J0IHsgRG93bkZpbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2Rvd24tZmlsZSc7XG5pbXBvcnQgeyBJbWFnZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvaW1hZ2UnO1xuaW1wb3J0IHsgQXZhdGFyTGlzdE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvYXZhdGFyLWxpc3QnO1xuaW1wb3J0IHsgRWxsaXBzaXNNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2VsbGlwc2lzJztcbmltcG9ydCB7IEdsb2JhbEZvb3Rlck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZ2xvYmFsLWZvb3Rlcic7XG5pbXBvcnQgeyBFeGNlcHRpb25Nb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2V4Y2VwdGlvbic7XG5pbXBvcnQgeyBOb3RpY2VJY29uTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9ub3RpY2UtaWNvbic7XG5pbXBvcnQgeyBQYWdlSGVhZGVyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9wYWdlLWhlYWRlcic7XG5pbXBvcnQgeyBSZXN1bHRNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3Jlc3VsdCc7XG5pbXBvcnQgeyBUYWdTZWxlY3RNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3RhZy1zZWxlY3QnO1xuaW1wb3J0IHsgQ291bnREb3duTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9jb3VudC1kb3duJztcbmltcG9ydCB7IFJldXNlVGFiTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9yZXVzZS10YWInO1xuaW1wb3J0IHsgRnVsbENvbnRlbnRNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2Z1bGwtY29udGVudCc7XG5pbXBvcnQgeyBYbHN4TW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy94bHN4JztcbmltcG9ydCB7IFppcE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvemlwJztcbmltcG9ydCB7IE51bWJlclRvQ2hpbmVzZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvbnVtYmVyLXRvLWNoaW5lc2UnO1xuaW1wb3J0IHsgTG9kb3BNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2xvZG9wJztcbmltcG9ydCB7IFF1aWNrTWVudU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvcXVpY2stbWVudSc7XG5pbXBvcnQgeyBRUk1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvcXInO1xuaW1wb3J0IHsgRGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZGF0ZS1waWNrZXInO1xuaW1wb3J0IHsgU0dNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2dyaWQnO1xuXG5jb25zdCBNT0RVTEVTID0gW1xuICBFcnJvckNvbGxlY3RNb2R1bGUsXG4gIEZvb3RlclRvb2xiYXJNb2R1bGUsXG4gIFNpZGViYXJOYXZNb2R1bGUsXG4gIERvd25GaWxlTW9kdWxlLFxuICBJbWFnZU1vZHVsZSxcbiAgQXZhdGFyTGlzdE1vZHVsZSxcbiAgRWxsaXBzaXNNb2R1bGUsXG4gIEdsb2JhbEZvb3Rlck1vZHVsZSxcbiAgRXhjZXB0aW9uTW9kdWxlLFxuICBOb3RpY2VJY29uTW9kdWxlLFxuICBQYWdlSGVhZGVyTW9kdWxlLFxuICBSZXN1bHRNb2R1bGUsXG4gIFRhZ1NlbGVjdE1vZHVsZSxcbiAgQ291bnREb3duTW9kdWxlLFxuICBTVE1vZHVsZSxcbiAgUmV1c2VUYWJNb2R1bGUsXG4gIEZ1bGxDb250ZW50TW9kdWxlLFxuICBYbHN4TW9kdWxlLFxuICBaaXBNb2R1bGUsXG4gIE51bWJlclRvQ2hpbmVzZU1vZHVsZSxcbiAgTG9kb3BNb2R1bGUsXG4gIFF1aWNrTWVudU1vZHVsZSxcbiAgUVJNb2R1bGUsXG4gIFNWTW9kdWxlLFxuICBTRU1vZHVsZSxcbiAgU0dNb2R1bGUsXG4gIERhdGVQaWNrZXJNb2R1bGUsXG5dO1xuXG4vLyAjZW5kcmVnaW9uXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBFcnJvckNvbGxlY3RNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEZvb3RlclRvb2xiYXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFNpZGViYXJOYXZNb2R1bGUuZm9yUm9vdCgpLFxuICAgIERvd25GaWxlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBJbWFnZU1vZHVsZS5mb3JSb290KCksXG4gICAgQXZhdGFyTGlzdE1vZHVsZS5mb3JSb290KCksXG4gICAgRWxsaXBzaXNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEV4Y2VwdGlvbk1vZHVsZS5mb3JSb290KCksXG4gICAgRXhjZXB0aW9uTW9kdWxlLmZvclJvb3QoKSxcbiAgICBOb3RpY2VJY29uTW9kdWxlLmZvclJvb3QoKSxcbiAgICBQYWdlSGVhZGVyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBSZXN1bHRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRhZ1NlbGVjdE1vZHVsZS5mb3JSb290KCksXG4gICAgQ291bnREb3duTW9kdWxlLmZvclJvb3QoKSxcbiAgICBTVE1vZHVsZS5mb3JSb290KCksXG4gICAgUmV1c2VUYWJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEZ1bGxDb250ZW50TW9kdWxlLmZvclJvb3QoKSxcbiAgICBYbHN4TW9kdWxlLmZvclJvb3QoKSxcbiAgICBaaXBNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE51bWJlclRvQ2hpbmVzZU1vZHVsZS5mb3JSb290KCksXG4gICAgTG9kb3BNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFF1aWNrTWVudU1vZHVsZS5mb3JSb290KCksXG4gICAgUVJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFNWTW9kdWxlLmZvclJvb3QoKSxcbiAgICBTRU1vZHVsZS5mb3JSb290KCksXG4gICAgU0dNb2R1bGUuZm9yUm9vdCgpLFxuICAgIERhdGVQaWNrZXJNb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBleHBvcnRzOiBNT0RVTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBEZWxvbkFCQ1Jvb3RNb2R1bGUge31cblxuQE5nTW9kdWxlKHsgZXhwb3J0czogTU9EVUxFUyB9KVxuZXhwb3J0IGNsYXNzIERlbG9uQUJDTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IERlbG9uQUJDUm9vdE1vZHVsZSB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRXJyb3JDb2xsZWN0TW9kdWxlIiwiRm9vdGVyVG9vbGJhck1vZHVsZSIsIlNpZGViYXJOYXZNb2R1bGUiLCJEb3duRmlsZU1vZHVsZSIsIkltYWdlTW9kdWxlIiwiQXZhdGFyTGlzdE1vZHVsZSIsIkVsbGlwc2lzTW9kdWxlIiwiR2xvYmFsRm9vdGVyTW9kdWxlIiwiRXhjZXB0aW9uTW9kdWxlIiwiTm90aWNlSWNvbk1vZHVsZSIsIlBhZ2VIZWFkZXJNb2R1bGUiLCJSZXN1bHRNb2R1bGUiLCJUYWdTZWxlY3RNb2R1bGUiLCJDb3VudERvd25Nb2R1bGUiLCJTVE1vZHVsZSIsIlJldXNlVGFiTW9kdWxlIiwiRnVsbENvbnRlbnRNb2R1bGUiLCJYbHN4TW9kdWxlIiwiWmlwTW9kdWxlIiwiTnVtYmVyVG9DaGluZXNlTW9kdWxlIiwiTG9kb3BNb2R1bGUiLCJRdWlja01lbnVNb2R1bGUiLCJRUk1vZHVsZSIsIlNWTW9kdWxlIiwiU0VNb2R1bGUiLCJTR01vZHVsZSIsIkRhdGVQaWNrZXJNb2R1bGUiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBK0JBLElBQU0sT0FBTyxHQUFHO1FBQ2RBLCtCQUFrQjtRQUNsQkMsaUNBQW1CO1FBQ25CQywyQkFBZ0I7UUFDaEJDLHVCQUFjO1FBQ2RDLGlCQUFXO1FBQ1hDLDJCQUFnQjtRQUNoQkMsdUJBQWM7UUFDZEMsK0JBQWtCO1FBQ2xCQyx5QkFBZTtRQUNmQywyQkFBZ0I7UUFDaEJDLDJCQUFnQjtRQUNoQkMsbUJBQVk7UUFDWkMseUJBQWU7UUFDZkMseUJBQWU7UUFDZkMsY0FBUTtRQUNSQyx1QkFBYztRQUNkQyw2QkFBaUI7UUFDakJDLGVBQVU7UUFDVkMsYUFBUztRQUNUQyxxQ0FBcUI7UUFDckJDLGlCQUFXO1FBQ1hDLHlCQUFlO1FBQ2ZDLFdBQVE7UUFDUkMsYUFBUTtRQUNSQyxhQUFRO1FBQ1JDLGFBQVE7UUFDUkMsMkJBQWdCO0tBQ2pCLENBQUM7Ozs7O29CQUlEQyxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQM0IsK0JBQWtCLENBQUMsT0FBTyxFQUFFOzRCQUM1QkMsaUNBQW1CLENBQUMsT0FBTyxFQUFFOzRCQUM3QkMsMkJBQWdCLENBQUMsT0FBTyxFQUFFOzRCQUMxQkMsdUJBQWMsQ0FBQyxPQUFPLEVBQUU7NEJBQ3hCQyxpQkFBVyxDQUFDLE9BQU8sRUFBRTs0QkFDckJDLDJCQUFnQixDQUFDLE9BQU8sRUFBRTs0QkFDMUJDLHVCQUFjLENBQUMsT0FBTyxFQUFFOzRCQUN4QkUseUJBQWUsQ0FBQyxPQUFPLEVBQUU7NEJBQ3pCQSx5QkFBZSxDQUFDLE9BQU8sRUFBRTs0QkFDekJDLDJCQUFnQixDQUFDLE9BQU8sRUFBRTs0QkFDMUJDLDJCQUFnQixDQUFDLE9BQU8sRUFBRTs0QkFDMUJDLG1CQUFZLENBQUMsT0FBTyxFQUFFOzRCQUN0QkMseUJBQWUsQ0FBQyxPQUFPLEVBQUU7NEJBQ3pCQyx5QkFBZSxDQUFDLE9BQU8sRUFBRTs0QkFDekJDLGNBQVEsQ0FBQyxPQUFPLEVBQUU7NEJBQ2xCQyx1QkFBYyxDQUFDLE9BQU8sRUFBRTs0QkFDeEJDLDZCQUFpQixDQUFDLE9BQU8sRUFBRTs0QkFDM0JDLGVBQVUsQ0FBQyxPQUFPLEVBQUU7NEJBQ3BCQyxhQUFTLENBQUMsT0FBTyxFQUFFOzRCQUNuQkMscUNBQXFCLENBQUMsT0FBTyxFQUFFOzRCQUMvQkMsaUJBQVcsQ0FBQyxPQUFPLEVBQUU7NEJBQ3JCQyx5QkFBZSxDQUFDLE9BQU8sRUFBRTs0QkFDekJDLFdBQVEsQ0FBQyxPQUFPLEVBQUU7NEJBQ2xCQyxhQUFRLENBQUMsT0FBTyxFQUFFOzRCQUNsQkMsYUFBUSxDQUFDLE9BQU8sRUFBRTs0QkFDbEJDLGFBQVEsQ0FBQyxPQUFPLEVBQUU7NEJBQ2xCQywyQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7eUJBQzNCO3dCQUNELE9BQU8sRUFBRSxPQUFPO3FCQUNqQjs7aUNBOUZEOzs7Ozs7OztRQW1HUyxzQkFBTzs7O1lBQWQ7Z0JBQ0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO2FBQ3pDOztvQkFKRkMsYUFBUSxTQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTs7NkJBakc5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9