import { OnDestroy } from '@angular/core';
import { AlainConfigService, AlainMockConfig } from '@delon/util/config';
import { MockCachedRule, MockOptions, MockRule } from './interface';
export declare class MockService implements OnDestroy {
    private cached;
    readonly config: AlainMockConfig;
    constructor(cogSrv: AlainConfigService, options: MockOptions);
    /**
     * Reset request data
     *
     * 重新设置请求数据
     */
    setData(data: any): void;
    private applyMock;
    private realApplyMock;
    private genRule;
    private outputError;
    getRule(method: string, url: string): MockRule | null;
    clearCache(): void;
    get rules(): MockCachedRule[];
    ngOnDestroy(): void;
}
