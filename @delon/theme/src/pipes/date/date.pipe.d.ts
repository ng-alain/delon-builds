import { PipeTransform } from '@angular/core';
/**
 * @see https://ng-alain.com/docs/service-pipe#%E6%97%A5%E6%9C%9F-_date
 */
export declare class DatePipe implements PipeTransform {
    transform(value: Date | string | number, formatString?: string): string;
}
