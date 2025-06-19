import { Direction } from '@angular/cdk/bidi';
import * as i0 from '@angular/core';
import { OnInit, EventEmitter } from '@angular/core';
import * as i3 from '@delon/theme';
import { LocaleData } from '@delon/theme';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/icon';

declare class TagSelectComponent implements OnInit {
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

declare class TagSelectModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TagSelectModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TagSelectModule, never, [typeof i1.CommonModule, typeof i2.NzIconModule, typeof i3.DelonLocaleModule, typeof TagSelectComponent], [typeof TagSelectComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TagSelectModule>;
}

export { TagSelectComponent, TagSelectModule };
