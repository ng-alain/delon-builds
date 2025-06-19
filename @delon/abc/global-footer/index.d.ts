import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Direction } from '@angular/cdk/bidi';
import * as i0 from '@angular/core';
import { TemplateRef, OnInit, QueryList } from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from '@angular/router';

interface GlobalFooterLink {
    [key: string]: NzSafeAny;
    title: string;
    href: string;
    blankTarget?: boolean;
}

declare class GlobalFooterItemComponent {
    host: TemplateRef<void>;
    href?: string;
    blankTarget?: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<GlobalFooterItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GlobalFooterItemComponent, "global-footer-item", ["globalFooterItem"], { "href": { "alias": "href"; "required": false; }; "blankTarget": { "alias": "blankTarget"; "required": false; }; }, {}, never, ["*"], true, never>;
    static ngAcceptInputType_blankTarget: unknown;
}

declare class GlobalFooterComponent implements OnInit {
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

declare class GlobalFooterModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<GlobalFooterModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<GlobalFooterModule, never, [typeof i1.CommonModule, typeof i2.RouterModule, typeof GlobalFooterComponent, typeof GlobalFooterItemComponent], [typeof GlobalFooterComponent, typeof GlobalFooterItemComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<GlobalFooterModule>;
}

export { GlobalFooterComponent, GlobalFooterItemComponent, GlobalFooterModule };
export type { GlobalFooterLink };
