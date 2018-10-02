/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { STModule } from '@delon/abc/table';
import { SVModule } from '@delon/abc/view';
import { SEModule } from '@delon/abc/edit';
import { ErrorCollectModule } from '@delon/abc/error-collect';
import { FooterToolbarModule } from '@delon/abc/footer-toolbar';
import { SidebarNavModule } from '@delon/abc/sidebar-nav';
import { DownFileModule } from '@delon/abc/down-file';
import { ImageModule } from '@delon/abc/image';
import { AvatarListModule } from '@delon/abc/avatar-list';
import { EllipsisModule } from '@delon/abc/ellipsis';
import { GlobalFooterModule } from '@delon/abc/global-footer';
import { ExceptionModule } from '@delon/abc/exception';
import { NoticeIconModule } from '@delon/abc/notice-icon';
import { PageHeaderModule } from '@delon/abc/page-header';
import { ResultModule } from '@delon/abc/result';
import { TagSelectModule } from '@delon/abc/tag-select';
import { CountDownModule } from '@delon/abc/count-down';
import { ReuseTabModule } from '@delon/abc/reuse-tab';
import { FullContentModule } from '@delon/abc/full-content';
import { XlsxModule } from '@delon/abc/xlsx';
import { ZipModule } from '@delon/abc/zip';
import { NumberToChineseModule } from '@delon/abc/number-to-chinese';
import { LodopModule } from '@delon/abc/lodop';
import { QuickMenuModule } from '@delon/abc/quick-menu';
import { QRModule } from '@delon/abc/qr';
import { DatePickerModule } from '@delon/abc/date-picker';
import { SGModule } from '@delon/abc/grid';
/** @type {?} */
const MODULES = [
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
export class DelonABCRootModule {
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
export class DelonABCModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: DelonABCRootModule };
    }
}
DelonABCModule.decorators = [
    { type: NgModule, args: [{ exports: MODULES },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvIiwic291cmNlcyI6WyJhYmMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUc5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFM0MsTUFBTSxPQUFPLEdBQUc7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFFBQVE7SUFDUixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLGdCQUFnQjtDQUNqQixDQUFDO0FBb0NGLE1BQU07OztZQWhDTCxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtvQkFDNUIsbUJBQW1CLENBQUMsT0FBTyxFQUFFO29CQUM3QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzFCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7b0JBQ3hCLFdBQVcsQ0FBQyxPQUFPLEVBQUU7b0JBQ3JCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtvQkFDMUIsY0FBYyxDQUFDLE9BQU8sRUFBRTtvQkFDeEIsZUFBZSxDQUFDLE9BQU8sRUFBRTtvQkFDekIsZUFBZSxDQUFDLE9BQU8sRUFBRTtvQkFDekIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMxQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzFCLFlBQVksQ0FBQyxPQUFPLEVBQUU7b0JBQ3RCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3pCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3pCLFFBQVEsQ0FBQyxPQUFPLEVBQUU7b0JBQ2xCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7b0JBQ3hCLGlCQUFpQixDQUFDLE9BQU8sRUFBRTtvQkFDM0IsVUFBVSxDQUFDLE9BQU8sRUFBRTtvQkFDcEIsU0FBUyxDQUFDLE9BQU8sRUFBRTtvQkFDbkIscUJBQXFCLENBQUMsT0FBTyxFQUFFO29CQUMvQixXQUFXLENBQUMsT0FBTyxFQUFFO29CQUNyQixlQUFlLENBQUMsT0FBTyxFQUFFO29CQUN6QixRQUFRLENBQUMsT0FBTyxFQUFFO29CQUNsQixRQUFRLENBQUMsT0FBTyxFQUFFO29CQUNsQixRQUFRLENBQUMsT0FBTyxFQUFFO29CQUNsQixRQUFRLENBQUMsT0FBTyxFQUFFO29CQUNsQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7aUJBQzNCO2dCQUNELE9BQU8sRUFBRSxPQUFPO2FBQ2pCOztBQUlELE1BQU07Ozs7SUFDSixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU8sRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztLQUN6Qzs7O1lBSkYsUUFBUSxTQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyByZWdpb246IGFsbCBtb2R1bGVzXHJcbmltcG9ydCB7IFNUTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy90YWJsZSc7XHJcbmltcG9ydCB7IFNWTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy92aWV3JztcclxuaW1wb3J0IHsgU0VNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2VkaXQnO1xyXG5pbXBvcnQgeyBFcnJvckNvbGxlY3RNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2Vycm9yLWNvbGxlY3QnO1xyXG5pbXBvcnQgeyBGb290ZXJUb29sYmFyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9mb290ZXItdG9vbGJhcic7XHJcbmltcG9ydCB7IFNpZGViYXJOYXZNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3NpZGViYXItbmF2JztcclxuaW1wb3J0IHsgRG93bkZpbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2Rvd24tZmlsZSc7XHJcbmltcG9ydCB7IEltYWdlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9pbWFnZSc7XHJcbmltcG9ydCB7IEF2YXRhckxpc3RNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2F2YXRhci1saXN0JztcclxuaW1wb3J0IHsgRWxsaXBzaXNNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2VsbGlwc2lzJztcclxuaW1wb3J0IHsgR2xvYmFsRm9vdGVyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9nbG9iYWwtZm9vdGVyJztcclxuaW1wb3J0IHsgRXhjZXB0aW9uTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyBOb3RpY2VJY29uTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9ub3RpY2UtaWNvbic7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3BhZ2UtaGVhZGVyJztcclxuaW1wb3J0IHsgUmVzdWx0TW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9yZXN1bHQnO1xyXG5pbXBvcnQgeyBUYWdTZWxlY3RNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3RhZy1zZWxlY3QnO1xyXG5pbXBvcnQgeyBDb3VudERvd25Nb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2NvdW50LWRvd24nO1xyXG5pbXBvcnQgeyBSZXVzZVRhYk1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvcmV1c2UtdGFiJztcclxuaW1wb3J0IHsgRnVsbENvbnRlbnRNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2Z1bGwtY29udGVudCc7XHJcbmltcG9ydCB7IFhsc3hNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3hsc3gnO1xyXG5pbXBvcnQgeyBaaXBNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3ppcCc7XHJcbmltcG9ydCB7IE51bWJlclRvQ2hpbmVzZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvbnVtYmVyLXRvLWNoaW5lc2UnO1xyXG5pbXBvcnQgeyBMb2RvcE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvbG9kb3AnO1xyXG5pbXBvcnQgeyBRdWlja01lbnVNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3F1aWNrLW1lbnUnO1xyXG5pbXBvcnQgeyBRUk1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvcXInO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9kYXRlLXBpY2tlcic7XHJcbmltcG9ydCB7IFNHTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9ncmlkJztcclxuXHJcbmNvbnN0IE1PRFVMRVMgPSBbXHJcbiAgRXJyb3JDb2xsZWN0TW9kdWxlLFxyXG4gIEZvb3RlclRvb2xiYXJNb2R1bGUsXHJcbiAgU2lkZWJhck5hdk1vZHVsZSxcclxuICBEb3duRmlsZU1vZHVsZSxcclxuICBJbWFnZU1vZHVsZSxcclxuICBBdmF0YXJMaXN0TW9kdWxlLFxyXG4gIEVsbGlwc2lzTW9kdWxlLFxyXG4gIEdsb2JhbEZvb3Rlck1vZHVsZSxcclxuICBFeGNlcHRpb25Nb2R1bGUsXHJcbiAgTm90aWNlSWNvbk1vZHVsZSxcclxuICBQYWdlSGVhZGVyTW9kdWxlLFxyXG4gIFJlc3VsdE1vZHVsZSxcclxuICBUYWdTZWxlY3RNb2R1bGUsXHJcbiAgQ291bnREb3duTW9kdWxlLFxyXG4gIFNUTW9kdWxlLFxyXG4gIFJldXNlVGFiTW9kdWxlLFxyXG4gIEZ1bGxDb250ZW50TW9kdWxlLFxyXG4gIFhsc3hNb2R1bGUsXHJcbiAgWmlwTW9kdWxlLFxyXG4gIE51bWJlclRvQ2hpbmVzZU1vZHVsZSxcclxuICBMb2RvcE1vZHVsZSxcclxuICBRdWlja01lbnVNb2R1bGUsXHJcbiAgUVJNb2R1bGUsXHJcbiAgU1ZNb2R1bGUsXHJcbiAgU0VNb2R1bGUsXHJcbiAgU0dNb2R1bGUsXHJcbiAgRGF0ZVBpY2tlck1vZHVsZSxcclxuXTtcclxuXHJcbi8vIGVuZHJlZ2lvblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBFcnJvckNvbGxlY3RNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRm9vdGVyVG9vbGJhck1vZHVsZS5mb3JSb290KCksXHJcbiAgICBTaWRlYmFyTmF2TW9kdWxlLmZvclJvb3QoKSxcclxuICAgIERvd25GaWxlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEltYWdlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEF2YXRhckxpc3RNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRWxsaXBzaXNNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRXhjZXB0aW9uTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEV4Y2VwdGlvbk1vZHVsZS5mb3JSb290KCksXHJcbiAgICBOb3RpY2VJY29uTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFBhZ2VIZWFkZXJNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgUmVzdWx0TW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFRhZ1NlbGVjdE1vZHVsZS5mb3JSb290KCksXHJcbiAgICBDb3VudERvd25Nb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgU1RNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgUmV1c2VUYWJNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRnVsbENvbnRlbnRNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgWGxzeE1vZHVsZS5mb3JSb290KCksXHJcbiAgICBaaXBNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgTnVtYmVyVG9DaGluZXNlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIExvZG9wTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFF1aWNrTWVudU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBRUk1vZHVsZS5mb3JSb290KCksXHJcbiAgICBTVk1vZHVsZS5mb3JSb290KCksXHJcbiAgICBTRU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBTR01vZHVsZS5mb3JSb290KCksXHJcbiAgICBEYXRlUGlja2VyTW9kdWxlLmZvclJvb3QoKSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IE1PRFVMRVMsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWxvbkFCQ1Jvb3RNb2R1bGUge31cclxuXHJcbkBOZ01vZHVsZSh7IGV4cG9ydHM6IE1PRFVMRVMgfSlcclxuZXhwb3J0IGNsYXNzIERlbG9uQUJDTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBEZWxvbkFCQ1Jvb3RNb2R1bGUgfTtcclxuICB9XHJcbn1cclxuIl19