import { OnDestroy } from '@angular/core';
import { DelonMockConfig } from './mock.config';
import { MockCachedRule, MockRule } from './interface';
export declare class MockService implements OnDestroy {
    private config;
    private cached;
    constructor(config: DelonMockConfig);
    private applyMock;
    private realApplyMock;
    private genRule;
    private outputError;
    getRule(method: string, url: string): MockRule;
    clearCache(): void;
    readonly rules: MockCachedRule[];
    ngOnDestroy(): void;
}
