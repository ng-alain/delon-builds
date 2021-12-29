import { PipeTransform } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
export declare class DatePipe implements PipeTransform {
    private nzI18n;
    constructor(nzI18n: NzI18nService);
    transform(value: Date | string | number, formatString?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<DatePipe, "_date">;
}
