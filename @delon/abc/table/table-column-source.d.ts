import { ACLService } from '@delon/acl';
import { AlainI18NService } from '@delon/theme';
import { STRowSource } from './table-row.directive';
import { STConfig } from './table.config';
import { STColumn, STColumnFilter } from './table.interfaces';
export declare class STColumnSource {
    private rowSource;
    private acl;
    private i18nSrv;
    private cog;
    constructor(rowSource: STRowSource, acl: ACLService, i18nSrv: AlainI18NService, cog: STConfig);
    private fixPop;
    private btnCoerce;
    private btnCoerceIf;
    private fixedCoerce;
    private sortCoerce;
    private fixCoerce;
    private filterCoerce;
    private restoreRender;
    process(list: STColumn[]): STColumn[];
    restoreAllRender(columns: STColumn[]): void;
    updateDefault(filter: STColumnFilter): this;
    cleanFilter(col: STColumn): this;
}
