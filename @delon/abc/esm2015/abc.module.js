/**
 * @fileoverview added by tsickle
 * Generated from: abc.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { warnDeprecation } from '@delon/util';
// #region all modules
import { AvatarListModule } from '@delon/abc/avatar-list';
import { CountDownModule } from '@delon/abc/count-down';
import { DatePickerModule } from '@delon/abc/date-picker';
import { DownFileModule } from '@delon/abc/down-file';
import { EllipsisModule } from '@delon/abc/ellipsis';
import { ErrorCollectModule } from '@delon/abc/error-collect';
import { ExceptionModule } from '@delon/abc/exception';
import { FooterToolbarModule } from '@delon/abc/footer-toolbar';
import { FullContentModule } from '@delon/abc/full-content';
import { GlobalFooterModule } from '@delon/abc/global-footer';
import { ImageModule } from '@delon/abc/image';
import { LoadingModule } from '@delon/abc/loading';
import { LodopModule } from '@delon/abc/lodop';
import { MediaModule } from '@delon/abc/media';
import { NoticeIconModule } from '@delon/abc/notice-icon';
import { NumberToChineseModule } from '@delon/abc/number-to-chinese';
import { PageHeaderModule } from '@delon/abc/page-header';
import { QRModule } from '@delon/abc/qr';
import { QuickMenuModule } from '@delon/abc/quick-menu';
import { ResultModule } from '@delon/abc/result';
import { ReuseTabModule } from '@delon/abc/reuse-tab';
import { SEModule } from '@delon/abc/se';
import { SGModule } from '@delon/abc/sg';
import { SidebarNavModule } from '@delon/abc/sidebar-nav';
import { STModule } from '@delon/abc/st';
import { SVModule } from '@delon/abc/sv';
import { TagSelectModule } from '@delon/abc/tag-select';
import { XlsxModule } from '@delon/abc/xlsx';
import { ZipModule } from '@delon/abc/zip';
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
    LoadingModule,
    MediaModule,
];
/**
 * @deprecated Use secondary entry eg: `import { STModule } from '\@delon/abc/st';`.
 */
export class DelonABCModule {
    constructor() {
        warnDeprecation("The `DelonABCModule` has been deprecated and will be removed in 10.0.0. Please use secondary entry instead.\ne.g. `import { STModule } from 'ng-zorro-antd/st';`");
    }
}
DelonABCModule.decorators = [
    { type: NgModule, args: [{ exports: MODULES },] }
];
/** @nocollapse */
DelonABCModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9hYmMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUc5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7TUFFckMsT0FBTyxHQUFHO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixRQUFRO0lBQ1IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsU0FBUztJQUNULHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZUFBZTtJQUNmLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7Q0FDWjs7OztBQU1ELE1BQU0sT0FBTyxjQUFjO0lBQ3pCO1FBQ0UsZUFBZSxDQUNiLGtLQUFrSyxDQUNuSyxDQUFDO0lBQ0osQ0FBQzs7O1lBTkYsUUFBUSxTQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbi8vICNyZWdpb24gYWxsIG1vZHVsZXNcbmltcG9ydCB7IEF2YXRhckxpc3RNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2F2YXRhci1saXN0JztcbmltcG9ydCB7IENvdW50RG93bk1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvY291bnQtZG93bic7XG5pbXBvcnQgeyBEYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9kYXRlLXBpY2tlcic7XG5pbXBvcnQgeyBEb3duRmlsZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZG93bi1maWxlJztcbmltcG9ydCB7IEVsbGlwc2lzTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9lbGxpcHNpcyc7XG5pbXBvcnQgeyBFcnJvckNvbGxlY3RNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2Vycm9yLWNvbGxlY3QnO1xuaW1wb3J0IHsgRXhjZXB0aW9uTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9leGNlcHRpb24nO1xuaW1wb3J0IHsgRm9vdGVyVG9vbGJhck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZm9vdGVyLXRvb2xiYXInO1xuaW1wb3J0IHsgRnVsbENvbnRlbnRNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2Z1bGwtY29udGVudCc7XG5pbXBvcnQgeyBHbG9iYWxGb290ZXJNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2dsb2JhbC1mb290ZXInO1xuaW1wb3J0IHsgSW1hZ2VNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2ltYWdlJztcbmltcG9ydCB7IExvYWRpbmdNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2xvYWRpbmcnO1xuaW1wb3J0IHsgTG9kb3BNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2xvZG9wJztcbmltcG9ydCB7IE1lZGlhTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9tZWRpYSc7XG5pbXBvcnQgeyBOb3RpY2VJY29uTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9ub3RpY2UtaWNvbic7XG5pbXBvcnQgeyBOdW1iZXJUb0NoaW5lc2VNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL251bWJlci10by1jaGluZXNlJztcbmltcG9ydCB7IFBhZ2VIZWFkZXJNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3BhZ2UtaGVhZGVyJztcbmltcG9ydCB7IFFSTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9xcic7XG5pbXBvcnQgeyBRdWlja01lbnVNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3F1aWNrLW1lbnUnO1xuaW1wb3J0IHsgUmVzdWx0TW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9yZXN1bHQnO1xuaW1wb3J0IHsgUmV1c2VUYWJNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3JldXNlLXRhYic7XG5pbXBvcnQgeyBTRU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvc2UnO1xuaW1wb3J0IHsgU0dNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3NnJztcbmltcG9ydCB7IFNpZGViYXJOYXZNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3NpZGViYXItbmF2JztcbmltcG9ydCB7IFNUTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9zdCc7XG5pbXBvcnQgeyBTVk1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvc3YnO1xuaW1wb3J0IHsgVGFnU2VsZWN0TW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy90YWctc2VsZWN0JztcbmltcG9ydCB7IFhsc3hNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3hsc3gnO1xuaW1wb3J0IHsgWmlwTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy96aXAnO1xuXG5jb25zdCBNT0RVTEVTID0gW1xuICBFcnJvckNvbGxlY3RNb2R1bGUsXG4gIEZvb3RlclRvb2xiYXJNb2R1bGUsXG4gIFNpZGViYXJOYXZNb2R1bGUsXG4gIERvd25GaWxlTW9kdWxlLFxuICBJbWFnZU1vZHVsZSxcbiAgQXZhdGFyTGlzdE1vZHVsZSxcbiAgRWxsaXBzaXNNb2R1bGUsXG4gIEdsb2JhbEZvb3Rlck1vZHVsZSxcbiAgRXhjZXB0aW9uTW9kdWxlLFxuICBOb3RpY2VJY29uTW9kdWxlLFxuICBQYWdlSGVhZGVyTW9kdWxlLFxuICBSZXN1bHRNb2R1bGUsXG4gIFRhZ1NlbGVjdE1vZHVsZSxcbiAgQ291bnREb3duTW9kdWxlLFxuICBTVE1vZHVsZSxcbiAgUmV1c2VUYWJNb2R1bGUsXG4gIEZ1bGxDb250ZW50TW9kdWxlLFxuICBYbHN4TW9kdWxlLFxuICBaaXBNb2R1bGUsXG4gIE51bWJlclRvQ2hpbmVzZU1vZHVsZSxcbiAgTG9kb3BNb2R1bGUsXG4gIFF1aWNrTWVudU1vZHVsZSxcbiAgUVJNb2R1bGUsXG4gIFNWTW9kdWxlLFxuICBTRU1vZHVsZSxcbiAgU0dNb2R1bGUsXG4gIERhdGVQaWNrZXJNb2R1bGUsXG4gIExvYWRpbmdNb2R1bGUsXG4gIE1lZGlhTW9kdWxlLFxuXTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Ugc2Vjb25kYXJ5IGVudHJ5IGVnOiBgaW1wb3J0IHsgU1RNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL3N0JztgLlxuICovXG5ATmdNb2R1bGUoeyBleHBvcnRzOiBNT0RVTEVTIH0pXG5leHBvcnQgY2xhc3MgRGVsb25BQkNNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB3YXJuRGVwcmVjYXRpb24oXG4gICAgICBcIlRoZSBgRGVsb25BQkNNb2R1bGVgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFBsZWFzZSB1c2Ugc2Vjb25kYXJ5IGVudHJ5IGluc3RlYWQuXFxuZS5nLiBgaW1wb3J0IHsgU1RNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3N0JztgXCIsXG4gICAgKTtcbiAgfVxufVxuIl19