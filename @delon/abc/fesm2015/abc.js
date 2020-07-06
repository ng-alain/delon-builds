import { AvatarListModule } from '@delon/abc/avatar-list';
export { AvatarListComponent, AvatarListItemComponent, AvatarListModule } from '@delon/abc/avatar-list';
import { CountDownModule } from '@delon/abc/count-down';
export { CountDownComponent, CountDownModule } from '@delon/abc/count-down';
import { STModule } from '@delon/abc/st';
export { STColumnSource, STComponent, STDataSource, STExport, STModule, STRowDirective, STWidgetRegistry, ST_DEFULAT_CONFIG, ɵa, ɵb } from '@delon/abc/st';
import { SVModule } from '@delon/abc/sv';
export { SVComponent, SVContainerComponent, SVModule, SVTitleComponent } from '@delon/abc/sv';
import { SEModule } from '@delon/abc/se';
export { SEComponent, SEContainerComponent, SEModule, SETitleComponent } from '@delon/abc/se';
import { SGModule } from '@delon/abc/sg';
export { SGComponent, SGContainerComponent, SGModule } from '@delon/abc/sg';
import { ErrorCollectModule } from '@delon/abc/error-collect';
export { ErrorCollectComponent, ErrorCollectModule } from '@delon/abc/error-collect';
import { FooterToolbarModule } from '@delon/abc/footer-toolbar';
export { FooterToolbarComponent, FooterToolbarModule } from '@delon/abc/footer-toolbar';
import { SidebarNavModule } from '@delon/abc/sidebar-nav';
export { SidebarNavComponent, SidebarNavModule } from '@delon/abc/sidebar-nav';
import { DownFileModule } from '@delon/abc/down-file';
export { DownFileDirective, DownFileModule } from '@delon/abc/down-file';
import { ImageModule } from '@delon/abc/image';
export { ImageDirective, ImageModule } from '@delon/abc/image';
import { EllipsisModule } from '@delon/abc/ellipsis';
export { EllipsisComponent, EllipsisModule } from '@delon/abc/ellipsis';
import { GlobalFooterModule } from '@delon/abc/global-footer';
export { GlobalFooterComponent, GlobalFooterItemComponent, GlobalFooterModule } from '@delon/abc/global-footer';
import { ExceptionModule } from '@delon/abc/exception';
export { ExceptionComponent, ExceptionModule } from '@delon/abc/exception';
import { NoticeIconModule } from '@delon/abc/notice-icon';
export { NoticeIconComponent, NoticeIconModule, NoticeIconTabComponent } from '@delon/abc/notice-icon';
import { PageHeaderModule } from '@delon/abc/page-header';
export { PageHeaderComponent, PageHeaderModule } from '@delon/abc/page-header';
import { ResultModule } from '@delon/abc/result';
export { ResultComponent, ResultModule } from '@delon/abc/result';
import { TagSelectModule } from '@delon/abc/tag-select';
export { TagSelectComponent, TagSelectModule } from '@delon/abc/tag-select';
import { ReuseTabModule } from '@delon/abc/reuse-tab';
export { ReuseTabComponent, ReuseTabContextComponent, ReuseTabContextDirective, ReuseTabContextMenuComponent, ReuseTabContextService, ReuseTabMatchMode, ReuseTabModule, ReuseTabService, ReuseTabStrategy } from '@delon/abc/reuse-tab';
import { FullContentModule } from '@delon/abc/full-content';
export { FullContentComponent, FullContentModule, FullContentService, FullContentToggleDirective } from '@delon/abc/full-content';
import { XlsxModule } from '@delon/abc/xlsx';
export { XlsxDirective, XlsxModule, XlsxService } from '@delon/abc/xlsx';
import { ZipModule } from '@delon/abc/zip';
export { ZipModule, ZipService } from '@delon/abc/zip';
import { NumberToChineseModule } from '@delon/abc/number-to-chinese';
export { NaNumberToChinesePipe, NumberToChineseModule, numberToChinese } from '@delon/abc/number-to-chinese';
import { LodopModule } from '@delon/abc/lodop';
export { LodopModule, LodopService } from '@delon/abc/lodop';
import { QuickMenuModule } from '@delon/abc/quick-menu';
export { QuickMenuComponent, QuickMenuModule } from '@delon/abc/quick-menu';
import { QRModule } from '@delon/abc/qr';
export { QRComponent, QRModule, QR_DEFULAT_CONFIG } from '@delon/abc/qr';
import { DatePickerModule } from '@delon/abc/date-picker';
export { DatePickerModule, RangePickerComponent } from '@delon/abc/date-picker';
import { LoadingModule } from '@delon/abc/loading';
export { LoadingDefaultComponent, LoadingModule, LoadingService } from '@delon/abc/loading';
import { OnboardingModule } from '@delon/abc/onboarding';
export { OnboardingModule, OnboardingService, ɵOnboardingComponent } from '@delon/abc/onboarding';
import { NgModule } from '@angular/core';
import { warnDeprecation } from '@delon/util';
import { MediaModule } from '@delon/abc/media';

/**
 * @fileoverview added by tsickle
 * Generated from: abc.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    OnboardingModule,
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
class DelonABCModule {
    constructor() {
        warnDeprecation("The `DelonABCModule` has been deprecated and will be removed in 10.0.0. Please use secondary entry instead.\ne.g. `import { STModule } from 'ng-zorro-antd/st';`");
    }
}
DelonABCModule.decorators = [
    { type: NgModule, args: [{ exports: MODULES },] }
];
/** @nocollapse */
DelonABCModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: abc.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DelonABCModule };
//# sourceMappingURL=abc.js.map
