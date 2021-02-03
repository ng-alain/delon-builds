import { PipeTransform } from '@angular/core';
export declare class FilterPipe implements PipeTransform {
    /**
     * Filter array
     *
     * 过滤数组
     */
    transform<T>(array: ReadonlyArray<T>, matcher: (item: T, ...args: any[]) => boolean, ...args: any[]): T[];
}
