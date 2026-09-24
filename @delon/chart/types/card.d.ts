import * as _angular_core from '@angular/core';
import { TemplateRef } from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/card';
import * as i3 from 'ng-zorro-antd/spin';
import * as i4 from 'ng-zorro-antd/core/outlet';

declare class G2CardComponent {
    /** 是否显示边框 */
    readonly bordered: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly avatar: _angular_core.InputSignal<string | TemplateRef<void> | null | undefined>;
    readonly title: _angular_core.InputSignal<string | TemplateRef<void> | null | undefined>;
    readonly action: _angular_core.InputSignal<string | TemplateRef<void> | null | undefined>;
    readonly total: _angular_core.InputSignal<string>;
    readonly contentHeight: _angular_core.InputSignal<string | number | undefined>;
    readonly footer: _angular_core.InputSignal<string | TemplateRef<void> | null | undefined>;
    /** 是否显示Loading */
    readonly loading: _angular_core.InputSignalWithTransform<boolean, unknown>;
    protected readonly _height: _angular_core.Signal<string | undefined>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2CardComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<G2CardComponent, "g2-card", ["g2Card"], { "bordered": { "alias": "bordered"; "required": false; "isSignal": true; }; "avatar": { "alias": "avatar"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; "action": { "alias": "action"; "required": false; "isSignal": true; }; "total": { "alias": "total"; "required": false; "isSignal": true; }; "contentHeight": { "alias": "contentHeight"; "required": false; "isSignal": true; }; "footer": { "alias": "footer"; "required": false; "isSignal": true; }; "loading": { "alias": "loading"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class G2CardModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2CardModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<G2CardModule, never, [typeof i1.CommonModule, typeof i2.NzCardModule, typeof i3.NzSpinModule, typeof i4.NzOutletModule, typeof G2CardComponent], [typeof G2CardComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<G2CardModule>;
}

export { G2CardComponent, G2CardModule };
