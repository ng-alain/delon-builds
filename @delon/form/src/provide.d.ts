import { EnvironmentProviders } from '@angular/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
export interface SFWidgetProvideConfig {
    KEY: string;
    type: NzSafeAny;
}
/**
 * Just only using Standalone widgets
 */
export declare function provideSFConfig(options?: {
    widgets?: SFWidgetProvideConfig[];
}): EnvironmentProviders;
