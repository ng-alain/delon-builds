import { OnInit } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlUIWidget } from '../../widget';
import { SFSelectWidgetSchema } from './schema';
export declare class SelectWidget extends ControlUIWidget<SFSelectWidgetSchema> implements OnInit {
    private search$;
    i: SFSelectWidgetSchema;
    data: SFSchemaEnum[];
    _value: NzSafeAny;
    hasGroup: boolean;
    isLoading: boolean;
    private checkGroup;
    ngOnInit(): void;
    reset(value: SFValue): void;
    change(values: SFValue): void;
    private getOrgData;
    openChange(status: boolean): void;
    scrollToBottom(): void;
    onSearch(value: string): void;
}
