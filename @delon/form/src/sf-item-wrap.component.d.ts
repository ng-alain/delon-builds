import { SFSchema } from './schema/index';
import { SFOptionalHelp, SFUISchemaItem } from './schema/ui';
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
}
