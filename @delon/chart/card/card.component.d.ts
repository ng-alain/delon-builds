import { TemplateRef } from '@angular/core';
export declare class G2CardComponent {
    /** 是否显示边框 */
    bordered: boolean;
    _avatar: string;
    _avatarTpl: TemplateRef<void>;
    avatar: string | TemplateRef<void>;
    _title: string;
    _titleTpl: TemplateRef<void>;
    title: string | TemplateRef<void>;
    _action: string;
    _actionTpl: TemplateRef<void>;
    action: string | TemplateRef<void>;
    total: string;
    _height: string;
    _orgHeight: number | string;
    contentHeight: number | string;
    _footer: string;
    _footerTpl: TemplateRef<void>;
    footer: string | TemplateRef<void>;
    /** 是否显示Loading */
    loading: boolean;
}
