import { SFSchema } from './schema/index';
import { SFUISchemaItem, SFOptionalHelp } from './schema/ui';
export declare class SFItemWrapComponent {
    id: string;
    schema: SFSchema;
    ui: SFUISchemaItem;
    showError: boolean;
    error: string;
    showTitle: boolean;
    title: string | null;
    readonly t: string | null | undefined;
    readonly oh: SFOptionalHelp;
}
