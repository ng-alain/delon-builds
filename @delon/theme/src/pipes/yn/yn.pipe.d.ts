import { PipeTransform } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export type YNMode = 'full' | 'icon' | 'text';
export interface YNOptions {
    yes?: string;
    no?: string;
    mode?: YNMode;
}
export declare function yn(value: boolean, opt?: YNOptions): string;
export declare class YNPipe implements PipeTransform {
    private readonly dom;
    transform(value: boolean, yes?: string, no?: string, mode?: YNMode, isSafeHtml?: boolean): SafeHtml;
    static ɵfac: i0.ɵɵFactoryDeclaration<YNPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<YNPipe, "yn", true>;
}
