import { DomSanitizer } from '@angular/platform-browser';
import { ACLService } from '@delon/acl';
import { AlainI18NService } from '@delon/theme';
import { STRowSource } from './st-row.directive';
import { STWidgetRegistry } from './st-widget';
import { STConfig } from './st.config';
import { STColumn, STColumnFilter } from './st.interfaces';
export declare class STColumnSource {
    private dom;
    private rowSource;
    private acl;
    private i18nSrv;
    private cog;
    private stWidgetRegistry;
    constructor(dom: DomSanitizer, rowSource: STRowSource, acl: ACLService, i18nSrv: AlainI18NService, cog: STConfig, stWidgetRegistry: STWidgetRegistry);
    private fixPop;
    private btnCoerce;
    private btnCoerceIf;
    private fixedCoerce;
    private sortCoerce;
    private fixCoerce;
    private filterCoerce;
    private restoreRender;
    private widgetCoerce;
    process(list: STColumn[]): STColumn[];
    restoreAllRender(columns: STColumn[]): void;
    updateDefault(filter: STColumnFilter): this;
    cleanFilter(col: STColumn): this;
}
