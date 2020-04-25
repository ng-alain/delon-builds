import { ModuleWithProviders } from '@angular/core';
import { DelonMockConfig } from './mock.config';
export declare class DelonMockModule {
    static forRoot(config: DelonMockConfig): ModuleWithProviders;
    static forChild(): ModuleWithProviders;
}
