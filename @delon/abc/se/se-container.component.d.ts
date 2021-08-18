import { TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import type { REP_TYPE } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { BooleanInput, NumberInput } from '@delon/util/decorator';
import { SEErrorRefresh, SELayout } from './se.types';
export declare class SEContainerComponent {
    static ngAcceptInputType_col: NumberInput;
    static ngAcceptInputType_colInCon: NumberInput;
    static ngAcceptInputType_labelWidth: NumberInput;
    static ngAcceptInputType_firstVisual: BooleanInput;
    static ngAcceptInputType_ingoreDirty: BooleanInput;
    static ngAcceptInputType_line: BooleanInput;
    private errorNotify$;
    colInCon: REP_TYPE;
    col: REP_TYPE;
    labelWidth: number;
    title?: string | TemplateRef<void> | null;
    get gutter(): number | string;
    set gutter(value: number | string);
    private _gutter;
    get nzLayout(): SELayout;
    set nzLayout(value: SELayout);
    private _nzLayout;
    size: 'default' | 'compact';
    firstVisual: boolean;
    ingoreDirty: boolean;
    line: boolean;
    set errors(val: SEErrorRefresh[]);
    get margin(): number;
    get errorNotify(): Observable<SEErrorRefresh>;
    constructor(configSrv: AlainConfigService);
    setErrors(errors: SEErrorRefresh[]): void;
}
