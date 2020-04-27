import { PipeTransform } from '@angular/core';
import { ToDateOptions } from '@delon/util';
import { NzI18nService } from 'ng-zorro-antd/i18n';
export declare class DatePipe implements PipeTransform {
    private nzI18n;
    constructor(nzI18n: NzI18nService);
    transform(value: Date | string | number, options?: ToDateOptions): string;
}
