import { DomSanitizer } from '@angular/platform-browser';
import { ACLService } from '@delon/acl';
import { AlainI18NService } from '@delon/theme';
import { AlainSTConfig } from '@delon/util';
import { STRowSource } from './st-row.directive';
import { STWidgetRegistry } from './st-widget';
import { STColumn, STColumnFilter, STResizable, STWidthMode } from './st.interfaces';
import { _STColumn } from './st.types';
export declare class STColumnSource {
    private dom;
    private rowSource;
    private acl;
    private i18nSrv;
    private stWidgetRegistry;
    private cog;
    constructor(dom: DomSanitizer, rowSource: STRowSource, acl: ACLService, i18nSrv: AlainI18NService, stWidgetRegistry: STWidgetRegistry);
    setCog(val: AlainSTConfig): void;
    private fixPop;
    private btnCoerce;
    private btnCoerceIf;
    private fixedCoerce;
    private sortCoerce;
    private fixSortCoerce;
    private filterCoerce;
    private restoreRender;
    private widgetCoerce;
    private genHeaders;
    private cleanCond;
    private fixResizable;
    process(list: STColumn[], widthMode: STWidthMode, resizable: STResizable | boolean): {
        columns: _STColumn[];
        headers: _STColumn[][];
        headerWidths: string[] | null;
    };
    restoreAllRender(columns: _STColumn[]): void;
    updateDefault(filter: STColumnFilter): this;
    cleanFilter(col: _STColumn): this;
}
