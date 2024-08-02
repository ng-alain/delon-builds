import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DatePipe implements PipeTransform {
    private nzI18n;
    private defFormat;
    transform(value: Date | string | number, formatString?: string | null): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<DatePipe, "_date", true>;
}
