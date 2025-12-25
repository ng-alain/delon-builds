import * as i0 from '@angular/core';
import { OnChanges, TemplateRef } from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/card';
import * as i3 from 'ng-zorro-antd/spin';
import * as i4 from 'ng-zorro-antd/core/outlet';

declare class G2CardComponent implements OnChanges {
    private readonly cdr;
    /** 是否显示边框 */
    bordered: boolean;
    avatar?: string | TemplateRef<void> | null;
    title?: string | TemplateRef<void> | null;
    action?: string | TemplateRef<void> | null;
    total: string;
    _height: string;
    _orgHeight: number | string;
    set contentHeight(value: number | string);
    footer?: string | TemplateRef<void> | null;
    /** 是否显示Loading */
    loading: boolean;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<G2CardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<G2CardComponent, "g2-card", ["g2Card"], { "bordered": { "alias": "bordered"; "required": false; }; "avatar": { "alias": "avatar"; "required": false; }; "title": { "alias": "title"; "required": false; }; "action": { "alias": "action"; "required": false; }; "total": { "alias": "total"; "required": false; }; "contentHeight": { "alias": "contentHeight"; "required": false; }; "footer": { "alias": "footer"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; }, {}, never, ["*"], true, never>;
    static ngAcceptInputType_bordered: unknown;
    static ngAcceptInputType_loading: unknown;
}

declare class G2CardModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<G2CardModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<G2CardModule, never, [typeof i1.CommonModule, typeof i2.NzCardModule, typeof i3.NzSpinModule, typeof i4.NzOutletModule, typeof G2CardComponent], [typeof G2CardComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<G2CardModule>;
}

export { G2CardComponent, G2CardModule };
