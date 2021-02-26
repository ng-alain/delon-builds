import { OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { NzButtonType } from 'ng-zorro-antd/button';
import { ArrayLayoutWidget } from '../../widget';
export declare class ArrayWidget extends ArrayLayoutWidget implements OnInit {
    addTitle: SafeHtml;
    addType: NzButtonType;
    removeTitle: string | null;
    arraySpan: number;
    get addDisabled(): boolean;
    get showRemove(): boolean;
    ngOnInit(): void;
    private reValid;
    addItem(): void;
    removeItem(index: number): void;
}
