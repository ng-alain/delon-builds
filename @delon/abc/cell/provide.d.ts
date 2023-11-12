import { EnvironmentProviders } from '@angular/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
/**
 * Just only using Standalone widgets
 */
export declare function provideCellWidgets(...widgets: Array<{
    KEY: string;
    type: NzSafeAny;
}>): EnvironmentProviders;
