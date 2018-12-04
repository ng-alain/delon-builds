import { ChangeDetectorRef } from '@angular/core';
export declare class AvatarListComponent {
    private cdr;
    _size: string;
    _avatarSize: string;
    size: 'large' | 'small' | 'mini' | 'default';
    constructor(cdr: ChangeDetectorRef);
}
