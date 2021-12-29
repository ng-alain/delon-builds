import { PipeTransform } from '@angular/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export declare class FilterPipe implements PipeTransform {
    /**
     * Filter array
     *
     * 过滤数组
     */
    transform<T>(array: readonly T[], matcher: (item: T, ...args: NzSafeAny[]) => boolean, ...args: NzSafeAny[]): T[];
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FilterPipe, "filter">;
}
