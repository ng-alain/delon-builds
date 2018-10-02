import { TemplateRef } from '@angular/core';
export declare class G2CardComponent {
    /** 是否显示边框 */
    bordered: any;
    private _bordered;
    _avatar: string;
    _avatarTpl: TemplateRef<any>;
    avatar: string | TemplateRef<any>;
    _title: string;
    _titleTpl: TemplateRef<any>;
    title: string | TemplateRef<any>;
    _action: string;
    _actionTpl: TemplateRef<any>;
    action: string | TemplateRef<any>;
    total: string;
    _height: string;
    _orgHeight: any;
    contentHeight: number | string;
    _footer: string;
    _footerTpl: TemplateRef<any>;
    footer: string | TemplateRef<any>;
    /** 是否显示Loading */
    loading: any;
    private _loading;
}
