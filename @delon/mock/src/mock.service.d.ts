import { OnDestroy } from '@angular/core';
import { MockCachedRule, MockRule } from './interface';
import { DelonMockConfig } from './mock.config';
export declare class MockService implements OnDestroy {
    private config;
    private cached;
    constructor(config: DelonMockConfig);
    private applyMock;
    private realApplyMock;
    private genRule;
    private outputError;
    getRule(method: string, url: string): MockRule | null;
    clearCache(): void;
    get rules(): MockCachedRule[];
    ngOnDestroy(): void;
}
