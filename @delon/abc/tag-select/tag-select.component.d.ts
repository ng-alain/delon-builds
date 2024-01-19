import { Direction } from '@angular/cdk/bidi';
import { EventEmitter, OnInit } from '@angular/core';
import { LocaleData } from '@delon/theme';
import * as i0 from "@angular/core";
export declare class TagSelectComponent implements OnInit {
    private readonly i18n;
    private readonly directionality;
    private readonly cdr;
    private readonly destroy$;
    locale: LocaleData;
    expand: boolean;
    dir?: Direction;
    /** 是否启用 `展开与收进` */
    expandable: boolean;
    readonly change: EventEmitter<boolean>;
    ngOnInit(): void;
    trigger(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TagSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TagSelectComponent, "tag-select", ["tagSelect"], { "expandable": { "alias": "expandable"; "required": false; }; }, { "change": "change"; }, never, ["*"], true, never>;
    static ngAcceptInputType_expandable: unknown;
}
