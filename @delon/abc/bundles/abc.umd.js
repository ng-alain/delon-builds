/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.4-a1e4f2c
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJjLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9hYmMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIHJlZ2lvbjogYWxsIG1vZHVsZXNcbmltcG9ydCB7IFNUTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy90YWJsZSc7XG5pbXBvcnQgeyBTVk1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvdmlldyc7XG5pbXBvcnQgeyBTRU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZWRpdCc7XG5pbXBvcnQgeyBFcnJvckNvbGxlY3RNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2Vycm9yLWNvbGxlY3QnO1xuaW1wb3J0IHsgRm9vdGVyVG9vbGJhck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZm9vdGVyLXRvb2xiYXInO1xuaW1wb3J0IHsgU2lkZWJhck5hdk1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvc2lkZWJhci1uYXYnO1xuaW1wb3J0IHsgRG93bkZpbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2Rvd24tZmlsZSc7XG5pbXBvcnQgeyBJbWFnZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvaW1hZ2UnO1xuaW1wb3J0IHsgQXZhdGFyTGlzdE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvYXZhdGFyLWxpc3QnO1xuaW1wb3J0IHsgRWxsaXBzaXNNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2VsbGlwc2lzJztcbmltcG9ydCB7IEdsb2JhbEZvb3Rlck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZ2xvYmFsLWZvb3Rlcic7XG5pbXBvcnQgeyBFeGNlcHRpb25Nb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2V4Y2VwdGlvbic7XG5pbXBvcnQgeyBOb3RpY2VJY29uTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9ub3RpY2UtaWNvbic7XG5pbXBvcnQgeyBQYWdlSGVhZGVyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9wYWdlLWhlYWRlcic7XG5pbXBvcnQgeyBSZXN1bHRNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3Jlc3VsdCc7XG5pbXBvcnQgeyBUYWdTZWxlY3RNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3RhZy1zZWxlY3QnO1xuaW1wb3J0IHsgQ291bnREb3duTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9jb3VudC1kb3duJztcbmltcG9ydCB7IFJldXNlVGFiTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9yZXVzZS10YWInO1xuaW1wb3J0IHsgRnVsbENvbnRlbnRNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2Z1bGwtY29udGVudCc7XG5pbXBvcnQgeyBYbHN4TW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy94bHN4JztcbmltcG9ydCB7IFppcE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvemlwJztcbmltcG9ydCB7IE51bWJlclRvQ2hpbmVzZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvbnVtYmVyLXRvLWNoaW5lc2UnO1xuaW1wb3J0IHsgTG9kb3BNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2xvZG9wJztcbmltcG9ydCB7IFF1aWNrTWVudU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvcXVpY2stbWVudSc7XG5pbXBvcnQgeyBRUk1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvcXInO1xuaW1wb3J0IHsgRGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZGF0ZS1waWNrZXInO1xuaW1wb3J0IHsgU0dNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2dyaWQnO1xuXG5jb25zdCBNT0RVTEVTID0gW1xuICBFcnJvckNvbGxlY3RNb2R1bGUsXG4gIEZvb3RlclRvb2xiYXJNb2R1bGUsXG4gIFNpZGViYXJOYXZNb2R1bGUsXG4gIERvd25GaWxlTW9kdWxlLFxuICBJbWFnZU1vZHVsZSxcbiAgQXZhdGFyTGlzdE1vZHVsZSxcbiAgRWxsaXBzaXNNb2R1bGUsXG4gIEdsb2JhbEZvb3Rlck1vZHVsZSxcbiAgRXhjZXB0aW9uTW9kdWxlLFxuICBOb3RpY2VJY29uTW9kdWxlLFxuICBQYWdlSGVhZGVyTW9kdWxlLFxuICBSZXN1bHRNb2R1bGUsXG4gIFRhZ1NlbGVjdE1vZHVsZSxcbiAgQ291bnREb3duTW9kdWxlLFxuICBTVE1vZHVsZSxcbiAgUmV1c2VUYWJNb2R1bGUsXG4gIEZ1bGxDb250ZW50TW9kdWxlLFxuICBYbHN4TW9kdWxlLFxuICBaaXBNb2R1bGUsXG4gIE51bWJlclRvQ2hpbmVzZU1vZHVsZSxcbiAgTG9kb3BNb2R1bGUsXG4gIFF1aWNrTWVudU1vZHVsZSxcbiAgUVJNb2R1bGUsXG4gIFNWTW9kdWxlLFxuICBTRU1vZHVsZSxcbiAgU0dNb2R1bGUsXG4gIERhdGVQaWNrZXJNb2R1bGUsXG5dO1xuXG4vLyBlbmRyZWdpb25cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEVycm9yQ29sbGVjdE1vZHVsZS5mb3JSb290KCksXG4gICAgRm9vdGVyVG9vbGJhck1vZHVsZS5mb3JSb290KCksXG4gICAgU2lkZWJhck5hdk1vZHVsZS5mb3JSb290KCksXG4gICAgRG93bkZpbGVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEltYWdlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBBdmF0YXJMaXN0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBFbGxpcHNpc01vZHVsZS5mb3JSb290KCksXG4gICAgRXhjZXB0aW9uTW9kdWxlLmZvclJvb3QoKSxcbiAgICBFeGNlcHRpb25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5vdGljZUljb25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIFBhZ2VIZWFkZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFJlc3VsdE1vZHVsZS5mb3JSb290KCksXG4gICAgVGFnU2VsZWN0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBDb3VudERvd25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIFNUTW9kdWxlLmZvclJvb3QoKSxcbiAgICBSZXVzZVRhYk1vZHVsZS5mb3JSb290KCksXG4gICAgRnVsbENvbnRlbnRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFhsc3hNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFppcE1vZHVsZS5mb3JSb290KCksXG4gICAgTnVtYmVyVG9DaGluZXNlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBMb2RvcE1vZHVsZS5mb3JSb290KCksXG4gICAgUXVpY2tNZW51TW9kdWxlLmZvclJvb3QoKSxcbiAgICBRUk1vZHVsZS5mb3JSb290KCksXG4gICAgU1ZNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFNFTW9kdWxlLmZvclJvb3QoKSxcbiAgICBTR01vZHVsZS5mb3JSb290KCksXG4gICAgRGF0ZVBpY2tlck1vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGV4cG9ydHM6IE1PRFVMRVMsXG59KVxuZXhwb3J0IGNsYXNzIERlbG9uQUJDUm9vdE1vZHVsZSB7fVxuXG5ATmdNb2R1bGUoeyBleHBvcnRzOiBNT0RVTEVTIH0pXG5leHBvcnQgY2xhc3MgRGVsb25BQkNNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogRGVsb25BQkNSb290TW9kdWxlIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcnJvckNvbGxlY3RNb2R1bGUiLCJGb290ZXJUb29sYmFyTW9kdWxlIiwiU2lkZWJhck5hdk1vZHVsZSIsIkRvd25GaWxlTW9kdWxlIiwiSW1hZ2VNb2R1bGUiLCJBdmF0YXJMaXN0TW9kdWxlIiwiRWxsaXBzaXNNb2R1bGUiLCJHbG9iYWxGb290ZXJNb2R1bGUiLCJFeGNlcHRpb25Nb2R1bGUiLCJOb3RpY2VJY29uTW9kdWxlIiwiUGFnZUhlYWRlck1vZHVsZSIsIlJlc3VsdE1vZHVsZSIsIlRhZ1NlbGVjdE1vZHVsZSIsIkNvdW50RG93bk1vZHVsZSIsIlNUTW9kdWxlIiwiUmV1c2VUYWJNb2R1bGUiLCJGdWxsQ29udGVudE1vZHVsZSIsIlhsc3hNb2R1bGUiLCJaaXBNb2R1bGUiLCJOdW1iZXJUb0NoaW5lc2VNb2R1bGUiLCJMb2RvcE1vZHVsZSIsIlF1aWNrTWVudU1vZHVsZSIsIlFSTW9kdWxlIiwiU1ZNb2R1bGUiLCJTRU1vZHVsZSIsIlNHTW9kdWxlIiwiRGF0ZVBpY2tlck1vZHVsZSIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUErQkEsSUFBTSxPQUFPLEdBQUc7UUFDZEEsK0JBQWtCO1FBQ2xCQyxpQ0FBbUI7UUFDbkJDLDJCQUFnQjtRQUNoQkMsdUJBQWM7UUFDZEMsaUJBQVc7UUFDWEMsMkJBQWdCO1FBQ2hCQyx1QkFBYztRQUNkQywrQkFBa0I7UUFDbEJDLHlCQUFlO1FBQ2ZDLDJCQUFnQjtRQUNoQkMsMkJBQWdCO1FBQ2hCQyxtQkFBWTtRQUNaQyx5QkFBZTtRQUNmQyx5QkFBZTtRQUNmQyxjQUFRO1FBQ1JDLHVCQUFjO1FBQ2RDLDZCQUFpQjtRQUNqQkMsZUFBVTtRQUNWQyxhQUFTO1FBQ1RDLHFDQUFxQjtRQUNyQkMsaUJBQVc7UUFDWEMseUJBQWU7UUFDZkMsV0FBUTtRQUNSQyxhQUFRO1FBQ1JDLGFBQVE7UUFDUkMsYUFBUTtRQUNSQywyQkFBZ0I7S0FDakIsQ0FBQzs7Ozs7b0JBSURDLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1AzQiwrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7NEJBQzVCQyxpQ0FBbUIsQ0FBQyxPQUFPLEVBQUU7NEJBQzdCQywyQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7NEJBQzFCQyx1QkFBYyxDQUFDLE9BQU8sRUFBRTs0QkFDeEJDLGlCQUFXLENBQUMsT0FBTyxFQUFFOzRCQUNyQkMsMkJBQWdCLENBQUMsT0FBTyxFQUFFOzRCQUMxQkMsdUJBQWMsQ0FBQyxPQUFPLEVBQUU7NEJBQ3hCRSx5QkFBZSxDQUFDLE9BQU8sRUFBRTs0QkFDekJBLHlCQUFlLENBQUMsT0FBTyxFQUFFOzRCQUN6QkMsMkJBQWdCLENBQUMsT0FBTyxFQUFFOzRCQUMxQkMsMkJBQWdCLENBQUMsT0FBTyxFQUFFOzRCQUMxQkMsbUJBQVksQ0FBQyxPQUFPLEVBQUU7NEJBQ3RCQyx5QkFBZSxDQUFDLE9BQU8sRUFBRTs0QkFDekJDLHlCQUFlLENBQUMsT0FBTyxFQUFFOzRCQUN6QkMsY0FBUSxDQUFDLE9BQU8sRUFBRTs0QkFDbEJDLHVCQUFjLENBQUMsT0FBTyxFQUFFOzRCQUN4QkMsNkJBQWlCLENBQUMsT0FBTyxFQUFFOzRCQUMzQkMsZUFBVSxDQUFDLE9BQU8sRUFBRTs0QkFDcEJDLGFBQVMsQ0FBQyxPQUFPLEVBQUU7NEJBQ25CQyxxQ0FBcUIsQ0FBQyxPQUFPLEVBQUU7NEJBQy9CQyxpQkFBVyxDQUFDLE9BQU8sRUFBRTs0QkFDckJDLHlCQUFlLENBQUMsT0FBTyxFQUFFOzRCQUN6QkMsV0FBUSxDQUFDLE9BQU8sRUFBRTs0QkFDbEJDLGFBQVEsQ0FBQyxPQUFPLEVBQUU7NEJBQ2xCQyxhQUFRLENBQUMsT0FBTyxFQUFFOzRCQUNsQkMsYUFBUSxDQUFDLE9BQU8sRUFBRTs0QkFDbEJDLDJCQUFnQixDQUFDLE9BQU8sRUFBRTt5QkFDM0I7d0JBQ0QsT0FBTyxFQUFFLE9BQU87cUJBQ2pCOztpQ0E5RkQ7Ozs7Ozs7O1FBbUdTLHNCQUFPOzs7WUFBZDtnQkFDRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLENBQUM7YUFDekM7O29CQUpGQyxhQUFRLFNBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFOzs2QkFqRzlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=