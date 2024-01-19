import { PipeTransform } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class URLPipe implements PipeTransform {
    private readonly dom;
    transform(url: string): string | SafeUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<URLPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<URLPipe, "url", true>;
}
