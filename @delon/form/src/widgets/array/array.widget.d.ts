import { OnInit } from '@angular/core';
import { ArrayLayoutWidget } from '../../widget';
export declare class ArrayWidget extends ArrayLayoutWidget implements OnInit {
    addTitle: string;
    addType: string;
    removeTitle: string | null;
    arraySpan: number;
    readonly addDisabled: boolean | 0 | undefined;
    ngOnInit(): void;
    addItem(): void;
    removeItem(index: number): void;
}
