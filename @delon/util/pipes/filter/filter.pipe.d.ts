import { PipeTransform } from '@angular/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
export declare class FilterPipe implements PipeTransform {
    /**
     * Filter array
     *
     * 过滤数组
     */
    transform<T>(array: readonly T[], matcher: (item: T, ...args: NzSafeAny[]) => boolean, ...args: NzSafeAny[]): T[];
}
