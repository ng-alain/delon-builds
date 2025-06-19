import * as _angular_core from '@angular/core';
import { TemplateRef } from '@angular/core';
import { NzSafeAny, NgClassType } from 'ng-zorro-antd/core/types';
import * as i2 from '@delon/theme';
import { LocaleData } from '@delon/theme';
import * as i1 from '@angular/common';
import * as i3 from 'ng-zorro-antd/badge';
import * as i4 from 'ng-zorro-antd/dropdown';
import * as i5 from 'ng-zorro-antd/icon';
import * as i6 from 'ng-zorro-antd/list';
import * as i7 from 'ng-zorro-antd/spin';
import * as i8 from 'ng-zorro-antd/tabs';
import * as i9 from 'ng-zorro-antd/tag';
import * as i10 from 'ng-zorro-antd/core/outlet';

interface NoticeItem {
    [key: string]: NzSafeAny;
    title: string;
    list: NoticeIconList[];
    /** 空列表文本，默认：`无通知` */
    emptyText?: string | TemplateRef<void>;
    /** 空列表图像 */
    emptyImage?: string;
    /** 清空文本，默认：`清空` */
    clearText?: string;
}
interface NoticeIconList {
    [key: string]: NzSafeAny;
    /** 头像图片链接 */
    avatar?: string;
    /** 标题 */
    title?: string | TemplateRef<{
        $implicit: NoticeIconList;
    }>;
    /** 描述信息 */
    description?: string | TemplateRef<{
        $implicit: NoticeIconList;
    }>;
    /** 时间戳 */
    datetime?: string | Date | number;
    /** 额外信息，在列表项右上角 */
    extra?: string;
    /** 是否已读状态 */
    read?: boolean;
}
interface NoticeIconSelect {
    title: string;
    item: NoticeItem;
    event?: Event;
}

declare class NoticeIconTabComponent {
    locale: _angular_core.InputSignal<LocaleData>;
    item: _angular_core.InputSignal<NoticeItem>;
    readonly select: _angular_core.OutputEmitterRef<NoticeIconSelect>;
    readonly clear: _angular_core.OutputEmitterRef<string>;
    onClick(item: NoticeItem, event: Event): void;
    onClear(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<NoticeIconTabComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<NoticeIconTabComponent, "notice-icon-tab", ["noticeIconTab"], { "locale": { "alias": "locale"; "required": true; "isSignal": true; }; "item": { "alias": "item"; "required": true; "isSignal": true; }; }, { "select": "select"; "clear": "clear"; }, never, never, true, never>;
}

declare class NoticeIconComponent {
    locale: _angular_core.Signal<LocaleData>;
    data: _angular_core.InputSignal<NoticeItem[]>;
    count: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    loading: _angular_core.InputSignalWithTransform<boolean, unknown>;
    popoverVisible: _angular_core.InputSignalWithTransform<boolean, unknown>;
    btnClass: _angular_core.InputSignal<NgClassType | undefined>;
    btnIconClass: _angular_core.InputSignal<NgClassType | undefined>;
    centered: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly select: _angular_core.OutputEmitterRef<NoticeIconSelect>;
    readonly clear: _angular_core.OutputEmitterRef<string>;
    readonly popoverVisibleChange: _angular_core.OutputEmitterRef<boolean>;
    overlayCls: _angular_core.WritableSignal<string>;
    constructor();
    delayShow: _angular_core.WritableSignal<boolean>;
    onVisibleChange(result: boolean): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<NoticeIconComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<NoticeIconComponent, "notice-icon", ["noticeIcon"], { "data": { "alias": "data"; "required": false; "isSignal": true; }; "count": { "alias": "count"; "required": false; "isSignal": true; }; "loading": { "alias": "loading"; "required": false; "isSignal": true; }; "popoverVisible": { "alias": "popoverVisible"; "required": false; "isSignal": true; }; "btnClass": { "alias": "btnClass"; "required": false; "isSignal": true; }; "btnIconClass": { "alias": "btnIconClass"; "required": false; "isSignal": true; }; "centered": { "alias": "centered"; "required": false; "isSignal": true; }; }, { "select": "select"; "clear": "clear"; "popoverVisibleChange": "popoverVisibleChange"; }, never, never, true, never>;
}

declare class NoticeIconModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<NoticeIconModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<NoticeIconModule, never, [typeof i1.CommonModule, typeof i2.DelonLocaleModule, typeof i3.NzBadgeModule, typeof i4.NzDropDownModule, typeof i5.NzIconModule, typeof i6.NzListModule, typeof i7.NzSpinModule, typeof i8.NzTabsModule, typeof i9.NzTagModule, typeof i10.NzOutletModule, typeof NoticeIconComponent, typeof NoticeIconTabComponent], [typeof NoticeIconComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<NoticeIconModule>;
}

export { NoticeIconComponent, NoticeIconModule, NoticeIconTabComponent };
export type { NoticeIconList, NoticeIconSelect, NoticeItem };
