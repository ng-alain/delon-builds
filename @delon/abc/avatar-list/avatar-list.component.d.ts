import { Direction, Directionality } from '@angular/cdk/bidi';
import { AfterViewInit, ChangeDetectorRef, OnChanges, OnDestroy } from '@angular/core';
import { NumberInput } from '@delon/util/decorator';
import { AvatarListItemComponent } from './avatar-list-item.component';
export declare class AvatarListComponent implements AfterViewInit, OnChanges, OnDestroy {
    private cdr;
    private directionality;
    static ngAcceptInputType_maxLength: NumberInput;
    private inited;
    private _items;
    private destroy$;
    items: AvatarListItemComponent[];
    exceedCount: number;
    dir: Direction;
    cls: string;
    avatarSize: string;
    set size(value: 'large' | 'small' | 'mini' | 'default');
    maxLength: number;
    excessItemsStyle: {};
    constructor(cdr: ChangeDetectorRef, directionality: Directionality);
    private gen;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
