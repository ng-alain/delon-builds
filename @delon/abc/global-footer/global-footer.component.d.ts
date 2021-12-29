import { Direction, Directionality } from '@angular/cdk/bidi';
import { OnDestroy, OnInit, QueryList } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { GlobalFooterItemComponent } from './global-footer-item.component';
import { GlobalFooterLink } from './global-footer.types';
export declare class GlobalFooterComponent implements OnInit, OnDestroy {
    private router;
    private win;
    private dom;
    private directionality;
    private destroy$;
    private _links;
    dir: Direction;
    set links(val: GlobalFooterLink[]);
    get links(): GlobalFooterLink[];
    items: QueryList<GlobalFooterItemComponent>;
    constructor(router: Router, win: NzSafeAny, dom: DomSanitizer, directionality: Directionality);
    to(item: GlobalFooterLink | GlobalFooterItemComponent): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
