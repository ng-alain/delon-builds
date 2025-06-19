import * as i0 from '@angular/core';
import { OnChanges } from '@angular/core';
import * as _delon_theme from '@delon/theme';
import * as i1 from '@angular/common';
import * as i3 from 'ng-zorro-antd/tooltip';

declare class G2MiniProgressComponent implements OnChanges {
    locale: i0.Signal<_delon_theme.MiniProgressLocaleData>;
    private readonly cdr;
    color: string;
    target?: number | null;
    percent?: number | null;
    strokeWidth?: number | null;
    private fixNum;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<G2MiniProgressComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<G2MiniProgressComponent, "g2-mini-progress", ["g2MiniProgress"], { "color": { "alias": "color"; "required": false; }; "target": { "alias": "target"; "required": false; }; "percent": { "alias": "percent"; "required": false; }; "strokeWidth": { "alias": "strokeWidth"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_target: unknown;
    static ngAcceptInputType_percent: unknown;
    static ngAcceptInputType_strokeWidth: unknown;
}

declare class G2MiniProgressModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<G2MiniProgressModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<G2MiniProgressModule, never, [typeof i1.CommonModule, typeof _delon_theme.DelonLocaleModule, typeof i3.NzToolTipModule, typeof G2MiniProgressComponent], [typeof G2MiniProgressComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<G2MiniProgressModule>;
}

export { G2MiniProgressComponent, G2MiniProgressModule };
