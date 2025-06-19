import * as _angular_cdk_bidi_module_d_IN1Vp56w from '@angular/cdk/bidi-module.d-IN1Vp56w';
import * as i0 from '@angular/core';
import { EventEmitter } from '@angular/core';
import * as _delon_theme from '@delon/theme';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/icon';

declare class TagSelectComponent {
    locale: i0.Signal<_delon_theme.TagSelectLocaleData>;
    expand: boolean;
    dir: i0.WritableSignal<_angular_cdk_bidi_module_d_IN1Vp56w.a>;
    /** 是否启用 `展开与收进` */
    expandable: boolean;
    readonly change: EventEmitter<boolean>;
    trigger(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TagSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TagSelectComponent, "tag-select", ["tagSelect"], { "expandable": { "alias": "expandable"; "required": false; }; }, { "change": "change"; }, never, ["*"], true, never>;
    static ngAcceptInputType_expandable: unknown;
}

declare class TagSelectModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TagSelectModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TagSelectModule, never, [typeof i1.CommonModule, typeof i2.NzIconModule, typeof _delon_theme.DelonLocaleModule, typeof TagSelectComponent], [typeof TagSelectComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TagSelectModule>;
}

export { TagSelectComponent, TagSelectModule };
