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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvIiwic291cmNlcyI6WyJhYmMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUc5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFM0MsTUFBTSxPQUFPLEdBQUc7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFFBQVE7SUFDUixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLGdCQUFnQjtDQUNqQixDQUFDO0FBb0NGLE1BQU07OztZQWhDTCxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtvQkFDNUIsbUJBQW1CLENBQUMsT0FBTyxFQUFFO29CQUM3QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzFCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7b0JBQ3hCLFdBQVcsQ0FBQyxPQUFPLEVBQUU7b0JBQ3JCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtvQkFDMUIsY0FBYyxDQUFDLE9BQU8sRUFBRTtvQkFDeEIsZUFBZSxDQUFDLE9BQU8sRUFBRTtvQkFDekIsZUFBZSxDQUFDLE9BQU8sRUFBRTtvQkFDekIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMxQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzFCLFlBQVksQ0FBQyxPQUFPLEVBQUU7b0JBQ3RCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3pCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3pCLFFBQVEsQ0FBQyxPQUFPLEVBQUU7b0JBQ2xCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7b0JBQ3hCLGlCQUFpQixDQUFDLE9BQU8sRUFBRTtvQkFDM0IsVUFBVSxDQUFDLE9BQU8sRUFBRTtvQkFDcEIsU0FBUyxDQUFDLE9BQU8sRUFBRTtvQkFDbkIscUJBQXFCLENBQUMsT0FBTyxFQUFFO29CQUMvQixXQUFXLENBQUMsT0FBTyxFQUFFO29CQUNyQixlQUFlLENBQUMsT0FBTyxFQUFFO29CQUN6QixRQUFRLENBQUMsT0FBTyxFQUFFO29CQUNsQixRQUFRLENBQUMsT0FBTyxFQUFFO29CQUNsQixRQUFRLENBQUMsT0FBTyxFQUFFO29CQUNsQixRQUFRLENBQUMsT0FBTyxFQUFFO29CQUNsQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7aUJBQzNCO2dCQUNELE9BQU8sRUFBRSxPQUFPO2FBQ2pCOztBQUlELE1BQU07Ozs7SUFDSixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU8sRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztLQUN6Qzs7O1lBSkYsUUFBUSxTQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vICNyZWdpb24gYWxsIG1vZHVsZXNcbmltcG9ydCB7IFNUTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy90YWJsZSc7XG5pbXBvcnQgeyBTVk1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvdmlldyc7XG5pbXBvcnQgeyBTRU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZWRpdCc7XG5pbXBvcnQgeyBFcnJvckNvbGxlY3RNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2Vycm9yLWNvbGxlY3QnO1xuaW1wb3J0IHsgRm9vdGVyVG9vbGJhck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZm9vdGVyLXRvb2xiYXInO1xuaW1wb3J0IHsgU2lkZWJhck5hdk1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvc2lkZWJhci1uYXYnO1xuaW1wb3J0IHsgRG93bkZpbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2Rvd24tZmlsZSc7XG5pbXBvcnQgeyBJbWFnZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvaW1hZ2UnO1xuaW1wb3J0IHsgQXZhdGFyTGlzdE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvYXZhdGFyLWxpc3QnO1xuaW1wb3J0IHsgRWxsaXBzaXNNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2VsbGlwc2lzJztcbmltcG9ydCB7IEdsb2JhbEZvb3Rlck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZ2xvYmFsLWZvb3Rlcic7XG5pbXBvcnQgeyBFeGNlcHRpb25Nb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2V4Y2VwdGlvbic7XG5pbXBvcnQgeyBOb3RpY2VJY29uTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9ub3RpY2UtaWNvbic7XG5pbXBvcnQgeyBQYWdlSGVhZGVyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9wYWdlLWhlYWRlcic7XG5pbXBvcnQgeyBSZXN1bHRNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3Jlc3VsdCc7XG5pbXBvcnQgeyBUYWdTZWxlY3RNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3RhZy1zZWxlY3QnO1xuaW1wb3J0IHsgQ291bnREb3duTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9jb3VudC1kb3duJztcbmltcG9ydCB7IFJldXNlVGFiTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9yZXVzZS10YWInO1xuaW1wb3J0IHsgRnVsbENvbnRlbnRNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2Z1bGwtY29udGVudCc7XG5pbXBvcnQgeyBYbHN4TW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy94bHN4JztcbmltcG9ydCB7IFppcE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvemlwJztcbmltcG9ydCB7IE51bWJlclRvQ2hpbmVzZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvbnVtYmVyLXRvLWNoaW5lc2UnO1xuaW1wb3J0IHsgTG9kb3BNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2xvZG9wJztcbmltcG9ydCB7IFF1aWNrTWVudU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvcXVpY2stbWVudSc7XG5pbXBvcnQgeyBRUk1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvcXInO1xuaW1wb3J0IHsgRGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZGF0ZS1waWNrZXInO1xuaW1wb3J0IHsgU0dNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2dyaWQnO1xuXG5jb25zdCBNT0RVTEVTID0gW1xuICBFcnJvckNvbGxlY3RNb2R1bGUsXG4gIEZvb3RlclRvb2xiYXJNb2R1bGUsXG4gIFNpZGViYXJOYXZNb2R1bGUsXG4gIERvd25GaWxlTW9kdWxlLFxuICBJbWFnZU1vZHVsZSxcbiAgQXZhdGFyTGlzdE1vZHVsZSxcbiAgRWxsaXBzaXNNb2R1bGUsXG4gIEdsb2JhbEZvb3Rlck1vZHVsZSxcbiAgRXhjZXB0aW9uTW9kdWxlLFxuICBOb3RpY2VJY29uTW9kdWxlLFxuICBQYWdlSGVhZGVyTW9kdWxlLFxuICBSZXN1bHRNb2R1bGUsXG4gIFRhZ1NlbGVjdE1vZHVsZSxcbiAgQ291bnREb3duTW9kdWxlLFxuICBTVE1vZHVsZSxcbiAgUmV1c2VUYWJNb2R1bGUsXG4gIEZ1bGxDb250ZW50TW9kdWxlLFxuICBYbHN4TW9kdWxlLFxuICBaaXBNb2R1bGUsXG4gIE51bWJlclRvQ2hpbmVzZU1vZHVsZSxcbiAgTG9kb3BNb2R1bGUsXG4gIFF1aWNrTWVudU1vZHVsZSxcbiAgUVJNb2R1bGUsXG4gIFNWTW9kdWxlLFxuICBTRU1vZHVsZSxcbiAgU0dNb2R1bGUsXG4gIERhdGVQaWNrZXJNb2R1bGUsXG5dO1xuXG4vLyAjZW5kcmVnaW9uXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBFcnJvckNvbGxlY3RNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEZvb3RlclRvb2xiYXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFNpZGViYXJOYXZNb2R1bGUuZm9yUm9vdCgpLFxuICAgIERvd25GaWxlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBJbWFnZU1vZHVsZS5mb3JSb290KCksXG4gICAgQXZhdGFyTGlzdE1vZHVsZS5mb3JSb290KCksXG4gICAgRWxsaXBzaXNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEV4Y2VwdGlvbk1vZHVsZS5mb3JSb290KCksXG4gICAgRXhjZXB0aW9uTW9kdWxlLmZvclJvb3QoKSxcbiAgICBOb3RpY2VJY29uTW9kdWxlLmZvclJvb3QoKSxcbiAgICBQYWdlSGVhZGVyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBSZXN1bHRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRhZ1NlbGVjdE1vZHVsZS5mb3JSb290KCksXG4gICAgQ291bnREb3duTW9kdWxlLmZvclJvb3QoKSxcbiAgICBTVE1vZHVsZS5mb3JSb290KCksXG4gICAgUmV1c2VUYWJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEZ1bGxDb250ZW50TW9kdWxlLmZvclJvb3QoKSxcbiAgICBYbHN4TW9kdWxlLmZvclJvb3QoKSxcbiAgICBaaXBNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE51bWJlclRvQ2hpbmVzZU1vZHVsZS5mb3JSb290KCksXG4gICAgTG9kb3BNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFF1aWNrTWVudU1vZHVsZS5mb3JSb290KCksXG4gICAgUVJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFNWTW9kdWxlLmZvclJvb3QoKSxcbiAgICBTRU1vZHVsZS5mb3JSb290KCksXG4gICAgU0dNb2R1bGUuZm9yUm9vdCgpLFxuICAgIERhdGVQaWNrZXJNb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBleHBvcnRzOiBNT0RVTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBEZWxvbkFCQ1Jvb3RNb2R1bGUge31cblxuQE5nTW9kdWxlKHsgZXhwb3J0czogTU9EVUxFUyB9KVxuZXhwb3J0IGNsYXNzIERlbG9uQUJDTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IERlbG9uQUJDUm9vdE1vZHVsZSB9O1xuICB9XG59XG4iXX0=