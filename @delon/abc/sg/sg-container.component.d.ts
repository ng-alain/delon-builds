import { REP_TYPE } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { NumberInput } from '@delon/util/decorator';
export declare class SGContainerComponent {
    static ngAcceptInputType_gutter: NumberInput;
    static ngAcceptInputType_colInCon: NumberInput;
    static ngAcceptInputType_col: NumberInput;
    gutter: number;
    colInCon: REP_TYPE;
    col: REP_TYPE;
    get marginValue(): number;
    constructor(configSrv: AlainConfigService);
}
