import { EnvironmentProviders } from '@angular/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
export interface CellWidgetProvideConfig {
    KEY: string;
    type: NzSafeAny;
}
/**
 * Just only using Standalone widgets
 */
export declare function provideCellWidgets(...widgets: CellWidgetProvideConfig[]): EnvironmentProviders;
