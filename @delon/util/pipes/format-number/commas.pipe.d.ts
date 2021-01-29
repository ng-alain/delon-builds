import { PipeTransform } from '@angular/core';
export declare class CommasNumberPipe implements PipeTransform {
    /**
     * Format a number with commas as thousands separators
     *
     * 用逗号将数字格式化为千位分隔符
     */
    transform(value: number | string, separator?: string): string;
}
