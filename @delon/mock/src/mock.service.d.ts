import { OnDestroy } from '@angular/core';
import { AlainConfigService, AlainMockConfig } from '@delon/util/config';
import { MockCachedRule, MockRule } from './interface';
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
}
