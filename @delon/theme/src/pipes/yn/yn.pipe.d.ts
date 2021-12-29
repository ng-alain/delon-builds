import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare type YNMode = 'full' | 'icon' | 'text';
export declare class YNPipe implements PipeTransform {
    private dom;
    constructor(dom: DomSanitizer);
    transform(value: boolean, yes?: string, no?: string, mode?: YNMode, isSafeHtml?: boolean): SafeHtml;
    static ɵfac: i0.ɵɵFactoryDeclaration<YNPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<YNPipe, "yn">;
}
