import { EventEmitter } from '@angular/core';
import { NoticeItem, NoticeIconSelect } from './notice-icon.types';
export declare class NoticeIconTabComponent {
    locale: any;
    data: NoticeItem;
    select: EventEmitter<NoticeIconSelect>;
    clear: EventEmitter<string>;
    onClick(item: NoticeItem): void;
    onClear(): void;
}
