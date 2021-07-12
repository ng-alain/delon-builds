import { PipeTransform } from '@angular/core';
export declare class FilterPipe implements PipeTransform {
    /**
     * Filter array
     *
     * 过滤数组
     */
    transform<T>(array: readonly T[], matcher: (item: T, ...args: unknown[]) => boolean, ...args: unknown[]): T[];
}
