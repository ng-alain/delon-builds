import { SFSchema } from './schema/index';
import { SFOptionalHelp, SFUISchemaItem } from './schema/ui';
import * as i0 from "@angular/core";
export declare class SFItemWrapComponent {
    _showTitle: boolean;
    id: string;
    schema: SFSchema;
    ui: SFUISchemaItem;
    showError: boolean;
    error: string;
    set showTitle(val: boolean | string | null | undefined);
    title: string | null;
    get t(): string;
    get oh(): SFOptionalHelp;
    static ɵfac: i0.ɵɵFactoryDeclaration<SFItemWrapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SFItemWrapComponent, "sf-item-wrap", never, { "id": "id"; "schema": "schema"; "ui": "ui"; "showError": "showError"; "error": "error"; "showTitle": "showTitle"; "title": "title"; }, {}, never, ["*"]>;
}
