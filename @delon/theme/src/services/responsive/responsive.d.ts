import { AlainConfigService } from '@delon/util/config';
import * as i0 from "@angular/core";
export declare const REP_MAX = 6;
export declare const SPAN_MAX = 24;
export type REP_TYPE = 1 | 2 | 3 | 4 | 5 | 6;
export declare class ResponsiveService {
    private cog;
    constructor(cogSrv: AlainConfigService);
    genCls(count: number, defaultCol?: number): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ResponsiveService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ResponsiveService>;
}
