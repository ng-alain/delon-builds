import * as i0 from '@angular/core';
import { OnDestroy, TemplateRef } from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from '@delon/abc/error-collect';
import * as i3 from 'ng-zorro-antd/core/outlet';

declare class FooterToolbarComponent implements OnDestroy {
    private readonly bodyCls;
    readonly errorCollect: i0.InputSignalWithTransform<boolean, unknown>;
    readonly extra: i0.InputSignal<string | TemplateRef<void> | undefined>;
    constructor();
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FooterToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FooterToolbarComponent, "footer-toolbar", ["footerToolbar"], { "errorCollect": { "alias": "errorCollect"; "required": false; "isSignal": true; }; "extra": { "alias": "extra"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class FooterToolbarModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FooterToolbarModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FooterToolbarModule, never, [typeof i1.CommonModule, typeof i2.ErrorCollectModule, typeof i3.NzOutletModule, typeof FooterToolbarComponent], [typeof FooterToolbarComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FooterToolbarModule>;
}

export { FooterToolbarComponent, FooterToolbarModule };
