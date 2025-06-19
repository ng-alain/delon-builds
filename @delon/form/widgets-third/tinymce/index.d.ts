import * as i2 from '@delon/form';
import { SFUISchemaItem, ControlUIWidget, WidgetRegistry, SFWidgetProvideConfig } from '@delon/form';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from '@angular/core';
import * as i1 from '@angular/forms';
import * as i3 from 'ngx-tinymce';

interface TinymceWidgetSchema extends SFUISchemaItem {
    /** 默认配置项，对全局 Tinymce 有效 */
    config?: Record<string, unknown>;
    inline?: boolean;
    /** 延迟加载（单位：毫秒），默认：`0` */
    delay?: number;
    loading?: string;
    ready?: (instance: NzSafeAny) => void;
}

declare class TinymceWidget extends ControlUIWidget<TinymceWidgetSchema> {
    static readonly KEY = "tinymce";
    change(value: string): void;
    _ready(instance: NzSafeAny): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TinymceWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TinymceWidget, "sf-widget-tinymce", never, {}, {}, never, never, true, never>;
}

declare class TinymceWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<TinymceWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TinymceWidgetModule, never, [typeof i1.FormsModule, typeof i2.DelonFormModule, typeof i3.NgxTinymceModule, typeof TinymceWidget], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TinymceWidgetModule>;
}

declare function withTinymceWidget(): SFWidgetProvideConfig;

export { TinymceWidget, TinymceWidgetModule, withTinymceWidget };
export type { TinymceWidgetSchema };
