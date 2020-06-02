import { TemplateRef } from '@angular/core';
import { REP_TYPE } from '@delon/theme';
import { AlainConfigService } from '@delon/util';
import { Observable } from 'rxjs';
import { SEErrorRefresh, SELayout } from './se.types';
export declare class SEContainerComponent {
    private errorNotify$;
    colInCon: REP_TYPE;
    col: REP_TYPE;
    labelWidth: number;
    title: string | TemplateRef<void>;
    get gutter(): number;
    set gutter(value: number);
    private _gutter;
    get nzLayout(): SELayout;
    set nzLayout(value: SELayout);
    private _nzLayout;
    size: 'default' | 'compact';
    firstVisual: boolean;
    line: boolean;
    set errors(val: SEErrorRefresh[]);
    get errorNotify(): Observable<SEErrorRefresh>;
    constructor(configSrv: AlainConfigService);
    setErrors(errors: SEErrorRefresh[]): void;
}
