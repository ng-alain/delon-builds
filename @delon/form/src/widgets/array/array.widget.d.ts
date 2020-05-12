import { SafeHtml } from '@angular/platform-browser';
import { OnInit } from '@angular/core';
import { ArrayLayoutWidget } from '../../widget';
export declare class ArrayWidget extends ArrayLayoutWidget implements OnInit {
    addTitle: SafeHtml;
    addType: string;
    removeTitle: string | null;
    arraySpan: number;
    readonly addDisabled: boolean | 0 | undefined;
    readonly showRemove: string | false | null;
    ngOnInit(): void;
    addItem(): void;
    removeItem(index: number): void;
}
