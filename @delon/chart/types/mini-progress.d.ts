import * as _angular_core from '@angular/core';
import * as _delon_theme from '@delon/theme';
import * as i1 from '@angular/common';
import * as i3 from 'ng-zorro-antd/tooltip';

declare class G2MiniProgressComponent {
    locale: _angular_core.Signal<_delon_theme.MiniProgressLocaleData>;
    readonly color: _angular_core.InputSignal<string>;
    readonly target: _angular_core.InputSignalWithTransform<number | null, unknown>;
    readonly percent: _angular_core.InputSignalWithTransform<number | null, unknown>;
    readonly strokeWidth: _angular_core.InputSignalWithTransform<number | null, unknown>;
    /** 等价旧 ngOnChanges 的钳位；输入本身保持原值 */
    protected readonly _target: _angular_core.Signal<number>;
    protected readonly _percent: _angular_core.Signal<number>;
    private fixNum;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2MiniProgressComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<G2MiniProgressComponent, "g2-mini-progress", ["g2MiniProgress"], { "color": { "alias": "color"; "required": false; "isSignal": true; }; "target": { "alias": "target"; "required": false; "isSignal": true; }; "percent": { "alias": "percent"; "required": false; "isSignal": true; }; "strokeWidth": { "alias": "strokeWidth"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class G2MiniProgressModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2MiniProgressModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<G2MiniProgressModule, never, [typeof i1.CommonModule, typeof _delon_theme.DelonLocaleModule, typeof i3.NzTooltipModule, typeof G2MiniProgressComponent], [typeof G2MiniProgressComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<G2MiniProgressModule>;
}

export { G2MiniProgressComponent, G2MiniProgressModule };
