import { OnInit } from '@angular/core';
import type { AutoSizeType } from 'ng-zorro-antd/input';
import { SFTextareaWidgetSchema } from './schema';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
export declare class TextareaWidget extends ControlUIWidget<SFTextareaWidgetSchema> implements OnInit {
    autosize: string | boolean | AutoSizeType;
    ngOnInit(): void;
    change(val: string): void;
    focus(e: FocusEvent): void;
    blur(e: FocusEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextareaWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextareaWidget, "sf-textarea", never, {}, {}, never, never, false, never>;
}
