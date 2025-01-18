import { EventEmitter } from '@angular/core';
import type { LocaleData } from '@delon/theme';
import type { STColumnFilter, STColumnFilterMenu, STIcon } from './st.interfaces';
import type { _STColumn } from './st.types';
import * as i0 from "@angular/core";
export declare class STFilterComponent {
    private readonly cdr;
    visible: boolean;
    col: _STColumn;
    locale: LocaleData;
    f: STColumnFilter;
    readonly n: EventEmitter<unknown>;
    readonly handle: EventEmitter<boolean>;
    get icon(): STIcon;
    stopPropagation($event: MouseEvent): void;
    checkboxChange(): void;
    radioChange(item: STColumnFilterMenu): void;
    close(result?: boolean): void;
    confirm(): this;
    reset(): this;
    static ɵfac: i0.ɵɵFactoryDeclaration<STFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<STFilterComponent, "st-filter", never, { "col": { "alias": "col"; "required": false; }; "locale": { "alias": "locale"; "required": false; }; "f": { "alias": "f"; "required": false; }; }, { "n": "n"; "handle": "handle"; }, never, never, true, never>;
}
