import { OnInit } from '@angular/core';
import { SFValue } from '../../interface';
import { ControlUIWidget } from '../../widget';
import { SFStringWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class StringWidget extends ControlUIWidget<SFStringWidgetSchema> implements OnInit {
    type: string;
    private change$;
    ngOnInit(): void;
    reset(value: SFValue): void;
    private initChange;
    change(val: string): void;
    focus(e: FocusEvent): void;
    blur(e: FocusEvent): void;
    enter(e: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StringWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StringWidget, "sf-string", never, {}, {}, never, never>;
}
