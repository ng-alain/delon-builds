import { OnInit } from '@angular/core';
import { ArrayLayoutWidget } from '../../widget';
export declare class ArrayWidget extends ArrayLayoutWidget implements OnInit {
    addTitle: string;
    addType: string;
    removeTitle: string;
    arraySpan: number;
    readonly addDisabled: boolean;
    readonly l: any;
    ngOnInit(): void;
    addItem(): void;
    removeItem(index: number): void;
}
