import { TemplateRef } from '@angular/core';
import { REP_TYPE } from '@delon/theme';
import { SEConfig } from './se.config';
export declare class SEContainerComponent {
    colInCon: REP_TYPE;
    col: REP_TYPE;
    labelWidth: number;
    title: string | TemplateRef<void>;
    get gutter(): number;
    set gutter(value: number);
    private _gutter;
    get nzLayout(): string;
    set nzLayout(value: string);
    private _nzLayout;
    size: 'default' | 'compact';
    firstVisual: boolean;
    line: boolean;
    constructor(cog: SEConfig);
}
