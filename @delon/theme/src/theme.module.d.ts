import { ModuleWithProviders } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "@angular/cdk/overlay";
import * as i4 from "ng-zorro-antd/i18n";
import * as i5 from "./pipes/date/date.pipe";
import * as i6 from "./pipes/keys/keys.pipe";
import * as i7 from "./pipes/yn/yn.pipe";
import * as i8 from "./services/i18n/i18n.pipe";
import * as i9 from "./pipes/safe/html.pipe";
import * as i10 from "./pipes/safe/url.pipe";
import * as i11 from "./locale/locale.module";
export declare class AlainThemeModule {
    constructor(iconSrv: NzIconService);
    static forRoot(): ModuleWithProviders<AlainThemeModule>;
    static forChild(): ModuleWithProviders<AlainThemeModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlainThemeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AlainThemeModule, never, [typeof i1.CommonModule, typeof i2.RouterModule, typeof i3.OverlayModule, typeof i4.NzI18nModule, typeof i5.DatePipe, typeof i6.KeysPipe, typeof i7.YNPipe, typeof i8.I18nPipe, typeof i9.HTMLPipe, typeof i10.URLPipe], [typeof i5.DatePipe, typeof i6.KeysPipe, typeof i7.YNPipe, typeof i8.I18nPipe, typeof i9.HTMLPipe, typeof i10.URLPipe, typeof i11.DelonLocaleModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AlainThemeModule>;
}
