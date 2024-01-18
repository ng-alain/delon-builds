import { ReuseCustomContextMenu, ReuseItem } from './reuse-tab.interfaces';
import * as i0 from "@angular/core";
export declare class ReuseTabContextDirective {
    private readonly srv;
    item: ReuseItem;
    customContextMenu: ReuseCustomContextMenu[];
    _onContextMenu(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReuseTabContextDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ReuseTabContextDirective, "[reuse-tab-context-menu]", ["reuseTabContextMenu"], { "item": { "alias": "reuse-tab-context-menu"; "required": false; }; "customContextMenu": { "alias": "customContextMenu"; "required": false; }; }, {}, never, never, true, never>;
}
