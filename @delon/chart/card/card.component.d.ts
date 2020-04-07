import { ChangeDetectorRef, OnChanges, TemplateRef } from '@angular/core';
export declare class G2CardComponent implements OnChanges {
    private cdr;
    /** 是否显示边框 */
    bordered: boolean;
    avatar: string | TemplateRef<void>;
    title: string | TemplateRef<void>;
    action: string | TemplateRef<void>;
    total: string;
    _height: string;
    _orgHeight: number | string;
    contentHeight: number | string;
    footer: string | TemplateRef<void>;
    /** 是否显示Loading */
    loading: boolean;
    constructor(cdr: ChangeDetectorRef);
    ngOnChanges(): void;
}
