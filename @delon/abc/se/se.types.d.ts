import { TemplateRef } from '@angular/core';
export type SELayout = 'horizontal' | 'vertical' | 'inline';
export type SESize = 'default' | 'compact';
export type SEErrorType = string | TemplateRef<void> | SEError;
export interface SEError {
    [key: string]: string | TemplateRef<void>;
}
export interface SEErrorRefresh {
    name: string;
    error: SEErrorType;
}
