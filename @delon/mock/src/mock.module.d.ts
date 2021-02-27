import { ModuleWithProviders } from '@angular/core';
import { MockOptions } from './interface';
export declare class DelonMockModule {
    static forRoot(options?: MockOptions): ModuleWithProviders<DelonMockModule>;
    static forChild(): ModuleWithProviders<DelonMockModule>;
}
