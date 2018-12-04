import { OnInit } from '@angular/core';
import { SFGridSchema } from '../../schema/ui';
import { ObjectLayoutWidget } from '../../widget';
export declare class ObjectWidget extends ObjectLayoutWidget implements OnInit {
    grid: SFGridSchema;
    list: Array<{}>;
    ngOnInit(): void;
}
