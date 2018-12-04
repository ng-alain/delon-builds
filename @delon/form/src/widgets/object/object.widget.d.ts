import { OnInit } from '@angular/core';
import { ObjectLayoutWidget } from '../../widget';
import { SFGridSchema } from '../../schema/ui';
export declare class ObjectWidget extends ObjectLayoutWidget implements OnInit {
    grid: SFGridSchema;
    list: any[];
    ngOnInit(): void;
}
