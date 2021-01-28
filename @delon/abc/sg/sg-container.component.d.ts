import { REP_TYPE } from '@delon/theme';
import { AlainConfigService, NumberInput } from '@delon/util';
import * as i0 from "@angular/core";
export declare class SGContainerComponent {
    static ngAcceptInputType_gutter: NumberInput;
    static ngAcceptInputType_colInCon: NumberInput;
    static ngAcceptInputType_col: NumberInput;
    gutter: number;
    colInCon: REP_TYPE;
    col: REP_TYPE;
    get marginValue(): number;
    constructor(configSrv: AlainConfigService);
    static ɵfac: i0.ɵɵFactoryDef<SGContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SGContainerComponent, "sg-container, [sg-container]", ["sgContainer"], { "gutter": "gutter"; "colInCon": "sg-container"; "col": "col"; }, {}, never, ["*"]>;
}
