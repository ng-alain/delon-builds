import * as _angular_core from '@angular/core';
import { REP_TYPE } from '@delon/theme';
import * as i1 from '@angular/common';

declare class SGContainerComponent {
    readonly gutter: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly colInCon: _angular_core.InputSignalWithTransform<REP_TYPE | null, unknown>;
    readonly col: _angular_core.InputSignalWithTransform<REP_TYPE | null, unknown>;
    protected marginValue: _angular_core.Signal<number>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<SGContainerComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<SGContainerComponent, "sg-container, [sg-container]", ["sgContainer"], { "gutter": { "alias": "gutter"; "required": false; "isSignal": true; }; "colInCon": { "alias": "sg-container"; "required": false; "isSignal": true; }; "col": { "alias": "col"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class SGComponent {
    private readonly rep;
    private readonly parentComp;
    protected paddingValue: _angular_core.Signal<number>;
    readonly col: _angular_core.InputSignalWithTransform<number | null, unknown>;
    readonly cls: _angular_core.Signal<string[]>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<SGComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<SGComponent, "sg", ["sg"], { "col": { "alias": "col"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class SGModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<SGModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<SGModule, never, [typeof i1.CommonModule, typeof SGContainerComponent, typeof SGComponent], [typeof SGContainerComponent, typeof SGComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<SGModule>;
}

export { SGComponent, SGContainerComponent, SGModule };
