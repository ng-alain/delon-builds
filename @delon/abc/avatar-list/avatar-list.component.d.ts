import { Direction } from '@angular/cdk/bidi';
import { AfterViewInit, OnChanges } from '@angular/core';
import type { NgStyleInterface, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { AvatarListItemComponent } from './avatar-list-item.component';
import * as i0 from "@angular/core";
export declare class AvatarListComponent implements AfterViewInit, OnChanges {
    private readonly cdr;
    private readonly directionality;
    private dir$;
    private inited;
    private readonly _items;
    items: AvatarListItemComponent[];
    exceedCount: number;
    dir?: Direction;
    cls: string;
    avatarSize: NzSizeLDSType;
    set size(value: 'large' | 'small' | 'mini' | 'default');
    maxLength: number;
    excessItemsStyle: NgStyleInterface | null;
    private gen;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AvatarListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AvatarListComponent, "avatar-list", ["avatarList"], { "size": { "alias": "size"; "required": false; }; "maxLength": { "alias": "maxLength"; "required": false; }; "excessItemsStyle": { "alias": "excessItemsStyle"; "required": false; }; }, {}, ["_items"], never, true, never>;
    static ngAcceptInputType_maxLength: unknown;
}
