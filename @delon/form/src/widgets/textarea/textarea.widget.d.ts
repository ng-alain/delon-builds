import { OnInit } from '@angular/core';
import { AutoSizeType } from 'ng-zorro-antd/input';
import { ControlUIWidget } from '../../widget';
import { SFTextareaWidgetSchema } from './schema';
export declare class TextareaWidget extends ControlUIWidget<SFTextareaWidgetSchema> implements OnInit {
    autosize: boolean | AutoSizeType;
    ngOnInit(): void;
    change(val: string): void;
    focus(e: FocusEvent): void;
    blur(e: FocusEvent): void;
}
