import { QueryList } from '@angular/core';
import { AvatarListItemComponent } from './avatar-list-item.component';
export declare class AvatarListComponent {
    _size: string;
    _avatarSize: string;
    size: 'large' | 'small' | 'mini' | 'default';
    _items: QueryList<AvatarListItemComponent>;
}
