import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, OnInit, QueryList } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { GlobalFooterItemComponent } from './global-footer-item.component';
import { GlobalFooterLink } from './global-footer.types';
import * as i0 from "@angular/core";
export declare class GlobalFooterComponent implements OnInit {
    private router;
    private win;
    private dom;
    private directionality;
    private cdr;
    private dir$;
    private _links;
    dir: Direction;
    set links(val: GlobalFooterLink[]);
    get links(): GlobalFooterLink[];
    readonly items: QueryList<GlobalFooterItemComponent>;
    constructor(router: Router, win: NzSafeAny, dom: DomSanitizer, directionality: Directionality, cdr: ChangeDetectorRef);
    to(item: GlobalFooterLink | GlobalFooterItemComponent): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GlobalFooterComponent, [null, null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GlobalFooterComponent, "global-footer", ["globalFooter"], { "links": { "alias": "links"; "required": false; }; }, {}, ["items"], ["*"], true, never>;
}
