/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
// #region all modules
import { AvatarListModule } from '@delon/abc/avatar-list';
import { CountDownModule } from '@delon/abc/count-down';
import { DatePickerModule } from '@delon/abc/date-picker';
import { DownFileModule } from '@delon/abc/down-file';
import { SEModule } from '@delon/abc/edit';
import { EllipsisModule } from '@delon/abc/ellipsis';
import { ErrorCollectModule } from '@delon/abc/error-collect';
import { ExceptionModule } from '@delon/abc/exception';
import { FooterToolbarModule } from '@delon/abc/footer-toolbar';
import { FullContentModule } from '@delon/abc/full-content';
import { GlobalFooterModule } from '@delon/abc/global-footer';
import { SGModule } from '@delon/abc/grid';
import { ImageModule } from '@delon/abc/image';
import { LodopModule } from '@delon/abc/lodop';
import { NoticeIconModule } from '@delon/abc/notice-icon';
import { NumberToChineseModule } from '@delon/abc/number-to-chinese';
import { PageHeaderModule } from '@delon/abc/page-header';
import { QRModule } from '@delon/abc/qr';
import { QuickMenuModule } from '@delon/abc/quick-menu';
import { ResultModule } from '@delon/abc/result';
import { ReuseTabModule } from '@delon/abc/reuse-tab';
import { SidebarNavModule } from '@delon/abc/sidebar-nav';
import { STModule } from '@delon/abc/table';
import { TagSelectModule } from '@delon/abc/tag-select';
import { SVModule } from '@delon/abc/view';
import { XlsxModule } from '@delon/abc/xlsx';
import { ZipModule } from '@delon/abc/zip';
/** @type {?} */
var MODULES = [
    ErrorCollectModule,
    FooterToolbarModule,
    SidebarNavModule,
    DownFileModule,
    ImageModule,
    AvatarListModule,
    EllipsisModule,
    GlobalFooterModule,
    ExceptionModule,
    NoticeIconModule,
    PageHeaderModule,
    ResultModule,
    TagSelectModule,
    CountDownModule,
    STModule,
    ReuseTabModule,
    FullContentModule,
    XlsxModule,
    ZipModule,
    NumberToChineseModule,
    LodopModule,
    QuickMenuModule,
    QRModule,
    SVModule,
    SEModule,
    SGModule,
    DatePickerModule,
];
// #endregion
var DelonABCRootModule = /** @class */ (function () {
    function DelonABCRootModule() {
    }
    DelonABCRootModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ErrorCollectModule.forRoot(),
                        FooterToolbarModule.forRoot(),
                        SidebarNavModule.forRoot(),
                        DownFileModule.forRoot(),
                        ImageModule.forRoot(),
                        AvatarListModule.forRoot(),
                        EllipsisModule.forRoot(),
                        ExceptionModule.forRoot(),
                        ExceptionModule.forRoot(),
                        NoticeIconModule.forRoot(),
                        PageHeaderModule.forRoot(),
                        ResultModule.forRoot(),
                        TagSelectModule.forRoot(),
                        CountDownModule.forRoot(),
                        STModule.forRoot(),
                        ReuseTabModule.forRoot(),
                        FullContentModule.forRoot(),
                        XlsxModule.forRoot(),
                        ZipModule.forRoot(),
                        NumberToChineseModule.forRoot(),
                        LodopModule.forRoot(),
                        QuickMenuModule.forRoot(),
                        QRModule.forRoot(),
                        SVModule.forRoot(),
                        SEModule.forRoot(),
                        SGModule.forRoot(),
                        DatePickerModule.forRoot(),
                    ],
                    exports: MODULES,
                },] }
    ];
    return DelonABCRootModule;
}());
export { DelonABCRootModule };
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
        { type: NgModule, args: [{ exports: MODULES },] }
    ];
    return DelonABCModule;
}());
export { DelonABCModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvIiwic291cmNlcyI6WyJhYmMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFB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Q0FBQSxBQUxELElBS0M7U0FKWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gI3JlZ2lvbiBhbGwgbW9kdWxlc1xuaW1wb3J0IHsgQXZhdGFyTGlzdE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvYXZhdGFyLWxpc3QnO1xuaW1wb3J0IHsgQ291bnREb3duTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9jb3VudC1kb3duJztcbmltcG9ydCB7IERhdGVQaWNrZXJNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2RhdGUtcGlja2VyJztcbmltcG9ydCB7IERvd25GaWxlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9kb3duLWZpbGUnO1xuaW1wb3J0IHsgU0VNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2VkaXQnO1xuaW1wb3J0IHsgRWxsaXBzaXNNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2VsbGlwc2lzJztcbmltcG9ydCB7IEVycm9yQ29sbGVjdE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZXJyb3ItY29sbGVjdCc7XG5pbXBvcnQgeyBFeGNlcHRpb25Nb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2V4Y2VwdGlvbic7XG5pbXBvcnQgeyBGb290ZXJUb29sYmFyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9mb290ZXItdG9vbGJhcic7XG5pbXBvcnQgeyBGdWxsQ29udGVudE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZnVsbC1jb250ZW50JztcbmltcG9ydCB7IEdsb2JhbEZvb3Rlck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZ2xvYmFsLWZvb3Rlcic7XG5pbXBvcnQgeyBTR01vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZ3JpZCc7XG5pbXBvcnQgeyBJbWFnZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvaW1hZ2UnO1xuaW1wb3J0IHsgTG9kb3BNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2xvZG9wJztcbmltcG9ydCB7IE5vdGljZUljb25Nb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL25vdGljZS1pY29uJztcbmltcG9ydCB7IE51bWJlclRvQ2hpbmVzZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvbnVtYmVyLXRvLWNoaW5lc2UnO1xuaW1wb3J0IHsgUGFnZUhlYWRlck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvcGFnZS1oZWFkZXInO1xuaW1wb3J0IHsgUVJNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3FyJztcbmltcG9ydCB7IFF1aWNrTWVudU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvcXVpY2stbWVudSc7XG5pbXBvcnQgeyBSZXN1bHRNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3Jlc3VsdCc7XG5pbXBvcnQgeyBSZXVzZVRhYk1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvcmV1c2UtdGFiJztcbmltcG9ydCB7IFNpZGViYXJOYXZNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3NpZGViYXItbmF2JztcbmltcG9ydCB7IFNUTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy90YWJsZSc7XG5pbXBvcnQgeyBUYWdTZWxlY3RNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3RhZy1zZWxlY3QnO1xuaW1wb3J0IHsgU1ZNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3ZpZXcnO1xuaW1wb3J0IHsgWGxzeE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMveGxzeCc7XG5pbXBvcnQgeyBaaXBNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3ppcCc7XG5cbmNvbnN0IE1PRFVMRVMgPSBbXG4gIEVycm9yQ29sbGVjdE1vZHVsZSxcbiAgRm9vdGVyVG9vbGJhck1vZHVsZSxcbiAgU2lkZWJhck5hdk1vZHVsZSxcbiAgRG93bkZpbGVNb2R1bGUsXG4gIEltYWdlTW9kdWxlLFxuICBBdmF0YXJMaXN0TW9kdWxlLFxuICBFbGxpcHNpc01vZHVsZSxcbiAgR2xvYmFsRm9vdGVyTW9kdWxlLFxuICBFeGNlcHRpb25Nb2R1bGUsXG4gIE5vdGljZUljb25Nb2R1bGUsXG4gIFBhZ2VIZWFkZXJNb2R1bGUsXG4gIFJlc3VsdE1vZHVsZSxcbiAgVGFnU2VsZWN0TW9kdWxlLFxuICBDb3VudERvd25Nb2R1bGUsXG4gIFNUTW9kdWxlLFxuICBSZXVzZVRhYk1vZHVsZSxcbiAgRnVsbENvbnRlbnRNb2R1bGUsXG4gIFhsc3hNb2R1bGUsXG4gIFppcE1vZHVsZSxcbiAgTnVtYmVyVG9DaGluZXNlTW9kdWxlLFxuICBMb2RvcE1vZHVsZSxcbiAgUXVpY2tNZW51TW9kdWxlLFxuICBRUk1vZHVsZSxcbiAgU1ZNb2R1bGUsXG4gIFNFTW9kdWxlLFxuICBTR01vZHVsZSxcbiAgRGF0ZVBpY2tlck1vZHVsZSxcbl07XG5cbi8vICNlbmRyZWdpb25cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEVycm9yQ29sbGVjdE1vZHVsZS5mb3JSb290KCksXG4gICAgRm9vdGVyVG9vbGJhck1vZHVsZS5mb3JSb290KCksXG4gICAgU2lkZWJhck5hdk1vZHVsZS5mb3JSb290KCksXG4gICAgRG93bkZpbGVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEltYWdlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBBdmF0YXJMaXN0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBFbGxpcHNpc01vZHVsZS5mb3JSb290KCksXG4gICAgRXhjZXB0aW9uTW9kdWxlLmZvclJvb3QoKSxcbiAgICBFeGNlcHRpb25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5vdGljZUljb25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIFBhZ2VIZWFkZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFJlc3VsdE1vZHVsZS5mb3JSb290KCksXG4gICAgVGFnU2VsZWN0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBDb3VudERvd25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIFNUTW9kdWxlLmZvclJvb3QoKSxcbiAgICBSZXVzZVRhYk1vZHVsZS5mb3JSb290KCksXG4gICAgRnVsbENvbnRlbnRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFhsc3hNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFppcE1vZHVsZS5mb3JSb290KCksXG4gICAgTnVtYmVyVG9DaGluZXNlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBMb2RvcE1vZHVsZS5mb3JSb290KCksXG4gICAgUXVpY2tNZW51TW9kdWxlLmZvclJvb3QoKSxcbiAgICBRUk1vZHVsZS5mb3JSb290KCksXG4gICAgU1ZNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFNFTW9kdWxlLmZvclJvb3QoKSxcbiAgICBTR01vZHVsZS5mb3JSb290KCksXG4gICAgRGF0ZVBpY2tlck1vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGV4cG9ydHM6IE1PRFVMRVMsXG59KVxuZXhwb3J0IGNsYXNzIERlbG9uQUJDUm9vdE1vZHVsZSB7IH1cblxuQE5nTW9kdWxlKHsgZXhwb3J0czogTU9EVUxFUyB9KVxuZXhwb3J0IGNsYXNzIERlbG9uQUJDTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IERlbG9uQUJDUm9vdE1vZHVsZSB9O1xuICB9XG59XG4iXX0=