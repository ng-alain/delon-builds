import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerHelper, ModalHelper } from '@delon/theme';
import { STComponent } from '.';
import { STColumnButton, STData } from './st.interfaces';
import { _STColumn, _STTdNotify } from './st.types';
export declare class STTdComponent {
    private stComp;
    private router;
    private modalHelper;
    private drawerHelper;
    c: _STColumn;
    cIdx: number;
    data: STData[];
    i: STData;
    index: number;
    readonly n: EventEmitter<_STTdNotify>;
    private get routerState();
    constructor(stComp: STComponent, router: Router, modalHelper: ModalHelper, drawerHelper: DrawerHelper);
    private report;
    _checkbox(value: boolean): void;
    _radio(checked: boolean): void;
    _link(e: Event): boolean;
    _stopPropagation(ev: Event): void;
    _btn(btn: STColumnButton, ev?: Event): void;
    private btnCallback;
}
