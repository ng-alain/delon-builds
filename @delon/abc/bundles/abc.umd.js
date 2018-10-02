/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.3-ed90aa6
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJjLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9hYmMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyByZWdpb246IGFsbCBtb2R1bGVzXHJcbmltcG9ydCB7IFNUTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy90YWJsZSc7XHJcbmltcG9ydCB7IFNWTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy92aWV3JztcclxuaW1wb3J0IHsgU0VNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2VkaXQnO1xyXG5pbXBvcnQgeyBFcnJvckNvbGxlY3RNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2Vycm9yLWNvbGxlY3QnO1xyXG5pbXBvcnQgeyBGb290ZXJUb29sYmFyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9mb290ZXItdG9vbGJhcic7XHJcbmltcG9ydCB7IFNpZGViYXJOYXZNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3NpZGViYXItbmF2JztcclxuaW1wb3J0IHsgRG93bkZpbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2Rvd24tZmlsZSc7XHJcbmltcG9ydCB7IEltYWdlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9pbWFnZSc7XHJcbmltcG9ydCB7IEF2YXRhckxpc3RNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2F2YXRhci1saXN0JztcclxuaW1wb3J0IHsgRWxsaXBzaXNNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2VsbGlwc2lzJztcclxuaW1wb3J0IHsgR2xvYmFsRm9vdGVyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9nbG9iYWwtZm9vdGVyJztcclxuaW1wb3J0IHsgRXhjZXB0aW9uTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyBOb3RpY2VJY29uTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9ub3RpY2UtaWNvbic7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3BhZ2UtaGVhZGVyJztcclxuaW1wb3J0IHsgUmVzdWx0TW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9yZXN1bHQnO1xyXG5pbXBvcnQgeyBUYWdTZWxlY3RNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3RhZy1zZWxlY3QnO1xyXG5pbXBvcnQgeyBDb3VudERvd25Nb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2NvdW50LWRvd24nO1xyXG5pbXBvcnQgeyBSZXVzZVRhYk1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvcmV1c2UtdGFiJztcclxuaW1wb3J0IHsgRnVsbENvbnRlbnRNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2Z1bGwtY29udGVudCc7XHJcbmltcG9ydCB7IFhsc3hNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3hsc3gnO1xyXG5pbXBvcnQgeyBaaXBNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3ppcCc7XHJcbmltcG9ydCB7IE51bWJlclRvQ2hpbmVzZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvbnVtYmVyLXRvLWNoaW5lc2UnO1xyXG5pbXBvcnQgeyBMb2RvcE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvbG9kb3AnO1xyXG5pbXBvcnQgeyBRdWlja01lbnVNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3F1aWNrLW1lbnUnO1xyXG5pbXBvcnQgeyBRUk1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvcXInO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9kYXRlLXBpY2tlcic7XHJcbmltcG9ydCB7IFNHTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9ncmlkJztcclxuXHJcbmNvbnN0IE1PRFVMRVMgPSBbXHJcbiAgRXJyb3JDb2xsZWN0TW9kdWxlLFxyXG4gIEZvb3RlclRvb2xiYXJNb2R1bGUsXHJcbiAgU2lkZWJhck5hdk1vZHVsZSxcclxuICBEb3duRmlsZU1vZHVsZSxcclxuICBJbWFnZU1vZHVsZSxcclxuICBBdmF0YXJMaXN0TW9kdWxlLFxyXG4gIEVsbGlwc2lzTW9kdWxlLFxyXG4gIEdsb2JhbEZvb3Rlck1vZHVsZSxcclxuICBFeGNlcHRpb25Nb2R1bGUsXHJcbiAgTm90aWNlSWNvbk1vZHVsZSxcclxuICBQYWdlSGVhZGVyTW9kdWxlLFxyXG4gIFJlc3VsdE1vZHVsZSxcclxuICBUYWdTZWxlY3RNb2R1bGUsXHJcbiAgQ291bnREb3duTW9kdWxlLFxyXG4gIFNUTW9kdWxlLFxyXG4gIFJldXNlVGFiTW9kdWxlLFxyXG4gIEZ1bGxDb250ZW50TW9kdWxlLFxyXG4gIFhsc3hNb2R1bGUsXHJcbiAgWmlwTW9kdWxlLFxyXG4gIE51bWJlclRvQ2hpbmVzZU1vZHVsZSxcclxuICBMb2RvcE1vZHVsZSxcclxuICBRdWlja01lbnVNb2R1bGUsXHJcbiAgUVJNb2R1bGUsXHJcbiAgU1ZNb2R1bGUsXHJcbiAgU0VNb2R1bGUsXHJcbiAgU0dNb2R1bGUsXHJcbiAgRGF0ZVBpY2tlck1vZHVsZSxcclxuXTtcclxuXHJcbi8vIGVuZHJlZ2lvblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBFcnJvckNvbGxlY3RNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRm9vdGVyVG9vbGJhck1vZHVsZS5mb3JSb290KCksXHJcbiAgICBTaWRlYmFyTmF2TW9kdWxlLmZvclJvb3QoKSxcclxuICAgIERvd25GaWxlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEltYWdlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEF2YXRhckxpc3RNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRWxsaXBzaXNNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRXhjZXB0aW9uTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEV4Y2VwdGlvbk1vZHVsZS5mb3JSb290KCksXHJcbiAgICBOb3RpY2VJY29uTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFBhZ2VIZWFkZXJNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgUmVzdWx0TW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFRhZ1NlbGVjdE1vZHVsZS5mb3JSb290KCksXHJcbiAgICBDb3VudERvd25Nb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgU1RNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgUmV1c2VUYWJNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRnVsbENvbnRlbnRNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgWGxzeE1vZHVsZS5mb3JSb290KCksXHJcbiAgICBaaXBNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgTnVtYmVyVG9DaGluZXNlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIExvZG9wTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFF1aWNrTWVudU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBRUk1vZHVsZS5mb3JSb290KCksXHJcbiAgICBTVk1vZHVsZS5mb3JSb290KCksXHJcbiAgICBTRU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBTR01vZHVsZS5mb3JSb290KCksXHJcbiAgICBEYXRlUGlja2VyTW9kdWxlLmZvclJvb3QoKSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IE1PRFVMRVMsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWxvbkFCQ1Jvb3RNb2R1bGUge31cclxuXHJcbkBOZ01vZHVsZSh7IGV4cG9ydHM6IE1PRFVMRVMgfSlcclxuZXhwb3J0IGNsYXNzIERlbG9uQUJDTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBEZWxvbkFCQ1Jvb3RNb2R1bGUgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkVycm9yQ29sbGVjdE1vZHVsZSIsIkZvb3RlclRvb2xiYXJNb2R1bGUiLCJTaWRlYmFyTmF2TW9kdWxlIiwiRG93bkZpbGVNb2R1bGUiLCJJbWFnZU1vZHVsZSIsIkF2YXRhckxpc3RNb2R1bGUiLCJFbGxpcHNpc01vZHVsZSIsIkdsb2JhbEZvb3Rlck1vZHVsZSIsIkV4Y2VwdGlvbk1vZHVsZSIsIk5vdGljZUljb25Nb2R1bGUiLCJQYWdlSGVhZGVyTW9kdWxlIiwiUmVzdWx0TW9kdWxlIiwiVGFnU2VsZWN0TW9kdWxlIiwiQ291bnREb3duTW9kdWxlIiwiU1RNb2R1bGUiLCJSZXVzZVRhYk1vZHVsZSIsIkZ1bGxDb250ZW50TW9kdWxlIiwiWGxzeE1vZHVsZSIsIlppcE1vZHVsZSIsIk51bWJlclRvQ2hpbmVzZU1vZHVsZSIsIkxvZG9wTW9kdWxlIiwiUXVpY2tNZW51TW9kdWxlIiwiUVJNb2R1bGUiLCJTVk1vZHVsZSIsIlNFTW9kdWxlIiwiU0dNb2R1bGUiLCJEYXRlUGlja2VyTW9kdWxlIiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQStCQSxJQUFNLE9BQU8sR0FBRztRQUNkQSwrQkFBa0I7UUFDbEJDLGlDQUFtQjtRQUNuQkMsMkJBQWdCO1FBQ2hCQyx1QkFBYztRQUNkQyxpQkFBVztRQUNYQywyQkFBZ0I7UUFDaEJDLHVCQUFjO1FBQ2RDLCtCQUFrQjtRQUNsQkMseUJBQWU7UUFDZkMsMkJBQWdCO1FBQ2hCQywyQkFBZ0I7UUFDaEJDLG1CQUFZO1FBQ1pDLHlCQUFlO1FBQ2ZDLHlCQUFlO1FBQ2ZDLGNBQVE7UUFDUkMsdUJBQWM7UUFDZEMsNkJBQWlCO1FBQ2pCQyxlQUFVO1FBQ1ZDLGFBQVM7UUFDVEMscUNBQXFCO1FBQ3JCQyxpQkFBVztRQUNYQyx5QkFBZTtRQUNmQyxXQUFRO1FBQ1JDLGFBQVE7UUFDUkMsYUFBUTtRQUNSQyxhQUFRO1FBQ1JDLDJCQUFnQjtLQUNqQixDQUFDOzs7OztvQkFJREMsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUDNCLCtCQUFrQixDQUFDLE9BQU8sRUFBRTs0QkFDNUJDLGlDQUFtQixDQUFDLE9BQU8sRUFBRTs0QkFDN0JDLDJCQUFnQixDQUFDLE9BQU8sRUFBRTs0QkFDMUJDLHVCQUFjLENBQUMsT0FBTyxFQUFFOzRCQUN4QkMsaUJBQVcsQ0FBQyxPQUFPLEVBQUU7NEJBQ3JCQywyQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7NEJBQzFCQyx1QkFBYyxDQUFDLE9BQU8sRUFBRTs0QkFDeEJFLHlCQUFlLENBQUMsT0FBTyxFQUFFOzRCQUN6QkEseUJBQWUsQ0FBQyxPQUFPLEVBQUU7NEJBQ3pCQywyQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7NEJBQzFCQywyQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7NEJBQzFCQyxtQkFBWSxDQUFDLE9BQU8sRUFBRTs0QkFDdEJDLHlCQUFlLENBQUMsT0FBTyxFQUFFOzRCQUN6QkMseUJBQWUsQ0FBQyxPQUFPLEVBQUU7NEJBQ3pCQyxjQUFRLENBQUMsT0FBTyxFQUFFOzRCQUNsQkMsdUJBQWMsQ0FBQyxPQUFPLEVBQUU7NEJBQ3hCQyw2QkFBaUIsQ0FBQyxPQUFPLEVBQUU7NEJBQzNCQyxlQUFVLENBQUMsT0FBTyxFQUFFOzRCQUNwQkMsYUFBUyxDQUFDLE9BQU8sRUFBRTs0QkFDbkJDLHFDQUFxQixDQUFDLE9BQU8sRUFBRTs0QkFDL0JDLGlCQUFXLENBQUMsT0FBTyxFQUFFOzRCQUNyQkMseUJBQWUsQ0FBQyxPQUFPLEVBQUU7NEJBQ3pCQyxXQUFRLENBQUMsT0FBTyxFQUFFOzRCQUNsQkMsYUFBUSxDQUFDLE9BQU8sRUFBRTs0QkFDbEJDLGFBQVEsQ0FBQyxPQUFPLEVBQUU7NEJBQ2xCQyxhQUFRLENBQUMsT0FBTyxFQUFFOzRCQUNsQkMsMkJBQWdCLENBQUMsT0FBTyxFQUFFO3lCQUMzQjt3QkFDRCxPQUFPLEVBQUUsT0FBTztxQkFDakI7O2lDQTlGRDs7Ozs7Ozs7UUFtR1Msc0JBQU87OztZQUFkO2dCQUNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQzthQUN6Qzs7b0JBSkZDLGFBQVEsU0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7OzZCQWpHOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==