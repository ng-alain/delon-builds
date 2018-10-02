import { ReuseTabContextService } from './reuse-tab-context.service';
import { ReuseItem } from './reuse-tab.interfaces';
export declare class ReuseTabContextDirective {
    private srv;
    item: ReuseItem;
    constructor(srv: ReuseTabContextService);
    onContextMenu(event: MouseEvent): void;
}
