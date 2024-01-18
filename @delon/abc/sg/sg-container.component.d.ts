import type { REP_TYPE } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/types";
export declare class SGContainerComponent {
    gutter: number;
    colInCon?: REP_TYPE;
    col: REP_TYPE;
    get marginValue(): number;
    constructor(configSrv: AlainConfigService);
    static ɵfac: i0.ɵɵFactoryDeclaration<SGContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SGContainerComponent, "sg-container, [sg-container]", ["sgContainer"], { "gutter": { "alias": "gutter"; "required": false; }; "colInCon": { "alias": "sg-container"; "required": false; }; "col": { "alias": "col"; "required": false; }; }, {}, never, ["*"], true, never>;
    static ngAcceptInputType_gutter: unknown;
    static ngAcceptInputType_colInCon: i1.NzSafeAny;
    static ngAcceptInputType_col: i1.NzSafeAny;
}
