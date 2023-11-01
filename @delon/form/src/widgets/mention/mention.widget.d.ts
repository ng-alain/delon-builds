import { OnInit } from '@angular/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { MentionOnSearchTypes } from 'ng-zorro-antd/mention';
import { SFMentionWidgetSchema } from './schema';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
export declare class MentionWidget extends ControlUIWidget<SFMentionWidgetSchema> implements OnInit {
    private mentionChild;
    data: SFSchemaEnum[];
    i: NzSafeAny;
    loading: boolean;
    ngOnInit(): void;
    reset(_value: SFValue): void;
    _select(options: NzSafeAny): void;
    _search(option: MentionOnSearchTypes): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MentionWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MentionWidget, "sf-mention", never, {}, {}, never, never, false, never>;
}
