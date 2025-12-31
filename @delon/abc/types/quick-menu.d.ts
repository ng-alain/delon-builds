import * as _angular_core from '@angular/core';
import { TemplateRef } from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/icon';
import * as i3 from 'ng-zorro-antd/core/outlet';

declare class QuickMenuComponent {
    private readonly el;
    private readonly render;
    readonly icon: _angular_core.InputSignal<string | TemplateRef<void>>;
    readonly top: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly width: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly bgColor: _angular_core.InputSignal<string | undefined>;
    readonly borderColor: _angular_core.InputSignal<string | undefined>;
    readonly expand: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly expandChange: _angular_core.OutputEmitterRef<boolean>;
    private show;
    protected ctrlStyle: _angular_core.Signal<Record<string, string | undefined>>;
    constructor();
    _click(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<QuickMenuComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<QuickMenuComponent, "quick-menu", ["quickMenu"], { "icon": { "alias": "icon"; "required": false; "isSignal": true; }; "top": { "alias": "top"; "required": false; "isSignal": true; }; "width": { "alias": "width"; "required": false; "isSignal": true; }; "bgColor": { "alias": "bgColor"; "required": false; "isSignal": true; }; "borderColor": { "alias": "borderColor"; "required": false; "isSignal": true; }; "expand": { "alias": "expand"; "required": false; "isSignal": true; }; }, { "expandChange": "expandChange"; }, never, ["*"], true, never>;
}

declare class QuickMenuModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<QuickMenuModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<QuickMenuModule, never, [typeof i1.CommonModule, typeof i2.NzIconModule, typeof i3.NzOutletModule, typeof QuickMenuComponent], [typeof QuickMenuComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<QuickMenuModule>;
}

export { QuickMenuComponent, QuickMenuModule };
