import * as _angular_core from '@angular/core';
import { Signal } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i1 from '@angular/common';

declare class G2SingleBarComponent extends G2BaseComponent {
    readonly plusColor: _angular_core.InputSignal<string>;
    readonly minusColor: _angular_core.InputSignal<string>;
    readonly height: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly barSize: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly min: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly max: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly value: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly line: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly format: _angular_core.InputSignal<((value: number, item: NzSafeAny, index: number) => string) | undefined>;
    readonly padding: _angular_core.InputSignal<number | number[] | "auto">;
    readonly textStyle: _angular_core.InputSignal<Record<string, any>>;
    install(): void;
    /** 等价旧 onlyChangeData：仅 value 变更时平滑更新 */
    protected isDataOnly(changed: ReadonlyArray<Signal<unknown>>): boolean;
    changeData(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2SingleBarComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<G2SingleBarComponent, "g2-single-bar", ["g2SingleBar"], { "plusColor": { "alias": "plusColor"; "required": false; "isSignal": true; }; "minusColor": { "alias": "minusColor"; "required": false; "isSignal": true; }; "height": { "alias": "height"; "required": false; "isSignal": true; }; "barSize": { "alias": "barSize"; "required": false; "isSignal": true; }; "min": { "alias": "min"; "required": false; "isSignal": true; }; "max": { "alias": "max"; "required": false; "isSignal": true; }; "value": { "alias": "value"; "required": false; "isSignal": true; }; "line": { "alias": "line"; "required": false; "isSignal": true; }; "format": { "alias": "format"; "required": false; "isSignal": true; }; "padding": { "alias": "padding"; "required": false; "isSignal": true; }; "textStyle": { "alias": "textStyle"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class G2SingleBarModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2SingleBarModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<G2SingleBarModule, never, [typeof i1.CommonModule, typeof G2SingleBarComponent], [typeof G2SingleBarComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<G2SingleBarModule>;
}

export { G2SingleBarComponent, G2SingleBarModule };
