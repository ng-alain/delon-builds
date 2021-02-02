import { ModuleWithProviders } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import * as i0 from "@angular/core";
import * as i1 from "./pipes/date/date.pipe";
import * as i2 from "./pipes/currency/cn-currency.pipe";
import * as i3 from "./pipes/keys/keys.pipe";
import * as i4 from "./pipes/yn/yn.pipe";
import * as i5 from "./services/i18n/i18n.pipe";
import * as i6 from "./pipes/safe/html.pipe";
import * as i7 from "./pipes/safe/url.pipe";
import * as i8 from "@angular/common";
import * as i9 from "@angular/router";
import * as i10 from "@angular/cdk/overlay";
import * as i11 from "ng-zorro-antd/i18n";
import * as i12 from "./locale/locale.module";
export declare class AlainThemeModule {
    constructor(iconSrv: NzIconService);
    static forRoot(): ModuleWithProviders<AlainThemeModule>;
    static forChild(): ModuleWithProviders<AlainThemeModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<AlainThemeModule, [typeof i1.DatePipe, typeof i2.CNCurrencyPipe, typeof i3.KeysPipe, typeof i4.YNPipe, typeof i5.I18nPipe, typeof i6.HTMLPipe, typeof i7.URLPipe], [typeof i8.CommonModule, typeof i9.RouterModule, typeof i10.OverlayModule, typeof i11.NzI18nModule], [typeof i1.DatePipe, typeof i2.CNCurrencyPipe, typeof i3.KeysPipe, typeof i4.YNPipe, typeof i5.I18nPipe, typeof i6.HTMLPipe, typeof i7.URLPipe, typeof i12.DelonLocaleModule]>;
    static ɵinj: i0.ɵɵInjectorDef<AlainThemeModule>;
}
