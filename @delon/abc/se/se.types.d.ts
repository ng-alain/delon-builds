import { TemplateRef } from '@angular/core';
export declare type SELayout = 'horizontal' | 'vertical' | 'inline';
export declare type SESize = 'default' | 'compact';
export declare type SEErrorType = string | TemplateRef<void> | SEError;
export interface SEError {
    [key: string]: string | TemplateRef<void>;
}
export interface SEErrorRefresh {
    name: string;
    error: SEErrorType;
}
