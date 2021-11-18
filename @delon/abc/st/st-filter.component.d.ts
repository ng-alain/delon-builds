import { EventEmitter } from '@angular/core';
import { LocaleData } from '@delon/theme';
import { _STColumn } from '.';
import { STColumnFilter, STColumnFilterMenu, STIcon } from './st.interfaces';
export declare class STFilterComponent {
    visible: boolean;
    col: _STColumn;
    locale: LocaleData;
    f: STColumnFilter;
    readonly n: EventEmitter<unknown>;
    readonly handle: EventEmitter<boolean>;
    get icon(): STIcon;
    show($event: MouseEvent): void;
    checkboxChange(): void;
    radioChange(item: STColumnFilterMenu): void;
    confirm(): void;
    reset(): void;
}
