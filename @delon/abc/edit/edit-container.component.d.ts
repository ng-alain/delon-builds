import { TemplateRef } from '@angular/core';
import { SEConfig } from './edit.config';
export declare class SEContainerComponent {
    _title: string;
    _titleTpl: TemplateRef<any>;
    title: string | TemplateRef<any>;
    gutter: any;
    private _gutter;
    col: any;
    private _col;
    labelWidth: number;
    nzLayout: string;
    private _nzLayout;
    size: 'default' | 'compact';
    firstVisual: boolean;
    line: boolean;
    constructor(cog: SEConfig);
}
