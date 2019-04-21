import { OnInit } from '@angular/core';
import { LocaleData } from '@delon/theme';
import { ArrayLayoutWidget } from '../../widget';
export declare class ArrayWidget extends ArrayLayoutWidget implements OnInit {
    addTitle: string;
    addType: string;
    removeTitle: string;
    arraySpan: number;
    readonly addDisabled: boolean;
    readonly l: LocaleData;
    ngOnInit(): void;
    addItem(): void;
    removeItem(index: number): void;
}
