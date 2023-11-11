import { EnvironmentProviders, InjectionToken } from '@angular/core';
import { MockOptions } from './interface';
export declare const DELON_MOCK_CONFIG: InjectionToken<MockOptions>;
export declare function provideDelonMockConfig(config?: MockOptions): EnvironmentProviders;
