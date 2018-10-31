import { EventEmitter, OnDestroy } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { NoticeItem, NoticeIconSelect } from './notice-icon.types';
export declare class NoticeIconComponent implements OnDestroy {
    private i18n;
    private i18n$;
    locale: any;
    data: NoticeItem[];
    /** 图标上的消息总数 */
    count: number;
    /** 弹出卡片加载状态 */
    loading: boolean;
    select: EventEmitter<NoticeIconSelect>;
    clear: EventEmitter<string>;
    /** 手动控制Popover显示 */
    popoverVisible: boolean;
    popoverVisibleChange: EventEmitter<boolean>;
    constructor(i18n: DelonLocaleService);
    onVisibleChange(result: boolean): void;
    onSelect(i: any): void;
    onClear(title: string): void;
    ngOnDestroy(): void;
}
