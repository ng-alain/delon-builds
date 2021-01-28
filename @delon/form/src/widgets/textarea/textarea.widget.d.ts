import { OnInit } from '@angular/core';
import { AutoSizeType } from 'ng-zorro-antd/input';
import { ControlUIWidget } from '../../widget';
import { SFTextareaWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class TextareaWidget extends ControlUIWidget<SFTextareaWidgetSchema> implements OnInit {
    autosize: boolean | AutoSizeType;
    ngOnInit(): void;
    change(val: string): void;
    focus(e: FocusEvent): void;
    blur(e: FocusEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<TextareaWidget, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TextareaWidget, "sf-textarea", never, {}, {}, never, never>;
}
