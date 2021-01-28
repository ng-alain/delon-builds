import { OnDestroy } from '@angular/core';
import { AlainConfigService, AlainMockConfig } from '@delon/util';
import { MockCachedRule, MockRule } from './interface';
import * as i0 from "@angular/core";
export declare class MockService implements OnDestroy {
    private cached;
    readonly config: AlainMockConfig;
    constructor(cogSrv: AlainConfigService);
    private applyMock;
    private realApplyMock;
    private genRule;
    private outputError;
    getRule(method: string, url: string): MockRule | null;
    clearCache(): void;
    get rules(): MockCachedRule[];
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<MockService, never>;
    static ɵprov: i0.ɵɵInjectableDef<MockService>;
}
