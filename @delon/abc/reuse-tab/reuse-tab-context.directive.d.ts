import { ReuseTabContextService } from './reuse-tab-context.service';
import { ReuseCustomContextMenu, ReuseItem } from './reuse-tab.interfaces';
import * as i0 from "@angular/core";
export declare class ReuseTabContextDirective {
    private srv;
    item: ReuseItem;
    customContextMenu: ReuseCustomContextMenu[];
    constructor(srv: ReuseTabContextService);
    _onContextMenu(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<ReuseTabContextDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ReuseTabContextDirective, "[reuse-tab-context-menu]", ["reuseTabContextMenu"], { "item": "reuse-tab-context-menu"; "customContextMenu": "customContextMenu"; }, {}, never>;
}
