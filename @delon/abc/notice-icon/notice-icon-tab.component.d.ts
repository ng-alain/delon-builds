import { LocaleData } from '@delon/theme';
import { NoticeIconSelect, NoticeItem } from './notice-icon.types';
import * as i0 from "@angular/core";
export declare class NoticeIconTabComponent {
    locale: import("@angular/core").InputSignal<LocaleData>;
    item: import("@angular/core").InputSignal<NoticeItem>;
    readonly select: import("@angular/core").OutputEmitterRef<NoticeIconSelect>;
    readonly clear: import("@angular/core").OutputEmitterRef<string>;
    onClick(item: NoticeItem): void;
    onClear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NoticeIconTabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NoticeIconTabComponent, "notice-icon-tab", ["noticeIconTab"], { "locale": { "alias": "locale"; "required": true; "isSignal": true; }; "item": { "alias": "item"; "required": true; "isSignal": true; }; }, { "select": "select"; "clear": "clear"; }, never, never, true, never>;
}
