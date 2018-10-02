import { OnInit } from '@angular/core';
import { ControlWidget } from '../../widget';
import { SFSchemaEnum } from '../../schema';
export declare class SelectWidget extends ControlWidget implements OnInit {
    i: any;
    data: SFSchemaEnum[];
    hasGroup: boolean;
    ngOnInit(): void;
    reset(value: any): void;
    change(values: any): void;
    openChange(value: any): void;
    searchChange(text: string): void;
    scrollToBottom(value: any): void;
}
