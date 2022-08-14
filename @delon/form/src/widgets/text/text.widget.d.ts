import { OnInit } from '@angular/core';
import { SFValue } from '../../interface';
import { ControlUIWidget } from '../../widget';
import { SFTextWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class TextWidget extends ControlUIWidget<SFTextWidgetSchema> implements OnInit {
    text: string;
    ngOnInit(): void;
    reset(value: SFValue): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextWidget, "sf-text", never, {}, {}, never, never, false>;
}
