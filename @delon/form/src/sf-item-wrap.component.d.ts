import { OnChanges } from '@angular/core';
import { NzFormStatusService } from 'ng-zorro-antd/core/form';
import type { SFSchema } from './schema/index';
import type { SFOptionalHelp, SFUISchemaItem } from './schema/ui';
import * as i0 from "@angular/core";
export declare class SFItemWrapComponent implements OnChanges {
    private statusSrv;
    _showTitle: boolean;
    id?: string;
    schema: SFSchema;
    ui: SFUISchemaItem;
    showError?: boolean;
    error?: string;
    set showTitle(val: boolean | string | null | undefined);
    title: string | null;
    get t(): string;
    get oh(): SFOptionalHelp;
    constructor(statusSrv: NzFormStatusService);
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SFItemWrapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SFItemWrapComponent, "sf-item-wrap", never, { "id": "id"; "schema": "schema"; "ui": "ui"; "showError": "showError"; "error": "error"; "showTitle": "showTitle"; "title": "title"; }, {}, never, ["*"], false, never>;
}
