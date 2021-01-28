import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class URLPipe implements PipeTransform {
    private dom;
    constructor(dom: DomSanitizer);
    transform(url: string): string | SafeUrl;
    static ɵfac: i0.ɵɵFactoryDef<URLPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<URLPipe, "url">;
}
