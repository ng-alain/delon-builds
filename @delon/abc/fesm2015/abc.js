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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJjLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL2FiYy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIHJlZ2lvbjogYWxsIG1vZHVsZXNcclxuaW1wb3J0IHsgU1RNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3RhYmxlJztcclxuaW1wb3J0IHsgU1ZNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3ZpZXcnO1xyXG5pbXBvcnQgeyBTRU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZWRpdCc7XHJcbmltcG9ydCB7IEVycm9yQ29sbGVjdE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZXJyb3ItY29sbGVjdCc7XHJcbmltcG9ydCB7IEZvb3RlclRvb2xiYXJNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2Zvb3Rlci10b29sYmFyJztcclxuaW1wb3J0IHsgU2lkZWJhck5hdk1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvc2lkZWJhci1uYXYnO1xyXG5pbXBvcnQgeyBEb3duRmlsZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZG93bi1maWxlJztcclxuaW1wb3J0IHsgSW1hZ2VNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2ltYWdlJztcclxuaW1wb3J0IHsgQXZhdGFyTGlzdE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvYXZhdGFyLWxpc3QnO1xyXG5pbXBvcnQgeyBFbGxpcHNpc01vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZWxsaXBzaXMnO1xyXG5pbXBvcnQgeyBHbG9iYWxGb290ZXJNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2dsb2JhbC1mb290ZXInO1xyXG5pbXBvcnQgeyBFeGNlcHRpb25Nb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IE5vdGljZUljb25Nb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL25vdGljZS1pY29uJztcclxuaW1wb3J0IHsgUGFnZUhlYWRlck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvcGFnZS1oZWFkZXInO1xyXG5pbXBvcnQgeyBSZXN1bHRNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3Jlc3VsdCc7XHJcbmltcG9ydCB7IFRhZ1NlbGVjdE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvdGFnLXNlbGVjdCc7XHJcbmltcG9ydCB7IENvdW50RG93bk1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvY291bnQtZG93bic7XHJcbmltcG9ydCB7IFJldXNlVGFiTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9yZXVzZS10YWInO1xyXG5pbXBvcnQgeyBGdWxsQ29udGVudE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZnVsbC1jb250ZW50JztcclxuaW1wb3J0IHsgWGxzeE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMveGxzeCc7XHJcbmltcG9ydCB7IFppcE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvemlwJztcclxuaW1wb3J0IHsgTnVtYmVyVG9DaGluZXNlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9udW1iZXItdG8tY2hpbmVzZSc7XHJcbmltcG9ydCB7IExvZG9wTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9sb2RvcCc7XHJcbmltcG9ydCB7IFF1aWNrTWVudU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvcXVpY2stbWVudSc7XHJcbmltcG9ydCB7IFFSTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9xcic7XHJcbmltcG9ydCB7IERhdGVQaWNrZXJNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2RhdGUtcGlja2VyJztcclxuaW1wb3J0IHsgU0dNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2dyaWQnO1xyXG5cclxuY29uc3QgTU9EVUxFUyA9IFtcclxuICBFcnJvckNvbGxlY3RNb2R1bGUsXHJcbiAgRm9vdGVyVG9vbGJhck1vZHVsZSxcclxuICBTaWRlYmFyTmF2TW9kdWxlLFxyXG4gIERvd25GaWxlTW9kdWxlLFxyXG4gIEltYWdlTW9kdWxlLFxyXG4gIEF2YXRhckxpc3RNb2R1bGUsXHJcbiAgRWxsaXBzaXNNb2R1bGUsXHJcbiAgR2xvYmFsRm9vdGVyTW9kdWxlLFxyXG4gIEV4Y2VwdGlvbk1vZHVsZSxcclxuICBOb3RpY2VJY29uTW9kdWxlLFxyXG4gIFBhZ2VIZWFkZXJNb2R1bGUsXHJcbiAgUmVzdWx0TW9kdWxlLFxyXG4gIFRhZ1NlbGVjdE1vZHVsZSxcclxuICBDb3VudERvd25Nb2R1bGUsXHJcbiAgU1RNb2R1bGUsXHJcbiAgUmV1c2VUYWJNb2R1bGUsXHJcbiAgRnVsbENvbnRlbnRNb2R1bGUsXHJcbiAgWGxzeE1vZHVsZSxcclxuICBaaXBNb2R1bGUsXHJcbiAgTnVtYmVyVG9DaGluZXNlTW9kdWxlLFxyXG4gIExvZG9wTW9kdWxlLFxyXG4gIFF1aWNrTWVudU1vZHVsZSxcclxuICBRUk1vZHVsZSxcclxuICBTVk1vZHVsZSxcclxuICBTRU1vZHVsZSxcclxuICBTR01vZHVsZSxcclxuICBEYXRlUGlja2VyTW9kdWxlLFxyXG5dO1xyXG5cclxuLy8gZW5kcmVnaW9uXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIEVycm9yQ29sbGVjdE1vZHVsZS5mb3JSb290KCksXHJcbiAgICBGb290ZXJUb29sYmFyTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFNpZGViYXJOYXZNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRG93bkZpbGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgSW1hZ2VNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQXZhdGFyTGlzdE1vZHVsZS5mb3JSb290KCksXHJcbiAgICBFbGxpcHNpc01vZHVsZS5mb3JSb290KCksXHJcbiAgICBFeGNlcHRpb25Nb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRXhjZXB0aW9uTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIE5vdGljZUljb25Nb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgUGFnZUhlYWRlck1vZHVsZS5mb3JSb290KCksXHJcbiAgICBSZXN1bHRNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgVGFnU2VsZWN0TW9kdWxlLmZvclJvb3QoKSxcclxuICAgIENvdW50RG93bk1vZHVsZS5mb3JSb290KCksXHJcbiAgICBTVE1vZHVsZS5mb3JSb290KCksXHJcbiAgICBSZXVzZVRhYk1vZHVsZS5mb3JSb290KCksXHJcbiAgICBGdWxsQ29udGVudE1vZHVsZS5mb3JSb290KCksXHJcbiAgICBYbHN4TW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFppcE1vZHVsZS5mb3JSb290KCksXHJcbiAgICBOdW1iZXJUb0NoaW5lc2VNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgTG9kb3BNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgUXVpY2tNZW51TW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFFSTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFNWTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFNFTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFNHTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIERhdGVQaWNrZXJNb2R1bGUuZm9yUm9vdCgpLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogTU9EVUxFUyxcclxufSlcclxuZXhwb3J0IGNsYXNzIERlbG9uQUJDUm9vdE1vZHVsZSB7fVxyXG5cclxuQE5nTW9kdWxlKHsgZXhwb3J0czogTU9EVUxFUyB9KVxyXG5leHBvcnQgY2xhc3MgRGVsb25BQkNNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IERlbG9uQUJDUm9vdE1vZHVsZSB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUErQkEsTUFBTSxPQUFPLEdBQUc7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFFBQVE7SUFDUixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLGdCQUFnQjtDQUNqQixDQUFDO0FBb0NGOzs7WUFoQ0MsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzVCLG1CQUFtQixDQUFDLE9BQU8sRUFBRTtvQkFDN0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMxQixjQUFjLENBQUMsT0FBTyxFQUFFO29CQUN4QixXQUFXLENBQUMsT0FBTyxFQUFFO29CQUNyQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzFCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7b0JBQ3hCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3pCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3pCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtvQkFDMUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMxQixZQUFZLENBQUMsT0FBTyxFQUFFO29CQUN0QixlQUFlLENBQUMsT0FBTyxFQUFFO29CQUN6QixlQUFlLENBQUMsT0FBTyxFQUFFO29CQUN6QixRQUFRLENBQUMsT0FBTyxFQUFFO29CQUNsQixjQUFjLENBQUMsT0FBTyxFQUFFO29CQUN4QixpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7b0JBQzNCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3BCLFNBQVMsQ0FBQyxPQUFPLEVBQUU7b0JBQ25CLHFCQUFxQixDQUFDLE9BQU8sRUFBRTtvQkFDL0IsV0FBVyxDQUFDLE9BQU8sRUFBRTtvQkFDckIsZUFBZSxDQUFDLE9BQU8sRUFBRTtvQkFDekIsUUFBUSxDQUFDLE9BQU8sRUFBRTtvQkFDbEIsUUFBUSxDQUFDLE9BQU8sRUFBRTtvQkFDbEIsUUFBUSxDQUFDLE9BQU8sRUFBRTtvQkFDbEIsUUFBUSxDQUFDLE9BQU8sRUFBRTtvQkFDbEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO2lCQUMzQjtnQkFDRCxPQUFPLEVBQUUsT0FBTzthQUNqQjs7QUFJRDs7OztJQUNFLE9BQU8sT0FBTztRQUNaLE9BQU8sRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztLQUN6Qzs7O1lBSkYsUUFBUSxTQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTs7Ozs7Ozs7Ozs7Ozs7OyJ9