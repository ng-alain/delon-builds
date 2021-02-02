import { OnInit } from '@angular/core';
import { SFValue } from '../../interface';
import { ControlUIWidget } from '../../widget';
import { SFStringWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class StringWidget extends ControlUIWidget<SFStringWidgetSchema> implements OnInit {
    type: string;
    ngOnInit(): void;
    reset(value: SFValue): void;
    change(val: string): void;
    focus(e: FocusEvent): void;
    blur(e: FocusEvent): void;
    enter(e: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<StringWidget, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<StringWidget, "sf-string", never, {}, {}, never, never>;
}
