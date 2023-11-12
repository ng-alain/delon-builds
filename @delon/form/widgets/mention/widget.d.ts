import { OnInit } from '@angular/core';
import { ControlUIWidget, SFSchemaEnum, SFValue } from '@delon/form';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { MentionOnSearchTypes } from 'ng-zorro-antd/mention';
import type { SFMentionWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class MentionWidget extends ControlUIWidget<SFMentionWidgetSchema> implements OnInit {
    static readonly KEY = "mention";
    private mentionChild;
    data: SFSchemaEnum[];
    i: NzSafeAny;
    loading: boolean;
    ngOnInit(): void;
    reset(_value: SFValue): void;
    _select(options: NzSafeAny): void;
    _search(option: MentionOnSearchTypes): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MentionWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MentionWidget, "sf-mention", never, {}, {}, never, never, true, never>;
}
