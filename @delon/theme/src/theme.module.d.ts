import { ModuleWithProviders } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import * as i0 from "@angular/core";
import * as i1 from "./pipes/date/date.pipe";
import * as i2 from "./pipes/keys/keys.pipe";
import * as i3 from "./pipes/yn/yn.pipe";
import * as i4 from "./services/i18n/i18n.pipe";
import * as i5 from "./pipes/safe/html.pipe";
import * as i6 from "./pipes/safe/url.pipe";
import * as i7 from "@angular/common";
import * as i8 from "@angular/router";
import * as i9 from "@angular/cdk/overlay";
import * as i10 from "ng-zorro-antd/i18n";
import * as i11 from "./locale/locale.module";
export declare class AlainThemeModule {
    constructor(iconSrv: NzIconService);
    static forRoot(): ModuleWithProviders<AlainThemeModule>;
    static forChild(): ModuleWithProviders<AlainThemeModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlainThemeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AlainThemeModule, [typeof i1.DatePipe, typeof i2.KeysPipe, typeof i3.YNPipe, typeof i4.I18nPipe, typeof i5.HTMLPipe, typeof i6.URLPipe], [typeof i7.CommonModule, typeof i8.RouterModule, typeof i9.OverlayModule, typeof i10.NzI18nModule], [typeof i1.DatePipe, typeof i2.KeysPipe, typeof i3.YNPipe, typeof i4.I18nPipe, typeof i5.HTMLPipe, typeof i6.URLPipe, typeof i11.DelonLocaleModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AlainThemeModule>;
}
