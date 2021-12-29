import { AlainConfigService } from '@delon/util/config';
export declare const REP_MAX = 6;
export declare type REP_TYPE = 1 | 2 | 3 | 4 | 5 | 6;
export declare class ResponsiveService {
    private cog;
    constructor(cogSrv: AlainConfigService);
    genCls(count: number): string[];
}
