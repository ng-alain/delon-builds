import { EnvironmentProviders } from '@angular/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
/**
 * Just only using Standalone widgets
 */
export declare function provideSTWidgets(...widgets: Array<{
    KEY: string;
    type: NzSafeAny;
}>): EnvironmentProviders;
