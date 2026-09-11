import * as i2 from '@delon/form';
import { SFUISchemaItem, SFSchemaEnumType, ControlUIWidget, SFSchemaEnum, WidgetRegistry, SFWidgetProvideConfig } from '@delon/form';
import * as i0 from '@angular/core';
import { OnInit } from '@angular/core';
import { NzSizeLDSType, NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i3 from 'ng-zorro-antd/mention';
import { MentionOnSearchTypes } from 'ng-zorro-antd/mention';
import { Observable } from 'rxjs';
import * as i1 from '@angular/forms';
import * as i4 from 'ng-zorro-antd/input';
import * as i5 from '@angular/common';

interface SFMentionWidgetSchema extends SFUISchemaItem {
    /**
     * 异步静态数据源
     */
    asyncData?: () => Observable<SFSchemaEnumType[]>;
    size?: NzSizeLDSType;
    /**
     * 在文字框中显示提示讯息
     */
    placeholder?: string;
    /**
     * 实时数据
     */
    loadData?: (option: MentionOnSearchTypes) => Observable<SFSchemaEnumType[]>;
    /**
     * 未找到时的内容，默认：`无匹配结果，轻敲空格完成输入`
     */
    notFoundContent?: string;
    /**
     * 建议框位置，默认：`button`
     */
    placement?: 'button' | 'top';
    /**
     * 触发弹出下拉框的字符，默认：`@`
     */
    prefix?: string | string[];
    /**
     * 建议选项的取值方法，默认：`item => item.label`
     */
    valueWith?: (value: NzSafeAny) => string;
    /**
     * 下拉框选择建议时回调
     */
    select?: (value: NzSafeAny) => void;
    /**
     * 文本框类型，默认：`text`
     */
    inputStyle?: 'text' | 'textarea';
    /**
     * 自适应内容高度
     */
    autosize?: {
        minRows?: number;
        maxRows?: number;
    };
}

declare class MentionWidget extends ControlUIWidget<SFMentionWidgetSchema> implements OnInit {
    static readonly KEY = "mention";
    private mentionChild;
    data: SFSchemaEnum[];
    i: NzSafeAny;
    loading: boolean;
    ngOnInit(): void;
    reset(): void;
    _select(options: NzSafeAny): void;
    _search(option: MentionOnSearchTypes): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MentionWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MentionWidget, "sf-mention", never, {}, {}, never, never, true, never>;
}

declare class MentionWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<MentionWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MentionWidgetModule, never, [typeof i1.FormsModule, typeof i2.DelonFormModule, typeof i3.NzMentionModule, typeof i4.NzInputModule, typeof i5.CommonModule, typeof MentionWidget], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MentionWidgetModule>;
}

declare function withMentionWidget(): SFWidgetProvideConfig;

export { MentionWidget, MentionWidgetModule, withMentionWidget };
export type { SFMentionWidgetSchema };
