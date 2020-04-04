import { QueryList } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { GlobalFooterItemComponent } from './global-footer-item.component';
import { GlobalFooterLink } from './global-footer.types';
export declare class GlobalFooterComponent {
    private router;
    private win;
    private dom;
    private _links;
    set links(val: GlobalFooterLink[]);
    get links(): GlobalFooterLink[];
    items: QueryList<GlobalFooterItemComponent>;
    constructor(router: Router, win: Window, dom: DomSanitizer);
    to(item: GlobalFooterLink): void;
}
