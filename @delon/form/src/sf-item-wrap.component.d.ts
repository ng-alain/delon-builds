import { OnChanges } from '@angular/core';
import type { SFSchema } from './schema/index';
import type { SFOptionalHelp, SFUISchemaItem } from './schema/ui';
import * as i0 from "@angular/core";
export declare class SFItemWrapComponent implements OnChanges {
    private readonly statusSrv;
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
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SFItemWrapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SFItemWrapComponent, "sf-item-wrap", never, { "id": { "alias": "id"; "required": false; }; "schema": { "alias": "schema"; "required": false; }; "ui": { "alias": "ui"; "required": false; }; "showError": { "alias": "showError"; "required": false; }; "error": { "alias": "error"; "required": false; }; "showTitle": { "alias": "showTitle"; "required": false; }; "title": { "alias": "title"; "required": false; }; }, {}, never, ["*"], false, never>;
}
