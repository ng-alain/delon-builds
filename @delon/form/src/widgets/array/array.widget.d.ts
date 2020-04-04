import { OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { ArrayLayoutWidget } from '../../widget';
export declare class ArrayWidget extends ArrayLayoutWidget implements OnInit {
    addTitle: SafeHtml;
    addType: string;
    removeTitle: string | null;
    arraySpan: number;
    get addDisabled(): boolean | 0 | undefined;
    get showRemove(): string | false | null;
    ngOnInit(): void;
    addItem(): void;
    removeItem(index: number): void;
}
