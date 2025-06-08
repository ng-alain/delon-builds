import { LocaleData } from '@delon/theme';
import type { NgClassType } from 'ng-zorro-antd/core/types';
import { NoticeIconSelect, NoticeItem } from './notice-icon.types';
import * as i0 from "@angular/core";
export declare class NoticeIconComponent {
    locale: import("@angular/core").Signal<LocaleData>;
    data: import("@angular/core").InputSignal<NoticeItem[]>;
    count: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
    loading: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
    popoverVisible: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
    btnClass: import("@angular/core").InputSignal<NgClassType | undefined>;
    btnIconClass: import("@angular/core").InputSignal<NgClassType | undefined>;
    centered: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
    readonly select: import("@angular/core").OutputEmitterRef<NoticeIconSelect>;
    readonly clear: import("@angular/core").OutputEmitterRef<string>;
    readonly popoverVisibleChange: import("@angular/core").OutputEmitterRef<boolean>;
    overlayCls: import("@angular/core").WritableSignal<string>;
    constructor();
    delayShow: import("@angular/core").WritableSignal<boolean>;
    onVisibleChange(result: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NoticeIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NoticeIconComponent, "notice-icon", ["noticeIcon"], { "data": { "alias": "data"; "required": false; "isSignal": true; }; "count": { "alias": "count"; "required": false; "isSignal": true; }; "loading": { "alias": "loading"; "required": false; "isSignal": true; }; "popoverVisible": { "alias": "popoverVisible"; "required": false; "isSignal": true; }; "btnClass": { "alias": "btnClass"; "required": false; "isSignal": true; }; "btnIconClass": { "alias": "btnIconClass"; "required": false; "isSignal": true; }; "centered": { "alias": "centered"; "required": false; "isSignal": true; }; }, { "select": "select"; "clear": "clear"; "popoverVisibleChange": "popoverVisibleChange"; }, never, never, true, never>;
}
