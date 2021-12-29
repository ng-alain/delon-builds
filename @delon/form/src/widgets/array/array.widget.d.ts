import { OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { NzButtonType } from 'ng-zorro-antd/button';
import { ArrayLayoutWidget } from '../../widget';
import * as i0 from "@angular/core";
export declare class ArrayWidget extends ArrayLayoutWidget implements OnInit {
    addTitle: SafeHtml;
    addType: NzButtonType;
    removeTitle?: string | null;
    arraySpan: number;
    get addDisabled(): boolean;
    get showRemove(): boolean;
    ngOnInit(): void;
    private reValid;
    addItem(): void;
    removeItem(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArrayWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArrayWidget, "sf-array", never, {}, {}, never, never>;
}
