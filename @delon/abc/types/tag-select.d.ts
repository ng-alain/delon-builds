import * as _angular_cdk_bidi from '@angular/cdk/bidi';
import * as _angular_core from '@angular/core';
import * as _delon_theme from '@delon/theme';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/icon';

declare class TagSelectComponent {
    protected locale: _angular_core.Signal<_delon_theme.TagSelectLocaleData>;
    protected dir: _angular_core.WritableSignal<_angular_cdk_bidi.Direction>;
    expand: _angular_core.WritableSignal<boolean>;
    /** 是否启用 `展开与收进` */
    readonly expandable: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly change: _angular_core.OutputEmitterRef<boolean>;
    trigger(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TagSelectComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<TagSelectComponent, "tag-select", ["tagSelect"], { "expandable": { "alias": "expandable"; "required": false; "isSignal": true; }; }, { "change": "change"; }, never, ["*"], true, never>;
}

declare class TagSelectModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TagSelectModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<TagSelectModule, never, [typeof i1.CommonModule, typeof i2.NzIconModule, typeof _delon_theme.DelonLocaleModule, typeof TagSelectComponent], [typeof TagSelectComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<TagSelectModule>;
}

export { TagSelectComponent, TagSelectModule };
