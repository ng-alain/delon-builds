import { OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { ArrayLayoutWidget } from '../../widget';
import * as i0 from "@angular/core";
export declare class ArrayWidget extends ArrayLayoutWidget implements OnInit {
    addTitle: SafeHtml;
    addType: string;
    removeTitle: string | null;
    arraySpan: number;
    get addDisabled(): boolean;
    get showRemove(): boolean;
    ngOnInit(): void;
    private reValid;
    addItem(): void;
    removeItem(index: number): void;
    static ɵfac: i0.ɵɵFactoryDef<ArrayWidget, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ArrayWidget, "sf-array", never, {}, {}, never, never>;
}
