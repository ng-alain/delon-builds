import { Direction, Directionality } from '@angular/cdk/bidi';
import { AfterViewInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import { NumberInput } from '@delon/util/decorator';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { AvatarListItemComponent } from './avatar-list-item.component';
export declare class AvatarListComponent implements AfterViewInit, OnChanges {
    private cdr;
    private directionality;
    static ngAcceptInputType_maxLength: NumberInput;
    private inited;
    private _items;
    items: AvatarListItemComponent[];
    exceedCount: number;
    dir: Direction;
    cls: string;
    avatarSize: NzSizeLDSType;
    set size(value: 'large' | 'small' | 'mini' | 'default');
    maxLength: number;
    excessItemsStyle: {
        [klass: string]: any;
    };
    constructor(cdr: ChangeDetectorRef, directionality: Directionality);
    private gen;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
}
