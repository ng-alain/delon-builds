import { TemplateRef } from '@angular/core';
import { SEConfig } from './edit.config';
export declare class SEContainerComponent {
    title: string | TemplateRef<void>;
    gutter: number;
    private _gutter;
    col: number;
    private _col;
    labelWidth: number;
    nzLayout: string;
    private _nzLayout;
    size: 'default' | 'compact';
    firstVisual: boolean;
    line: boolean;
    constructor(cog: SEConfig);
}
