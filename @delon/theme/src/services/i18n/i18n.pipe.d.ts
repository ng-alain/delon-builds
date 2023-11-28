import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class I18nPipe implements PipeTransform {
    private readonly i18n;
    transform(key: string, params?: unknown): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18nPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<I18nPipe, "i18n", true>;
}
