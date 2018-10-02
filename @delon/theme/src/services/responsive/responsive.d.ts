import { AlainThemeConfig } from '../../theme.config';
export declare const REP_MAX = 6;
export declare class ResponsiveService {
    private cog;
    constructor(cog: AlainThemeConfig);
    genCls(count: number): string[];
}
