import { PipeTransform } from '@angular/core';
export declare class MegaNumberPipe implements PipeTransform {
    private isCN;
    constructor(locale: string);
    /**
     * Large number format filter
     *
     * 大数据格式化
     */
    transform(value: number | string, precision?: number): string;
}
