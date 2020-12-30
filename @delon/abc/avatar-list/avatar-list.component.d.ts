import { AfterViewInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import { NumberInput } from '@delon/util';
import { AvatarListItemComponent } from './avatar-list-item.component';
export declare class AvatarListComponent implements AfterViewInit, OnChanges {
    private cdr;
    static ngAcceptInputType_maxLength: NumberInput;
    private inited;
    private _items;
    items: AvatarListItemComponent[];
    exceedCount: number;
    cls: string;
    avatarSize: string;
    set size(value: 'large' | 'small' | 'mini' | 'default');
    maxLength: number;
    excessItemsStyle: {};
    constructor(cdr: ChangeDetectorRef);
    private gen;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
}
