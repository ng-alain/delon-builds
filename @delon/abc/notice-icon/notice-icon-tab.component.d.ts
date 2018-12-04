import { EventEmitter } from '@angular/core';
import { NoticeIconSelect, NoticeItem } from './notice-icon.types';
export declare class NoticeIconTabComponent {
    locale: any;
    data: NoticeItem;
    readonly select: EventEmitter<NoticeIconSelect>;
    readonly clear: EventEmitter<string>;
    onClick(item: NoticeItem): void;
    onClear(): void;
}
