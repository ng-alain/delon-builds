import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class HTMLPipe implements PipeTransform {
    private dom;
    constructor(dom: DomSanitizer);
    transform(html: string): string | SafeHtml;
    static ɵfac: i0.ɵɵFactoryDef<HTMLPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<HTMLPipe, "html">;
}
