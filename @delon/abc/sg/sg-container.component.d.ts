import { REP_TYPE } from '@delon/theme';
import { AlainConfigService } from '@delon/util';
export declare class SGContainerComponent {
    gutter: number;
    colInCon: REP_TYPE;
    col: REP_TYPE;
    get marginValue(): number;
    constructor(configSrv: AlainConfigService);
}
