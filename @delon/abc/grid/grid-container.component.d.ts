import { REP_TYPE } from '@delon/theme';
import { SGConfig } from './grid.config';
export declare class SGContainerComponent {
    gutter: number;
    colInCon: REP_TYPE;
    col: REP_TYPE;
    get marginValue(): number;
    constructor(cog: SGConfig);
}
