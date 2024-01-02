import type { REP_TYPE } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { NumberInput } from '@delon/util/decorator';
import * as i0 from "@angular/core";
export declare class SGContainerComponent {
    static ngAcceptInputType_gutter: NumberInput;
    static ngAcceptInputType_colInCon: NumberInput;
    static ngAcceptInputType_col: NumberInput;
    gutter: number;
    colInCon?: REP_TYPE;
    col: REP_TYPE;
    get marginValue(): number;
    constructor(configSrv: AlainConfigService);
    static ɵfac: i0.ɵɵFactoryDeclaration<SGContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SGContainerComponent, "sg-container, [sg-container]", ["sgContainer"], { "gutter": { "alias": "gutter"; "required": false; }; "colInCon": { "alias": "sg-container"; "required": false; }; "col": { "alias": "col"; "required": false; }; }, {}, never, ["*"], true, never>;
}
