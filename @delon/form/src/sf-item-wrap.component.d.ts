import { SFSchema } from './schema/index';
import { SFOptionalHelp, SFUISchemaItem } from './schema/ui';
import * as i0 from "@angular/core";
export declare class SFItemWrapComponent {
    id: string;
    schema: SFSchema;
    ui: SFUISchemaItem;
    showError: boolean;
    error: string;
    showTitle: boolean;
    title: string | null;
    get t(): string;
    get oh(): SFOptionalHelp;
    static ɵfac: i0.ɵɵFactoryDef<SFItemWrapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SFItemWrapComponent, "sf-item-wrap", never, { "id": "id"; "schema": "schema"; "ui": "ui"; "showError": "showError"; "error": "error"; "showTitle": "showTitle"; "title": "title"; }, {}, never, ["*"]>;
}
