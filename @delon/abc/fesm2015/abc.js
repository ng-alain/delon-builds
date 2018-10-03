import { NgModule } from '@angular/core';
import { STModule } from '@delon/abc/table';
export { ɵa, STComponent, STRowDirective, STConfig, STModule, STColumnSource, STDataSource, STExport } from '@delon/abc/table';
import { SVModule } from '@delon/abc/view';
export { SVContainerComponent, SVTitleComponent, SVComponent, SVConfig, SVModule } from '@delon/abc/view';
import { SEModule } from '@delon/abc/edit';
export { SEContainerComponent, SEErrorComponent, SETitleComponent, SEComponent, SEConfig, SEModule } from '@delon/abc/edit';
import { ErrorCollectModule } from '@delon/abc/error-collect';
export { ErrorCollectComponent, ErrorCollectConfig, ErrorCollectModule } from '@delon/abc/error-collect';
import { FooterToolbarModule } from '@delon/abc/footer-toolbar';
export { FooterToolbarComponent, FooterToolbarModule } from '@delon/abc/footer-toolbar';
import { SidebarNavModule } from '@delon/abc/sidebar-nav';
export { SidebarNavComponent, SidebarNavModule } from '@delon/abc/sidebar-nav';
import { DownFileModule } from '@delon/abc/down-file';
export { DownFileDirective, DownFileModule } from '@delon/abc/down-file';
import { ImageModule } from '@delon/abc/image';
export { ImageDirective, ImageConfig, ImageModule } from '@delon/abc/image';
import { AvatarListModule } from '@delon/abc/avatar-list';
export { AvatarListItemComponent, AvatarListComponent, AvatarListModule } from '@delon/abc/avatar-list';
import { EllipsisModule } from '@delon/abc/ellipsis';
export { EllipsisComponent, EllipsisModule } from '@delon/abc/ellipsis';
import { GlobalFooterModule } from '@delon/abc/global-footer';
export { GlobalFooterComponent, GlobalFooterItemComponent, GlobalFooterModule } from '@delon/abc/global-footer';
import { ExceptionModule } from '@delon/abc/exception';
export { ExceptionComponent, ExceptionModule } from '@delon/abc/exception';
import { NoticeIconModule } from '@delon/abc/notice-icon';
export { NoticeIconTabComponent, NoticeIconComponent, NoticeIconModule } from '@delon/abc/notice-icon';
import { PageHeaderModule } from '@delon/abc/page-header';
export { PageHeaderConfig, PageHeaderComponent, PageHeaderModule } from '@delon/abc/page-header';
import { ResultModule } from '@delon/abc/result';
export { ResultComponent, ResultModule } from '@delon/abc/result';
import { TagSelectModule } from '@delon/abc/tag-select';
export { TagSelectComponent, TagSelectModule } from '@delon/abc/tag-select';
import { CountDownModule } from '@delon/abc/count-down';
export { CountDownComponent, CountDownModule } from '@delon/abc/count-down';
import { ReuseTabModule } from '@delon/abc/reuse-tab';
export { ReuseTabContextMenuComponent, ReuseTabContextComponent, ReuseTabContextDirective, ReuseTabContextService, ReuseTabComponent, ReuseTabService, ReuseTabStrategy, ReuseTabModule, ReuseTabMatchMode } from '@delon/abc/reuse-tab';
import { FullContentModule } from '@delon/abc/full-content';
export { FullContentComponent, FullContentService, FullContentToggleDirective, FullContentModule } from '@delon/abc/full-content';
import { XlsxModule } from '@delon/abc/xlsx';
export { XlsxConfig, XlsxService, XlsxDirective, XlsxModule } from '@delon/abc/xlsx';
import { ZipModule } from '@delon/abc/zip';
export { ZipService, ZipModule, ZipConfig } from '@delon/abc/zip';
import { NumberToChineseModule } from '@delon/abc/number-to-chinese';
export { numberToChinese, NaNumberToChinesePipe, NumberToChineseModule } from '@delon/abc/number-to-chinese';
import { LodopModule } from '@delon/abc/lodop';
export { LodopService, LodopConfig, LodopModule } from '@delon/abc/lodop';
import { QuickMenuModule } from '@delon/abc/quick-menu';
export { QuickMenuComponent, QuickMenuModule } from '@delon/abc/quick-menu';
import { QRModule } from '@delon/abc/qr';
export { QRService, QRComponent, QRConfig, QRModule } from '@delon/abc/qr';
import { DatePickerModule } from '@delon/abc/date-picker';
export { RangePickerComponent, DatePickerModule, DateRangePickerConfig, DatePickerConfig } from '@delon/abc/date-picker';
import { SGModule } from '@delon/abc/grid';
export { SGContainerComponent, SGComponent, SGConfig, SGModule } from '@delon/abc/grid';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
class DelonABCRootModule {
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
class DelonABCModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { DelonABCRootModule, DelonABCModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJjLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL2FiYy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gcmVnaW9uOiBhbGwgbW9kdWxlc1xuaW1wb3J0IHsgU1RNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3RhYmxlJztcbmltcG9ydCB7IFNWTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy92aWV3JztcbmltcG9ydCB7IFNFTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9lZGl0JztcbmltcG9ydCB7IEVycm9yQ29sbGVjdE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZXJyb3ItY29sbGVjdCc7XG5pbXBvcnQgeyBGb290ZXJUb29sYmFyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9mb290ZXItdG9vbGJhcic7XG5pbXBvcnQgeyBTaWRlYmFyTmF2TW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9zaWRlYmFyLW5hdic7XG5pbXBvcnQgeyBEb3duRmlsZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZG93bi1maWxlJztcbmltcG9ydCB7IEltYWdlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9pbWFnZSc7XG5pbXBvcnQgeyBBdmF0YXJMaXN0TW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9hdmF0YXItbGlzdCc7XG5pbXBvcnQgeyBFbGxpcHNpc01vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZWxsaXBzaXMnO1xuaW1wb3J0IHsgR2xvYmFsRm9vdGVyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9nbG9iYWwtZm9vdGVyJztcbmltcG9ydCB7IEV4Y2VwdGlvbk1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZXhjZXB0aW9uJztcbmltcG9ydCB7IE5vdGljZUljb25Nb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL25vdGljZS1pY29uJztcbmltcG9ydCB7IFBhZ2VIZWFkZXJNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3BhZ2UtaGVhZGVyJztcbmltcG9ydCB7IFJlc3VsdE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvcmVzdWx0JztcbmltcG9ydCB7IFRhZ1NlbGVjdE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvdGFnLXNlbGVjdCc7XG5pbXBvcnQgeyBDb3VudERvd25Nb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2NvdW50LWRvd24nO1xuaW1wb3J0IHsgUmV1c2VUYWJNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3JldXNlLXRhYic7XG5pbXBvcnQgeyBGdWxsQ29udGVudE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZnVsbC1jb250ZW50JztcbmltcG9ydCB7IFhsc3hNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3hsc3gnO1xuaW1wb3J0IHsgWmlwTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy96aXAnO1xuaW1wb3J0IHsgTnVtYmVyVG9DaGluZXNlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9udW1iZXItdG8tY2hpbmVzZSc7XG5pbXBvcnQgeyBMb2RvcE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvbG9kb3AnO1xuaW1wb3J0IHsgUXVpY2tNZW51TW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9xdWljay1tZW51JztcbmltcG9ydCB7IFFSTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9xcic7XG5pbXBvcnQgeyBEYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9kYXRlLXBpY2tlcic7XG5pbXBvcnQgeyBTR01vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZ3JpZCc7XG5cbmNvbnN0IE1PRFVMRVMgPSBbXG4gIEVycm9yQ29sbGVjdE1vZHVsZSxcbiAgRm9vdGVyVG9vbGJhck1vZHVsZSxcbiAgU2lkZWJhck5hdk1vZHVsZSxcbiAgRG93bkZpbGVNb2R1bGUsXG4gIEltYWdlTW9kdWxlLFxuICBBdmF0YXJMaXN0TW9kdWxlLFxuICBFbGxpcHNpc01vZHVsZSxcbiAgR2xvYmFsRm9vdGVyTW9kdWxlLFxuICBFeGNlcHRpb25Nb2R1bGUsXG4gIE5vdGljZUljb25Nb2R1bGUsXG4gIFBhZ2VIZWFkZXJNb2R1bGUsXG4gIFJlc3VsdE1vZHVsZSxcbiAgVGFnU2VsZWN0TW9kdWxlLFxuICBDb3VudERvd25Nb2R1bGUsXG4gIFNUTW9kdWxlLFxuICBSZXVzZVRhYk1vZHVsZSxcbiAgRnVsbENvbnRlbnRNb2R1bGUsXG4gIFhsc3hNb2R1bGUsXG4gIFppcE1vZHVsZSxcbiAgTnVtYmVyVG9DaGluZXNlTW9kdWxlLFxuICBMb2RvcE1vZHVsZSxcbiAgUXVpY2tNZW51TW9kdWxlLFxuICBRUk1vZHVsZSxcbiAgU1ZNb2R1bGUsXG4gIFNFTW9kdWxlLFxuICBTR01vZHVsZSxcbiAgRGF0ZVBpY2tlck1vZHVsZSxcbl07XG5cbi8vIGVuZHJlZ2lvblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRXJyb3JDb2xsZWN0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBGb290ZXJUb29sYmFyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBTaWRlYmFyTmF2TW9kdWxlLmZvclJvb3QoKSxcbiAgICBEb3duRmlsZU1vZHVsZS5mb3JSb290KCksXG4gICAgSW1hZ2VNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEF2YXRhckxpc3RNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEVsbGlwc2lzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBFeGNlcHRpb25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIEV4Y2VwdGlvbk1vZHVsZS5mb3JSb290KCksXG4gICAgTm90aWNlSWNvbk1vZHVsZS5mb3JSb290KCksXG4gICAgUGFnZUhlYWRlck1vZHVsZS5mb3JSb290KCksXG4gICAgUmVzdWx0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBUYWdTZWxlY3RNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENvdW50RG93bk1vZHVsZS5mb3JSb290KCksXG4gICAgU1RNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFJldXNlVGFiTW9kdWxlLmZvclJvb3QoKSxcbiAgICBGdWxsQ29udGVudE1vZHVsZS5mb3JSb290KCksXG4gICAgWGxzeE1vZHVsZS5mb3JSb290KCksXG4gICAgWmlwTW9kdWxlLmZvclJvb3QoKSxcbiAgICBOdW1iZXJUb0NoaW5lc2VNb2R1bGUuZm9yUm9vdCgpLFxuICAgIExvZG9wTW9kdWxlLmZvclJvb3QoKSxcbiAgICBRdWlja01lbnVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFFSTW9kdWxlLmZvclJvb3QoKSxcbiAgICBTVk1vZHVsZS5mb3JSb290KCksXG4gICAgU0VNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFNHTW9kdWxlLmZvclJvb3QoKSxcbiAgICBEYXRlUGlja2VyTW9kdWxlLmZvclJvb3QoKSxcbiAgXSxcbiAgZXhwb3J0czogTU9EVUxFUyxcbn0pXG5leHBvcnQgY2xhc3MgRGVsb25BQkNSb290TW9kdWxlIHt9XG5cbkBOZ01vZHVsZSh7IGV4cG9ydHM6IE1PRFVMRVMgfSlcbmV4cG9ydCBjbGFzcyBEZWxvbkFCQ01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBEZWxvbkFCQ1Jvb3RNb2R1bGUgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBK0JBLE1BQU0sT0FBTyxHQUFHO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixRQUFRO0lBQ1IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsU0FBUztJQUNULHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZUFBZTtJQUNmLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixnQkFBZ0I7Q0FDakIsQ0FBQztBQW9DRjs7O1lBaENDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCLENBQUMsT0FBTyxFQUFFO29CQUM1QixtQkFBbUIsQ0FBQyxPQUFPLEVBQUU7b0JBQzdCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtvQkFDMUIsY0FBYyxDQUFDLE9BQU8sRUFBRTtvQkFDeEIsV0FBVyxDQUFDLE9BQU8sRUFBRTtvQkFDckIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMxQixjQUFjLENBQUMsT0FBTyxFQUFFO29CQUN4QixlQUFlLENBQUMsT0FBTyxFQUFFO29CQUN6QixlQUFlLENBQUMsT0FBTyxFQUFFO29CQUN6QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzFCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtvQkFDMUIsWUFBWSxDQUFDLE9BQU8sRUFBRTtvQkFDdEIsZUFBZSxDQUFDLE9BQU8sRUFBRTtvQkFDekIsZUFBZSxDQUFDLE9BQU8sRUFBRTtvQkFDekIsUUFBUSxDQUFDLE9BQU8sRUFBRTtvQkFDbEIsY0FBYyxDQUFDLE9BQU8sRUFBRTtvQkFDeEIsaUJBQWlCLENBQUMsT0FBTyxFQUFFO29CQUMzQixVQUFVLENBQUMsT0FBTyxFQUFFO29CQUNwQixTQUFTLENBQUMsT0FBTyxFQUFFO29CQUNuQixxQkFBcUIsQ0FBQyxPQUFPLEVBQUU7b0JBQy9CLFdBQVcsQ0FBQyxPQUFPLEVBQUU7b0JBQ3JCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3pCLFFBQVEsQ0FBQyxPQUFPLEVBQUU7b0JBQ2xCLFFBQVEsQ0FBQyxPQUFPLEVBQUU7b0JBQ2xCLFFBQVEsQ0FBQyxPQUFPLEVBQUU7b0JBQ2xCLFFBQVEsQ0FBQyxPQUFPLEVBQUU7b0JBQ2xCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtpQkFDM0I7Z0JBQ0QsT0FBTyxFQUFFLE9BQU87YUFDakI7O0FBSUQ7Ozs7SUFDRSxPQUFPLE9BQU87UUFDWixPQUFPLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLENBQUM7S0FDekM7OztZQUpGLFFBQVEsU0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7Ozs7Ozs7Ozs7Ozs7OzsifQ==