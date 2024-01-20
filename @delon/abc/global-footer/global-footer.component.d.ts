import { Direction } from '@angular/cdk/bidi';
import { OnInit, QueryList } from '@angular/core';
import { GlobalFooterItemComponent } from './global-footer-item.component';
import { GlobalFooterLink } from './global-footer.types';
import * as i0 from "@angular/core";
export declare class GlobalFooterComponent implements OnInit {
    private readonly router;
    private readonly win;
    private readonly dom;
    private readonly directionality;
    private readonly cdr;
    private readonly destroy$;
    private _links;
    dir?: Direction;
    set links(val: GlobalFooterLink[]);
    get links(): GlobalFooterLink[];
    readonly items: QueryList<GlobalFooterItemComponent>;
    to(item: GlobalFooterLink | GlobalFooterItemComponent): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GlobalFooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GlobalFooterComponent, "global-footer", ["globalFooter"], { "links": { "alias": "links"; "required": false; }; }, {}, ["items"], ["*"], true, never>;
}
